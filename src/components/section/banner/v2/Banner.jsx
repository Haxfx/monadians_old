import React, { useState } from "react";
import BannerStyleWrapper from "./Banner.style";
import maintitle from "../../../../assets/images/icons/iconheader.svg";

const Banner = () => {
  const [showModal, setShowModal] = useState(false);

  const handleButtonClick = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <BannerStyleWrapper className="bithu_v2_baner_sect" id="home">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <button className="buttonposition" onClick={handleButtonClick}>Click Me</button>
            {showModal && (
              <div className="modal">
                <div className="modal-content">
                  <span className="close" onClick={closeModal}>&times;</span>
                  <p>Mint is not open yet.
                
                  </p>
                  <img src={maintitle} />

                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </BannerStyleWrapper>
  );
};

export default Banner;
