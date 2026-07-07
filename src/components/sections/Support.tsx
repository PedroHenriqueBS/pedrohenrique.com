import { useState, type FormEvent } from 'react'
import { useLanguage } from '../../i18n'
import { useDonation } from '../../hooks/useDonation'
import { DONATION_LIMITS, type DonationCharge } from '../../lib/donations'
import { formatBRL, formatCountdown, parseAmountToCents } from '../../lib/format'
import { Button } from '../ui/Button'
import { Card } from '../ui/Card'
import { SectionHeading } from '../ui/SectionHeading'
import { Spinner } from '../ui/Spinner'
import { CheckIcon, CopyIcon } from '../ui/icons'

const PRESET_AMOUNTS_CENTS = [500, 1000, 2500, 5000] as const

function CopyPixButton({ brCode }: { brCode: string }) {
  const { t } = useLanguage()
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(brCode)
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    } catch {
      // clipboard blocked — the code stays visible for manual selection
    }
  }

  return (
    <button
      onClick={() => void copy()}
      className="inline-flex cursor-pointer items-center gap-2 rounded-lg border border-accent/35 px-4.5 py-2.5 font-mono text-[13px] text-ink transition-all hover:border-accent hover:bg-accent/10"
    >
      {copied ? <CheckIcon className="text-accent" /> : <CopyIcon />}
      {copied ? t.support.copied : t.support.copyCode}
    </button>
  )
}

function PaymentPanel({
  charge,
  secondsLeft,
  onCancel,
}: {
  charge: DonationCharge
  secondsLeft: number
  onCancel: () => void
}) {
  const { t } = useLanguage()

  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <h3 className="text-xl font-semibold">{t.support.scanTitle}</h3>
      <p className="max-w-[420px] text-sm text-muted">{t.support.scanDescription}</p>
      <div className="rounded-2xl border border-accent/25 bg-white p-3">
        <img src={charge.brCodeBase64} alt={t.support.qrAlt} className="size-52" />
      </div>
      <div className="font-mono text-sm text-muted">
        <span className="text-lg font-semibold text-accent">{formatBRL(charge.amount)}</span>
        <span className="mx-2 opacity-40" aria-hidden="true">
          ·
        </span>
        {t.support.expiresIn} <span className="text-ink">{formatCountdown(secondsLeft)}</span>
      </div>
      <p className="w-full max-w-[420px] truncate rounded-md border border-accent/10 bg-bg px-3 py-2 font-mono text-[11px] text-faint">
        {charge.brCode}
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <CopyPixButton brCode={charge.brCode} />
        <button
          onClick={onCancel}
          className="cursor-pointer px-2 py-2 font-mono text-[13px] text-faint transition-colors hover:text-muted"
        >
          {t.support.cancel}
        </button>
      </div>
      <div className="flex items-center gap-2 font-mono text-xs text-faint" role="status">
        <span className="inline-block size-2 animate-blink rounded-full bg-accent" aria-hidden="true" />
        {t.support.awaitingPayment}
      </div>
    </div>
  )
}

