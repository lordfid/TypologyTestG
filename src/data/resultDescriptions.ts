import type { CognitiveFunction, EnneagramType, Instinct, MBTIType } from '../types';

export const functionLabels: Record<CognitiveFunction, string> = {
  Ni: 'Ni — benang besar dan arah tersembunyi',
  Ne: 'Ne — kemungkinan, percabangan, pintu baru',
  Si: 'Si — jejak lama, stabilitas, pengalaman',
  Se: 'Se — gerak nyata, tubuh, momentum',
  Fi: 'Fi — rasa privat, batas batin, keaslian',
  Fe: 'Fe — suasana, hubungan, dampak sosial',
  Ti: 'Ti — akurasi, struktur alasan, bongkar-pasang logika',
  Te: 'Te — hasil, sistem kerja, perbaikan nyata'
};

export const mbtiShort: Record<MBTIType, string> = {
  INTJ: 'strategis, sunyi, tajam membaca arah', INFJ: 'membaca pola manusia dan makna tersirat', ENTJ: 'menggerakkan sistem ke hasil besar', ENFJ: 'menggerakkan orang lewat arah dan kehangatan',
  INTP: 'membedah alasan sampai struktur terdalam', INFP: 'menjaga rasa asli dan kemungkinan batin', ENTP: 'menguji pintu ide dan membongkar kebekuan', ENFP: 'membawa kemungkinan lewat rasa dan koneksi',
  ISTJ: 'menjaga keteraturan dari pengalaman yang terbukti', ISFJ: 'menjaga orang lewat perhatian nyata dan konsisten', ESTJ: 'menertibkan keadaan agar hasil berdiri', ESFJ: 'membangun suasana sosial yang aman dan bergerak',
  ISTP: 'tenang, teknis, bertindak saat perlu', ISFP: 'peka pada rasa dan hadir lewat tindakan kecil', ESTP: 'langsung, hidup, berani menguji kenyataan', ESFP: 'ekspresif, hadir, menghidupkan momen'
};

export const enneagramFear: Record<EnneagramType, string> = {
  '1': 'takut menjadi orang yang membiarkan hal salah tetap berjalan',
  '2': 'takut tidak lagi dibutuhkan atau tidak punya tempat di hati orang',
  '3': 'takut nilai diri runtuh ketika hasil tidak terlihat',
  '4': 'takut hidup terasa palsu, biasa, atau tidak benar-benar dilihat',
  '5': 'takut terkuras, tidak siap, atau tidak cukup mampu menghadapi dunia',
  '6': 'takut tanda bahaya terlewat dan pegangan runtuh',
  '7': 'takut terkunci dalam rasa sakit atau hidup yang terlalu sempit',
  '8': 'takut dikendalikan, dilemahkan, atau dibuat tidak punya kuasa',
  '9': 'takut keberadaanmu membuat damai pecah atau orang menjauh'
};

export const enneagramDesire: Record<EnneagramType, string> = {
  '1': 'ingin hidup benar, bersih, dan bisa dipertanggungjawabkan',
  '2': 'ingin dicintai sebagai kehadiran yang berarti',
  '3': 'ingin membuktikan bahwa dirinya berharga dan mampu',
  '4': 'ingin hidup sesuai rasa yang dalam dan tidak palsu',
  '5': 'ingin cukup paham, cukup siap, dan tidak mudah dikuasai',
  '6': 'ingin pegangan yang bisa dipercaya saat dunia tidak stabil',
  '7': 'ingin ruang hidup yang luas, ringan, dan tetap mungkin',
  '8': 'ingin punya kuasa atas diri sendiri dan melindungi yang penting',
  '9': 'ingin kedamaian yang tidak memaksa dirinya hilang'
};

export const instinctLabels: Record<Instinct, string> = {
  sp: 'sp — aman, tubuh, cadangan, batas energi',
  sx: 'sx — intensitas, tarikan, kedalaman satu-ke-satu',
  so: 'so — posisi sosial, jaringan, peran dalam kelompok'
};

export const sectionNotes = {
  disclaimer: 'Hasil ini bukan diagnosis klinis. Ini interpretasi tipologi dari pola jawaban yang kau pilih.',
  close: 'Kalau beberapa skor dekat, bacalah hasil sebagai spektrum kecenderungan, bukan label mati.'
};
