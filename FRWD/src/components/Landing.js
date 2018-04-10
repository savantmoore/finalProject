//src/components/Landing.js

import React from 'react';
import { Link } from 'react-router';
import { Grid, Jumbotron, Button } from 'react-bootstrap';

const Landing = () =>  {
    return (
        <Grid id="Landing" className="container-fluid">
          <Jumbotron id="landing-jumbotron">
            <h1>FRWD App</h1>
            <h6>Everyone should save 14%</h6>
            <Button className="nav-btn">
            	<Link className="link" to="frwd-fund">I understand - take me to the app</Link>
            </Button>
          </Jumbotron>
        <footer><p class="copyright">Copyright 2018, FRWD Inc.</p></footer>
        </Grid>
    );
}

export default Landing;
