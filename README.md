To be updated......

Create a new template - change 'my-new-app' and make it your own.

```
npx degit dbshanks/gridapp my-new-app

npm install
```

A variable width flex container system.

```
<Container width="80%" height="100vh">
    <Row>
        <Grid height="min-content" sm="100%" md="50%" lg="20%" xl="40%">
          Grid Component
        </Grid>
    </Row>
</Container>
```

Standard 12 Column Grid system.

```
<Container width="80%" height="100vh">
    <Row>
        <GridTest height="min-content" sm="12" md="12" lg="12" xl="12">
            12
        </GridTest>
    </Row>
</Container>
```
