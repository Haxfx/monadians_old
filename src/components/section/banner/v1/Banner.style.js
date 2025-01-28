import styled, { keyframes } from "styled-components";
import sectionBgImage from "../../../../assets/images/backgrounds/HeroBackground.webp";
import secondBG from "../../../../assets/images/backgrounds/herooo.webp";
import mobile1 from "../../../../assets/images/mobile/bg1.png";
import newd from "../../../../assets/images/mobile/hero_back.webp";





const rotate = keyframes`
from {
  transform: rotate(0deg);
}

to {
  transform: rotate(360deg);
}
`;

export const BannerV1WrapperMobile = styled.section`
.containermobile{
  margin-top:1%;
}
// mobile style
.bithu_v1_baner_left_mobile {
  margin-top: 15%;
  width: 100%;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  img {
    max-width:300px;
  }

  h2 {
    font-family: Popping!important;
    font-weight: 900;
    font-size: 35px;
    text-transform: uppercase;
    color: #ffffff;

    span{
      color: #7D0DC3;
    }
  }
 
  h3 {
    font-family: Popping!important;
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 60px;
    text-transform: uppercase;
    color: #ffffff;
  }

  .banner_buttons {
    display: flex;
    column-gap: 30px;
    margin-top: 58px;
  }

  .coin-info {
    display: flex;
    flex-direction: column;
    margin-top: 37px;
    span {
      font-family: Popping!important;
      font-size: 18px;
      line-height: 36px;
      text-transform: uppercase;
      color: rgba(255, 255, 255, 0.8);

      & .highlighted {
        color: #ffe600;
      }
    }
  }
}

background: 

  url(${newd}) top/cover no-repeat, /* First image */
  linear-gradient(to bottom, transparent, #1c0638), /* Gradient from transparent to solid color */

  url(${mobile1}) bottom/cover no-repeat; /* Second image */
  
background-position: top, bottom; /* Positioning for the images */
z-index: 999; /* Set the z-index to ensure the second background is on top */

 
  min-height: 950px;
  width: 100%;
  background-size: cover;
  background-position: top center;
  background-repeat: no-repeat;
  padding-top: 15%;



  .bithu_v1_baner_left {
    margin-top: 15%;
    width: 100%;
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
   
  

    h2 {
      font-family: Popping!important;
      font-weight: 900;
      font-size: 50px;
      text-transform: uppercase;
      color: #ffffff;

      span{
        color: #7D0DC3;
      }
    }
   
    h3 {
      font-family: Popping!important;
      font-style: normal;
      font-weight: 400;
      font-size: 40px;
      line-height: 60px;
      text-transform: uppercase;
      color: #ffffff;
    }

    .banner_buttons {
      display: flex;
      column-gap: 30px;
      margin-top: 58px;
    }

    .coin-info {
      display: flex;
      flex-direction: column;
      margin-top: 37px;
      span {
        font-family: Popping!important;
        font-size: 18px;
        line-height: 36px;
        text-transform: uppercase;
        color: rgba(255, 255, 255, 0.8);

        & .highlighted {
          color: #ffe600;
        }
      }
    }
  }

  .bithu_v1_baner_right {
    max-width: 500px;
    width: 100%;
    margin-left: auto;
    margin-top: 66px;

    .mint_live_circle_sect {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 140px;
      width: 140px;
      border-radius: 50%;
      border: none;
      background: #ffe600;
      position: absolute;
      top: -65px;
      left: -65px;
      z-index: 1;

      .mint_live_circle {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 100%;

        .mint_live_text {
          animation: ${rotate} 20s linear infinite;
          position: absolute;
        }
      }
    }

    .bithu_v1_baner_right_img_sect {
      position: relative;
      width: 100%;
      height: 550px;
      display: flex;
      align-items: center;
      justify-content: center;

      .bithu_v1_baner_right_img_bg {
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        z-index: 0;
        img {
          width: 100%;
          height: 100%;
        }
      }

      .bithu_v1_baner_right_img {
        position: relative;
        z-index: 1;
      }
    }
  }

  @media only screen and (max-width: 1199px) {
    .bithu_v1_baner_left {
      h2 {
        font-size: 50px;
        line-height: 65px;
      }

      h3 {
        font-size: 34px;
        line-height: 38px;
      }

      .baner_buttons {
        margin-top: 40px;
      }
    }
  }

  @media only screen and (max-width: 991px) {
    .bithu_v1_baner_left {
      margin-top: 0px;
      justify-content: flex-start;
    }

    .bithu_v1_baner_right {
      margin: 70px auto;
      padding: 0px 68px;
      max-width: 568px;
      width: 100%;

      .bithu_v1_baner_right_img {
        width: 55%;
      }
    }
  }

  @media only screen and (max-width: 767px) {
    .bithu_v1_baner_left {
      h2 {
        font-size: 40px;
        line-height: 50px;
        margin-bottom: 20px;
      }

      h3 {
        font-size: 28px;
        line-height: 38px;
        
      }

      .banner_buttons{
        margin-top: 25px;
      }
    }

    .bithu_v1_baner_right {
      padding-right: 0px;

      .bithu_v1_baner_right_img_sect {
        height: 480px;
      }
    }
  }

  @media only screen and (max-width: 480px) {
    .bithu_v1_baner_left {
      h2 {
        font-size: 37px;
      }

      h3 {
        font-size: 22px;
      }

      .coin-info {
        font-size: 14px;
        line-height: 29px;
      }

      .banner_buttons{
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
        
            .bithu-btn + .bithu-btn {
                margin-top: 20px;
            }
        }
    }

    .bithu_v1_baner_right {
      padding-left: 34px;

      .mint_live_circle_sect{
        height: 90px;
        width: 90px;
        top: -36px;
        left: -40px;
    }
    }
  }

  @media (max-width: 375px) {
    .bithu_v1_baner_left {
      h2 {
        font-size: 35px;
      }
      h3 {
        font-size: 22px;
      }
    }
  }

  @media (max-width: 360px) {
    .bithu_v1_baner_left {
      .coin-info {
        font-size: 13px;
      }
    }
  }
`;


