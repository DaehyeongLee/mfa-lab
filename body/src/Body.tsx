import React from 'react';
import styled from 'styled-components';

const Main = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 6rem 2rem 2rem;
`;

const Hero = styled.section`
  text-align: center;
  margin-bottom: 4rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #2d3436;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #0984e3, #00cec9);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #636e72;
  max-width: 600px;
  margin: 0 auto;
`;

const TechGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 4rem;
`;

const TechCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  }
`;

const TechTitle = styled.h3`
  color: #2d3436;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const TechDescription = styled.p`
  color: #636e72;
  line-height: 1.6;
`;

const techStack = [
  {
    title: 'React 18',
    description: '최신 React 기능과 동시성 렌더링을 활용한 고성능 UI 개발',
    icon: '⚛️'
  },
  {
    title: 'TypeScript',
    description: '타입 안정성을 통한 더 안전하고 유지보수하기 쉬운 코드',
    icon: '📘'
  },
  {
    title: 'Styled Components',
    description: 'CSS-in-JS를 활용한 모던하고 재사용 가능한 스타일링',
    icon: '🎨'
  },
  {
    title: 'Micro Frontend',
    description: 'single-spa를 활용한 확장 가능한 마이크로 프론트엔드 아키텍처',
    icon: '🧩'
  }
];

const Body: React.FC = () => {
  return (
    <Main>
      <Hero>
        <Title>Frontend Development</Title>
        <Subtitle>
          모던 웹 개발의 최신 트렌드와 기술을 활용하여
          사용자 경험을 향상시키는 프론트엔드 개발
        </Subtitle>
      </Hero>
      
      <TechGrid>
        {techStack.map((tech, index) => (
          <TechCard key={index}>
            <TechTitle>
              {tech.icon} {tech.title}
            </TechTitle>
            <TechDescription>{tech.description}</TechDescription>
          </TechCard>
        ))}
      </TechGrid>
    </Main>
  );
};

export default Body; 