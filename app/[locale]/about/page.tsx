"use client";
import React from "react";
import styled, { keyframes } from "styled-components";
import { useTranslations } from "next-intl";

const CoachFeatures = () => {
  const t = useTranslations("Features");

  return (
    <StyledWrapper id="features">
      <div className="features-container">
        
        {/* العنوان الرئيسي للسكشن */}
        <div className="features-header">
          <span className="subtitle">{t("subtitle")}</span>
          <h2>{t("title")}</h2>
        </div>

        {/* شبكة المزايا المطورة (Grid) */}
        <div className="features-grid">
          
          {/* الميزة الأولى */}
          <div className="feature-card highlight-gold">
            <div className="card-glow"></div>
            <div className="icon-wrapper">🎯</div>
            <div className="card-content">
              <h3>{t("c1Title")}</h3>
              <p>{t("c1Desc")}</p>
            </div>
          </div>

          {/* الميزة الثانية */}
          <div className="feature-card highlight-cyan">
            <div className="card-glow"></div>
            <div className="icon-wrapper">📱</div>
            <div className="card-content">
              <h3>{t("c2Title")}</h3>
              <p>{t("c2Desc")}</p>
            </div>
          </div>

          {/* الميزة الثالثة */}
          <div className="feature-card highlight-purple">
            <div className="card-glow"></div>
            <div className="icon-wrapper">👥</div>
            <div className="card-content">
              <h3>{t("c3Title")}</h3>
              <p>{t("c3Desc")}</p>
            </div>
          </div>

          {/* الميزة الرابعة */}
          <div className="feature-card highlight-green">
            <div className="card-glow"></div>
            <div className="icon-wrapper">🥑</div>
            <div className="card-content">
              <h3>{t("c4Title")}</h3>
              <p>{t("c4Desc")}</p>
            </div>
          </div>

        </div>
      </div>
    </StyledWrapper>
  );
};