function DonationForm({
  onSubmit,
  submitting,
}: {
  onSubmit: (amountCents: number, message?: string) => void
  submitting: boolean
}) {
  const { t } = useLanguage()
  const [selectedPreset, setSelectedPreset] = useState<number | null>(PRESET_AMOUNTS_CENTS[1])
  const [customAmount, setCustomAmount] = useState('')
  const [message, setMessage] = useState('')
  const [validationError, setValidationError] = useState<string | null>(null)

  const resolveAmount = (): number | null => {
    if (customAmount.trim()) return parseAmountToCents(customAmount)
    return selectedPreset
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    const amount = resolveAmount()
    if (amount === null || amount < DONATION_LIMITS.minCents || amount > DONATION_LIMITS.maxCents) {
      setValidationError(t.support.invalidAmount)
      return
    }
    setValidationError(null)
    onSubmit(amount, message.trim() || undefined)
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <fieldset>
        <legend className="mb-2.5 font-mono text-[13px] text-muted">{t.support.amountLabel}</legend>
        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
          {PRESET_AMOUNTS_CENTS.map((preset) => {
            const selected = selectedPreset === preset && !customAmount.trim()
            return (
              <button
                key={preset}
                type="button"
                onClick={() => {
                  setSelectedPreset(preset)
                  setCustomAmount('')
                }}
                aria-pressed={selected}
                className={`cursor-pointer rounded-lg border px-3 py-2.5 font-mono text-sm transition-all ${
                  selected
                    ? 'border-accent bg-accent/15 text-accent'
                    : 'border-accent/20 text-muted hover:border-accent/50 hover:text-ink'
                }`}
              >
                {formatBRL(preset)}
              </button>
            )
          })}
        </div>
      </fieldset>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-2">
          <span className="font-mono text-[13px] text-muted">
            {t.support.customAmountLabel}{' '}
            <span className="text-faint">
              ({t.support.amountHint(formatBRL(DONATION_LIMITS.minCents), formatBRL(DONATION_LIMITS.maxCents))})
            </span>
          </span>
          <input
            type="text"
            inputMode="decimal"
            value={customAmount}
            onChange={(event) => setCustomAmount(event.target.value)}
            placeholder={t.support.customAmountPlaceholder}
            className="rounded-lg border border-accent/20 bg-bg px-3.5 py-2.5 font-mono text-sm text-ink placeholder:text-faint/60 focus:border-accent focus:outline-none"
          />
        </label>
        <label className="flex flex-col gap-2">
          <span className="font-mono text-[13px] text-muted">{t.support.messageLabel}</span>
          <input
            type="text"
            value={message}
            maxLength={DONATION_LIMITS.maxMessageLength}
            onChange={(event) => setMessage(event.target.value)}
            placeholder={t.support.messagePlaceholder}
            className="rounded-lg border border-accent/20 bg-bg px-3.5 py-2.5 text-sm text-ink placeholder:text-faint/60 focus:border-accent focus:outline-none"
          />
        </label>
      </div>

      {validationError && (
        <p role="alert" className="font-mono text-[13px] text-[#ff6b6b]">
          {validationError}
        </p>
      )}

      <Button type="submit" disabled={submitting} className="inline-flex items-center justify-center gap-2 self-start">
        {submitting && <Spinner />}
        {submitting ? t.support.generating : t.support.submit}
      </Button>
    </form>
  )
}

export function Support() {
  const { t } = useLanguage()
  const { state, donate, reset } = useDonation()

  return (
    <section id="apoie" className="relative z-1 mx-auto max-w-[1140px] scroll-mt-16 px-6 py-16 md:py-[90px]">
      <SectionHeading number="07" title={t.support.title} />
      <Card data-reveal className="mx-auto max-w-[720px] p-6 sm:p-9">
        {(state.step === 'idle' || state.step === 'creating') && (
          <>
            <p className="mb-7 text-[15.5px] leading-[1.7] text-muted">{t.support.description}</p>
            <DonationForm
              onSubmit={(amount, message) => void donate(amount, message)}
              submitting={state.step === 'creating'}
            />
          </>
        )}

        {state.step === 'awaiting_payment' && (
          <PaymentPanel charge={state.charge} secondsLeft={state.secondsLeft} onCancel={reset} />
        )}

        {state.step === 'paid' && (
          <div className="flex flex-col items-center gap-3 py-6 text-center">
            <div className="text-4xl" aria-hidden="true">
              ☕
            </div>
            <h3 className="text-2xl font-bold text-accent">{t.support.paidTitle}</h3>
            <p className="max-w-[420px] text-[15px] text-muted">{t.support.paidDescription}</p>
          </div>
        )}

        {state.step === 'expired' && (
          <div className="flex flex-col items-center gap-4 py-6 text-center">
            <h3 className="text-xl font-semibold">{t.support.expiredTitle}</h3>
            <Button variant="outline" onClick={reset}>
              {t.support.startOver}
            </Button>
          </div>
        )}

        {state.step === 'error' && (
          <div className="flex flex-col items-center gap-4 py-6 text-center">
            <p role="alert" className="max-w-[420px] text-[15px] text-muted">
              {state.unavailable ? t.support.unavailable : t.support.errorGeneric}
            </p>
            <Button variant="outline" onClick={reset}>
              {t.support.startOver}
            </Button>
          </div>
        )}
      </Card>
    </section>
  )
}
