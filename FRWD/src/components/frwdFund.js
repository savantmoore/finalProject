//src/components/FRWDFund
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
	    <!-- Begin MailChimp Signup Form -->
<link href="//cdn-images.mailchimp.com/embedcode/slim-10_7.css" rel="stylesheet" type="text/css">
<style type="text/css">
	#mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif; }
	/* Add your own MailChimp form style overrides in your site stylesheet or in this style block.
	   We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
</style>
<div id="mc_embed_signup">
<form action="https://frwdapp.us18.list-manage.com/subscribe/post?u=e4fa99a4d45714237e499e9ed&amp;id=4423afd375" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
    <div id="mc_embed_signup_scroll">
	<label for="mce-EMAIL">App Releases in 10 Days! Save $500 with FRWD</label>
	<input type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="email address" required>
    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_e4fa99a4d45714237e499e9ed_4423afd375" tabindex="-1" value=""></div>
    <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
    </div>
</form>
</div>

<!--End mc_embed_signup-->
        </div>
    );
}


export default frwdFund;
