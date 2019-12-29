import React from "react";
import AppStyle from "./App.styles";
import {
  Container,
  Row,
  Grid,
  GlobalStyle,
  GridTest
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

        <Row>
          <GridTest sm="12" md="6" lg="12" xl="12">
            12
          </GridTest>
          <GridTest sm="12" md="6" lg="6" xl="11">
            11
          </GridTest>
          <GridTest sm="12" md="6" lg="6" xl="10">
            10
          </GridTest>
          <GridTest xl="9" sm="12" md="6" lg="3">
            9
          </GridTest>
          <GridTest xl="8" sm="12" md="6" lg="7">
            8
          </GridTest>
          <GridTest xl="7" sm="12" md="6" lg="2">
            7
          </GridTest>
          <GridTest xl="6" sm="12" md="6" lg="6">
            6
          </GridTest>
          <GridTest xl="5" sm="12" md="6" lg="5">
            5
          </GridTest>
          <GridTest xl="4" sm="12" md="6" lg="5">
            4
          </GridTest>
          <GridTest xl="3" sm="12" md="6" lg="6">
            3
          </GridTest>
          <GridTest xl="2" sm="12" md="6" lg="6">
            2
          </GridTest>
          <GridTest xl="1" sm="12" md="6" lg="6">
            1
          </GridTest>
        </Row>
      </Container>
    </AppStyle>
  );
}

export default App;
