import React from "react";
import { createRoot } from "react-dom/client";
import styled from "styled-components";
import { css } from "@emotion/react";
import "./styles.css";

const pageTitleStyle = {
  letterSpacing: "-0.04em",
  lineHeight: 1.05,
  marginBottom: "1rem"
};

const projects = [
  { title: "TaskFlow", text: "A clean task-management interface with responsive cards.", tag: "React" },
  { title: "BookNest", text: "A simple library dashboard focused on readable information.", tag: "UI/UX" },
  { title: "Weatherly", text: "A compact weather layout designed for mobile-first use.", tag: "Responsive" }
];

const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 10;
  background: rgba(9, 14, 28, 0.9);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255,255,255,.1);
`;

const Nav = styled.nav`
  max-width: 1100px;
  margin: auto;
  padding: 1rem 1.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;

const Logo = styled.a`
  font-weight: 800;
  color: #fff;
  text-decoration: none;
  font-size: 1.15rem;
`;

const Button = styled.button`
  border: 0;
  border-radius: 999px;
  padding: .7rem 1rem;
  background: #7c5cff;
  color: white;
  font-weight: 700;
  cursor: pointer;
  transition: transform .2s ease, opacity .2s ease;
  &:hover { transform: translateY(-2px); opacity: .92; }
`;

const Card = styled.article`
  padding: 1.4rem;
  border-radius: 18px;
  background: #111a31;
  border: 1px solid rgba(255,255,255,.09);
  box-shadow: 0 15px 35px rgba(0,0,0,.18);
`;

const emotionHighlight = css`
  padding: 0.25rem 0.55rem;
  border-radius: 8px;
  background: rgba(34, 211, 238, 0.14);
  color: #67e8f9;
  font-weight: 700;
`;

function App() {
  const [dark, setDark] = React.useState(true);

  const appStyle = {
    minHeight: "100vh",
    background: dark ? "#090e1c" : "#f4f7fb",
    color: dark ? "#f8fafc" : "#172033",
    transition: "background .25s ease, color .25s ease"
  };

  const sectionStyle = {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "5rem 1.25rem"
  };

  return (
    <div style={appStyle}>
      <Header>
        <Nav>
          <Logo href="#home">StyleLab</Logo>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#techniques">Techniques</a>
          </div>
          <Button onClick={() => setDark(v => !v)}>
            {dark ? "Light mode" : "Dark mode"}
          </Button>
        </Nav>
      </Header>

      <main>
        <section id="home" style={sectionStyle} className="hero">
          <div>
            <p className="eyebrow">React Styling Assignment</p>
            <h1 style={pageTitleStyle}>Designing clean, responsive React interfaces.</h1>
            <p className="lead">
              A small portfolio demonstrating inline styles, Styled Components,
              Emotion, Flexbox, Grid and responsive media queries.
            </p>
            <a className="primary-link" href="#projects">View projects →</a>
          </div>
          <div className="hero-card">
            <span className="hero-icon">✦</span>
            <h2>UI/UX first</h2>
            <p>Consistent spacing, accessible contrast, clear hierarchy and responsive layouts.</p>
          </div>
        </section>

        <section id="about" style={sectionStyle}>
          <p className="eyebrow">About</p>
          <h2>Why styling matters</h2>
          <div className="two-column">
            <p>
              Good styling is more than decoration. It improves readability,
              navigation and usability across devices. A component-based styling
              approach also makes a React application easier to maintain.
            </p>
            <p>
              This project combines multiple approaches so their roles can be
              compared in one application.
            </p>
          </div>
        </section>

        <section id="projects" style={sectionStyle}>
          <p className="eyebrow">Portfolio</p>
          <h2>Featured projects</h2>
          <div className="project-grid">
            {projects.map(project => (
              <Card key={project.title}>
                <span className="tag">{project.tag}</span>
                <h3>{project.title}</h3>
                <p>{project.text}</p>
                <a href="#techniques">Learn more →</a>
              </Card>
            ))}
          </div>
        </section>

        <section id="techniques" style={sectionStyle}>
          <p className="eyebrow">Techniques</p>
          <h2>Styling approaches used</h2>
          <div className="technique-grid">
            <div className="technique">
              <h3>Inline styles</h3>
              <p>Used for dynamic values such as theme-aware page colors and spacing.</p>
            </div>
            <div className="technique">
              <h3>Styled Components</h3>
              <p>Used for reusable Header, Nav, Button and Card components.</p>
            </div>
            <div
              className="technique"
              css={emotionHighlight}
            >
              <h3>Emotion CSS-in-JS</h3>
              <p>Used for a reusable highlighted label style.</p>
            </div>
            <div className="technique">
              <h3>Flexbox + Grid</h3>
              <p>Flexbox handles navigation/hero alignment while Grid handles project cards.</p>
            </div>
            <div className="technique">
              <h3>Media queries</h3>
              <p>The layout changes from multi-column to stacked sections on small screens.</p>
            </div>
            <div className="technique">
              <h3>Responsive UX</h3>
              <p>Readable typography, touch-friendly controls and mobile-first spacing improve usability.</p>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <p>Built with React • Styling Techniques Showcase</p>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
