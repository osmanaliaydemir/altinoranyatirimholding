'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function ContactSection() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    department: 'general',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        department: 'general',
        message: '',
      });
    }, 1000);
  };

  return (
    <section id="iletisim" style={{ padding: '110px 0', position: 'relative' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <span className="section-tag">{t.contact.tag}</span>
          <h2 className="section-title text-gold-gradient" style={{ margin: '0 auto 16px', maxWidth: '780px' }}>
            {t.contact.title}
          </h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid-2" style={{ gap: '48px', alignItems: 'flex-start' }}>
          {/* Left Column: Headquarters Info & Quick Channels */}
          <div>
            <div
              className="glass-panel"
              style={{
                padding: '40px',
                border: '1px solid rgba(212, 175, 55, 0.35)',
                background: 'linear-gradient(135deg, rgba(16, 26, 48, 0.9) 0%, rgba(8, 14, 26, 0.95) 100%)',
                marginBottom: '28px',
              }}
            >
              <h3 style={{ fontSize: '1.4rem', color: '#FFFFFF', marginBottom: '28px' }}>
                {t.contact.addressLabel}
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                {/* Address */}
                <div style={{ display: 'flex', gap: '16px' }}>
                  <div
                    style={{
                      minWidth: '40px',
                      height: '40px',
                      borderRadius: '10px',
                      background: 'rgba(212, 175, 55, 0.12)',
                      border: '1px solid rgba(212, 175, 55, 0.3)',
                      color: 'var(--gold-400)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--gold-300)', fontWeight: 600 }}>{t.contact.addressLabel}</div>
                    <div style={{ color: '#E2E8F0', fontSize: '0.95rem', marginTop: '2px', lineHeight: 1.6 }}>
                      {t.contact.address}
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div style={{ display: 'flex', gap: '16px' }}>
                  <div
                    style={{
                      minWidth: '40px',
                      height: '40px',
                      borderRadius: '10px',
                      background: 'rgba(212, 175, 55, 0.12)',
                      border: '1px solid rgba(212, 175, 55, 0.3)',
                      color: 'var(--gold-400)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--gold-300)', fontWeight: 600 }}>{t.contact.phoneLabel}</div>
                    <a
                      href="tel:+902164551414"
                      style={{ color: '#FFFFFF', fontSize: '1.05rem', fontWeight: 600, textDecoration: 'none', display: 'inline-block', marginTop: '2px' }}
                    >
                      {t.contact.phone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div style={{ display: 'flex', gap: '16px' }}>
                  <div
                    style={{
                      minWidth: '40px',
                      height: '40px',
                      borderRadius: '10px',
                      background: 'rgba(212, 175, 55, 0.12)',
                      border: '1px solid rgba(212, 175, 55, 0.3)',
                      color: 'var(--gold-400)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--gold-300)', fontWeight: 600 }}>{t.contact.emailLabel}</div>
                    <a
                      href="mailto:info@altinoranyatirimholding.com.tr"
                      style={{ color: '#FFFFFF', fontSize: '1rem', textDecoration: 'none', display: 'inline-block', marginTop: '2px' }}
                    >
                      {t.contact.email}
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div style={{ display: 'flex', gap: '16px' }}>
                  <div
                    style={{
                      minWidth: '40px',
                      height: '40px',
                      borderRadius: '10px',
                      background: 'rgba(212, 175, 55, 0.12)',
                      border: '1px solid rgba(212, 175, 55, 0.3)',
                      color: 'var(--gold-400)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--gold-300)', fontWeight: 600 }}>{t.contact.hoursLabel}</div>
                    <div style={{ color: '#94A3B8', fontSize: '0.92rem', marginTop: '2px' }}>
                      {t.contact.hours}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Ataşehir Istanbul Location Badge */}
            <div
              className="glass-panel"
              style={{
                padding: '24px 28px',
                background: 'rgba(212, 175, 55, 0.05)',
                border: '1px solid rgba(212, 175, 55, 0.25)',
              }}
            >
              <div style={{ fontSize: '0.85rem', color: 'var(--gold-400)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '6px' }}>
                Lokasyon: Ataşehir Yönetim Merkezi
              </div>
              <p style={{ color: '#CBD5E1', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>
                E-80 ve ana ulaşım koridorlarına doğrudan entegre yönetim ofisimiz, ulusal ve uluslararası heyetleri ve iş ortaklarımızı ağırlamaktadır.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div
            className="glass-panel"
            style={{
              padding: '40px',
              border: '1px solid rgba(212, 175, 55, 0.4)',
              background: 'linear-gradient(135deg, rgba(16, 26, 48, 0.9) 0%, rgba(8, 14, 26, 0.95) 100%)',
            }}
          >
            <h3 style={{ fontSize: '1.5rem', color: '#FFFFFF', marginBottom: '8px' }}>
              {t.contact.formTitle}
            </h3>
            <p style={{ color: '#94A3B8', fontSize: '0.92rem', marginBottom: '28px' }}>
              {t.contact.formSubtitle}
            </p>

            {submitted ? (
              <div
                style={{
                  padding: '32px 24px',
                  background: 'rgba(16, 185, 129, 0.1)',
                  border: '1px solid #10B981',
                  borderRadius: 'var(--radius-md)',
                  textAlign: 'center',
                }}
              >
                <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: '#10B981', color: '#060911', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <h4 style={{ fontSize: '1.25rem', color: '#FFFFFF', marginBottom: '8px' }}>Başarılı!</h4>
                <p style={{ color: '#CBD5E1', fontSize: '0.95rem', margin: 0 }}>
                  {t.contact.successMessage}
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn btn-outline"
                  style={{ marginTop: '20px', padding: '8px 20px', fontSize: '0.85rem' }}
                >
                  Yeni Mesaj Gönder
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                <div>
                  <input
                    type="text"
                    required
                    placeholder={t.contact.namePlaceholder}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="form-input"
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <input
                    type="email"
                    required
                    placeholder={t.contact.emailPlaceholder}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="form-input"
                  />
                  <input
                    type="tel"
                    placeholder={t.contact.phonePlaceholder}
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="form-input"
                  />
                </div>

                <div>
                  <select
                    value={formData.department}
                    onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                    className="form-select"
                  >
                    <option value="general">{t.contact.departmentGeneral}</option>
                    <option value="ir">{t.contact.departmentIR}</option>
                    <option value="press">{t.contact.departmentPress}</option>
                    <option value="hr">{t.contact.departmentHR}</option>
                  </select>
                </div>

                <div>
                  <textarea
                    required
                    rows={4}
                    placeholder={t.contact.messagePlaceholder}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="form-textarea"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary"
                  style={{ width: '100%', padding: '16px' }}
                >
                  {isSubmitting ? (
                    <span>{t.contact.sending}</span>
                  ) : (
                    <>
                      <span>{t.contact.submitBtn}</span>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="22" y1="2" x2="11" y2="13"></line>
                        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                      </svg>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
