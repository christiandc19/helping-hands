import React from "react";
import Zoom from 'react-reveal/Zoom';

import "./Hero.css";

const Hero = () => {
  return (
    <>
<figure>

	<div class="imagesContainer">

  <div className="hero-caption">

    <Zoom duration={2000}>
      <h1>HELPING <span>HANDS</span> REHAB </h1>
    </Zoom>
    <Zoom duration={4000}>
    <h2>Substance Abuse and Mental Health Treatment Center</h2>
    </Zoom>

    <Zoom duration={6000}>

    <p>
              {/* <AiOutlinePhone /> */}
              <a href="tel:3237920515"> +1 (323) 792-0515</a>
            </p>
  </Zoom>

  </div>


		<div class="imageDiv image1">
    </div>
		<div class="imageDiv image2 fadeInClass"></div>
	</div>
</figure>
    </>
  );
};

export default Hero;
