import React from "react";
import styled from "styled-components";

// ==========================================
// 1. Egypt Card
// ==========================================
const EgyptCard = () => {
  return (
    <div className="card-container">
      <div className="title-card">
        <p>🔥 LIMITED OFFER</p>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={22}
          height={22}
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M12 2L15 9L22 9.5L17 14L18.5 21L12 17.5L5.5 21L7 14L2 9.5L9 9L12 2Z"
          />
        </svg>
      </div>

      <div className="card-content">
        <p className="title">Online Coaching</p>

        <div className="price-box">
          <h2>🔥 Discount + Free Month</h2>
          <p>Limited Time Offer in Egypt</p>
        </div>

        <button className="card-btn">
<a 
href="https://wa.me/201021996070?text=مرحباً"
  target="_blank" 
  rel="noopener noreferrer"
>
  Subscribe Now
</a>        </button>


        <div className="card-separate">
          <div className="separate" />
          <p>Plans</p>
          <div className="separate" />
        </div>

        <div className="card-list-features">
          <div className="option">
            <span>✅</span>
            <p>1 Month — 1499 EGP instead of 2000 EGP + Free Month 🎁</p>
          </div>

          <div className="option">
            <span>✅</span>
            <p>2 Months — 1999 EGP instead of 4800 EGP + Free Month 🎁</p>
          </div>

          <div className="option">
            <span>✅</span>
            <p>6 Months — 3999 EGP instead of 9600 EGP + Free Month 🎁</p>
          </div>

          <div className="option">
            <span>✅</span>
            <p>1 Year — 6999 EGP instead of 19200 EGP + Free Month 🔥</p>
          </div>
        </div>

        <div className="card-separate">
          <div className="separate" />
          <p>Features</p>
          <div className="separate" />
        </div>

        <div className="features-box">
          <p>💪 Personalized workout program</p>
          <p>🥗 Flexible diet plan without strict restrictions</p>
          <p>📅 Ability to pause your subscription for 30 days</p>
          <p>💳 Multiple payment & installment options</p>
          <p>⚡ Full support to achieve your best physique</p>
        </div>

        <div className="payment-box">
          <h4>📲 Payment Methods</h4>

          <div className="payments">
            <span>InstaPay</span>
            <span>Vodafone Cash</span>
            <span>Apple Pay</span>
            <span>Meeza</span>
            <span>ValU</span>
            <span>Fawry</span>
          </div>
        </div>

        <p className="footer-text">
          ⚠️ No refunds after 24 hours from payment
        </p>
      </div>
    </div>
  );
};

// ==========================================
// 2. International Card
// ==========================================
const InternationalCard = () => {
  return (
    <div className="card-container inter-card">
      <div className="title-card">
        <p>🔥 LIMITED OFFER</p>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={22}
          height={22}
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M12 2L15 9L22 9.5L17 14L18.5 21L12 17.5L5.5 21L7 14L2 9.5L9 9L12 2Z"
          />
        </svg>
      </div>

      <div className="card-content">
        <p className="title">Online Coaching</p>

        <div className="price-box">
          <h2>50% OFF 🔥</h2>
          <p>+ Free Month 🎁</p>
        </div>
        <button className="card-btn">
<a 
href="https://wa.me/201021996070?text=مرحباً"
  target="_blank" 
  rel="noopener noreferrer"
>
  Subscribe Now
</a>
        </button>

        <div className="card-separate">
          <div className="separate" />
          <p>Plans</p>
          <div className="separate" />
        </div>

        <div className="card-list-features">
          <div className="option">
            <span>✅</span>
            <p>1 Month — $100 instead of $200 + Free Month 🎁</p>
          </div>

          <div className="option">
            <span>✅</span>
            <p>2 Months — $200 instead of $400 + Free Month 🎁</p>
          </div>

          <div className="option">
            <span>✅</span>
            <p>6 Months — $400 instead of $800 + Free Month 🎁</p>
          </div>

          <div className="option">
            <span>✅</span>
            <p>1 Year — $750 instead of $1500 + Free Month 🔥</p>
          </div>
        </div>

        <div className="card-separate">
          <div className="separate" />
          <p>Features</p>
          <div className="separate" />
        </div>

        <div className="features-box">
          <p>💪 Personal coaching & follow-up</p>
          <p>🥗 Flexible nutrition plan</p>
          <p>📅 Pause your subscription for up to 30 days</p>
          <p>🏋️ Customized training program for your goals</p>
          <p>🔥 Achieve your best physique faster</p>
        </div>

        <div className="payment-box">
          <h4>💳 Payment Methods</h4>

          <div className="payments">
            <span>Apple Pay</span>
            <span>Visa</span>
            <span>InstaPay</span>
            <span>Vodafone Cash</span>
            <span>Western Union</span>
            <span>Bank Transfer</span>
          </div>
        </div>

        <p className="footer-text">
          ⚠️ No refunds after 24 hours from payment
        </p>
      </div>
    </div>
  );
};

