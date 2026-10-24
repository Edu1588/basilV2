import { useId, useState } from 'react';

type Item = { q: string; a: string; src: string; srcLabel: string };

interface Props {
  items: Item[];
  sourceLabel: string;
  /** Nível do título de cada pergunta: 3 dentro de uma seção com h2, 2 numa página só de perguntas. */
  headingLevel?: 2 | 3;
}

/** Acordeão das 5 perguntas. Uma aberta por vez; a primeira começa aberta. */
export default function Faq({ items, sourceLabel, headingLevel = 3 }: Props) {
  const H = `h${headingLevel}` as 'h2' | 'h3';
  const [open, setOpen] = useState<number | null>(0);
  const base = useId();

  return (
    <div className="divide-y divide-guilloche border-y border-guilloche">
      {items.map((item, i) => {
        const isOpen = open === i;
        const btn = `${base}-b${i}`;
        const panel = `${base}-p${i}`;
        return (
          <div key={i}>
            <H className="!text-inherit !tracking-normal">
              <button
                id={btn}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panel}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-start justify-between gap-6 py-6 text-left text-lg font-semibold text-tinta hover:text-carmim"
              >
                <span>{item.q}</span>
                <span
                  aria-hidden="true"
                  className={`mt-1 grid h-7 w-7 shrink-0 place-items-center rounded-full ring-1 ring-current transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}
                >
                  +
                </span>
              </button>
            </H>
            <div
              id={panel}
              role="region"
              aria-labelledby={btn}
              inert={!isOpen}
              className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
            >
              <div className="overflow-hidden">
                <div className="measure pb-7 text-grafite">
                  <p>{item.a}</p>
                  {item.src && (
                    <p className="source-stamp mt-3">
                      {sourceLabel}:{" "}
                      <a href={item.src} target="_blank" rel="noopener">
                        {item.srcLabel}
                      </a>
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
