import styled from "styled-components";
import Poppins from "../../../../assets/Poppins-ExtraLight.ttf"; // Import the TTF font file

const TeamStyleWrapper = styled.section`
@font-face {
  font-family: "Poppins", sans-serif;
  src: url(${Poppins}) format('truetype');
  font-weight:200;
  /* Additional font properties like font-weight, font-style, etc. */
}
  backdrop-filter: blur(5px);
  position: relative;
  z-index: 1;
  

   .hidden {
    visibility: hidden; /* Initially hide the icons header */
    opacity: 0; /* Ensure it's not visible */
    transition: opacity 0.3s ease-in-out; /* Smooth transition for showing/hiding */
  }
  .column1:hover .hidden {
    visibility: visible; /* Show the icons header on hover */
    opacity: 1; /* Ensure it's fully visible */
  }


  .iconsheader{
    background-color: none;
    border: none;
    background: none;
    margin-top:1%;
    overflow:hidden;
  }
  .underline-svg{
    margin-left:15%;
  }

  .team-member-image {
    height: auto;
    transition: transform 0.2s ease-in-out; /* Smooth transition for the hover effect */
    
  }

  .team-member-image:hover { 
    background-image: radial-gradient(circle, rgba(255, 255, 255, 0.4) 20%, transparent 50%); /* Radial gradient for light effect */

  }

  .team-member-image:hover {
    transform: scale(1.1); /* Increase image size on hover */

    z-index: 1; /* Ensure the image is above other elements on hover */
  }

  .container2mobile{

    margin-top:4%;
    width:100%;
    display:flex;
    .column1{
      width:50%!important;
      
    }

  }

  .container2{
    width:100%;
    display:flex;
    .column1{
      width:33%;
      
    }
  
  }

  

  .container{
    text-align:center;
    width:100%;

    .column1{
      width:33%;
      
      margin:2%;
      img{
        max-width:80%;
      }
      
      
    }
    .column1:hover{


    }
    .title{
      max-width:300px;

    }

    h3{
      margin-top:-5%;
      font-family: "Poppins", sans-serif!important;
      font-weight: 200!important;
      
    }

    h4{
      color: #7D0DC3!important;
      font-family: "Poppins", sans-serif!important;
      font-weight: 200!important;

    }
    h5{

    }

    h6{
      color: #7D0DC3!important;

    }
  h2 {
    font-family: "Poppins", sans-serif!important;
    font-weight: 200!important;
    font-size: 50px;
    text-transform: uppercase;
    color: #ffffff;

    span{
      color: #7D0DC3!important;
    }
  }
}
  .v1_team_overlay {
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    z-index: 1;
    height: 100%;
    width: 100%;
    padding: 10px 0 115px;
  }

  

  .bithu_team_content {
    margin-top: 10%;
    position: relative;
    z-index: 1;
    .row {
      text-align:center;
      row-gap: 30px;
    }
  }


  
`;

export default TeamStyleWrapper;
