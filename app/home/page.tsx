import React from "react";
import styled from "styled-components";

const CoachProfile = () => {
  return (
    <StyledWrapper id="about">
      <div className="profile-container">
        
        {/* الكارت العلوي: الصورة الشخصية والاسم والخبرة */}
        <div className="profile-card">
          <div className="avatar-section">
            <img 
src="img.jpeg"
alt="Coach Omnia Mohamed" 
              className="coach-avatar"
            />
            <div className="experience-badge">🔥 7+ سنوات خبرة</div>
          </div>
          
          <div className="info-section">
            <span className="title">المدربة الشخصية</span>
            <h2>أمنية محمد</h2>
            <p className="bio-text">
              متخصصة في تغيير وتطوير الأجسام، وتصميم الأنظمة التدريبية والغذائية الاحترافية. على مدار 7 سنوات في مجال التدريب، ساعدت مئات السيدات في تحقيق تحولات جسدية حقيقية واستعادة ثقتهن بأنفسهن من خلال أنظمة مخصصة ومبنية على أسس علمية.
            </p>
          </div>
        </div>

        {/* سكشن الشهادات والاعتمادات الدولية */}
        <div className="credentials-section">
          <h3>الاعتمادات والشهادات الدولية 📜</h3>
          <div className="credentials-grid">
            
            {/* الشهادة الأولى: ISSA */}
            <div className="credential-item">
              <div className="badge-icon gold">ISSA</div>
              <div className="credential-info">
                <h4>International Sports Sciences Association</h4>
                <p>شهادة الاعتماد الدولية في التدريب الشخصي والعلوم الرياضية.</p>
              </div>
            </div>

            {/* الشهادة الثانية: IASST */}
            <div className="credential-item">
              <div className="badge-icon purple">IASST</div>
              <div className="credential-info">
                <h4>International Association for Sports Science & Training</h4>
                <p>الجمعية الدولية لعلوم الرياضة والتدريب البدني المتقدم.</p>
              </div>
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
  background: transparent;
  padding: 20px;
  font-family: 'Cairo', sans-serif;
  direction: rtl;
  width: 100%;

  .profile-container {
    width: 100%;
    max-width: 600px; /* جعلناه أوسع قليلاً ليكون أفخم */
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin-top: 80px; /* لترك مساحة للـ Navbar */
  }

  /* كارت الملف الشخصي الرئيسي */
  .profile-card {
    background: rgba(22, 26, 38, 0.6);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(0, 198, 255, 0.2);
    border-radius: 32px;
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 24px;
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5), inset 0 0 20px rgba(0, 198, 255, 0.05);
    transition: transform 0.4s ease, box-shadow 0.4s ease;
  }

  .profile-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 25px 60px rgba(0, 0, 0, 0.6), inset 0 0 30px rgba(0, 198, 255, 0.1);
    border-color: rgba(0, 198, 255, 0.4);
  }

  @media (min-width: 450px) {
    .profile-card {
      flex-direction: row;
      text-align: right;
      align-items: center;
    }
  }

  .avatar-section {
    position: relative;
    flex-shrink: 0;
  }

  .coach-avatar {
    width: 130px;
    height: 130px;
    border-radius: 50%;
    object-fit: cover;
    border: 4px solid #00c6ff;
    padding: 4px;
    background: linear-gradient(135deg, #00c6ff, #7b2ff7);
    box-shadow: 0 0 30px rgba(0, 198, 255, 0.4);
  }

  .experience-badge {
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    background: #e67e22;
    color: #fff;
    font-size: 11px;
    font-weight: 700;
    padding: 4px 10px;
    border-radius: 12px;
    white-space: nowrap;
    box-shadow: 0 4px 10px rgba(0,0,0,0.3);
  }

  .info-section {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .info-section .title {
    color: #00c6ff;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 0.5px;
  }

  .info-section h2 {
    color: #ffffff;
    font-size: 24px;
    font-weight: 800;
    margin: 0;
  }

  .info-section .bio-text {
    color: #94a3b8;
    font-size: 13px;
    line-height: 1.6;
    margin: 6px 0 0 0;
    font-weight: 500;
  }

  /* سكشن الشهادات والاعتمادات */
  .credentials-section {
    background: rgba(15, 17, 26, 0.7);
    border: 1px solid rgba(123, 47, 247, 0.2);
    border-radius: 28px;
    padding: 24px;
    backdrop-filter: blur(15px);
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4);
  }

  .credentials-section h3 {
    color: #ffffff;
    font-size: 16px;
    font-weight: 700;
    margin: 0 0 16px 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    padding-bottom: 10px;
  }

  .credentials-grid {
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  .credential-item {
    display: flex;
    align-items: center;
    gap: 14px;
    background: rgba(255, 255, 255, 0.02);
    padding: 12px;
    border-radius: 16px;
    border: 1px solid rgba(255, 255, 255, 0.02);
  }

  /* الشعارات الرقمية بديلة الصور */
  .badge-icon {
    width: 55px;
    height: 55px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 900;
    letter-spacing: 0.5px;
    flex-shrink: 0;
    box-shadow: 0 4px 15px rgba(0,0,0,0.2);
  }

  .badge-icon.gold {
    background: linear-gradient(135deg, #f1c40f, #b78a37);
    color: #111;
  }

  .badge-icon.purple {
    background: linear-gradient(135deg, #8e44ad, #2c3e50);
    color: #fff;
    border: 1px solid rgba(255,255,255,0.1);
  }

  .credential-info {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .credential-info h4 {
    color: #ffffff;
    font-size: 13px;
    font-weight: 700;
    margin: 0;
  }

  .credential-info p {
    color: #64748b;
    font-size: 11px;
    margin: 0;
    font-weight: 500;
    line-height: 1.4;
  }

  @media (max-width: 600px) {
    padding: 16px;

    .profile-container {
      max-width: 100%;
      margin-top: 40px;
      gap: 18px;
    }

    .profile-card {
      padding: 20px;
      border-radius: 24px;
      flex-direction: column;
      text-align: center;
      align-items: center;
    }

    .coach-avatar {
      width: 100px;
      height: 100px;
    }

    .info-section h2 {
      font-size: 20px;
    }

    .info-section .bio-text {
      font-size: 12px;
    }

    .credentials-section {
      padding: 16px;
      border-radius: 20px;
    }

    .credentials-section h3 {
      font-size: 14px;
    }

    .credential-item {
      padding: 10px;
      gap: 10px;
    }

    .badge-icon {
      width: 45px;
      height: 45px;
      font-size: 12px;
    }

    .credential-info h4 {
      font-size: 12px;
    }

    .credential-info p {
      font-size: 10px;
    }
  }

  @media (max-width: 380px) {
    .profile-container {
      margin-top: 30px;
    }

    .coach-avatar {
      width: 85px;
      height: 85px;
    }

    .info-section h2 {
      font-size: 18px;
    }

    .experience-badge {
      font-size: 10px;
      padding: 3px 8px;
    }
  }
`;

export default CoachProfile;