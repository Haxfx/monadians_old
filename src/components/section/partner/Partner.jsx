import SectionTitle from "../../../common/sectionTitle";
import data from "../../../assets/data/partnerData";
import PartnerStyledWrapper from "./Partner.style";

import maintitle from "../../../../assets/images/svgs/team.svg";


const Partner = () => {

  const isMobileDevice = window.innerWidth <= 768; // Adjust the width threshold as needed

  
  return (
<>
    {isMobileDevice ? (

    <PartnerStyledWrapper>
      <div className="our_partners_sect">
        <div className="container">
        <img  src={maintitle} />

          <div className="our_partnar_content">
            <ul>
              {data?.map((logo, i) => (
                <li key={i}>
                  <img src={logo} alt="" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </PartnerStyledWrapper>

) : (

  <PartnerStyledWrapper>
  <div className="our_partners_sect">
    <div className="container">
    <img  src={maintitle} />

      <div className="our_partnar_content">
        <ul>
          {data?.map((logo, i) => (
            <li key={i}>
              <img src={logo} alt="" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
</PartnerStyledWrapper>

  )}

    </>
  );
};

export default Partner;
