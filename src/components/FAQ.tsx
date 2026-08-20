"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { faqs } from "@/data/faq";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section section--cream" id="preguntas">
      <div className="container">
        <div className="section__intro">
          <p className="eyebrow">Preguntas frecuentes</p>
          <h2 className="heading">Dudas que suelen surgir</h2>
          <p className="lead">
            Respuestas claras para decidir con confianza.
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((f, i) => {
            const open = openIndex === i;
            return (
              <div className="faq" data-open={open} key={i}>
                <h3>
                  <button
                    type="button"
                    className="faq__summary"
                    aria-expanded={open}
                    aria-controls={`faq-panel-${i}`}
                    id={`faq-btn-${i}`}
                    onClick={() => setOpenIndex(open ? null : i)}
                  >
                    <span>{f.question}</span>
                    <Plus className="faq__icon" aria-hidden="true" />
                  </button>
                </h3>
                <div id={`faq-panel-${i}`} role="region" aria-labelledby={`faq-btn-${i}`}>
                  <p className="faq__panel" hidden={!open}>
                    {f.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}