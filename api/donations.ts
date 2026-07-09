import type { VercelRequest, VercelResponse } from "@vercel/node";
import {
  AbacatePayError,
  checkPixCharge,
  createPixCharge,
  isConfigured,
} from "./_lib/abacatepay";

const MIN_AMOUNT_CENTS = 100;
const MAX_AMOUNT_CENTS = 50_000;
const MAX_DESCRIPTION_LENGTH = 37;
const EXPIRES_IN_SECONDS = 30 * 60;

function sanitizeDescription(message: unknown): string | undefined {
  if (typeof message !== "string") return undefined;
  // AbacatePay rejects emojis in the PIX description — keep only letters,
  // digits, punctuation and spaces.
  const cleaned = message
    .replace(/[^\p{L}\p{N}\p{P}\p{Zs}]/gu, "")
    .replace(/\s+/g, " ")
    .trim();
  return cleaned ? cleaned.slice(0, MAX_DESCRIPTION_LENGTH) : undefined;
}

async function handleCreate(
  req: VercelRequest,
  res: VercelResponse,
): Promise<void> {
  const { amount, message } = (req.body ?? {}) as {
    amount?: unknown;
    message?: unknown;
  };

  if (
    typeof amount !== "number" ||
    !Number.isInteger(amount) ||
    amount < MIN_AMOUNT_CENTS ||
    amount > MAX_AMOUNT_CENTS
  ) {
    res.status(400).json({
      error: `amount must be an integer between ${MIN_AMOUNT_CENTS} and ${MAX_AMOUNT_CENTS} cents`,
    });
    return;
  }

  const charge = await createPixCharge({
    amount,
    description: sanitizeDescription(message),
    expiresIn: EXPIRES_IN_SECONDS,
  });

  res.status(201).json({
    id: charge.id,
    amount: charge.amount,
    status: charge.status,
    brCode: charge.brCode,
    brCodeBase64: charge.brCodeBase64,
    expiresAt: charge.expiresAt,
  });
}

async function handleStatus(
  req: VercelRequest,
  res: VercelResponse,
): Promise<void> {
  const id = typeof req.query.id === "string" ? req.query.id : "";
  if (!id) {
    res.status(400).json({ error: "id query parameter is required" });
    return;
  }
  const charge = await checkPixCharge(id);
  res.status(200).json({ status: charge.status });
}

export default async function handler(
  req: VercelRequest,
  res: VercelResponse,
): Promise<void> {
  if (!isConfigured()) {
    res.status(503).json({ error: "Donations are temporarily unavailable" });
    return;
  }

  try {
    if (req.method === "POST") {
      await handleCreate(req, res);
    } else if (req.method === "GET") {
      await handleStatus(req, res);
    } else {
      res.setHeader("Allow", "GET, POST");
      res.status(405).json({ error: "Method not allowed" });
    }
  } catch (error) {
    if (error instanceof AbacatePayError) {
      console.error(
        "[donations] AbacatePay error:",
        error.status,
        error.message,
      );

      res
        .status(error.status >= 400 && error.status < 500 ? 400 : 502)
        .json({ error: "Payment provider request failed" });
      return;
    }
    console.error("[donations] unexpected error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}
