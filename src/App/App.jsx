import React from "react";
import AppStyle from "./App.styles";
import {
  Container,
  Row,
  Grid,
  GlobalStyle
} from "./styled-components/Grid.style";

function App() {
  return (
    <AppStyle>
      <GlobalStyle />
      <Container width="80%" height="100vh">
        <Row>
          <Grid height="min-content" sm="100%" md="50%" lg="20%" xl="10%">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos,
              perferendis. Adipisci quasi sapiente alias veritatis, doloremque
              odio possimus. Aliquid aperiam praesentium sed quidem reiciendis
              commodi placeat natus dolores possimus. Praesentium.
            </p>
          </Grid>
          <Grid height="min-content" sm="100%" md="50%" lg="20%" xl="10%">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos,
              perferendis. Adipisci quasi sapiente alias veritatis, doloremque
              odio possimus. Aliquid aperiam praesentium sed quidem reiciendis
              commodi placeat natus dolores possimus. Praesentium.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos,
              perferendis. Adipisci quasi sapiente alias veritatis, doloremque
              odio possimus. Aliquid aperiam praesentium sed quidem reiciendis
              commodi placeat natus dolores possimus. Praesentium.
            </p>
          </Grid>
          <Grid height="min-content" sm="100%" md="50%" lg="20%" xl="10%">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos,
              perferendis. Adipisci quasi sapiente alias veritatis, doloremque
            </p>
          </Grid>
          <Grid height="min-content" sm="100%" md="50%" lg="20%" xl="10%">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos,
              perferendis. Adipisci quasi sapiente alias veritatis, doloremque
              odio possimus. Aliquid aperiam praesentium sed quidem reiciendis
              commodi placeat natus dolores possimus. Praesentium.
            </p>

            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos,
              perferendis. Adipisci quasi sapiente alias veritatis, doloremque
              odio possimus. Aliquid aperiam praesentium sed quidem reiciendis
              commodi placeat natus dolores possimus. Praesentium.
            </p>
          </Grid>
          <Grid height="min-content" sm="20%" md="30%" lg="20%" xl="10%">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.Lorem
              ipsum dolor sit, amet consectetur adipisicing elit.Lorem ipsum
              dolor sit, amet consectetur adipisicing elit.
            </p>
          </Grid>
        </Row>
      </Container>
    </AppStyle>
  );
}

export default App;
