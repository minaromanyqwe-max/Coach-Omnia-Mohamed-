"use client";

import React from "react";
import styled, { keyframes } from "styled-components";
import { useTranslations } from "next-intl";
import Image from "next/image";

const CoachProfile = () => {
  const t = useTranslations("Profile");

  return (
    <StyledWrapper id="about">
      <div className="profile-container">
        
        {/* الجانب الأيمن: الصورة الشخصية الرياضية للكوتش */}
        <div className="image-column">
          <div className="avatar-wrapper">
            <Image 
              src="/WhatsApp Image 2026-05-26 at 12.07.33 PM.jpeg"
              alt="Coach Omnia Mohamed" 
              width={320}
              height={420}
              className="coach-avatar"
            />
            <div className="experience-badge">{t("experience")}</div>
          </div>
        </div>
        
        {/* الجانب الأيسر: التفاصيل والشهادات والاعتمادات الدولية */}
        <div className="content-column">
          <div className="info-card">
            <span className="subtitle">{t("subtitle")}</span>
            <h2 className="main-title">{t("title")}</h2>
            <p className="bio-text">{t("bio")}</p>
          </div>

          {/* سكشن الاعتمادات الدولية بتصميم مودرن */}
          <div className="credentials-wrapper">
            <h3 className="section-subtitle">{t("certTitle")}</h3>
            <div className="credentials-grid">
              
              {/* الشهادة الأولى: ISSA */}
              <div className="credential-card">
                <div className="badge-icon gold">ISSA</div>
                <div className="credential-info">
                  <h4>{t("issaTitle")}</h4>
                  <p>{t("issaDesc")}</p>
                </div>
              </div>

              {/* الشهادة الثانية: IASST */}
              <div className="credential-card">
                <div className="badge-icon purple">IASST</div>
                <div className="credential-info">
                  <h4>{t("iasstTitle")}</h4>
                  <p>{t("iasstDesc")}</p>
                </div>
              </div>

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
  background: transparent; /* لجعل الـ Particles تظهر في الخلفية */
  padding: 100px 20px;
  font-family: var(--font-cairo), sans-serif;
  width: 100%;
  position: relative;

  .profile-container {
    width: 100%;
    max-width: 1200px;
    display: flex;
    flex-direction: row; /* توزيع أفقي في الشاشات الكبيرة */
    align-items: flex-start;
    gap: 60px;
    animation: ${fadeInUp} 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  }

  /* --- عمود الصورة الأيمن --- */
  .image-column {
    flex: 1;
    display: flex;
    justify-content: center;
    position: sticky;
    top: 100px; /* لتثبيت الصورة أثناء تمرير النصوص في الشاشات الكبيرة */
  }

  .avatar-wrapper {
    position: relative;
    display: inline-block;
  }

  .avatar-wrapper::after {
    content: '';
    position: absolute;
    inset: -8px;
    border: 2px dashed rgba(0, 198, 255, 0.3);
    border-radius: 40px;
    z-index: -1;
  }

  .coach-avatar {
    width: 320px;
    height: 420px;
    border-radius: 32px;
    object-fit: cover;
    border: 3px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.4);
    background: linear-gradient(135deg, rgba(0, 198, 255, 0.2), rgba(123, 47, 247, 0.2));
  }

  .experience-badge {
    position: absolute;
    bottom: 20px;
    right: -20px;
    background: linear-gradient(135deg, #e67e22, #d35400);
    color: #fff;
    font-size: 13px;
    font-weight: 700;
    padding: 8px 16px;
    border-radius: 16px;
    white-space: nowrap;
    box-shadow: 0 10px 20px rgba(230, 126, 34, 0.3);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  /* --- عمود البيانات الأيسر --- */
  .content-column {
    flex: 1.5;
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  .info-card {
    background: rgba(22, 26, 38, 0.4);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 32px;
    padding: 40px;
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
  }

  .subtitle {
    color: #00c6ff;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 1px;
    display: block;
    margin-bottom: 8px;
  }

  .main-title {
    color: #ffffff;
    font-size: 38px;
    font-weight: 800;
    margin: 0 0 16px 0;
  }

  .bio-text {
    color: #cbd5e1;
    font-size: 16px;
    line-height: 1.8;
    margin: 0;
    font-weight: 400;
  }

  /* سكشن الشهادات والاعتمادات المودرن */
  .credentials-wrapper {
    background: rgba(22, 26, 38, 0.4);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(123, 47, 247, 0.15);
    border-radius: 32px;
    padding: 35px;
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
  }

  .section-subtitle {
    color: #ffffff;
    font-size: 20px;
    font-weight: 700;
    margin: 0 0 24px 0;
    padding-bottom: 12px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  }

  .credentials-grid {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .credential-card {
    display: flex;
    align-items: center;
    gap: 20px;
    background: rgba(255, 255, 255, 0.02);
    padding: 20px;
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.04);
    transition: all 0.3s ease;
  }

  .credential-card:hover {
    background: rgba(255, 255, 255, 0.04);
    border-color: rgba(123, 47, 247, 0.3);
    transform: translateX(-5px); /* حركة انزلاقية ناعمة لليمين لتفاعل أفضل باللغة العربية */
  }

  .badge-icon {
    width: 65px;
    height: 65px;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-weight: 900;
    flex-shrink: 0;
    box-shadow: 0 8px 20px rgba(0,0,0,0.3);
  }

  .badge-icon.gold {
    background: linear-gradient(135deg, #f1c40f, #b78a37);
    color: #111;
  }

  .badge-icon.purple {
    background: linear-gradient(135deg, #8e44ad, #3498db);
    color: #fff;
  }

  .credential-info {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .credential-info h4 {
    color: #ffffff;
    font-size: 15px;
    font-weight: 700;
    margin: 0;
  }

  .credential-info p {
    color: #94a3b8;
    font-size: 13px;
    margin: 0;
    font-weight: 400;
    line-height: 1.5;
  }

  /* --- التجاوب مع الشاشات والموبايل (Responsive) --- */
  @media (max-width: 992px) {
    padding: 60px 20px;

    .profile-container {
      flex-direction: column; /* تحويل التوزيع لرأسي في الموبايل */
      gap: 40px;
    }

    .image-column {
      position: static; /* إلغاء التثبيت الجانبي */
      width: 100%;
    }

    .coach-avatar {
      width: 280px;
      height: 360px;
    }

    .experience-badge {
      right: 50%;
      transform: translateX(50%);
      bottom: -15px;
    }

    .info-card, .credentials-wrapper {
      padding: 24px;
      border-radius: 24px;
    }

    .main-title {
      font-size: 28px;
    }

    .bio-text {
      font-size: 14px;
    }
  }

  @media (max-width: 576px) {
    .credential-card {
      flex-direction: column;
      text-align: center;
      padding: 16px;
    }

    .badge-icon {
      width: 55px;
      height: 55px;
      font-size: 14px;
    }
  }
`;

export default CoachProfile;