 

import chef from "../../../../assets/images/team/chef1.webp";
import edu from "../../../../assets/images/team/sword.webp";
import wommen from "../../../../assets/images/team/women.webp";
import doctor from "../../../../assets/images/team/doctor.webp";
import mushroom from "../../../../assets/images/team/mushrooms.webp";
import bigSword from "../../../../assets/images/team/bigsword.webp";


import xicon from "../../../../assets/images/icons/xsocial.svg";


import underlineSVG from "../../../../assets/images/title/teamtitle.svg";
import maintitle from "../../../../assets/images/svgs/team.svg";

import TeamStyleWrapper from "./Team.style";

const Team = () => {
  const isMobileDevice = window.innerWidth <= 768; // Adjust the width threshold as needed

  return (


    <>
{isMobileDevice ? (

    <TeamStyleWrapper>
      <div className="bithu_team_sect v1_team_sect" id="team">
        <div className="v1_team_overlay">
          <div className="container">
          <img className="title" src={maintitle} />

                <img src={underlineSVG} alt="Underline" className="underline-svg" />

                  <div className="container2mobile">
                        <div className="column1">
                          <img className="team-member-image" src={chef} />
                          <h5>Barrybutterhandz</h5>
                          <h6>Founder</h6>
                          <div >
                       <a href="https://x.com/barrybutterhand" target="_blank" >   <button className="iconsheader"><img src={xicon} alt="Logo" /> </button> </a>

                          </div>

                        </div>
                        <div className="column1">
                        <img className="team-member-image" src={edu} />
                        <h5>Edu</h5>
                        <h6>Legal Advisor</h6>
                        <div >
                        <a href="https://x.com/edutainft" target="_blank" >    <button className="iconsheader"><img src={xicon} alt="Logo" /> </button></a>
                        </div>
                        </div>
                 
      

                  </div>
                  <div className="container2mobile">
                        <div className="column1">
                          <img className="team-member-image" src={doctor} />
                          <h5>0xDrs</h5>
                          <h6>Operations</h6>
                          <div >
                          <a href="https://x.com/0xDrs_"  target="_blank">    <button className="iconsheader"><img src={xicon} alt="Logo" /> </button></a>

                          </div>

                        </div>

                  

                        <div className="column1">
                        <img className="team-member-image" src={wommen} />
                        <h5>Bettybutterhandz</h5>
                        <h6>Community Lead</h6>
                        <div >
                        <a href="https://x.com/fraggydoteth" target="_blank" >   <button className="iconsheader"><img src={xicon} alt="Logo" /> </button></a>

                        </div>

                        </div>

                  </div>

                  <div className="container2mobile">
          
                        <div className="column1">
                        <img className="team-member-image" src={mushroom} />
                        <h5>Matt</h5>
                        <h6>Dev</h6>
                        <div >
                        <a href="https://twitter.com/Shinitanabe" target="_blank" >    <button className="iconsheader"><img src={xicon} alt="Logo" /> </button></a>

                        </div>

                        </div>
                        <div className="column1">
                        <img className="team-member-image" src={bigSword} />
                        <h5>Izeeyahmon</h5>
                        <h6>Dev</h6>
                        <div >
                        <a href="https://x.com/izeeyahmon"  target="_blank">   <button className="iconsheader"><img src={xicon} alt="Logo" /> </button></a>
                        </div>
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
            <div> 
            <img  src={maintitle} />

            </div>
                <img src={underlineSVG} alt="Underline" className="underline-svg" />

                  <div className="container2">
                        <div className="column1">
                          <img className="team-member-image" src={chef} />
                          <h3>Barrybutterhandz</h3>
                          <h4>Founder</h4>
                          <div className="hidden">
                          <a href="https://x.com/barrybutterhand" target="_blank" >     <button className="iconsheader"><img src={xicon} alt="Logo" /> </button></a>

                          </div>

                        </div>
                        <div className="column1">
                        <img className="team-member-image" src={wommen} />
                        <h3>Bettybutterhandz</h3>
                        <h4>Community Lead</h4>
                        <div className="hidden">
                        <a href="https://x.com/fraggydoteth" target="_blank" >    <button className="iconsheader"><img src={xicon} alt="Logo" /> </button></a>

                        </div>

                        </div>
                        <div className="column1">
                        <img className="team-member-image" src={edu} />
                        <h3>Edu</h3>
                        <h4>Legal Advisor</h4>
                        <div className="hidden">
                        <a href="https://x.com/edutainft"  target="_blank">   <button className="iconsheader"><img src={xicon} alt="Logo" /> </button></a>
                        </div>
                        </div>

                  </div>
                  <div className="container2">
                        <div className="column1">
                          <img className="team-member-image" src={doctor} />
                          <h3>0xDrs</h3>
                          <h4>Operations</h4>
                          <div className="hidden">
                          <a href="https://x.com/0xDrs_" target="_blank">     <button className="iconsheader"><img src={xicon} alt="Logo" /> </button></a>

                          </div>

                        </div>
                        <div className="column1">
                        <img className="team-member-image" src={mushroom} />
                        <h3>Matt</h3>
                        <h4>Dev</h4>
                        <div className="hidden">
                        <a href="https://twitter.com/Shinitanabe" target="_blank">  <button className="iconsheader"><img src={xicon} alt="Logo" /> </button></a>

                        </div>

                        </div>
                        <div className="column1">
                        <img className="team-member-image" src={bigSword} />
                        <h3>Izeeyahmon</h3>
                        <h4>Dev</h4>
                        <div className="hidden">
                        <a href="https://x.com/izeeyahmon" target="_blank" >    <button className="iconsheader"><img src={xicon} alt="Logo" /> </button></a>
                        </div>
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
