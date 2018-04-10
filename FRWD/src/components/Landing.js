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
        <script type="text/javascript" src="//downloads.mailchimp.com/js/signup-forms/popup/embed.js" data-dojo-config="usePlainJson: true, isDebug: false"></script><script type="text/javascript">require(["mojo/signup-forms/Loader"], function(L) { L.start({"baseUrl":"mc.us18.list-manage.com","uuid":"e4fa99a4d45714237e499e9ed","lid":"4423afd375"}) })</script>
        </Grid>
    );
}

export default Landing;