// --- Animations ---
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// ==========================================
// التنسيقات الاحترافية المطورة (Styled Components)
// ==========================================
const StyledWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent; /* يندمج مع خلفية الـ Particles الثابتة */
  padding: 100px 20px;
  font-family: var(--font-cairo), sans-serif;
  width: 100%;

  .features-container {
    width: 100%;
    max-width: 1200px; /* فتح العرض ليكون فخم وواسع */
    display: flex;
    flex-direction: column;
    gap: 48px;
  }

  /* الهيدر والعناوين */
  .features-header {
    text-align: center;
    animation: ${fadeInUp} 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  }

  .features-header .subtitle {
    color: #6366f1;
    font-size: 13px;
    font-weight: 800;
    letter-spacing: 2px;
    background: rgba(99, 102, 241, 0.1);
    border: 1px solid rgba(99, 102, 241, 0.2);
    padding: 6px 18px;
    border-radius: 100px;
    display: inline-block;
    margin-bottom: 16px;
  }

  .features-header h2 {
    color: #fff;
    font-size: 36px;
    font-weight: 800;
    margin: 0;
  }

  /* شبكة الكروت الذكية (تحول لـ 2 في كل صف على الشاشات الكبيرة) */
  .features-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
    animation: ${fadeInUp} 1s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards;
  }

  /* الاستايل الأساسي الموحد للكروت (Glassmorphism) */
  .feature-card {
    position: relative;
    background: rgba(22, 26, 38, 0.4);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 28px;
    padding: 32px;
    display: flex;
    gap: 24px;
    align-items: flex-start;
    overflow: hidden;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  }

  /* تأثير الإضاءة الخلفية المخفية داخل الكارت */
  .card-glow {
    position: absolute;
    inset: 0;
    background: radial-gradient(circle 120px at var(--x, 50%) var(--y, 50%), rgba(255,255,255,0.03), transparent);
    opacity: 0;
    transition: opacity 0.5s;
    pointer-events: none;
  }

  .feature-card:hover .card-glow {
    opacity: 1;
  }

  .feature-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.4);
  }

  /* ستايل حاوية الأيقونة */
  .icon-wrapper {
    font-size: 32px;
    background: rgba(255, 255, 255, 0.03);
    padding: 16px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    border: 1px solid rgba(255, 255, 255, 0.08);
    transition: all 0.4s ease;
  }

  /* نصوص المحتوى داخلياً */
  .card-content {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .card-content h3 {
    color: #ffffff;
    font-size: 20px;
    font-weight: 700;
    margin: 0;
    transition: color 0.3s ease;
  }

  .card-content p {
    color: #94a3b8;
    font-size: 14px;
    line-height: 1.7;
    margin: 0;
    font-weight: 400;
  }

  .card-content strong {
    color: #fff;
    font-weight: 600;
  }

  /* ---------------------------------------------------
     🔥 تأثيرات الألوان النيون المخصصة لكل كارت عند الـ Hover
  --------------------------------------------------- */
  
  /* 1. كارت التميز الذهبي */
  .feature-card.highlight-gold:hover {
    border-color: rgba(241, 196, 15, 0.3);
    box-shadow: 0 30px 60px rgba(241, 196, 15, 0.08);
  }
  .feature-card.highlight-gold:hover .icon-wrapper {
    background: rgba(241, 196, 15, 0.1);
    border-color: #f1c40f;
  }
  .feature-card.highlight-gold:hover h3 { color: #f1c40f; }

  /* 2. كارت الأبليكشن السينان (Cyan) */
  .feature-card.highlight-cyan:hover {
    border-color: rgba(0, 198, 255, 0.3);
    box-shadow: 0 30px 60px rgba(0, 198, 255, 0.08);
  }
  .feature-card.highlight-cyan:hover .icon-wrapper {
    background: rgba(0, 198, 255, 0.1);
    border-color: #00c6ff;
  }
  .feature-card.highlight-cyan:hover h3 { color: #00c6ff; }

  /* 3. كارت الكوميونيتي الأرجواني */
  .feature-card.highlight-purple:hover {
    border-color: rgba(168, 85, 247, 0.3);
    box-shadow: 0 30px 60px rgba(168, 85, 247, 0.08);
  }
  .feature-card.highlight-purple:hover .icon-wrapper {
    background: rgba(168, 85, 247, 0.1);
    border-color: #a855f7;
  }
  .feature-card.highlight-purple:hover h3 { color: #a855f7; }

  /* 4. كارت التغذية الأخضر */
  .feature-card.highlight-green:hover {
    border-color: rgba(34, 197, 94, 0.3);
    box-shadow: 0 30px 60px rgba(34, 197, 94, 0.08);
  }
  .feature-card.highlight-green:hover .icon-wrapper {
    background: rgba(34, 197, 94, 0.1);
    border-color: #22c55e;
  }
  .feature-card.highlight-green:hover h3 { color: #22c55e; }


  /* --- التجاوب وشاشات الموبايل (Responsive) --- */
  @media (max-width: 992px) {
    padding: 60px 20px;

    .features-grid {
      grid-template-columns: 1fr; /* تحويل لعمود واحد في الشاشات المتوسطة والصغيرة */
      gap: 20px;
    }

    .features-header h2 {
      font-size: 28px;
    }
  }

  @media (max-width: 576px) {
    .features-header h2 {
      font-size: 22px;
    }

    .feature-card {
      padding: 24px;
      gap: 16px;
      flex-direction: column; /* جعل الأيقونة فوق النص بالموبايل الصغير لراحة العين */
      align-items: center;
      text-align: center;
    }

    .icon-wrapper {
      padding: 12px;
      font-size: 26px;
    }

    .card-content h3 {
      font-size: 18px;
    }

    .card-content p {
      font-size: 13px;
    }
  }
`;

export default CoachFeatures;