"use client";

import React from "react";
import styled from "styled-components";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";

export default function Footer() {
  return (
    <StyledFooter>
      <div className="footer-divider" />
      <div className="container">
        
        {/* اسم الكوتش واللقب */}
        <h2 className="brand-title">Omnia Mohamed</h2>
        <p className="brand-subtitle">Certified Online Fitness Coach</p>

        {/* أيقونات التواصل الاجتماعي المطورة */}
        <div className="socials">
          <a 
            href="https://www.facebook.com/share/1HQfFbb6XB/?mibextid=wwXIfr" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-icon facebook"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>

          <a 
            href="https://www.instagram.com/omniamohameed__?igsh=cWZ4NXd0MmJwcDF3&utm_source=qr" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-icon instagram"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>

          <a 
            href="https://youtube.com/@omniamohamed4268?si=OVVjepIndaLbwdO6" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-icon youtube"
            aria-label="YouTube"
          >
            <FaYoutube />
          </a>

          <a 
            href="https://www.tiktok.com/@omniamohamed8?_r=1&_t=ZS-96YyouH7X4p" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-icon tiktok"
            aria-label="TikTok"
          >
            <FaTiktok />
          </a>
        </div>

        {/* حقوق النشر */}
        <div className="copyright">
          <span>© 2026 Omnia Mohamed. All Rights Reserved.</span>
          <p className="made-with">صنع بكل حب لدعم بطلات الفريق ☕</p>
        </div>
      </div>
    </StyledFooter>
  );
}

// ==========================================
// التنسيقات الاحترافية (Styled Components)
// ==========================================
const StyledFooter = styled.footer`
  position: relative;
  background: linear-gradient(to top, rgba(10, 15, 30, 0.9), transparent);
  backdrop-filter: blur(12px);
  color: white;
  padding: 60px 20px 40px 20px;
  text-align: center;
  width: 100%;
  font-family: var(--font-cairo), sans-serif;

  /* خط فاصل علوي متدرج ومضيء مدمج */
  .footer-divider {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 85%;
    max-width: 1100px;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(56, 189, 248, 0.3), rgba(99, 102, 241, 0.3), transparent);
  }

  .container {
    max-width: 1100px;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  /* عنوان البراند المطور */
  .brand-title {
    font-size: 32px;
    font-weight: 900;
    margin: 0 0 6px 0;
    background: linear-gradient(135deg, #fff 30%, #94a3b8);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    letter-spacing: 1px;
  }

  .brand-subtitle {
    color: #38bdf8;
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin: 0 0 32px 0;
  }

  /* حاوية السوشيال ميديا */
  .socials {
    display: flex;
    justify-content: center;
    gap: 18px;
    margin-bottom: 35px;
  }

  /* الاستايل الأساسي الموحد للأيقونة الزجاجية */
  .social-icon {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.06);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #cbd5e1;
    font-size: 18px;
    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    text-decoration: none;
  }

  /* تأثيرات الـ Hover الذكية لكل منصة بلونها الأصلي */
  
  .social-icon.facebook:hover {
    background: #1877f2;
    color: white;
    border-color: #1877f2;
    box-shadow: 0 10px 25px rgba(24, 119, 242, 0.4);
    transform: translateY(-6px);
  }

  .social-icon.instagram:hover {
    background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
    color: white;
    border-color: #dc2743;
    box-shadow: 0 10px 25px rgba(220, 39, 67, 0.4);
    transform: translateY(-6px);
  }

  .social-icon.youtube:hover {
    background: #ff0000;
    color: white;
    border-color: #ff0000;
    box-shadow: 0 10px 25px rgba(255, 0, 0, 0.4);
    transform: translateY(-6px);
  }

  .social-icon.tiktok:hover {
    background: #000000;
    color: white;
    border-color: #00f2fe;
    box-shadow: 0 10px 25px rgba(0, 242, 254, 0.3);
    transform: translateY(-6px);
  }

  /* منطقة الحقوق السفلى */
  .copyright {
    display: flex;
    flex-direction: column;
    gap: 6px;
    border-top: 1px solid rgba(255, 255, 255, 0.04);
    padding-top: 24px;
    width: 100%;
  }

  .copyright span {
    font-size: 13px;
    color: #64748b;
    letter-spacing: 0.5px;
  }

  .made-with {
    font-size: 12px;
    color: #475569;
    margin: 0;
  }

  /* --- شاشات الموبايل المتجاوبة --- */
  @media (max-width: 576px) {
    padding: 45px 16px 30px 16px;

    .brand-title {
      font-size: 26px;
    }

    .brand-subtitle {
      font-size: 12px;
      letter-spacing: 1px;
      margin-bottom: 24px;
    }

    .social-icon {
      width: 44px;
      height: 44px;
      font-size: 16px;
    }

    .socials {
      gap: 12px;
      margin-bottom: 28px;
    }
  }
`;