export const BannerV1Wrapper = styled.section`

height: 100%;

// mobile style
.bithu_v1_baner_left_mobile {
  margin-top: 15%;
  width: 100%;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  

  h2 {
    font-family: Popping!important;
    font-weight: 900;
    font-size: 50px;
    text-transform: uppercase;
    color: #ffffff;

    span{
      color: #7D0DC3;
    }
  }
 
  h3 {
    font-family: Popping!important;
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 60px;
    text-transform: uppercase;
    color: #ffffff;
  }

  .banner_buttons {
    display: flex;
    column-gap: 30px;
    margin-top: 58px;
  }

  .coin-info {
    display: flex;
    flex-direction: column;
    margin-top: 37px;
    span {
      font-family: Popping!important;
      font-size: 18px;
      line-height: 36px;
      text-transform: uppercase;
      color: rgba(255, 255, 255, 0.8);

      & .highlighted {
        color: #ffe600;
      }
    }
  }
}




 
  background: 
  url(${secondBG}) top/cover no-repeat,
  url(${sectionBgImage}) bottom/cover no-repeat;

  background-size: 100%, 100% 8%; /* Adjust the second value (88%) to control the size of the bottom image */

  
  min-height: 950px;
  width: 100%;
  background-size: cover;
  background-position: top center;
  background-repeat: no-repeat;
  padding-top: 15%;



  .bithu_v1_baner_left {
    margin-top: 15%;
    width: 100%;
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    img {
      max-width:450px;
    }

    

    h2 {
      font-family: Popping!important;
      font-weight: 900;
      font-size: 50px;
      text-transform: uppercase;
      color: #ffffff;

      span{
        color: #7D0DC3;
      }
    }
   
    h3 {
      font-family: Popping!important;
      font-style: normal;
      font-weight: 400;
      font-size: 40px;
      line-height: 60px;
      text-transform: uppercase;
      color: #ffffff;
    }

    .banner_buttons {
      display: flex;
      column-gap: 30px;
      margin-top: 58px;
    }

    .coin-info {
      display: flex;
      flex-direction: column;
      margin-top: 37px;
      span {
        font-family: Popping!important;
        font-size: 18px;
        line-height: 36px;
        text-transform: uppercase;
        color: rgba(255, 255, 255, 0.8);

        & .highlighted {
          color: #ffe600;
        }
      }
    }
  }

  .bithu_v1_baner_right {
    max-width: 500px;
    width: 100%;
    margin-left: auto;
    margin-top: 66px;

    .mint_live_circle_sect {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 140px;
      width: 140px;
      border-radius: 50%;
      border: none;
      background: #ffe600;
      position: absolute;
      top: -65px;
      left: -65px;
      z-index: 1;

      .mint_live_circle {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 100%;

        .mint_live_text {
          animation: ${rotate} 20s linear infinite;
          position: absolute;
        }
      }
    }

    .bithu_v1_baner_right_img_sect {
      position: relative;
      width: 100%;
      height: 550px;
      display: flex;
      align-items: center;
      justify-content: center;

      .bithu_v1_baner_right_img_bg {
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        z-index: 0;
        img {
          width: 100%;
          height: 100%;
        }
      }

      .bithu_v1_baner_right_img {
        position: relative;
        z-index: 1;
      }
    }
  }
  @media only screen and (min-width: 1650px){
    background-position-y: -200px;

  }

  @media only screen and (min-width: 1987px){
    background-position-y: -290px;

  }

  @media only screen and (max-width: 1199px) {
    .bithu_v1_baner_left {
      h2 {
        font-size: 50px;
        line-height: 65px;
      }

      h3 {
        font-size: 34px;
        line-height: 38px;
      }

      .baner_buttons {
        margin-top: 40px;
      }
    }
  }

  @media only screen and (max-width: 991px) {
    .bithu_v1_baner_left {
      margin-top: 0px;
      justify-content: flex-start;
    }

    .bithu_v1_baner_right {
      margin: 70px auto;
      padding: 0px 68px;
      max-width: 568px;
      width: 100%;

      .bithu_v1_baner_right_img {
        width: 55%;
      }
    }
  }

  @media only screen and (max-width: 767px) {
    .bithu_v1_baner_left {
      h2 {
        font-size: 40px;
        line-height: 50px;
        margin-bottom: 20px;
      }

      h3 {
        font-size: 28px;
        line-height: 38px;
        
      }

      .banner_buttons{
        margin-top: 25px;
      }
    }

    .bithu_v1_baner_right {
      padding-right: 0px;

      .bithu_v1_baner_right_img_sect {
        height: 480px;
      }
    }
  }

  @media only screen and (max-width: 480px) {
    .bithu_v1_baner_left {
      h2 {
        font-size: 37px;
      }

      h3 {
        font-size: 22px;
      }

      .coin-info {
        font-size: 14px;
        line-height: 29px;
      }

      .banner_buttons{
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
        
            .bithu-btn + .bithu-btn {
                margin-top: 20px;
            }
        }
    }

    .bithu_v1_baner_right {
      padding-left: 34px;

      .mint_live_circle_sect{
        height: 90px;
        width: 90px;
        top: -36px;
        left: -40px;
    }
    }
  }

  @media (max-width: 375px) {
    .bithu_v1_baner_left {
      h2 {
        font-size: 35px;
      }
      h3 {
        font-size: 22px;
      }
    }
  }

  @media (max-width: 360px) {
    .bithu_v1_baner_left {
      .coin-info {
        font-size: 13px;
      }
    }
  }
`;


