interface Props {
  total: number;
  hasProgress: boolean;
  hasLastResult: boolean;
  onStart: () => void;
  onContinue: () => void;
  onOpenResult: () => void;
  onClearProgress: () => void;
}

export default function StartScreen({ total, hasProgress, hasLastResult, onStart, onContinue, onOpenResult, onClearProgress }: Props) {
  return (
    <section className="start-grid">
      <div className="hero glass-card">
        <p className="eyebrow">Tes situasional • simbolik • naratif</p>
        <h1>Tes Kepribadian Mendalam</h1>
        <p className="hero-subtitle">Bukan sekadar memilih sifat. Kau akan memilih adegan, benda, tempat, chat, reaksi pertama, dan hal-hal kecil yang biasanya lebih jujur dari definisi.</p>
        <div className="hero-facts">
          <span>{total} item</span>
          <span>Autosave</span>
          <span>Offline</span>
        </div>
        <p className="disclaimer">Hasil bukan diagnosis klinis. Bahasanya memakai kemungkinan, kecenderungan, dan pola yang tampak.</p>
        <div className="hero-actions">
          <button className="primary-btn" onClick={onStart}>Mulai tes</button>
          {hasProgress && <button className="secondary-btn" onClick={onContinue}>Lanjutkan tes</button>}
          {hasProgress && <button className="ghost-btn" onClick={onClearProgress}>Hapus progress</button>}
        </div>
      </div>
      <aside className="preview glass-card">
        <h2>Yang akan kau dapat</h2>
        <ul>
          <li>Top 3 MBTI dan ranking fungsi kognitif</li>
          <li>Enneagram, wing, instinct, dan tritype</li>
          <li>Big Five, HEXACO, AP, DISC, RIASEC</li>
          <li>Gaya konflik, komunikasi, relasi, kerja, belajar</li>
          <li>Share story, simpan gambar, salin, dan email manual</li>
        </ul>
        {hasLastResult && <button className="secondary-btn full" onClick={onOpenResult}>Buka hasil terakhir</button>}
      </aside>
    </section>
  );
}
