
import {FooterStyleWrapper,FooterStyleWrapperMobile} from "./Footer.style";
import footerBG from "../../../../assets/images/backgrounds/Spaceship.webp";

import logo from "../../../../assets/images/icons/iconheader.svg"
import arrow from "../../../../assets/images/footer/Arrow.svg"

import xicon from "../../../../assets/images/icons/xsocial.svg";

import discordIcon from "../../../../assets/images/icons/discord.svg";
const Footer = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  const isMobileDevice = window.innerWidth <= 768; // Adjust the width threshold as needed


  return (
    <>
    {isMobileDevice ? (

    <FooterStyleWrapperMobile>
       <div className="spacem" > 
        <img src={footerBG} />
      </div>
      <div className="bithu_v1_main_footer"> 
      <div className="containermobile">
      <a href="https://discord.gg/Monadians" alt="" target="_blank">  <button className="iconsheader"><img src={discordIcon} alt="Logo" /> </button></a>
        <a href="https://x.com/monadians_xyz" target="_blank"><button className="iconsheader"><img src={xicon} alt="Logo" /> </button></a>
        <div>
          <br></br>
        <h6>All rights reserved. Copyright © 2024 <span>Monadians</span></h6>
        </div>
      </div>
      
      </div>
      
    </FooterStyleWrapperMobile>

    ) : (
      <FooterStyleWrapper>
         <div className="space" > 
        <img src={footerBG} />
      </div>
      <div className="bithu_v1_main_footer"> 
      <div className="container">
        <div className="column__1"> 
        <button className="iconsheaderfirst" onClick={scrollToTop} ><img src={arrow} alt="Logo" /> </button>

        </div>
        <div className="column__1"> 
          <img src={logo} />
          <h2>All rights reserved. Copyright © 2024 Monadians</h2>
        </div>
        <div className="column__1"> 
        
        <a href="https://discord.gg/Monadians" target="_blank" alt="">  <button className="iconsheader"><img src={discordIcon} alt="Logo" /> </button></a>
        <a href="https://x.com/monadians_xyz" target="_blank"><button className="iconsheader"><img src={xicon} alt="Logo" /> </button></a>

        </div>




      </div>
      </div>
      
    </FooterStyleWrapper>
    )}

    </>
  );
};

export default Footer;
