import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import ThemeToggleButton from '../components/ThemeToggleButton';
import htmlIcon from '../assets/images/html_icon-removebg-preview.png';
import cssIcon from '../assets/images/css_icon.png';
import jsIcon from '../assets/images/js_icon.png';
import accessibilityIcon from '../assets/images/accessibility_icon.png';
import questionsData from '../data/QuizQuestions';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const Container = styled.div`
  min-height: 100vh;
  background-color: #f0f4f8;
  padding: 9rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    padding: 4rem;
  }
`;

const QuestionContentContainer = styled.div`
  background-color: #f0f4f8;
  width: 100%;
  padding-top: 5%;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
  justify-content: center;
`;

const QuestionContainer = styled.div`
  height: 10vh;
  text-align: center;
  margin-bottom: 5rem;
  margin-left: -5%;
  width: 30vw;
  margin-top: -110px;
  color: white;
  display: flex;
  position: relative;
  bottom: 6rem;

  @media (min-width: 810px) {
    text-align: left;
    margin-bottom: 0;
  }
`;

const QuestionTitle = styled.div`
  font-size: 1rem;
  color: #000;
  margin: 0;
`;

const AnswerList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  width: 50vw;
  margin-left: 16%;

  @media (min-width: 768px) {
    max-width: 400px;
  }
`;

const AnswerCard = styled.div<{ selected: boolean; correct?: boolean }>`
  background-color: ${(props) =>
    props.correct === true
      ? '#d1e7dd'
      : props.correct === false && props.selected
      ? '#f8d7da'
      : props.selected
      ? '#e7e7e7'
      : '#fff'};
  border: 1px solid
    ${(props) =>
      props.correct === true
        ? '#0f5132'
        : props.correct === false && props.selected
        ? '#f5c2c7'
        : '#ccc'};
  border-radius: 8px;
  margin-bottom: 14px;
  padding: 1rem;
  cursor: pointer;
  transition: background-color 0.3s, border-color 0.3s;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover {
    background-color: ${(props) =>
      props.correct === undefined ? '#d1e7dd' : ''};
  }
`;

const AnswerLabel = styled.span<{ correct?: boolean; selected?: boolean }>`
  background-color: ${(props) =>
    props.correct === true
      ? '#0f5132'
      : props.correct === false
      ? '#f5c2c7'
      : props.selected
      ? '#b0b0b0'
      : '#ccc'};
  color: #fff;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.5rem;
`;

const SubmitButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const ToggleContainer = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
`;

const subjectIcons: { [key: string]: string } = {
  HTML: htmlIcon,
  CSS: cssIcon,
  JavaScript: jsIcon,
  Accessibility: accessibilityIcon,
};

const subjectTitle: { [key: string]: string } = {
  HTML: 'HTML',
  CSS: 'CSS',
  JavaScript: 'JavaScript',
  Accessibility: 'Accessibility',
};

const subjectColor: { [key: string]: string } = {
  HTML: '#FF7E35',
  CSS: '#2FD887',
  JavaScript: '#306AFF',
  Accessibility: '#A729F5',
};

const isSubjectValid = (
  subject: string,
): subject is keyof typeof questionsData => {
  return subject in questionsData;
};

const QuestionsPage: React.FC = () => {
  const { subject } = useParams<{ subject?: string }>();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [correct, setCorrect] = useState<boolean | null>(null);
  const [error, setError] = useState<string | null>(null);

  if (!subject || !isSubjectValid(subject)) {
    return (
      <Container>
        <div>
          Invalid subject selected. Please go back and select a valid subject.
        </div>
      </Container>
    );
  }

  const questions = questionsData[subject] || [];
  const optionsLabels = ['A', 'B', 'C', 'D'];

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setError(null);
    setCorrect(null); // Reset the correct state when selecting a new option
  };

  const handleSubmit = () => {
    if (!selectedOption) {
      setError('Please select an answer.');
    } else {
      const currentQuestion = questions[currentQuestionIndex];
      const isCorrect = selectedOption === currentQuestion.correctAnswer;
      setCorrect(isCorrect);

      // Move to next question after a short delay, regardless of whether the answer is correct or not
      setTimeout(() => {
        if (currentQuestionIndex < questions.length - 1) {
          setCurrentQuestionIndex(currentQuestionIndex + 1);
          setSelectedOption(null);
          setCorrect(null);
        } else {
          console.log('Quiz completed');
          // Handle quiz completion (e.g., show results)
        }
      }, 2000); // Short delay to show the feedback
    }
  };

  return (
    <Container>
      <QuestionContentContainer>
        <ToggleContainer>
          <ThemeToggleButton />
        </ToggleContainer>
        <div>
          <QuestionContainer>
            {subjectIcons[subject] && (
              <img
                src={subjectIcons[subject]}
                height="24"
                alt={`${subject} icon`}
                style={{ marginRight: '1rem' }}
              />
            )}
            <div style={{ height: '30px', display: 'flex' }}>
              {subjectTitle[subject] && (
                <span
                  style={{
                    color: 'black',
                    fontWeight: 'bold',
                  }}
                >
                  {subjectTitle[subject]}
                </span>
              )}
            </div>
          </QuestionContainer>
          <QuestionTitle
            style={{
              marginLeft: '-20px',

              marginTop: '-17px',
              fontWeight: 'bold',
              fontSize: '24px',
            }}
          >
            {questions[currentQuestionIndex]?.question}
          </QuestionTitle>
        </div>

        <AnswerList>
          {questions[currentQuestionIndex]?.options.map(
            (option: string, index: number) => {
              const isSelected = selectedOption === option;
              const isCorrect =
                correct !== null &&
                option === questions[currentQuestionIndex].correctAnswer;
              const isWrong = correct === false && isSelected;

              return (
                <AnswerCard
                  key={option}
                  selected={isSelected}
                  correct={isCorrect || isWrong}
                  onClick={() => handleOptionClick(option)}
                >
                  <AnswerLabel
                    correct={isCorrect || isWrong}
                    selected={isSelected}
                  >
                    {optionsLabels[index]}
                  </AnswerLabel>
                  {option}
                  {correct !== null &&
                    (isCorrect ? (
                      <FaCheckCircle color="green" />
                    ) : (
                      isSelected && <FaTimesCircle color="red" />
                    ))}
                </AnswerCard>
              );
            },
          )}
          <SubmitButton
            onClick={handleSubmit}
            disabled={selectedOption === null || correct !== null}
            style={{ backgroundColor: subjectColor[subject] }}
          >
            Submit Answer
          </SubmitButton>
          {error && <div style={{ color: 'red' }}>{error}</div>}
        </AnswerList>
      </QuestionContentContainer>
    </Container>
  );
};

export default QuestionsPage;
