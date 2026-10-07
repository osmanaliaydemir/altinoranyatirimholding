import React from 'react';

export default function Loading() {
  return (
    <aside
      role="status"
      aria-label="Yükleniyor"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'rgba(6, 9, 17, 0.94)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
      }}
    >
      <div
        style={{
          position: 'relative',
          width: '150px',
          height: '150px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <svg
          viewBox="0 0 140 140"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: '100%', height: '100%' }}
        >
          <defs>
            <linearGradient id="phiLoaderGoldNative" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="30%" stopColor="#F5DE94" />
              <stop offset="70%" stopColor="#D4AF37" />
              <stop offset="100%" stopColor="#9E7719" />
            </linearGradient>
          </defs>
          <circle cx="70" cy="70" r="60" stroke="rgba(212, 175, 55, 0.16)" strokeWidth="1" strokeDasharray="4 6" />
          <circle cx="70" cy="70" r="37" stroke="rgba(212, 175, 55, 0.26)" strokeWidth="1.2" />
          <circle cx="70" cy="70" r="23" stroke="rgba(212, 175, 55, 0.38)" strokeWidth="1.4" />
          <path
            d="M 70 10 A 60 60 0 0 1 130 70 A 37 37 0 0 1 93 107 A 23 23 0 0 1 70 84 A 14 14 0 0 1 84 70 A 9 9 0 0 1 75 61 A 5.5 5.5 0 0 1 70 66.5"
            stroke="url(#phiLoaderGoldNative)"
            strokeWidth="2.8"
            strokeLinecap="round"
          />
          <circle cx="70" cy="70" r="4.5" fill="#D4AF37" />
        </svg>
      </div>
    </aside>
  );
}
