'use client';

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useTheme } from '@/context/ThemeContext';

export default function PageTransitionLoader() {
  const pathname = usePathname();
  const { isLight } = useTheme();
  const [loading, setLoading] = useState(false);
  const [fading, setFading] = useState(false);
  const [lockedTheme, setLockedTheme] = useState<'light' | 'dark' | null>(null);

  // Helper to accurately determine the active theme from DOM/Storage/Context
  const getCurrentTheme = (): 'light' | 'dark' => {
    if (typeof window !== 'undefined') {
      const docTheme = document.documentElement.getAttribute('data-theme');
      if (docTheme === 'light' || docTheme === 'dark') return docTheme;
      const saved = localStorage.getItem('altinoran_theme');
      if (saved === 'light' || saved === 'dark') return saved;
    }
    return isLight ? 'light' : 'dark';
  };

  // When pathname changes, smoothly fade out the golden loader and persist theme
  useEffect(() => {
    if (loading) {
      if (typeof window !== 'undefined') {
        const themeToKeep = lockedTheme || getCurrentTheme();
        document.documentElement.setAttribute('data-theme', themeToKeep);
      }
      setFading(true);
      const timer = setTimeout(() => {
        setLoading(false);
        setFading(false);
        setLockedTheme(null);
      }, 420);
      return () => clearTimeout(timer);
    }
  }, [pathname]);

  // Intercept internal link clicks to trigger the golden ratio transition
  useEffect(() => {
    const handleLinkClick = (e: MouseEvent) => {
      // Don't trigger if meta/ctrl keys are pressed (opening in new tab)
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

      const target = (e.target as HTMLElement).closest('a');
      if (!target) return;

      const href = target.getAttribute('href');
      const targetAttr = target.getAttribute('target');

      // Check for internal navigation
      if (
        href &&
        href.startsWith('/') &&
        !href.startsWith('/#') &&
        !href.startsWith('#') &&
        !href.includes('mailto:') &&
        !href.includes('tel:') &&
        targetAttr !== '_blank'
      ) {
        const cleanCurrent = pathname ? pathname.replace(/\/$/, '') || '/' : '/';
        const cleanTarget = href.replace(/\/$/, '') || '/';

        // Only trigger if going to a different route
        if (cleanCurrent !== cleanTarget) {
          const activeTheme = getCurrentTheme();
          setLockedTheme(activeTheme);
          setLoading(true);
          setFading(false);
        }
      }
    };

    document.addEventListener('click', handleLinkClick);
    return () => document.removeEventListener('click', handleLinkClick);
  }, [pathname, isLight]);

  // Failsafe safety timeout (2.5s maximum) to prevent any stuck state
  useEffect(() => {
    if (loading) {
      const safetyTimer = setTimeout(() => {
        setFading(true);
        setTimeout(() => {
          setLoading(false);
          setFading(false);
          setLockedTheme(null);
        }, 300);
      }, 2500);
      return () => clearTimeout(safetyTimer);
    }
  }, [loading]);

  if (!loading) return null;

  const isLoaderLight = (lockedTheme ?? getCurrentTheme()) === 'light';

  return (
    <aside
      role="status"
      aria-label="Yükleniyor"
      className={`page-transition-loader ${isLoaderLight ? 'light-mode' : 'dark-mode'}`}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: isLoaderLight ? 'rgba(248, 250, 252, 0.96)' : 'rgba(6, 9, 17, 0.94)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        opacity: fading ? 0 : 1,
        transition: 'opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        pointerEvents: fading ? 'none' : 'all',
      }}
    >
      {/* Pure Golden Ratio Spiral Geometric Visual Effect (Zero Text) */}
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
        {/* Soft Golden Ambient Radial Glow */}
        <div
          style={{
            position: 'absolute',
            inset: '-25px',
            background: isLoaderLight
              ? 'radial-gradient(circle, rgba(184, 134, 11, 0.22) 0%, transparent 70%)'
              : 'radial-gradient(circle, rgba(212, 175, 55, 0.25) 0%, transparent 70%)',
            borderRadius: '50%',
            animation: 'phiAmbientPulse 1.618s ease-in-out infinite',
          }}
        />

        <svg
          viewBox="0 0 140 140"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            width: '100%',
            height: '100%',
            transformOrigin: 'center center',
          }}
          className="phi-loader-svg"
        >
          <defs>
            <linearGradient id="phiLoaderGold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={isLoaderLight ? '#B8860B' : '#FFFFFF'} />
              <stop offset="30%" stopColor={isLoaderLight ? '#D4AF37' : '#F5DE94'} />
              <stop offset="70%" stopColor="#D4AF37" />
              <stop offset="100%" stopColor="#9E7719" />
            </linearGradient>
            <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Golden Ratio Proportional Circles (Fibonacci Radii: 60, 37, 23, 14) */}
          <circle
            cx="70"
            cy="70"
            r="60"
            stroke={isLoaderLight ? 'rgba(184, 134, 11, 0.22)' : 'rgba(212, 175, 55, 0.16)'}
            strokeWidth="1"
            strokeDasharray="4 6"
          />
          <circle
            cx="70"
            cy="70"
            r="37"
            stroke={isLoaderLight ? 'rgba(184, 134, 11, 0.35)' : 'rgba(212, 175, 55, 0.26)'}
            strokeWidth="1.2"
          />
          <circle
            cx="70"
            cy="70"
            r="23"
            stroke={isLoaderLight ? 'rgba(184, 134, 11, 0.48)' : 'rgba(212, 175, 55, 0.38)'}
            strokeWidth="1.4"
          />

          {/* Fibonacci Logarithmic Spiral Path */}
          <path
            d="M 70 10 A 60 60 0 0 1 130 70 A 37 37 0 0 1 93 107 A 23 23 0 0 1 70 84 A 14 14 0 0 1 84 70 A 9 9 0 0 1 75 61 A 5.5 5.5 0 0 1 70 66.5"
            stroke="url(#phiLoaderGold)"
            strokeWidth="2.8"
            strokeLinecap="round"
            className="phi-drawing-spiral"
            filter="url(#goldGlow)"
          />

          {/* Golden Harmonic Center Node */}
          <circle
            cx="70"
            cy="70"
            r="4.5"
            fill={isLoaderLight ? '#B8860B' : '#D4AF37'}
            className="phi-center-node"
          />
        </svg>
      </div>
    </aside>
  );
}

