import React, { useState } from 'react';

// A single sketch tile. If the image file is missing, it degrades gracefully
// to a labelled dashed placeholder (drop the PNG into public/images/lampang/
// with the matching filename and it appears automatically).
function Tile({ src, file, caption }) {
  const [failed, setFailed] = useState(false);
  return (
    <figure className="m-0 flex-1 min-w-[240px]">
      {!failed ? (
        <img
          src={src}
          alt={caption}
          onError={() => setFailed(true)}
          className="w-full block rounded-lg"
          style={{ border: '1px solid var(--h-line)', aspectRatio: '4 / 3', objectFit: 'cover' }}
        />
      ) : (
        <div
          className="flex items-center justify-center text-center rounded-lg px-4"
          style={{
            minHeight: 160,
            aspectRatio: '4 / 3',
            border: '2px dashed var(--h-gold)',
            background: 'var(--h-gold-soft)',
            color: '#7A5A1E',
            fontSize: 13,
          }}
        >
          วางไฟล์ภาพ: <br /> <span className="latin">images/lampang/{file}</span>
        </div>
      )}
      <figcaption className="text-[12.5px] mt-2 text-center" style={{ color: 'var(--h-muted)' }}>
        {caption}
      </figcaption>
    </figure>
  );
}

export default function SketchGallery({ title, items }) {
  return (
    <div className="mt-8">
      {title && (
        <div className="text-[15px] font-semibold mb-3" style={{ color: 'var(--h-green2)' }}>
          {title}
        </div>
      )}
      <div className="flex gap-3 flex-wrap">
        {items.map((it) => (
          <Tile key={it.file} src={`./images/lampang/${it.file}`} file={it.file} caption={it.caption} />
        ))}
      </div>
    </div>
  );
}
