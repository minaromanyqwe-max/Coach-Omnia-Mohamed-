"use client";

import React from "react";
import styled, { keyframes } from "styled-components";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function HeroSection() {
  const t = useTranslations("Hero");
  
  return (
    <StyledWrapper>
      {/* بؤرة الضوء الخلفية المتحركة */}
      <div className="bg-glow"></div>
      
      <div className="container">
        
        {/* الجانب الأيسر: الصورة مع الحاوية الزجاجية */}
        <div className="left">
          <div className="img-frame">
            <Image
              src="/img.jpeg"
              alt="Coach Omnia Mohamed"
              width={390}
              height={480}
              priority
            />
          </div>
        </div>

        {/* الجانب الأيمن: النصوص بتصميم الـ Typo المطور */}
        <div className="right">
          <span className="welcome-tag">{t("welcome")}</span>
          <h1 className="hero-title">
            {t("title1")} <br />
            <span>{t("title2")}</span>
          </h1>
          
          <div className="status-container">
            <span className="pulse-dot"></span>
            <h2>{t("badge")}</h2>
          </div>

          <p className="hero-description">
            {t("description")}
          </p>

          {/* أيقونات السوشيال ميديا بتأثيرات التحويم الجديدة */}
          <div className="socials">
            <a href="https://www.facebook.com/share/1HQfFbb6XB/?mibextid=wwXIfr" target="_blank" rel="noreferrer" className="fb" aria-label="Facebook">
              <FaFacebookF />
            </a>

            <a href="https://www.instagram.com/omniamohameed__?igsh=cWZ4NXd0MmJwcDF3&utm_source=qr" target="_blank" rel="noreferrer" className="ig" aria-label="Instagram">
              <FaInstagram />
            </a>

            <a href="https://youtube.com/@omniamohamed4268?si=OVVjepIndaLbwdO6" target="_blank" rel="noreferrer" className="yt" aria-label="YouTube">
              <FaYoutube />
            </a>

            <a href="https://www.tiktok.com/@omniamohamed8?_r=1&_t=ZS-96YyouH7X4p" target="_blank" rel="noreferrer" className="tk" aria-label="TikTok">
              <FaTiktok />
            </a>
          </div>
        </div>
        
      </div>
    </StyledWrapper>
  );
}

// --- Keyframes Animations ---

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const pulse = keyframes`
  0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7); }
  70% { transform: scale(1); box-shadow: 0 0 0 10px rgba(34, 197, 94, 0); }
  100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(34, 197, 94, 0); }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-10px) rotate(1deg); }
`;

const glowSpread = keyframes`
  0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.3; }
  50% { transform: translate(-2%, 2%) scale(1.1); opacity: 0.5; }
`;


