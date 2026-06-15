import { useState } from 'react';
import type { FinalResult } from '../types';
import { resultToPlainText } from '../services/resultNarration';
import { downloadStoryImage, shareStoryImage } from '../services/shareCard';
import { openEmailClient } from '../services/emailResult';

interface Props { result: FinalResult; }

export default function SharePanel({ result }: Props) {
  const [message, setMessage] = useState('');

  async function copy() {
    await navigator.clipboard.writeText(resultToPlainText(result));
    setMessage('Hasil berhasil disalin.');
  }

  async function download() {
    await downloadStoryImage(result);
    setMessage('Gambar hasil disimpan.');
  }

  async function share() {
    await shareStoryImage(result);
    setMessage('Siap dibagikan.');
  }

  return (
    <div className="share-panel glass-card">
      <h3>Bagikan hasil ringkas</h3>
      <div className="share-actions">
        <button onClick={copy}>Salin hasil</button>
        <button onClick={download}>Simpan gambar hasil</button>
        <button onClick={share}>Bagikan ke story</button>
        <button onClick={() => openEmailClient(result)}>Kirim lewat email</button>
      </div>
      {message && <p className="mini-note">{message}</p>}
    </div>
  );
}
