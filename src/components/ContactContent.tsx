'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function ContactContent() {
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

  const departments = [
    { name: 'Genel Sekreterlik & Santral', email: 'info@altinoranyatirimholding.com.tr', tel: '+90 (212) 345 67 00' },
    { name: 'Yatırımcı İlişkileri Direktörlüğü', email: 'ir@altinoranyatirimholding.com.tr', tel: '+90 (212) 345 67 10' },
    { name: 'Kurumsal İletişim & Basın', email: 'basin@altinoranyatirimholding.com.tr', tel: '+90 (212) 345 67 20' },
    { name: 'İnsan Kaynakları & Kariyer', email: 'ik@altinoranyatirimholding.com.tr', tel: '+90 (212) 345 67 30' },
  ];

  return (
    <section style={{ padding: '80px 0', position: 'relative' }}>
      <div className="container">
        {/* Main 2-Column Grid */}
        <div className="grid-2" style={{ gap: '48px', alignItems: 'flex-start', marginBottom: '80px' }}>
          {/* Left Column: Contact Form */}
          <div
            className="glass-panel"
            style={{
              padding: '40px',
              border: '1px solid rgba(212, 175, 55, 0.4)',
              background: 'linear-gradient(135deg, rgba(16, 26, 48, 0.9) 0%, rgba(8, 14, 26, 0.95) 100%)',
            }}
          >
            <h2 style={{ fontSize: '1.8rem', color: '#FFFFFF', marginBottom: '8px' }}>
              {t.contact.formTitle}
            </h2>
            <p style={{ color: '#94A3B8', fontSize: '0.95rem', marginBottom: '28px' }}>
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
                <h3 style={{ fontSize: '1.3rem', color: '#FFFFFF', marginBottom: '8px' }}>Mesajınız İletildi!</h3>
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
                  <label style={{ display: 'block', color: 'var(--gold-300)', fontSize: '0.85rem', marginBottom: '6px', fontWeight: 600 }}>
                    Ad Soyad *
                  </label>
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
                  <div>
                    <label style={{ display: 'block', color: 'var(--gold-300)', fontSize: '0.85rem', marginBottom: '6px', fontWeight: 600 }}>
                      E-posta *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder={t.contact.emailPlaceholder}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', color: 'var(--gold-300)', fontSize: '0.85rem', marginBottom: '6px', fontWeight: 600 }}>
                      Telefon
                    </label>
                    <input
                      type="tel"
                      placeholder={t.contact.phonePlaceholder}
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="form-input"
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', color: 'var(--gold-300)', fontSize: '0.85rem', marginBottom: '6px', fontWeight: 600 }}>
                    İlgili Departman
                  </label>
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
                  <label style={{ display: 'block', color: 'var(--gold-300)', fontSize: '0.85rem', marginBottom: '6px', fontWeight: 600 }}>
                    Mesajınız *
                  </label>
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

          {/* Right Column: HQ Info & Transportation */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div
              className="glass-panel"
              style={{
                padding: '36px 32px',
                border: '1px solid rgba(212, 175, 55, 0.35)',
              }}
            >
              <span className="badge" style={{ marginBottom: '14px' }}>Genel Merkez</span>
              <h3 style={{ fontSize: '1.4rem', color: '#FFFFFF', marginBottom: '16px' }}>
                Altınoran Kuleleri Maslak
              </h3>
              <p style={{ color: '#E2E8F0', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '24px' }}>
                Maslak Mah. Büyükdere Cad. No: 284 Altınoran Kuleleri Kat: 36-40, Sarıyer / İstanbul, Türkiye
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '20px' }}>
                <div>
                  <span style={{ color: '#94A3B8', fontSize: '0.85rem' }}>Santral Telefon:</span>
                  <div style={{ color: 'var(--gold-300)', fontWeight: 700, fontSize: '1.1rem' }}>+90 (212) 345 67 00</div>
                </div>
                <div>
                  <span style={{ color: '#94A3B8', fontSize: '0.85rem' }}>Faks:</span>
                  <div style={{ color: '#FFFFFF', fontWeight: 600 }}>+90 (212) 345 67 01</div>
                </div>
                <div>
                  <span style={{ color: '#94A3B8', fontSize: '0.85rem' }}>Çalışma Saatleri:</span>
                  <div style={{ color: '#CBD5E1', fontSize: '0.9rem' }}>Pazartesi - Cuma: 08:30 - 18:00 (GMT+3)</div>
                </div>
              </div>
            </div>

            {/* Departments Quick Directory */}
            <div className="glass-panel" style={{ padding: '32px' }}>
              <h4 style={{ fontSize: '1.15rem', color: '#FFFFFF', marginBottom: '16px' }}>
                Departman İletişim Rehberi
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {departments.map((dept, i) => (
                  <div
                    key={i}
                    style={{
                      padding: '12px 16px',
                      background: 'rgba(255, 255, 255, 0.03)',
                      borderRadius: 'var(--radius-sm)',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <div>
                      <div style={{ fontSize: '0.88rem', fontWeight: 600, color: '#FFFFFF' }}>{dept.name}</div>
                      <div style={{ fontSize: '0.82rem', color: 'var(--gold-400)' }}>{dept.email}</div>
                    </div>
                    <span style={{ fontSize: '0.82rem', color: '#94A3B8' }}>{dept.tel}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
