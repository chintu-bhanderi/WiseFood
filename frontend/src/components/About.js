import React from "react";
import { testing } from "../store/actions/workerAction";

export const About = () => {
    return (
        <>
            <button onClick={testing} >Test</button>
            <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Amatic+SC" />
            <div class="w3-container w3-padding-64 w3-red w3-grayscale w3-xlarge" id="about">
                <div class="w3-content">
                    <h1 class="w3-center w3-jumbo" style={{ 'margin-bottom': '64px' }}>About</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa consequatur illo architecto quae debitis nesciunt exercitationem, voluptatum officia id at itaque fuga fugit totam dolor libero placeat. Tempore, explicabo itaque.</p>
                    <p><strong>The Chef ? </strong> Mr. John DOi himself<img src="https://www.finedininglovers.com/sites/g/files/xknfdk626/files/2021-07/chef%20%287%29.jpg" style={{ 'width': '150px' }} class="w3-circle w3-right" alt="Chef" /></p>
                    <p>We are proud of our interiors.</p>
                    <img src="https://st2.depositphotos.com/6235482/10889/i/950/depositphotos_108890284-stock-photo-fresh-vegetables-on-wood-table.jpg" style={{ 'width': '100%' }} class="w3-margin-top w3-margin-bottom" alt="Restaurant" />
                    <h1><b>Opening Hours-All Days Available</b></h1>
                </div>
            </div>
        </>
    )
}

