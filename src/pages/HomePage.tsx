import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import htmlIcon from '../assets/images/html_icon-removebg-preview.png';
import cssIcon from '../assets/images/css_icon.png';
import jsIcon from '../assets/images/js_icon.png';
import accessibilityIcon from '../assets/images/accessibility_icon.png';
import SubjectCard from '../components/SubjectCard';
import ThemeToggleButton from '../components/ThemeToggleButton'; // Assuming you have a theme toggle button component

const Container = styled.div`
  //height: 100%;
  min-height: 100vh;
  background-color: #f0f4f8;
  padding: 9rem;
  //position: relative;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    padding: 4rem;
  }
`;

const HomeContentContainer = styled.div`
  background-color: #f0f4f8;
  width: 100%;
  padding-top: 5%;
  display: flex;
  flex-direction: row;
  gab: 1rem;
  align-items: center;
  justify-content: center;
`;

const TitleContainer = styled.div`
  height: 30vh;
  text-align: center;
  margin-bottom: 5rem;
  margin-left: -5%;
  width: 30vw;
  margin-top: 1rem;
  color: white;
  position: relative;
  bottom: 6rem;
  @media (min-width: 810px) {
    text-align: left;
    margin-bottom: 0;
  }
`;

const Title = styled.div`
  font-size: 2rem;
  color: #333;
  margin: 0;

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

const TitleBold = styled.div`
  font-size: 3rem;
  font-weight: 700;
  color: #333;
`;

const Subtitle = styled.i`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 20%;
  text-align: center;
  position: relative;
  top: 30%;

  @media (min-width: 768px) {
    text-align: left;
    margin-bottom: 3rem;
  }
`;

const SubjectList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  width: 50vw;
  margin-left: 16%;

  @media (min-width: 768px) {
    max-width: 400px;
  }
`;

const ToggleContainer = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
`;

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const handleSubjectClick = (subject: string) => {
    navigate(`/quiz/${subject}`);
  };

  return (
    <Container>
      <HomeContentContainer>
        <ToggleContainer>
          <ThemeToggleButton />
        </ToggleContainer>
        <TitleContainer>
          <Title>Welcome to the </Title>
          <TitleBold>Frontend Quiz!</TitleBold>
          <Subtitle>Pick a subject to get started.</Subtitle>
        </TitleContainer>
        <SubjectList>
          <SubjectCard
            icon={htmlIcon}
            title="HTML"
            onClick={() => handleSubjectClick('HTML')}
            color="red"
          />
          <SubjectCard
            icon={cssIcon}
            title="CSS"
            onClick={() => handleSubjectClick('CSS')}
            color="blue"
          />
          <SubjectCard
            icon={jsIcon}
            title="JavaScript"
            onClick={() => handleSubjectClick('JavaScript')}
            color="green"
          />
          <SubjectCard
            icon={accessibilityIcon}
            title="Accessibility"
            onClick={() => handleSubjectClick('Accessibility')}
            color="orange"
          />
        </SubjectList>
      </HomeContentContainer>
    </Container>
  );
};

export default HomePage;