// ==========================================
// 3. Main Component
// ==========================================
const CoachingCards = () => {
  return (
    <StyledWrapper id="pricing">
      <div className="cards-wrapper">
        <EgyptCard />
        <InternationalCard />
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: transparent;
  padding: 40px 20px;

  .cards-wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    justify-content: center;
    align-items: flex-start;
  }

  .card-container {
    width: 350px;
    background: linear-gradient(
      135deg,
      rgba(123, 47, 247, 0.8),
      rgba(47, 124, 248, 0.8) 45%,
      rgba(0, 198, 255, 0.8)
    );

    padding: 3px;
    border-radius: 32px;

    box-shadow:
      0 15px 40px rgba(0, 0, 0, 0.5),
      0 0 30px rgba(47, 124, 248, 0.3);

    transition:
      transform 0.4s ease,
      box-shadow 0.4s ease;
  }

  .card-container:hover {
    transform: translateY(-10px);

    box-shadow:
      0 20px 50px rgba(0, 0, 0, 0.6),
      0 0 50px rgba(0, 198, 255, 0.5);
  }

  .inter-card {
    width: 360px;
  }

  .title-card {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 20px;
    color: white;
    font-weight: bold;
    letter-spacing: 2px;
    text-transform: uppercase;
  }

  .title-card p {
    font-size: 15px;
  }

  .card-content {
    background: rgba(15, 17, 26, 0.95);
    backdrop-filter: blur(20px);
    border-radius: 28px;
    padding: 28px 24px;
    color: white;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .title {
    font-size: 26px;
    font-weight: bold;
    text-align: center;
  }

  .price-box {
    text-align: center;
  }

  .price-box h2 {
    color: #fff;
    font-size: 28px;
    margin-bottom: 8px;
  }

  .inter-card .price-box h2 {
    font-size: 34px;
    margin-bottom: 6px;
  }

  .price-box p {
    color: #9ca3af;
    font-size: 14px;
  }

  .card-btn {
    width: 100%;
    padding: 14px;
    border: none;
    border-radius: 14px;
    background: linear-gradient(135deg, #7b2ff7, #2f7cf8, #00c6ff);
    color: white;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    transition: 0.3s;
  }

  .card-btn:hover {
    transform: scale(1.03);
    box-shadow: 0 0 20px rgba(47, 124, 248, 0.5);
  }

  .card-separate {
    display: flex;
    align-items: center;
    gap: 10px;
    color: #8b8b8b;
    font-size: 12px;
  }

  .separate {
    flex: 1;
    height: 1px;
    background: #333;
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
    gap: 10px;
    background: rgba(255, 255, 255, 0.03);
    padding: 10px;
    border-radius: 12px;
  }

  .option p,
  .features-box p {
    font-size: 13px;
    line-height: 1.5;
  }

  .features-box p {
    background: rgba(255, 255, 255, 0.03);
    padding: 10px;
    border-radius: 12px;
  }

  .payment-box h4 {
    margin-bottom: 10px;
    font-size: 15px;
  }

  .payments {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  .payments span {
    background: rgba(255, 255, 255, 0.08);
    padding: 8px 12px;
    border-radius: 10px;
    font-size: 12px;
  }

  .footer-text {
    text-align: center;
    color: #9ca3af;
    font-size: 11px;
    margin-top: 10px;
  }

  @media (max-width: 600px) {
    padding: 30px 16px;

    .cards-wrapper {
      gap: 20px;
    }

    .card-container,
    .inter-card {
      width: 100%;
      max-width: 360px;
    }

    .title-card {
      padding: 12px 16px;
    }

    .title-card p {
      font-size: 13px;
    }

    .card-content {
      padding: 20px 16px;
      gap: 16px;
    }

    .title {
      font-size: 22px;
    }

    .price-box h2 {
      font-size: 24px;
    }

    .inter-card .price-box h2 {
      font-size: 28px;
    }

    .option p,
    .features-box p {
      font-size: 12px;
    }

    .payments span {
      font-size: 11px;
      padding: 6px 10px;
    }
  }

  @media (max-width: 380px) {
    .card-container,
    .inter-card {
      max-width: 100%;
    }

    .title {
      font-size: 20px;
    }

    .price-box h2 {
      font-size: 20px;
    }

    .inter-card .price-box h2 {
      font-size: 24px;
    }

    .card-btn {
      font-size: 14px;
      padding: 12px;
    }
  }
`;

export default CoachingCards;