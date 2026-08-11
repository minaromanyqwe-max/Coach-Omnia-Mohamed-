"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { useTranslations } from "next-intl";

// ==========================================
// Types
// ==========================================
interface CardProps {
  cartId: string;
  t: any;
}

// ==========================================
// Next Steps Info Card
// ==========================================
const NextStepsCard = () => (
  <div className="card-container info-container">
    <div className="title-card">
      <p>خطوات ما بعد الدفع ⚡</p>
      <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <circle cx="12" cy="12" r="10" />
        <path d="M12 16v-4M12 8h.01" />
      </svg>
    </div>
    <div className="card-content info-content">
      <div className="info-header">
        <span className="badge">سهل وسريع</span>
        <h2>ماذا سيحدث فور إتمام الدفع؟</h2>
        <p>رحلتك البدنية تبدأ فوراً بدون أي تعقيدات. إليك كيف نجهز خطتك:</p>
      </div>

      <div className="steps-wrapper">
        <div className="step-card">
          <div className="step-icon">1</div>
          <div className="step-detail">
            <h4>  سيتم ارسال رساله</h4>
            <p>بمجرد إتمام عملية الدفع بنجاح، سيتم تلقائياً ارسال رساله تحويل +برجاءارسال وصل علي نفس رقم تحويل </p>
          </div>
        </div>

        <div className="step-card">
          <div className="step-icon">2</div>
          <div className="step-detail">
            <h4>تأكيد الاشتراك واستبيان التقييم</h4>
            <p>ستصلك رسالة ترحيبية فورية مع نموذج تقييم شامل لجمع بياناتك وشكل يومك وهدفك البدني.</p>
          </div>
        </div>

        <div className="step-card">
          <div className="step-icon">3</div>
          <div className="step-detail">
            <h4>استلام برنامجك المخصص</h4>
            <p>تستلم خطتك التدريبية والغذائية المخصصة لك بالكامل للبدء فوراً مع متابعة أسبوعية مستمرة.</p>
          </div>
        </div>
      </div>

      <div className="support-notice">
        <p>💬 فريق الدعم والكوتش متواجدون معك خطوة بخطوة للإجابة على كافة استفساراتك.</p>
      </div>
    </div>
  </div>
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
// 3. Loading Skeleton
// ==========================================
const LoadingSkeleton = ({ t }: { t: any }) => <div className="skeleton-box">{t("loading")}</div>;

// ==========================================
// 4. Main Component with Geo Detection
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
      .catch(() => setIsEgypt(false));
  }, []);

  return (
    <StyledWrapper id="pricing">
      <div className="page-layout">
        {isEgypt === null ? (
          <LoadingSkeleton t={t} />
        ) : (
          <div className="cards-grid">
            {isEgypt === true ? (
              <EgyptCard cartId="67464019af1e4e9766624e75" t={t} />
            ) : (
              <InternationalCard cartId="INTERNATIONAL_CART_ID" t={t} />
            )}
            <NextStepsCard />
          </div>
        )}
      </div>
    </StyledWrapper>
  );
};

// ==========================================
// 5. Styled Components
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
  background: transparent;
  padding: 80px 20px;
  font-family: var(--font-cairo), sans-serif;

  .page-layout {
    width: 100%;
    max-width: 1020px;
    display: flex;
    justify-content: center;
  }

  .cards-grid {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
    align-items: start;
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

  /* ── Pricing & Info Card Container ── */
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
  }

  .title-card p { font-size: 14px; letter-spacing: 0.5px; margin: 0; }

  .card-content {
    background: rgba(15, 17, 26, 0.93);
    backdrop-filter: blur(20px);
    border-radius: 30px;
    padding: 32px 24px;
    color: white;
    display: flex;
    flex-direction: column;
    gap: 24px;
    height: calc(100% - 2px);
  }

  /* ── Info Card Specifics ── */
  .info-header .badge {
    display: inline-block;
    padding: 4px 12px;
    border-radius: 20px;
    background: rgba(47, 124, 248, 0.15);
    border: 1px solid rgba(47, 124, 248, 0.3);
    color: #00c6ff;
    font-size: 12px;
    font-weight: 700;
    margin-bottom: 12px;
  }

  .info-header h2 {
    font-size: 20px;
    font-weight: 800;
    margin: 0 0 8px 0;
    color: #fff;
  }

  .info-header p {
    font-size: 13px;
    color: #94a3b8;
    margin: 0;
    line-height: 1.6;
  }

  .steps-wrapper {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .step-card {
    display: flex;
    gap: 14px;
    background: rgba(255, 255, 255, 0.02);
    border: 1px solid rgba(255, 255, 255, 0.04);
    padding: 14px;
    border-radius: 16px;
    align-items: flex-start;
  }

  .step-icon {
    width: 30px;
    height: 30px;
    border-radius: 10px;
    background: linear-gradient(135deg, #7b2ff7, #2f7cf8);
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 800;
    font-size: 13px;
    flex-shrink: 0;
  }

  .step-detail h4 {
    margin: 0 0 4px 0;
    font-size: 14px;
    font-weight: 700;
    color: #f8fafc;
  }

  .step-detail p {
    margin: 0;
    font-size: 12.5px;
    color: #94a3b8;
    line-height: 1.6;
  }

  .support-notice {
    background: rgba(37, 211, 102, 0.08);
    border: 1px solid rgba(37, 211, 102, 0.2);
    padding: 12px 16px;
    border-radius: 14px;
  }

  .support-notice p {
    margin: 0;
    font-size: 12.5px;
    color: #25d366;
    line-height: 1.6;
    text-align: center;
  }

  /* ── Card UI Features ── */
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

  /* ── Responsive ── */
  @media (max-width: 900px) {
    .cards-grid {
      grid-template-columns: 1fr;
    }
    .page-layout {
      max-width: 520px;
    }
  }

  @media (max-width: 576px) {
    padding: 40px 16px;

    .card-content { padding: 24px 16px; gap: 20px; }
    .title { font-size: 21px; }
    .price-box h2 { font-size: 22px; }
    .inter-card .price-box h2 { font-size: 24px; }
    .option p, .features-box p { font-size: 13px; }
  }
`;

export default CoachingCards;