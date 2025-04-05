import React, { useState } from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 1rem 2rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: #2d3436;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #0984e3;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
`;

const NavLink = styled.a<{ active: boolean }>`
  color: ${props => props.active ? '#0984e3' : '#2d3436'};
  text-decoration: none;
  font-weight: 500;
  position: relative;
  padding: 0.5rem 0;
  transition: color 0.3s ease;

  &:hover {
    color: #0984e3;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: ${props => props.active ? '100%' : '0'};
    height: 2px;
    background-color: #0984e3;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

const GNB: React.FC = () => {
  const [activeLink, setActiveLink] = useState('tech-stack');

  return (
    <Nav>
      <NavContainer>
        <Logo>Portfolio</Logo>
        <NavLinks>
          <NavLink 
            href="#tech-stack" 
            active={activeLink === 'tech-stack'}
            onClick={() => setActiveLink('tech-stack')}
          >
            Tech Stack
          </NavLink>
          <NavLink 
            href="#project" 
            active={activeLink === 'project'}
            onClick={() => setActiveLink('project')}
          >
            Project
          </NavLink>
          <NavLink 
            href="#about" 
            active={activeLink === 'about'}
            onClick={() => setActiveLink('about')}
          >
            About Me
          </NavLink>
        </NavLinks>
      </NavContainer>
    </Nav>
  );
};

export default GNB; 