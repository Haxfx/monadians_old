import { BannerV1WrapperMobile, BannerV1Wrapper } from "./Banner.style";
import maintitle from "../../../../assets/images/svgs/main.svg";



const Banner = () => {

  const isMobileDevice = window.innerWidth <= 768; // Adjust the width threshold as needed

  return (

<>
    {isMobileDevice ? (
      <BannerV1WrapperMobile>
      <div className="containermobile">
        <div className="row">
          <div className="col-lg-6">
            
          </div>
          <div className="col-lg-6">
          <div className="bithu_v1_baner_left_mobile">
          <img src={maintitle} />

        
            </div>
          </div>
        </div>
        
      </div>
          
    </BannerV1WrapperMobile>


      ) : (


    <BannerV1Wrapper id="home">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            
          </div>
          <div className="col-lg-6">
          <div className="bithu_v1_baner_left">
              <img src={maintitle} />
        
            </div>
          </div>
        </div>
        
      </div>
          
    </BannerV1Wrapper>
      )}
      </>
  );
};

export default Banner;
