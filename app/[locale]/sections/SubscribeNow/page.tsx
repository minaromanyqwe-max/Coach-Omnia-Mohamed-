"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { useTranslations } from "next-intl";

// ==========================================
// Config — غيّر هنا فقط
// ==========================================
const WHATSAPP_NUMBER = "201551634503"; // الرقم الدولي بدون علامة + أو مسافات لإرسال فوري سليم
const WHATSAPP_MSG = "مرحباً كوتش أمنية، لقد أتممت الدفع للتو وأود تفعيل اشتراكي وتجهيز خطتي التدريبية! 🎉";

// ==========================================
// Types
// ==========================================
interface CardProps {
  cartId: string;
  t: any;
}

// ==========================================
// WhatsApp SVG Icon
// ==========================================
const WhatsAppIcon = () => (
  <svg width={22} height={22} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

// ==========================================
// 1. Egypt Card
// ==========================================
const EgyptCard = ({ cartId, t }: CardProps) => (
  <div className="card-container">
    <div className="title-card">
      <p>{t("egyptOffer")}</p>
      <svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 24 24">
        <path fill="currentColor" d="M12 2L15 9L22 9.5L17 14L18.5 21L12 17.5L5.5 21L7 14L2 9.5L9 9L12 2Z" />
      </svg>
    </div>
    <div className="card-content">
      <p className="title">{t("egyptTitle")}</p>
      <div className="price-box">
        <h2>{t("egyptDiscount")}</h2>
        <p>{t("egyptSub")}</p>
      </div>
      <Link href="https://www.easykash.net/PHX8632" className="card-btn">
        {t("egyptBtn")}
      </Link>
      <div className="card-separate">
        <div className="separate" />
        <p>{t("egyptPlans")}</p>
        <div className="separate" />
      </div>
      <div className="card-list-features">
        <div className="option"><span>✅</span><p><strong>{t("month1")}</strong> 1,499 ج.م {t("insteadOf")} <del>2,000 ج.م</del> {t("freeMonth")}</p></div>
        <div className="option"><span>✅</span><p><strong>{t("month2")}</strong> 1,999 ج.م {t("insteadOf")} <del>4,800 ج.م</del> {t("freeMonth")}</p></div>
        <div className="option"><span>✅</span><p><strong>{t("month6")}</strong> 3,999 ج.م {t("insteadOf")} <del>9,600 ج.م</del> {t("freeMonth")}</p></div>
        <div className="option"><span>✅</span><p><strong>{t("year1")}</strong> 6,999 ج.م {t("insteadOf")} <del>19,200 ج.م</del> {t("freeMonthFire")}</p></div>
      </div>
      <div className="card-separate">
        <div className="separate" />
        <p>{t("egyptIncludes")}</p>
        <div className="separate" />
      </div>
      <div className="features-box">
        <p>{t("egyptF1")}</p>
        <p>{t("egyptF2")}</p>
        <p>{t("egyptF3")}</p>
        <p>{t("egyptF4")}</p>
        <p>{t("egyptF5")}</p>
      </div>
      <div className="payment-box">
        <h4>{t("egyptPay")}</h4>
        <div className="payments">
          <span>InstaPay</span>
          <span>Vodafone Cash</span>
          <span>Apple Pay</span>
          <span>Meeza</span>
          <span>ValU</span>
          <span>Fawry</span>
        </div>
      </div>
      <p className="footer-text">{t("egyptNote")}</p>
    </div>
  </div>
);

// ==========================================
// 2. International Card
// ==========================================
const InternationalCard = ({ cartId, t }: CardProps) => (
  <div className="card-container inter-card">
    <div className="title-card">
      <p>{t("interOffer")}</p>
      <svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 24 24">
        <path fill="currentColor" d="M12 2L15 9L22 9.5L17 14L18.5 21L12 17.5L5.5 21L7 14L2 9.5L9 9L12 2Z" />
      </svg>
    </div>
    <div className="card-content">
      <p className="title">{t("interTitle")}</p>
      <div className="price-box">
        <h2>{t("interDiscount")}</h2>
        <p>{t("interSub")}</p>
      </div>
      <Link href="https://www.easykash.net/PHM3400" className="card-btn">
        {t("interBtn")}
      </Link>
      <div className="card-separate">
        <div className="separate" />
        <p>{t("interPlans")}</p>
        <div className="separate" />
      </div>
      <div className="card-list-features">
        <div className="option"><span>✅</span><p><strong>{t("month1")}</strong> $120 {t("insteadOf")} <del>$200</del> {t("interFreeMonth")}</p></div>
        <div className="option"><span>✅</span><p><strong>{t("month2")}</strong> $200 {t("insteadOf")} <del>$400</del> {t("interFreeMonth")}</p></div>
        <div className="option"><span>✅</span><p><strong>{t("month6")}</strong> $400 {t("insteadOf")} <del>$800</del> {t("interFreeMonth")}</p></div>
        <div className="option"><span>✅</span><p><strong>{t("year1")}</strong> $750 {t("insteadOf")} <del>$1,500</del> {t("interFreeMonthFire")}</p></div>
      </div>
      <div className="card-separate">
        <div className="separate" />
        <p>{t("interIncludes")}</p>
        <div className="separate" />
      </div>
      <div className="features-box">
        <p>{t("interF1")}</p>
        <p>{t("interF2")}</p>
        <p>{t("interF3")}</p>
        <p>{t("interF4")}</p>
        <p>{t("interF5")}</p>
      </div>
      <div className="payment-box">
        <h4>{t("interPay")}</h4>
        <div className="payments">
          <span>Visa / Mastercard</span>
          <span>Apple Pay</span>
          <span>Western Union</span>
          <span>Bank Transfer</span>
        </div>
      </div>
      <p className="footer-text">{t("interNote")}</p>
    </div>
  </div>
);

// ==========================================
// 3. WhatsApp Card
// ==========================================
const WhatsAppCard = ({ t }: { t: any }) => {
  const [copied, setCopied] = useState(false);

  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MSG)}`;

  const copyPhone = () => {
    navigator.clipboard.writeText("+" + WHATSAPP_NUMBER);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const formattedPhone = "+20 155 163 4503";

  return (
    <div className="wa-card-container">
      <div className="wa-inner">
        <div className="wa-icon-wrap">
          <WhatsAppIcon />
        </div>
        <span className="wa-badge">{t("waBadge")}</span>
        <h2 className="wa-headline">{t("waHeadline")}</h2>
        <p className="wa-body">
          {t("waBody1")}{" "}
          <strong>{t("waBodyStrong")}</strong>{" "}
          {t("waBody2")}
        </p>
        <div className="wa-divider" />
        <div className="wa-phone-row">
          <span className="wa-phone-num">{formattedPhone}</span>
          <button className="wa-copy-btn" onClick={copyPhone}>
            {copied ? t("waCopied") : t("waCopy")}
          </button>
        </div>
        <a 
          href={waLink} 
          target="_blank" 
          rel="noreferrer" 
          className="wa-btn"
        >
          <WhatsAppIcon />
          {t("waBtn")}
        </a>
        <p className="wa-note">{t("waNote")}</p>
      </div>
    </div>
  );
};

// ==========================================
// 4. Loading Skeleton
// ==========================================
const LoadingSkeleton = ({ t }: { t: any }) => <div className="skeleton-box">{t("loading")}</div>;

// ==========================================
// 5. Main Component with Geo Detection
// ==========================================
const CoachingCards = () => {
  const [isEgypt, setIsEgypt] = useState<boolean | null>(null);
  const t = useTranslations("Pricing");

  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then((res) => res.json())
      .then((data) => {
        const countryCode: string = (data.country_code || "").toUpperCase();
        setIsEgypt(countryCode === "EG");
      })
      .catch(() => setIsEgypt(false)); // في حال الفشل يوجه تلقائيا للدولي لحماية التجربة
  }, []);

  return (
    <StyledWrapper id="pricing">
      <div className="page-layout">

        {isEgypt === null ? (
          <LoadingSkeleton t={t} />
        ) : (
          <div className="grid-responsive">
            
            {/* الكارت الجغرافي المستهدف للأسعار */}
            <div className="cards-wrapper">
              {isEgypt === true ? (
                <EgyptCard cartId="67464019af1e4e9766624e75" t={t} />
              ) : (
                <InternationalCard cartId="INTERNATIONAL_CART_ID" t={t} />
              )}
            </div>

            {/* كارت التأكيد عبر الواتساب */}
            <WhatsAppCard t={t} />

          </div>
        )}

      </div>
    </StyledWrapper>
  );
};

// ==========================================
// 6. Styled Components
// ==========================================
const pulse = keyframes`
  0%, 100% { opacity: 0.5; }
  50% { opacity: 1; }
