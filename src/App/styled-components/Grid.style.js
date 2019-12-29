import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*, *::before, *::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

:root {
    font-size: 100%;
}

 @media(max-width: 1024px) {
    :root {
        font-size: 80%;
    }
}

@media(max-width: 600px) {
    :root {
        font-size: 60%;
    }
} 
}

html, body {
    width: 100vw;
    height: 100vh;
}

`;

const Container = styled.div`
position: relative;
width: ${props => props.width || "100vw"}
height: ${props => props.height || "100vh"}

margin: 0 auto;
background: #D4E157;

@media(max-width:800px) {
    width: 100%;
}
`;

const Row = styled.div`
  position: relative;
  width: ${props => props.width || "100%"};
  height: ${props => props.height || "min-content"};

  display: flex;
  flex-wrap: wrap;

  background: #ffab91;
`;

const Grid = styled.div`
  position: relative;
  width: ${props => props.xl || "auto"};
  height: ${props => props.height || "min-content"};

  background: #607d8b;
  padding: 0.5rem;
  border: 2px solid #ffab91;

  @media (max-width: 600px) {
    width: ${props => props.sm || "100%"};
  }

  @media (min-width: 601px) and (max-width: 1024px) {
    width: ${props => props.md || "100%"};
  }

  @media (min-width: 1025px) and (max-width: 1366px) {
    width: ${props => props.lg || "100%"};
  }
`;

/* Start of the 12 Col Grid */

const GridTest = styled.div`
  flex: 0 0 calc(100% / 12 * ${props => props.xl});

  @media (max-width: 600px) {
    flex: 0 0 calc(100% / 12 * ${props => props.sm || "100%"});
  }

  @media (min-width: 601px) and (max-width: 1024px) {
    flex: 0 0 calc(100% / 12 * ${props => props.md || "100%"});
  }

  @media (min-width: 1025px) and (max-width: 1366px) {
    flex: 0 0 calc(100% / 12 * ${props => props.lg || "100%"});
  }
  background: yellow;
`;

export { Container, Row, Grid, GlobalStyle, GridTest };
