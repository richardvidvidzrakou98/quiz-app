import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../context/ThemeContext';

const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 1.5rem;

  &:focus {
    outline: none;
  }

  svg {
    fill: ${({ theme }) => theme.color};
  }
`;

const ThemeToggleButton: React.FC = () => {
  const { toggleTheme } = useTheme();

  return (
    <Button onClick={toggleTheme}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M12 3a9 9 0 000 18 9 9 0 100-18zm0 16a7 7 0 110-14 7 7 0 010 14z" />
      </svg>
    </Button>
  );
};

export default ThemeToggleButton;
