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
`;

const Grid = styled.div`
  position: relative;
  width: ${props => props.xl || "auto"};
  height: ${props => props.height || "min-content"};

  background: #cfd8dc;
  padding: 0.5rem;
  border-radius: 0.5rem;
  font-weight: 100;
  border: 2px solid #fff;

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

  background: #cfd8dc;
  height: 5rem;
  border-radius: 0.5rem;
  margin-top: 0.5rem;
  border: 2px solid #fff;
  font-size: 2rem;
  color: #333;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 600px) {
    flex: 0 0 calc(100% / 12 * ${props => props.sm || "100%"});
  }

  @media (min-width: 601px) and (max-width: 1024px) {
    flex: 0 0 calc(100% / 12 * ${props => props.md || "100%"});
  }

  @media (min-width: 1025px) and (max-width: 1366px) {
    flex: 0 0 calc(100% / 12 * ${props => props.lg || "100%"});
  }
`;

export { Container, Row, Grid, GlobalStyle, GridTest };
