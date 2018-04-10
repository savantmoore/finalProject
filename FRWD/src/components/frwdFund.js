//src/components/WhatIsARainyDayFund
import React, { Component } from 'react';
import {Link} from 'react-router'
import { Button } from 'react-bootstrap';

const frwdFund = () =>  {

    return (
        <div id="frwdFund">
		   <h1>FRWD App</h1>

		   <h3>
				This app has 3 steps.<br/><br/>
				1. Income - Just basic info to get things started.<br/><br/>
				2. Expenses - List out your monthly expenses to determine the proper size of your emergency fund and get a
				   clear picture of your financial obligations.  <br/><br/>
				3. Savings Plan - See how long it would take to fund your emergency fund, and experiment with how much you want to save each month to reach your goal.
				<br/><br/>
		   </h3>

	        <Button className="nav-btn" block>
	    		<Link className="link" to="assumptions">Income</Link>
	    	</Button>
        </div>
    );
}


export default frwdFund;
