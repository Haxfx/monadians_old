import styled from "styled-components";

import connect from "../../../../assets/images/icons/connectbutton.png"
import Poppins from "../../../../assets/Poppins-ExtraLight.ttf"; // Import the TTF font file




const NavWrapper = styled.nav`

/* Styles for NavMobile */

@font-face {
  font-family: "Poppins", sans-serif;
  src: url(${Poppins}) format('truetype');
  font-weight:200;
  /* Additional font properties like font-weight, font-style, etc. */
}

.connectback_mobile{
  background-image: url(${connect});
  background-size: contain;
  background-repeat: no-repeat;
  text-align:center;
  width:100%;
  justify-content: center; /* Align horizontally */
  align-items: center; /* Align vertically */
 
}

 .connectback{
    background-image: url(${connect});
    display: inline-block;
    background-size: cover;
    min-width:46%;
    color: white; /* Text color */
    padding: 10px; /* Adjust padding as needed */
    margin-top:4%;
    cursor:pointer;
    text-align:center;
    img{
      margin-bottom:2%;
    }
  margin-right:20px;
  }

.logo_mobile{
img{
  max-width:70px;
}

}

  .column_1_mobile {

    width: 33.3%; /* Each column takes up 33.3% of the container */
    padding: 10px;
    margin-top:3%;
    
    display: flex;
    justify-content: center;
    height: 100%; /* Ensures the menu takes up the full height of the column */

  
  }
  .column_2_mobile {
    margin-top:2%;

    width: 33.3%; /* Each column takes up 33.3% of the container */
    padding: 10px;
    text-align:center;
    
  }

 
  .column_3_mobile {
    
    justify-content:center;
    margin-top:3%;
    width: 33.3%; /* Each column takes up 33.3% of the container */
    padding: 10px;
    display: flex;
    cursor:pointer;
    img{
      width:100%;
    }

  }



  z-index: 999;
  &.bithu_header {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    margin-top: 1px;
    height: 90px;
    transition: all 0.3s;

    &.sticky {
      position: fixed;
      top: 0;
      width: 100%;
      background: rgba(27, 34, 38, 0.8);
      backdrop-filter: blur(15px);
      z-index: 998;
      margin-top: 0px;
      transition: all 0.2s;
    }
  }

  .bithu_menu_sect {
    height: 90px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .bithu_menu_left_sect {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 15%;

    .logo {
      a {
        display: inline-block;
      }
    }
  }

  .bithu_menu_right_sect {
    width: 85%;
    display: flex;
    align-items: center;
    justify-content: end;
  }

  .container {
    margin-top:2%;
    display: flex;
    width: 100%;
  }
  .column_1 {
    margin-top: 4px;
    width: 33.3%; /* Each column takes up 33.3% of the container */
    padding: 10px;
    display: flex;
    justify-content: flex-start;
    height: 100%; /* Ensures the menu takes up the full height of the column */

  
  }
  .column_2 {
    margin-top:1%;

    width: 33.3%; /* Each column takes up 33.3% of the container */
    padding: 10px;
    text-align:center;
    
    
  }
  .logo {
    img{
      width:90%;

    }
  }
  .column_3 {
    margin-top: 5px;
    width: 33.3%; /* Each column takes up 33.3% of the container */
    text-align:right;
    height: 100%; /* Ensures the menu takes up the full height of the column */
    img {
      cursor:pointer;
      max-width:140px;
      margin-right:6%;
    }
  }

  .iconsheader{
    background-color: none;
    border: none;
    padding:10px;
    background: none;

  }

  .button-discord{
    margin-top:22px;
    margin-right: 10px;
    background-color: #5b427a;
    color: white;
    border: none;
    padding: 5px;
    font-size: 31px;
    height: 40px;
    width: 40px;
    border-radius: 50%;

  }

  
    /* CSS */
    .button-21 {
      margin:25px;

      align-items: center;
      appearance: none;
      background-color: #9802ff;
      background-image: linear-gradient(1deg, #9802ff, #9033AE 99%);
      background-size: calc(100% + 20px) calc(100% + 20px);
      border-radius: 100px;
      border-width: 0;
      box-shadow: none;
      box-sizing: border-box;
      color: #FFFFFF;
      cursor: pointer;
      display: inline-flex;
      font-family: "Poppins", sans-serif!important;
      font-weight: 200!important;
      font-size: 1rem;
      height: auto;
      justify-content: center;
      line-height: 1.5;
      padding: 4px 35px;
      position: relative;
      text-align: center;
      text-decoration: none;
      transition: background-color .2s,background-position .2s;
      user-select: none;
      -webkit-user-select: none;
      touch-action: manipulation;
      vertical-align: top;
      white-space: nowrap;
    }
    
    .button-21:active,
    .button-21:focus {
      outline: none;
    }
    
    .button-21:hover {
      background-position: -20px -20px;
    }
    span{
      img{
        margin-right:3px;
        max-width:12px;
      }
    }
    
    .button-21:focus:not(:active) {
      box-shadow: rgba(40, 170, 255, 0.25) 0 0 0 .125em;
    }




  .bithu_menu_list {


    ul {
      width: 100%;
      display: flex;
      margin: 0;
      padding: 0;

      li {
        position: relative;
        cursor: pointer;
        padding:15px;

        a {
          font-family: "Poppins", sans-serif!important;
          font-weight: 200!important;
           font-size: 20px;
          line-height: 22px;
          text-align: center;
          color: gray;
        }

        &:hover {
          a {
            color: #ffffff;
          }
        }

        /* submenu */
        &.submenu {
          .sub_menu_sect {
            // background: transparent;
            background: #171f25;
            // border-top: 50px solid transparent;
            position: absolute;
            top: calc(100% + 20px);
            left: -20px;
            width: 400px;
            visibility: hidden;
            opacity: 0;
            z-index: -100;
            transition: all 0.5s;
            transform: translateY(20px);

            .sub_menu_list {
              padding: 15px 20px;
              // background: #171f25;
              flex-wrap: wrap;
              li {
                width: 100%;
                a {
                  font-family: "Poppins", sans-serif!important;
                  font-weight: 200!important;
                  font-size: 16px;
                  line-height: 40px;
                  color: rgba(255, 255, 255, 0.8);
                  text-transform: capitalize;
                }

                &:hover {
                  a {
                    color: #ffffff;
                  }
                }
              }
            }
          }

          &:hover {
            .sub_menu_sect {
              transform: translateY(0px);
              visibility: visible;
              opacity: 1;
              z-index: 99;
            }
          }
        }
      }
    }
  }

  .bithu_menu_btns {
    display: flex;
    align-items: center;
    justify-content: space-between;
    align-items: center;
    min-width: 284px;
    button {
      color: #ffffff;
      text-transform: uppercase;
      font-family: "Poppins", sans-serif!important;
      font-weight: 200!important;
      font-size: 16px;
    }

    .menu_btn {
      display: none;
      border: none;
      background: transparent;
      cursor: pointer;
      svg {
        font-size: 40px;
      }
    }

    .join_btn {
      height: 50px;
      width: 114px;
      background-color: transparent;
    }

    .connect_btn {
      height: 50px;
      min-width: 150px;
      border: none;
      margin-left: 20px;
      background: rgba(255, 255, 255, 0.2);

      svg {
        font-size: 20px;
      }
    }
  }

  @media (max-width: 1024px) {
    .bithu_menu_list {
      margin-right: 20px;
    }
  }
  @media (max-width: 991px) {
    .bithu_menu_right_sect {
      justify-content: end;
    }
    .bithu_menu_btns {
      justify-content: end;
      .menu_btn {
        display: block;
      }
    }

    .bithu_menu_btns {
      .join_btn {
        display: none;
      }
    }
    .bithu_menu_list {
      display: none;
      visibility: hidden;
      opacity: 0;
    }
  }

  @media (max-width: 667px) {
    .bithu_menu_btns {
      .connect_btn {
        display: none;
      }

      .menu_btn {
        svg {
          font-size: 30px;
        }
      }
    }
  }

  @media (max-width: 540px) {
    .bithu_menu_left_sect {
      width: 180px;
      .logo {
        img {
          width: 100px;
        }
      }
    }

    .bithu_menu_right_sect {
      width: 50%;
      .bithu_menu_right_sect {
        width: 50%;
      }
    }
  }
`;

export default NavWrapper;
