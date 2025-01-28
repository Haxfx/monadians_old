 

import nitronFin from "../../../../assets/images/partners/nitro.png";
import demask from "../../../../assets/images/partners/demask1.png";

import color from "../../../../assets/images/partners/color.png";
import maintitle from "../../../../assets/images/svgs/partners.svg";

import TeamStyleWrapper from "./Team.style";
import underlineSVG from "../../../../assets/images/title/partnerstitle.svg";

const Team = () => {
  const isMobileDevice = window.innerWidth <= 768; // Adjust the width threshold as needed


  return (
    <>
{isMobileDevice ? (


    <TeamStyleWrapper>
      <div className="bithu_team_sect v1_team_sect" id="team">
        <div className="v1_team_overlay">
          <div className="container">
          <img  className="title" src={maintitle} />
                <img src={underlineSVG} alt="Underline" className="underline-svg" />

                  <div className="container2partners">
                        <div className="column1">
                          <img src={demask} />
                          <h4>DEMASK</h4>
                        </div>
                        <div className="column1">
                        <img src={color} />
                        <h4>Cloverful.com</h4>

                        </div>
                        <div className="column1">
                        <img src={nitronFin} />
                        <h4>NitroFinance</h4>

                        </div>

                  </div>

          </div>
        </div>
      </div>
    </TeamStyleWrapper>
    ) : (
      <TeamStyleWrapper>
      <div className="bithu_team_sect v1_team_sect" id="team">
        <div className="v1_team_overlay">
          <div className="container">
          <img  src={maintitle} />
                <img src={underlineSVG} alt="Underline" className="underline-svg" />

                  <div className="container2">
                        <div className="column1">
                          <img src={demask} />
                          <h4>DEMASK</h4>
                        </div>
                        <div className="column1">
                        <img src={color} />
                        <h4>Cloverful.com</h4>

                        </div>
                        <div className="column1">
                        <img src={nitronFin} />
                        <h4>NitroFinance</h4>

                        </div>

                  </div>

          </div>
        </div>
      </div>
    </TeamStyleWrapper>
)}
    </>
  );
};

export default Team;
