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
      <div className="container">
        <h2>Omnia Mohamed</h2>

        <p>online coach</p>

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

        <span>© 2026 All Rights Reserved</span>
      </div>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  background: #0f172a;
  color: white;
  padding: 40px 20px;
  text-align: center;
  margin-top: 50px;

  .container {
    max-width: 1000px;
    margin: auto;
  }

  h2 {
    font-size: 30px;
    margin-bottom: 12px;
    color: #38bdf8;
  }

  p {
    color: #cbd5e1;
    font-size: 15px;
    margin-bottom: 25px;
    line-height: 1.7;
  }

  .socials {
    display: flex;
    justify-content: center;
    gap: 16px;
    margin-bottom: 25px;
  }

  .socials a {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    background: #1e293b;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 18px;
    transition: 0.3s;
    text-decoration: none;
  }

  .socials a:hover {
    background: #38bdf8;
    transform: translateY(-5px);
  }

  span {
    font-size: 14px;
    color: #94a3b8;
  }
`;