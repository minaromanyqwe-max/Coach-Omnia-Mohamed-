import React from "react";
import styled from "styled-components";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";

export default function HeroSection() {
  return (
    <StyledWrapper>
      <div className="container">
        
        <div className="left">
          <img
            src="img.jpeg"
            alt="profile"
          />
        </div>

        <div className="right">
          <span>Hello I'm</span>

          <h1>
Omnia Mohamed
</h1>

          <h2>online coach</h2>



          <div className="socials">
            <a href="https://www.facebook.com/share/1HQfFbb6XB/?mibextid=wwXIfr">
              <FaFacebookF />
            </a>

            <a href="https://www.instagram.com/omniamohameed__?igsh=cWZ4NXd0MmJwcDF3&utm_source=qr">
              <FaInstagram />
            </a>

            <a href="https://youtube.com/@omniamohamed4268?si=OVVjepIndaLbwdO6">
              <FaYoutube />
            </a>

            <a href="https://www.tiktok.com/@omniamohamed8?_r=1&_t=ZS-96YyouH7X4p">
              <FaTiktok />
            </a>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.section`
  min-height: 100vh;
  background: transparent;
  display: flex;
  align-items: center;
  padding: 100px 20px 40px;
  font-family: 'Cairo', sans-serif;

  .container {
    max-width: 1200px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 60px;
    flex-wrap: wrap;
  }

  .left {
    flex: 1;
    display: flex;
    justify-content: center;
  }

  .left img {
    width: 380px;
    height: 380px;
    object-fit: cover;
    border-radius: 30px;
    border: 4px solid #38bdf8;
    box-shadow: 0 15px 40px rgba(56, 189, 248, 0.3);
    transition: 0.4s;
  }

  .left img:hover {
    transform: scale(1.03);
  }

  .right {
    flex: 1;
    color: white;
  }

  .right span {
    color: #38bdf8;
    font-size: 20px;
    font-weight: 600;
  }

  .right h1 {
    font-size: 65px;
    margin: 10px 0;
    line-height: 1.1;
  }

  .right h2 {
    font-size: 32px;
    color: #cbd5e1;
    margin-bottom: 20px;
  }

  .right p {
    font-size: 17px;
    color: #94a3b8;
    line-height: 1.8;
    max-width: 500px;
    margin-bottom: 30px;
  }

  .buttons {
    display: flex;
    gap: 15px;
    margin-bottom: 30px;
  }

  .buttons button {
    padding: 14px 28px;
    border: none;
    border-radius: 12px;
    font-size: 16px;
    cursor: pointer;
    transition: 0.3s;
    font-weight: bold;
  }

  .hire {
    background: #38bdf8;
    color: white;
  }

  .hire:hover {
    transform: translateY(-5px);
    background: #0ea5e9;
  }

  .work {
    background: transparent;
    border: 2px solid #38bdf8 !important;
    color: #38bdf8;
  }

  .work:hover {
    background: #38bdf8;
    color: white;
    transform: translateY(-5px);
  }

  .socials {
    display: flex;
    gap: 15px;
  }

  .socials a {
    width: 45px;
    height: 45px;
    background: #1e293b;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 18px;
    transition: 0.3s;
    text-decoration: none;
  }

  .socials a:hover {
    background: #38bdf8;
    transform: scale(1.1);
  }

  @media (max-width: 900px) {
    .container {
      flex-direction: column;
      text-align: center;
      gap: 30px;
    }

    .right p {
      margin: auto auto 30px;
    }

    .buttons,
    .socials {
      justify-content: center;
    }

    .right h1 {
      font-size: 45px;
    }

    .right h2 {
      font-size: 24px;
    }

    .left img {
      width: 280px;
      height: 280px;
    }
  }

  @media (max-width: 480px) {
    padding: 80px 16px 30px;

    .container {
      gap: 20px;
    }

    .right h1 {
      font-size: 32px;
    }

    .right h2 {
      font-size: 20px;
    }

    .right span {
      font-size: 16px;
    }

    .left img {
      width: 220px;
      height: 220px;
      border-radius: 24px;
    }

    .socials a {
      width: 40px;
      height: 40px;
      font-size: 16px;
    }
  }
`;