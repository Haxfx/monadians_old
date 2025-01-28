
import image from "../../../../assets/images/Teammiddle.webp"
import left from "../../../../assets/images/xsvg.svg"
import right from "../../../../assets/images/cloud.svg"
import mobile from "../../../../assets/images/mobile/2.png"




import {HowToMintWrapper , WrapperMobile}  from "./HowToMint.style";

const HowToMint = () => {

  const isMobileDevice = window.innerWidth <= 768; // Adjust the width threshold as needed

  return (
    <>
    {isMobileDevice ? (
          <WrapperMobile>
          <div className="containerA">
           <img src={mobile} />
           <img src={right} alt="SVG Image 1" className="svg-image1" />
            <img src={left} alt="SVG Image 2" className="svg-image2" />
          </div>
        </WrapperMobile>
) : (

    <HowToMintWrapper>
      <div className="containerA">
       <img src={image} />
       <img src={right} alt="SVG Image 1" className="svg-image1" />
        <img src={left} alt="SVG Image 2" className="svg-image2" />
      </div>
    </HowToMintWrapper>
)}
    </>
  );
};

export default HowToMint;
