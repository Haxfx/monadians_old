import styled from "styled-components";
import sectionBgImage from "../../../../assets/images/mint.png";
import mintButton from "../../../../assets/images/mintbutton.png";


const BannerStyleWrapper = styled.section`
/* Add these styles to your Banner.style.js or a separate CSS file */
.modal {
  display: block;
  position: fixed;
  z-index: 1000;
  left: 0;
  align-items:center;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}


.buttonposition{
  position: relative;
  width: 220px;
  height: 125px;
  overflow: hidden;
  text-align: center; /* Center text horizontally */
  cursor: pointer; /* Show pointer cursor on hover */
  top: 74%;
  left: 42vw;
  position:absolute;
  opacity:0;
}

.modal-content {
  background-color: gray;
  margin: 20% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 500px;
  height:300px;
  position: relative;
  border-radius: 20px;
  align-items:center;

  img {
    max-width:100px;
    text-align:center;
  }

  p{
    text-align:center;
    margin-top:15%;
    margin-bottom:3%;
  }
}

.close {
  position: absolute;
  top: 5px;
  right: 15px;
  color: #aaa;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
}


.image-container {
  position: relative;
        width: 200px;
        height: 200px;
        overflow: hidden;
        text-align: center; /* Center text horizontally */
        cursor: pointer; /* Show pointer cursor on hover */
        top: 76%;
        left: 46%;
        position:absolute;
}

.clickable-area img {
  opacity: 1;
  width: 200px;
  height: 200px;

  object-fit: cover;
  transition: opacity 0.3s ease-in-out;
}

.clickable-area:hover img {
  opacity: 1;
}


background: 
linear-gradient(to bottom, rgba(28, 6, 56, 1), rgba(28, 6, 56, 0) 35%), url(${sectionBgImage}) bottom / cover no-repeat;

height: 100vh;
width: 100%;
background-size: cover;
background-position: top center;
background-repeat: no-repeat;
padding-top: 15%;



.centered-div:hover {
  background-image: url(${mintButton});
  background-size: cover;
}

.img-cli{
  display:none;

}
.img-cli:hover{
  display:relative;
}

.clickable-area {
  /* Other background properties */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  /* Specify the dimensions */

  /* Other styling */
  color: white; /* Text color */
  text-align: center; /* Center text horizontally */
  cursor: pointer; /* Show pointer cursor on hover */
  top: 36.5vw;
  left: 43vw;
}

.clickable-area::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: background-color 0.3s ease; /* Smooth transition effect */
}

.clickable-area:hover::before {
  background-image: url(${mintButton});
}



.clickable-area {
  position: absolute;

  width: 100px; /* Adjust width and height as needed */
  height: 100px;
  border: none;
  outline: none;
  z-index:99999;
  cursor: pointer;

}

.clickable-area:hover{
  z-index:99999;

  background: url(${mintButton}) no-repeat ;

}

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

export default BannerStyleWrapper;
