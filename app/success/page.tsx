"use client";

import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

// ==========================================
// Config
// ==========================================
const WHATSAPP_NUMBER = "201551634503";
const WHATSAPP_MSG =
  "مرحباً كوتش أمنية، لقد أتممت الدفع للتو وأود تفعيل اشتراكي وتجهيز خطتي التدريبية! 🎉";
const REDIRECT_DELAY = 3; // ثواني قبل التحويل

// ==========================================
// Main Component
// ==========================================
const SuccessPage = () => {
  const [seconds, setSeconds] = useState(REDIRECT_DELAY);
  const [redirected, setRedirected] = useState(false);

  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MSG)}`;

  useEffect(() => {
    if (seconds <= 0) {
      setRedirected(true);
      window.location.href = waLink;
      return;
    }
    const timer = setTimeout(() => setSeconds((s) => s - 1), 1000);
    return () => clearTimeout(timer);
  }, [seconds, waLink]);

  return (
    <StyledWrapper>
      <div className="card">
        {/* أيقونة النجاح */}
        <div className="icon-wrap">
          <svg width={48} height={48} viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="11" stroke="#25D366" strokeWidth="1.5" />
            <path
              d="M7 12.5l3.5 3.5 6.5-7"
              stroke="#25D366"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <h1 className="headline">تم الدفع بنجاح! 🎉</h1>
        <p className="sub">
          شكراً لك — سيتم تحويلك الآن إلى واتساب لتفعيل اشتراكك وتجهيز خطتك التدريبية.
        </p>

        {/* عداد تنازلي */}
        {!redirected ? (
          <div className="counter-wrap">
            <svg className="ring" viewBox="0 0 44 44">
              <circle className="ring-bg" cx="22" cy="22" r="18" />
              <circle
                className="ring-fill"
                cx="22"
                cy="22"
                r="18"
                style={{
                  strokeDashoffset: `${113 - (113 / REDIRECT_DELAY) * (REDIRECT_DELAY - seconds)}px`,
                }}
              />
            </svg>
            <span className="counter-num">{seconds}</span>
          </div>
        ) : (
          <div className="redirecting">جاري التحويل...</div>
        )}

        {/* زرار يدوي */}
        <a href={waLink} className="wa-btn" target="_blank" rel="noreferrer">
          <WhatsAppIcon />
          افتح واتساب الآن
        </a>

        <p className="note">
          لم يفتح واتساب تلقائياً؟ اضغط الزر أعلاه.
        </p>
      </div>
    </StyledWrapper>
  );
};

// ==========================================
// WhatsApp Icon
// ==========================================
const WhatsAppIcon = () => (
  <svg width={20} height={20} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

// ==========================================
// Animations
// ==========================================
const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const popIn = keyframes`
  0%   { transform: scale(0.6); opacity: 0; }
  70%  { transform: scale(1.1); }
  100% { transform: scale(1); opacity: 1; }
`;

// ==========================================
// Styled Components
// ==========================================
const StyledWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #0b0d14;
  padding: 32px 16px;
  font-family: var(--font-cairo), sans-serif;
  direction: rtl;

  .card {
    width: 100%;
    max-width: 420px;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.07);
    border-radius: 32px;
    padding: 48px 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    text-align: center;
    animation: ${fadeUp} 0.6s cubic-bezier(0.16, 1, 0.3, 1) both;
  }

  /* أيقونة الصح */
  .icon-wrap {
    animation: ${popIn} 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: rgba(37, 211, 102, 0.08);
    border: 1px solid rgba(37, 211, 102, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .headline {
    font-size: 26px;
    font-weight: 800;
    color: #fff;
    margin: 0;
  }

  .sub {
    color: #94a3b8;
    font-size: 14px;
    line-height: 1.8;
    margin: 0;
    max-width: 320px;
  }

  /* عداد دائري */
  .counter-wrap {
    position: relative;
    width: 72px;
    height: 72px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .ring {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    transform: rotate(-90deg);
  }

  .ring-bg {
    fill: none;
    stroke: rgba(255, 255, 255, 0.06);
    stroke-width: 3;
  }

  .ring-fill {
    fill: none;
    stroke: #25D366;
    stroke-width: 3;
    stroke-dasharray: 113;
    stroke-linecap: round;
    transition: stroke-dashoffset 1s linear;
  }

  .counter-num {
    font-size: 22px;
    font-weight: 800;
    color: #fff;
    position: relative;
    z-index: 1;
  }

  .redirecting {
    color: #25D366;
    font-size: 14px;
    font-weight: 600;
  }

  /* زرار واتساب */
  .wa-btn {
    display: flex;
    align-items: center;
    gap: 10px;
    width: 100%;
    padding: 16px;
    border-radius: 16px;
    background: #25D366;
    color: #fff;
    font-size: 16px;
    font-weight: 800;
    text-decoration: none;
    justify-content: center;
    transition: all 0.25s ease;
    direction: rtl;
  }

  .wa-btn:hover {
    background: #1ebe5d;
    transform: scale(1.015);
    box-shadow: 0 10px 20px rgba(37, 211, 102, 0.3);
  }

  .note {
    color: #475569;
    font-size: 12px;
    margin: 0;
  }

  @media (max-width: 480px) {
    .card { padding: 36px 20px; }
    .headline { font-size: 22px; }
  }
`;

export default SuccessPage;