const StyledWrapper = styled.section`
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  background: transparent; /* لكي تظهر جزيئات الـ Particles في الخلفية */
  display: flex;
  align-items: center;
  padding: 120px 20px 60px;
  font-family: var(--font-cairo), sans-serif;

  .bg-glow {
    position: absolute;
    top: 10%;
    right: 5%;
    width: 600px;
    height: 600px;
    background: radial-gradient(circle, rgba(99, 102, 241, 0.1) 0%, transparent 70%);
    filter: blur(60px); /* Reduced blur for better performance */
    z-index: 1;
    animation: ${glowSpread} 15s infinite ease-in-out; /* Slower animation for performance */
    pointer-events: none;
    will-change: transform, opacity; /* Hinting browser to optimize */
  }

  .container {
    position: relative;
    z-index: 2;
    max-width: 1200px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 80px;
    flex-wrap: wrap;
  }

  /* --- الجانب الأيسر: إطار الصورة الرياضي --- */
  .left {
    flex: 1;
    display: flex;
    justify-content: center;
    animation: ${fadeInUp} 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  }

  .img-frame {
    position: relative;
    animation: ${float} 6s infinite ease-in-out;
  }

  /* تأثير خلفية هندسية خلف الصورة */
  .img-frame::before {
    content: '';
    position: absolute;
    inset: -10px;
    border: 2px solid rgba(129, 140, 248, 0.3);
    border-radius: 40px 10px 40px 10px;
    z-index: -1;
    transform: rotate(-3deg);
    transition: transform 0.4s ease;
  }

  .left img {
    width: 390px;
    height: 480px;
    object-fit: cover;
    border-radius: 40px 10px 40px 10px; /* زوايا رياضية حادة ومودرن */
    border: 3px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3); /* Reduced shadow intensity */
    transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .img-frame:hover img {
    transform: scale(1.03);
    border-color: #818cf8;
    box-shadow: 0 30px 50px rgba(129, 140, 248, 0.2);
  }

  .img-frame:hover::before {
    transform: rotate(0deg) scale(1.02);
  }

  /* --- الجانب الأيمن: التيبوغرافي الفاخر --- */
  .right {
    flex: 1.2;
    color: white;
    /* text-align will adapt naturally or stay right based on text direction */
  }

  .welcome-tag {
    display: inline-block;
    background: rgba(129, 140, 248, 0.1);
    border: 1px solid rgba(129, 140, 248, 0.3);
    padding: 6px 16px;
    border-radius: 100px;
    color: #a5b4fc;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 1px;
    margin-bottom: 20px;
    opacity: 0;
    animation: ${fadeInUp} 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards;
  }

  .hero-title {
    font-size: 70px;
    font-weight: 900;
    line-height: 1.05;
    margin-bottom: 20px;
    text-transform: uppercase;
    opacity: 0;
    animation: ${fadeInUp} 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.4s forwards;
  }

  /* تلوين الكلمة الثانية بالتدرج اللوني */
  .hero-title span {
    background: linear-gradient(135deg, #6366f1 0%, #38bdf8 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  /* شريط الحالة والنبض الحي */
  .status-container {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 20px;
    opacity: 0;
    animation: ${fadeInUp} 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.5s forwards;
  }

  .pulse-dot {
    width: 8px;
    height: 8px;
    background-color: #22c55e;
    border-radius: 50%;
    display: inline-block;
    animation: ${pulse} 2s infinite;
  }

  .right h2 {
    font-size: 26px;
    font-weight: 600;
    color: #e2e8f0;
  }

  .hero-description {
    font-size: 18px;
    color: #94a3b8;
    line-height: 1.7;
    margin-bottom: 35px;
    max-width: 540px;
    opacity: 0;
    animation: ${fadeInUp} 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.6s forwards;
  }

  /* --- أزرار التواصل والسوشيال ميديا المبتكرة --- */
  .socials {
    display: flex;
    gap: 16px;
    opacity: 0;
    animation: ${fadeInUp} 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.7s forwards;
  }

  .socials a {
    width: 50px;
    height: 50px;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(8px);
    border-radius: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #94a3b8;
    font-size: 20px;
    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    text-decoration: none;
  }

  /* تأثيرات ألوان مخصصة لكل شبكة عند التحويم تفاعلياً */
  .socials a:hover {
    transform: translateY(-8px);
    border-color: rgba(255, 255, 255, 0.2);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  }

  .socials .fb:hover { color: #1877f2; background: rgba(24, 119, 242, 0.1); }
  .socials .ig:hover { color: #e1306c; background: rgba(225, 48, 108, 0.1); }
  .socials .yt:hover { color: #ff0000; background: rgba(255, 0, 0, 0.1); }
  .socials .tk:hover { color: #00f2fe; background: rgba(0, 242, 254, 0.1); }

  /* --- التجاوب مع الشاشات (Responsive) --- */
  @media (max-width: 992px) {
    padding: 140px 24px 60px;
    
    .container {
      flex-direction: column-reverse; /* تظهر الصورة فوق النصوص في الموبايل */
      text-align: center;
      gap: 50px;
    }

    .right {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }

    .status-container { justify-content: center; }
    .hero-title { font-size: 52px; }
    .left img { width: 320px; height: 400px; }
  }

  @media (max-width: 576px) {
    .hero-title { font-size: 42px; }
    .right h2 { font-size: 22px; }
    .left img { width: 270px; height: 340px; }
  }
`;