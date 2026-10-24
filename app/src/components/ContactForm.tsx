import { useState, type FormEvent } from 'react';

type Labels = {
  name: string; phone: string; email: string; subject: string; subjects: string[];
  language: string; languages: string[]; message: string; consent: string;
  submit: string; sending: string; note: string; error: string; required: string;
};

interface Props {
  labels: Labels;
  privacyHref: string;
  thanksHref: string;
  whatsapp: string;
  defaultLanguage: number;
}

// Endpoint opcional (ex.: Formspree, Web3Forms ou função própria) definido no deploy.
// Sem endpoint, o formulário monta a mensagem e abre o WhatsApp: nenhum dado sai para terceiros.
const ENDPOINT = import.meta.env.PUBLIC_FORM_ENDPOINT as string | undefined;

export default function ContactForm({ labels, privacyHref, thanksHref, whatsapp, defaultLanguage }: Props) {
  const [state, setState] = useState<'idle' | 'sending' | 'error'>('idle');

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.reportValidity()) return;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;
    if (data.empresa) return; // honeypot preenchido: robô
    setState('sending');
    try {
      if (ENDPOINT) {
        const res = await fetch(ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({ nome: data.nome, whatsapp: data.whatsapp, email: data.email, assunto: data.assunto, idioma: data.idioma, mensagem: data.mensagem }),
        });
        if (!res.ok) throw new Error(String(res.status));
      } else {
        const text = [
          `${labels.name}: ${data.nome}`,
          `${labels.subject}: ${data.assunto}`,
          `${labels.language}: ${data.idioma}`,
          data.email ? `${labels.email}: ${data.email}` : '',
          '',
          data.mensagem,
        ].filter((l, i) => l || i === 4).join('\n');
        window.open(`https://wa.me/${whatsapp}?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
      }
      window.location.href = thanksHref;
    } catch {
      setState('error');
    }
  }

  const field = 'mt-2 block w-full rounded-xl border border-guilloche bg-branco px-4 py-3 text-grafite placeholder:text-grafite-suave/60 focus:border-tinta focus:outline-none focus:ring-2 focus:ring-tinta/20';
  const label = 'block text-sm font-semibold text-tinta';

  return (
    <form onSubmit={onSubmit} noValidate={false} className="grid gap-5 sm:grid-cols-2" autoComplete="off">
      <label className={label}>
        {labels.name}
        <input name="nome" required maxLength={120} className={field} autoComplete="off" />
      </label>
      <label className={label}>
        {labels.phone}
        <input name="whatsapp" type="tel" required maxLength={30} inputMode="tel" className={field} autoComplete="off" />
      </label>
      <label className={`${label} sm:col-span-2`}>
        {labels.email}
        <input name="email" type="email" maxLength={160} className={field} autoComplete="off" />
      </label>
      <label className={label}>
        {labels.subject}
        <select name="assunto" required className={field} defaultValue="">
          <option value="" disabled></option>
          {labels.subjects.map((s) => <option key={s}>{s}</option>)}
        </select>
      </label>
      <label className={label}>
        {labels.language}
        <select name="idioma" className={field} defaultValue={labels.languages[defaultLanguage]}>
          {labels.languages.map((s) => <option key={s}>{s}</option>)}
        </select>
      </label>
      <label className={`${label} sm:col-span-2`}>
        {labels.message}
        <textarea name="mensagem" required rows={5} maxLength={3000} className={field} />
      </label>
      <input type="text" name="empresa" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
      <label className="flex items-start gap-3 text-sm sm:col-span-2">
        <input type="checkbox" name="consentimento" required className="mt-1 h-5 w-5 accent-[#cb3438]" />
        <span>
          <a href={privacyHref} className="text-link">{labels.consent}</a>
        </span>
      </label>
      <div className="flex flex-wrap items-center gap-4 sm:col-span-2">
        <button type="submit" disabled={state === 'sending'} className="btn btn-primary disabled:opacity-60">
          {state === 'sending' ? labels.sending : labels.submit}
        </button>
        <span className="text-sm text-grafite-suave">{labels.note}</span>
      </div>
      {state === 'error' && (
        <p role="alert" className="text-sm font-semibold text-carmim sm:col-span-2">{labels.error}</p>
      )}
    </form>
  );
}
