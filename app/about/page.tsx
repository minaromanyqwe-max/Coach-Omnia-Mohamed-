"use client";
import React from "react";
import styled from "styled-components";

const CoachFeatures = () => {
  return (
    <StyledWrapper id="features">
      <div className="features-container">
        {/* العنوان الرئيسي للسكشن */}
        <div className="features-header">
          <span className="subtitle">لماذا تشترك معي؟</span>
          <h2>🚀 نظام متكامل يقودك لنهائيات هدفك 🚀</h2>
        </div>

        {/* شبكة المزايا (Features Grid) */}
        <div className="features-grid">
          
          {/* الميزة الأولى: المتابعة من ألف للياء */}
          <div className="feature-card highlight">
            <div className="icon-wrapper">🎯</div>
            <div className="card-content">
              <h3>معاك من A to Z</h3>
              <p>
                بكون معاك خطوة بخطوة لحد ما توصل فعلاً لهدفك، واضمنلك نتيجة حقيقية بنسبة 100% لو التزمت بالخطة الحرفية المصممة ليك.
              </p>
            </div>
          </div>

          {/* الميزة الثانية: التطبيق التفاعلي الخاص */}
          <div className="feature-card app-feature">
            <div className="icon-wrapper">📱</div>
            <div className="card-content">
              <h3>تطبيق تفاعلي خاص وخاص جداً</h3>
              <p>
                بقدملك خدمة مش موجودة عند أي حد! متابعتك بالكامل هتكون على <strong>أبليكشن تفاعلي خاص بيا</strong>، مخصص فقط بيني وبين العملاء بتوعي لمتابعة تطورك اليومي بدقة وسهولة.
              </p>
            </div>
          </div>

          {/* الميزة الثالثة: المجتمع الخاص */}
          <div className="feature-card">
            <div className="icon-wrapper">👥</div>
            <div className="card-content">
              <h3>Community ودعم يومي</h3>
              <p>
                لينا <strong>Community خاص بينا</strong> على الأبليكشن، وبكون متواجد معاك بشكل يومي للإجابة على كل أسئلتك وتشجيعك المستمر.
              </p>
            </div>
          </div>

          {/* الميزة الرابعة: أسلوب الحياة المرن */}
          <div className="feature-card">
            <div className="icon-wrapper">🥑</div>
            <div className="card-content">
              <h3>أسلوب حياة بدون حرمان</h3>
              <p>
                بعلمك ازاي تعيش وتأكل بشكل صحي وبدون أي حرمان، هدفنا إن النظام يكون <strong>إسلوب حياة مستدام</strong> تعيش بيه علطول، مش مجرد تمرين يومين وخلاص!
              </p>
            </div>
          </div>

        </div>
      </div>
    </StyledWrapper>
  );
};

// ==========================================
// التنسيقات الاحترافية (Styled Components)
// ==========================================
const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent; /* لكي يندمج بسهولة في أي مكان بموقعك */
  padding: 20px;
  font-family: 'Cairo', sans-serif;
  direction: rtl;
  width: 100%;

  .features-container {
    width: 100%;
    max-width: 600px; /* متناسق مع كارت البروفايل */
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  /* الهيدر والعناوين */
  .features-header {
    text-align: center;
    margin-bottom: 8px;
  }

  .features-header .subtitle {
    color: #00c6ff;
    font-size: 14px;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 2px;
    background: rgba(0, 198, 255, 0.15);
    border: 1px solid rgba(0, 198, 255, 0.3);
    padding: 6px 16px;
    border-radius: 20px;
    display: inline-block;
    margin-bottom: 14px;
    box-shadow: 0 0 15px rgba(0, 198, 255, 0.2);
  }

  .features-header h2 {
    color: #fff;
    font-size: 24px;
    font-weight: 900;
    line-height: 1.5;
    margin: 0;
    text-shadow: 0 4px 15px rgba(0,0,0,0.5);
  }

  /* شبكة الكروت الكبيرة والذكية */
  .features-grid {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  /* ستايل الكارت الموحد */
  .feature-card {
    background: rgba(22, 26, 38, 0.5);
    backdrop-filter: blur(15px);
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 24px;
    padding: 20px;
    display: flex;
    gap: 18px;
    align-items: flex-start;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    transition: transform 0.4s ease, box-shadow 0.4s ease, border-color 0.4s ease;
  }

  .feature-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.5), inset 0 0 20px rgba(255, 255, 255, 0.05);
    border-color: rgba(255, 255, 255, 0.2);
  }

  /* تمييز كارت الـ A to Z باللون الذهبي */
  .feature-card.highlight {
    border-right: 4px solid #f1c40f;
    background: rgba(241, 196, 15, 0.05);
    box-shadow: 0 10px 30px rgba(241, 196, 15, 0.1);
  }
  
  .feature-card.highlight:hover {
    border-color: #f1c40f;
    box-shadow: 0 15px 40px rgba(241, 196, 15, 0.2);
  }
  
  /* تمييز كارت الأبليكشن الخاص باللون المضيء */
  .feature-card.app-feature {
    border-right: 4px solid #00c6ff;
    background: rgba(0, 198, 255, 0.05);
    box-shadow: 0 10px 30px rgba(0, 198, 255, 0.1);
  }

  .feature-card.app-feature:hover {
    border-color: #00c6ff;
    box-shadow: 0 15px 40px rgba(0, 198, 255, 0.2);
  }

  /* ستايل الأيقونات */
  .icon-wrapper {
    font-size: 28px;
    background: rgba(255, 255, 255, 0.05);
    padding: 12px;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    box-shadow: inset 0 0 15px rgba(255,255,255,0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  /* نصوص المحتوى داخلياً */
  .card-content {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .card-content h3 {
    color: #ffffff;
    font-size: 16px;
    font-weight: 700;
    margin: 0;
  }

  .feature-card.highlight .card-content h3 {
    color: #f1c40f; /* لون ذهبي للعنوان المميّز */
  }

  .feature-card.app-feature .card-content h3 {
    color: #00c6ff; /* لون نيون للعنوان المميّز */
  }

  .card-content p {
    color: #94a3b8;
    font-size: 13px;
    line-height: 1.6;
    margin: 0;
    font-weight: 500;
    text-align: justify;
  }

  .card-content strong {
    color: #fff;
    font-weight: 700;
  }

  @media (max-width: 600px) {
    padding: 16px;

    .features-container {
      max-width: 100%;
      gap: 24px;
    }

    .features-header h2 {
      font-size: 18px;
    }

    .features-header .subtitle {
      font-size: 12px;
      padding: 5px 12px;
    }

    .feature-card {
      padding: 16px;
      gap: 14px;
      border-radius: 20px;
    }

    .icon-wrapper {
      font-size: 22px;
      padding: 10px;
      border-radius: 12px;
    }

    .card-content h3 {
      font-size: 14px;
    }

    .card-content p {
      font-size: 12px;
    }
  }

  @media (max-width: 380px) {
    .feature-card {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }

    .card-content p {
      text-align: center;
    }
  }
`;

export default CoachFeatures;