import type { ReactNode } from 'react';
import { useState } from 'react';

interface Props { title: string; children: ReactNode; defaultOpen?: boolean; }

export default function ResultSection({ title, children, defaultOpen = false }: Props) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <section className="result-section glass-card">
      <button className="section-header" onClick={() => setOpen((value) => !value)}><span>{title}</span><span>{open ? '−' : '+'}</span></button>
      {open && <div className="section-body">{children}</div>}
    </section>
  );
}