`;

const StyledWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: transparent; /* لكي يتداخل مع الـ Particles في الخلفية */
  padding: 80px 20px;
  font-family: var(--font-cairo), sans-serif;

  /* ── Layout ── */
  .page-layout {
    width: 100%;
    max-width: 1100px; /* توسيع العرض الإجمالي ليسمح بالتجاور */
    display: flex;
    justify-content: center;
  }

  /* الاستجابة للشبكة (تصبح أفية على الشاشات الكبيرة ورأسية على الموبايل) */
  .grid-responsive {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
    width: 100%;
    align-items: start;
  }

  .cards-wrapper {
    width: 100%;
  }

  /* ── Skeleton ── */
  .skeleton-box {
    width: 100%;
    max-width: 400px;
    height: 500px;
    border-radius: 32px;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.05);
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgba(255, 255, 255, 0.4);
    font-size: 15px;
    text-align: center;
    padding: 20px;
    animation: ${pulse} 1.5s ease-in-out infinite;
  }

  /* ── Pricing Card ── */
  .card-container {
    width: 100%;
    background: linear-gradient(
      135deg,
      rgba(123, 47, 247, 0.65),
      rgba(47, 124, 248, 0.65) 45%,
      rgba(0, 198, 255, 0.65)
    );
    padding: 2px;
    border-radius: 32px;
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3), 0 0 30px rgba(47, 124, 248, 0.15);
    transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease;
  }

  .card-container:hover {
    transform: translateY(-6px);
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.5), 0 0 40px rgba(0, 198, 255, 0.3);
  }

  .title-card {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 14px 24px;
    color: white;
    font-weight: 700;
    /* Removed direction rtl */
  }

  .title-card p { font-size: 14px; letter-spacing: 0.5px; }

  .card-content {
    background: rgba(15, 17, 26, 0.93);
    backdrop-filter: blur(20px);
    border-radius: 30px;
    padding: 32px 24px;
    color: white;
    display: flex;
    flex-direction: column;
    gap: 24px;
    /* Removed direction rtl */
  }

  .title {
    font-size: 24px;
    font-weight: 800;
    text-align: center;
    margin: 0;
  }

  .price-box { text-align: center; }

  .price-box h2 {
    color: #fff;
    font-size: 26px;
    font-weight: 800;
    margin: 0 0 8px 0;
  }

  .inter-card .price-box h2 {
    font-size: 30px;
  }

  .price-box p {
    color: #94a3b8;
    font-size: 13px;
    margin: 0;
  }

  .card-btn {
    width: 100%;
    padding: 16px;
    text-align: center;
    text-decoration: none;
    border: none;
    border-radius: 16px;
    background: linear-gradient(135deg, #7b2ff7, #2f7cf8, #00c6ff);
    color: white;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .card-btn:hover {
    transform: scale(1.015);
    box-shadow: 0 10px 25px rgba(47, 124, 248, 0.4);
  }

  .card-separate {
    display: flex;
    align-items: center;
    gap: 12px;
    color: #64748b;
    font-size: 13px;
    font-weight: 600;
  }

  .separate {
    flex: 1;
    height: 1px;
    background: rgba(255, 255, 255, 0.08);
  }

  .card-list-features,
  .features-box {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .option {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    background: rgba(255, 255, 255, 0.02);
    border: 1px solid rgba(255, 255, 255, 0.04);
    padding: 12px;
    border-radius: 14px;
  }

  .option p,
  .features-box p {
    font-size: 13.5px;
    line-height: 1.6;
    margin: 0;
    color: #cbd5e1;
  }

  .option p strong {
    color: #fff;
  }

  .features-box p {
    background: rgba(255, 255, 255, 0.02);
    border: 1px solid rgba(255, 255, 255, 0.04);
    padding: 12px;
    border-radius: 14px;
  }

  .payment-box h4 {
    margin: 0 0 12px 0;
    font-size: 14px;
    color: #94a3b8;
    font-weight: 700;
  }

  .payments {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  .payments span {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.08);
    padding: 6px 12px;
    border-radius: 10px;
    font-size: 12px;
    color: #e2e8f0;
  }

  .footer-text {
    text-align: center;
    color: #64748b;
    font-size: 11.5px;
    margin: 0;
  }

  /* ── WhatsApp Card ── */
  .wa-card-container {
    width: 100%;
    background: linear-gradient(
      135deg,
      rgba(37, 211, 102, 0.45),
      rgba(18, 140, 126, 0.45)
    );
    padding: 2px;
    border-radius: 32px;
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3), 0 0 30px rgba(37, 211, 102, 0.1);
    transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease;
  }

  .wa-card-container:hover {
    transform: translateY(-6px);
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.5), 0 0 40px rgba(37, 211, 102, 0.25);
  }

  .wa-inner {
    background: rgba(15, 17, 26, 0.93);
    backdrop-filter: blur(20px);
    border-radius: 30px;
    padding: 40px 24px;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    text-align: center;
    /* Removed direction rtl */
  }

  .wa-icon-wrap {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background: #25D366;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    flex-shrink: 0;
    box-shadow: 0 0 20px rgba(37, 211, 102, 0.4);
  }

  .wa-badge {
    background: rgba(37, 211, 102, 0.1);
    border: 1px solid rgba(37, 211, 102, 0.25);
    color: #25D366;
    font-size: 12px;
    font-weight: 700;
    padding: 6px 16px;
    border-radius: 100px;
  }

  .wa-headline {
    color: #fff;
    font-size: 24px;
    font-weight: 800;
    margin: 0;
  }

  .wa-body {
    color: #94a3b8;
    font-size: 14px;
    line-height: 1.8;
    margin: 0;
  }

  .wa-body strong {
    color: #fff;
    font-weight: 700;
  }

  .wa-divider {
    width: 100%;
    height: 1px;
    background: rgba(255, 255, 255, 0.06);
  }

  .wa-phone-row {
    display: flex;
    align-items: center;
    gap: 12px;
    background: rgba(255, 255, 255, 0.02);
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 16px;
    padding: 14px 18px;
    width: 100%;
    justify-content: center;
    direction: ltr;
  }

  .wa-phone-num {
    color: #fff;
    font-size: 17px;
    font-weight: 700;
    letter-spacing: 0.5px;
    flex: 1;
    text-align: center;
  }

  .wa-copy-btn {
    background: rgba(37, 211, 102, 0.12);
    border: 1px solid rgba(37, 211, 102, 0.25);
    color: #25D366;
    border-radius: 10px;
    padding: 6px 14px;
    font-size: 13px;
    font-weight: 700;
    cursor: pointer;
    transition: 0.2s;
    white-space: nowrap;
  }

  .wa-copy-btn:hover {
    background: rgba(37, 211, 102, 0.22);
  }

  .wa-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 100%;
    padding: 16px;
    border-radius: 16px;
    background: #25D366;
    color: #fff;
    font-size: 16px;
    font-weight: 800;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.25s ease;
    /* Removed direction rtl */
  }

  .wa-btn:hover {
    background: #1ebe5d;
    transform: scale(1.015);
    box-shadow: 0 10px 20px rgba(37, 211, 102, 0.3);
  }

  .wa-note {
    color: #64748b;
    font-size: 11.5px;
    margin: 0;
  }

  /* ── Responsive Media Queries ── */
  @media (max-width: 992px) {
    padding: 60px 20px;

    .grid-responsive {
      grid-template-columns: 1fr; /* تترتب الكروت فوق بعضها على الأجهزة المتوسطة والصغيرة */
      gap: 32px;
      max-width: 480px; /* الحفاظ على مظهر متناسق ومريح في شاشات الموبايل والتابلت */
      margin: 0 auto;
    }
  }

  @media (max-width: 576px) {
    padding: 40px 16px;

    .card-content { padding: 24px 16px; gap: 20px; }
    .title { font-size: 21px; }
    .price-box h2 { font-size: 22px; }
    .inter-card .price-box h2 { font-size: 24px; }
    .option p, .features-box p { font-size: 13px; }
    .wa-inner { padding: 32px 16px; }
    .wa-headline { font-size: 21px; }
    .wa-phone-num { font-size: 15px; }
    .wa-btn { font-size: 15px; }
  }
`;

export default CoachingCards;