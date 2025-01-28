import styled from "styled-components";

export const HowToMintWrapper = styled.section`

position: relative; /* Set position relative for absolute positioning of SVG images */
height: 100vh; /* Adjust the height as needed */
margin-top:-10%;
.containerA {
  position: relative; /* Set position relative to contain absolute positioned images */
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%; /* Use 100% height to fill the parent section */
}
.containerA img {
  max-height: 125%; /* Ensure the image doesn't exceed the container height */
}

.svg-image1 {
  position: absolute;
  bottom: 0;
  max-width: 100%; /* Ensure the image doesn't exceed the container width */
  max-height: 100%; /* Ensure the image doesn't exceed the container height */
  right: 0;
max-width:15%;
}

.svg-image2 {
  margin-top:15%;
  margin-left:5%;
  max-width: 100%; /* Ensure the image doesn't exceed the container width */
  max-height: 100%; /* Ensure the image doesn't exceed the container height */
  position: absolute;
  top: 0;
  left: 0;

}
  
`;
export const WrapperMobile = styled.section`



.containerA {
  position: relative; /* Set position relative to contain absolute positioned images */
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%; /* Use 100% height to fill the parent section */
}
.containerA img {
  max-height: 125%; /* Ensure the image doesn't exceed the container height */
}

.svg-image1 {
  position: absolute;
  bottom: 0;
  max-width: 100%; /* Ensure the image doesn't exceed the container width */
  max-height: 100%; /* Ensure the image doesn't exceed the container height */
  right: 0;
  margin-bottom:20%;
max-width:20%;
}

.svg-image2 {
  margin-top:15%;
  margin-left:5%;
  max-width: 10%; /* Ensure the image doesn't exceed the container width */
  max-height: 100%; /* Ensure the image doesn't exceed the container height */
  position: absolute;
  top: 0;
  left: 0;

}
  
`;

