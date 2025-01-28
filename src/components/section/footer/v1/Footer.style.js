import styled from "styled-components";
import Poppins from "../../../../assets/Poppins-ExtraLight.ttf"; // Import the TTF font file




export const FooterStyleWrapper = styled.footer`
@font-face {
  font-family: "Poppins", sans-serif;
  src: url(${Poppins}) format('truetype');
  font-weight:200;
  /* Additional font properties like font-weight, font-style, etc. */
}

.space{
  img{
    float:right;
  }
}

  .bithu_v1_main_footer {


    .container {
      margin-top:5%;
      display: flex;
      width: 100%;
    }

    .containermobile {
      justify-content: center; /* Horizontally center the content */
      align-items: center; /* Vertically center the content */
      padding: 20px; /* Add padding in all directions */
    
      /* Optional: If you want to set a maximum width for the container */
      max-width: 100%; /* Adjust the value as needed */
    }
    .iconsheader{
      margin-top:8%;
      background-color: none;
      border: none;
      background: none;
  
    }
    .iconsheaderfirst{
      margin-top:8%;

      img {
        width:50px!important;
      }
      background-color: none;
      border: none;
      background: none;
  
    }

    .column__1 {
      margin-top:25px;
      width: 33.3%; /* Each column takes up 33.3% of the container */
      padding: 10px;
      text-align:center;

      h2 {
        margin-top:8%;
        font-family: "Poppins", sans-serif!important;
        font-weight: 200!important;
        font-size: 16px;
        color: #ffffff;
        margin-bottom:12%;
        span{
          color: #7D0DC3;
        }
      }
      
    }
  }
`;

export const FooterStyleWrapperMobile = styled.footer`

.spacem{
  img{
    margin-left:25%;
    max-width:400px;
    
  }
}
  .bithu_v1_main_footer {

  text-align:center;

    .containermobile {
      justify-content: center; /* Horizontally center the content */
      align-items: center; /* Vertically center the content */
      padding: 20px; /* Add padding in all directions */
    
      /* Optional: If you want to set a maximum width for the container */
      max-width: 100%; /* Adjust the value as needed */
    }
    .iconsheader{
      margin-top:8%;
      background-color: none;
      border: none;
      background: none;
  
    }
    .iconsheaderfirst{
      background-color: none;
      border: none;
      background: none;

  
    }

  }
`;
