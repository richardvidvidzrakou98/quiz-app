import React from 'react';
import styled from 'styled-components';

interface SubjectCardProps {
  icon: string;
  title: string;
  onClick: () => void;
  color: string;
}

const Card = styled.div`
  height: 4.6rem;
  display: flex;
  align-items: center;
  padding: 1rem;
  margin: 0.5rem 0;
  border-radius: 15px;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.2s;
  &:hover {
    transform: translateY(-3px);
  }

  img {
    margin-right: 1rem;
  }
`;
const imgContainer = styled.div``;

const SubjectCard: React.FC<SubjectCardProps> = ({
  icon,
  title,
  onClick,
  color,
}) => {
  return (
    <Card onClick={onClick}>
      <img src={icon} alt={`${title}`} width="24" height="24" />
      <h3>{title}</h3>
    </Card>
  );
};

export default SubjectCard;
