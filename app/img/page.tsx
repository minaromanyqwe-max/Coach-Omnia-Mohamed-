"use client";

import React from "react";
import styled from "styled-components";
import Link from "next/link";

const reviews = [
  {
    name: "ياسمينة",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300&auto=format&fit=crop",
    text: "بجد أول مرة أوصل للشكل ده وأكون راضية عن نفسي بالطريقة دي 😭❤️ المقاسات فرقت جدًا والطاقة بتاعتي بقت أحسن.",
    tag: "خسّت 9 كيلو",
  },
  {
    name: "أمنية",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=300&auto=format&fit=crop",
    text: "كل الناس لاحظت الفرق وبقيت أحب الصور جدًا بعد ما كنت بهرب منها 😭🔥",
    tag: "نتيجة خلال شهرين",
  },
  {
    name: "سارة",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=300&auto=format&fit=crop",
    text: "التمرينات مختلفة جدًا وحسيت لأول مرة إني بلعب صح فعلًا 💪",
    tag: "تضخيم عضلي",
  },
];

export default function CustomerReviews() {
  return (
    <Section id="reviews">
      <Container>
        <TopContent>
          <MiniBadge>🔥 نتائج حقيقية</MiniBadge>

          <Title>
            آراء العملاء <span>بعد التحول</span>
          </Title>

          <SubTitle>
            ناس بدأت من الصفر ووصلت لنتائج قوية بخطة تدريب وأكل مناسبة ليهم.
          </SubTitle>
        </TopContent>

        <CardsGrid>
          {reviews.map((review, index) => (
            <ReviewCard key={index}>
              <Glow />

              <UserRow>
                <Avatar src={review.image} alt={review.name} />

                <UserInfo>
                  <h3>{review.name}</h3>
                  <span>{review.tag}</span>
                </UserInfo>
              </UserRow>

              <ReviewText>
                “ {review.text} ”
              </ReviewText>

              <Stars>★★★★★</Stars>
            </ReviewCard>
          ))}
        </CardsGrid>

        <StatsWrapper>
          <StatCard>
            <h2>+500</h2>
            <p>عميل حقق نتائج</p>
          </StatCard>

          <StatCard>
            <h2>98%</h2>
            <p>رضا العملاء</p>
          </StatCard>

          <StatCard>
            <h2>+1200</h2>
            <p>كيلو تم خسارته</p>
          </StatCard>
        </StatsWrapper>

<CTAButton as={Link} href={{ pathname: '/checkout', query: { id: '67464019af1e4e9766624e75' } }}>
ابدا رحلة الان
</CTAButton>

        <Terms>
          ⚠️ لا يوجد استرداد بعد 24 ساعة من الدفع
        </Terms>
      </Container>
    </Section>
  );
}

const Section = styled.section`
  min-height: 100vh;
  padding: 80px 20px;
  background: #0F172A;
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: "Cairo", sans-serif;
  direction: rtl;

  @media (max-width: 600px) {
    padding: 40px 16px;
  }
`;

const Container = styled.div`
  width: 100%;
  max-width: 1180px;
`;

const TopContent = styled.div`
  text-align: center;
  margin-bottom: 60px;
`;

const MiniBadge = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  padding: 8px 18px;
  border-radius: 999px;

  background: rgba(255,255,255,.05);
  border: 1px solid rgba(255,255,255,.08);

  color: #f8fafc;
  font-size: 13px;
  font-weight: 700;

  margin-bottom: 22px;
`;

const Title = styled.h1`
  color: white;
  font-size: 54px;
  font-weight: 900;
  margin: 0;

  span {
    background: linear-gradient(135deg,#60a5fa,#a855f7);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media(max-width:768px){
    font-size: 32px;
  }

  @media(max-width:480px){
    font-size: 26px;
  }
`;

const SubTitle = styled.p`
  color: #94a3b8;
  font-size: 16px;
  max-width: 650px;
  margin: 18px auto 0;
  line-height: 1.8;
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(300px,1fr));
  gap: 24px;

  @media(max-width:480px){
    grid-template-columns: 1fr;
    gap: 18px;
  }
`;

const ReviewCard = styled.div`
  position: relative;

  background: rgba(255,255,255,.04);
  border: 1px solid rgba(255,255,255,.08);

  border-radius: 28px;

  padding: 26px;

  overflow: hidden;

  backdrop-filter: blur(10px);

  transition: .35s ease;

  &:hover{
    transform: translateY(-6px);
    border-color: rgba(96,165,250,.4);
  }
`;

const Glow = styled.div`
  position: absolute;
  width: 160px;
  height: 160px;

  background: rgba(96,165,250,.12);

  filter: blur(70px);

  top: -70px;
  left: -70px;
`;

const UserRow = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;

  margin-bottom: 20px;
`;

const Avatar = styled.img`
  width: 72px;
  height: 72px;

  border-radius: 22px;
  object-fit: cover;

  border: 2px solid rgba(255,255,255,.1);
`;

const UserInfo = styled.div`
  h3{
    color: white;
    margin: 0;
    font-size: 20px;
    font-weight: 800;
  }

  span{
    color: #60a5fa;
    font-size: 13px;
    font-weight: 700;
  }
`;

const ReviewText = styled.p`
  color: #dbe4ee;

  line-height: 2;
  font-size: 15px;

  margin: 0;
`;

const Stars = styled.div`
  margin-top: 20px;

  color: #facc15;

  font-size: 20px;
  letter-spacing: 4px;
`;

const StatsWrapper = styled.div`
  margin-top: 60px;

  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(220px,1fr));
  gap: 20px;
`;

const StatCard = styled.div`
  background: rgba(255,255,255,.04);

  border: 1px solid rgba(255,255,255,.06);

  border-radius: 24px;

  padding: 28px;
  text-align: center;

  h2{
    margin: 0;
    font-size: 42px;
    color: white;
    font-weight: 900;
  }

  p{
    margin-top: 10px;
    color: #94a3b8;
    font-size: 14px;
  }

  @media(max-width:480px){
    padding: 20px;

    h2{
      font-size: 32px;
    }

    p{
      font-size: 12px;
    }
  }
`;

const CTAButton = styled.button`
  margin: 50px auto 0;

  width: fit-content;

  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  outline: none;

  padding: 18px 34px;

  border-radius: 18px;

  background: linear-gradient(135deg,#2563eb,#7c3aed);

  color: white;

  font-size: 18px;
  font-weight: 800;

  cursor: pointer;

  transition: .3s ease;

  box-shadow: 0 15px 35px rgba(37,99,235,.35);

  &:hover{
    transform: translateY(-3px) scale(1.02);
  }
`;

const Terms = styled.p`
  text-align: center;

  color: #64748b;

  margin-top: 18px;

  font-size: 12px;
`;