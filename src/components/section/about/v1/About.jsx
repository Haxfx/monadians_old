
import aboutus from "../../../../assets/images/aboutus/about.webp";
import aboutusmobile from "../../../../assets/images/mobile/1.png";
import React, { useState } from 'react';
import maintitle from "../../../../assets/images/svgs/about.svg";
import "./about.css"

import {AboutStyleWrapper,AboutStyleWrapperMobile} from "./About.style";

const About = () => {


  const [activeTab, setActiveTab] = useState('tab1');

  const openTab = (tabName) => {
    setActiveTab(tabName);
  };

  const isMobileDevice = window.innerWidth <= 768; // Adjust the width threshold as needed


  return (
<>
{isMobileDevice ? (
<div>
<div className="container">
            <div className="firstabout">
               <img src={aboutusmobile} alt="img" />
            </div>
            </div>
  <div className="aboutTitle">
              <img src={maintitle} />

  </div>
  <div className="container">
   <div className="tab-button_mobile">
   <button className={`tab-button_mobile ${activeTab === 'tab1' ? 'active' : ''}`} onClick={() => openTab('tab1')}>
   Monadians
   </button>
   <button className={`tab-button_mobile ${activeTab === 'tab2' ? 'active' : ''}`} onClick={() => openTab('tab2')}>
   Salamax
   </button>
   <button className={`tab-button_mobile ${activeTab === 'tab3' ? 'active' : ''}`}  onClick={() => openTab('tab3')}>
     Dakůr
   </button>
   <button className={`tab-button_mobile ${activeTab === 'tab4' ? 'active' : ''}`}  onClick={() => openTab('tab4')}>
     Aegg
   </button>
 </div>


 <div className="v1_about_us_right_text">
   {/* Render tab content based on activeTab state */}
   {activeTab === 'tab1' && (
     <p>
The Monadians are a laid-back humanoid race that rely on advanced technology to live a life of leisure. Make no mistake however - when push comes to shove, the Monadians can duke it out with the best of them.
     <br/>
     <br/>

     <p> 
     Founded by a team of Monad enthusiasts, the Monadians exude a deep passion for the Monad ecosystem. Our ambition is to stand out as the premier collection in the ecosystem and become a nexus for collaboration. Beyond a mere PFP collection, Monadians represents a vibrant culture of like-minded individuals dedicated to enriching the Monad universe.
The minting process is just the initial stage of our project. Join us on this thrilling journey and brace yourself for a multitude of exciting developments ahead.
     </p>
     
     </p>


   )}
   {activeTab === 'tab2' && (
     <p>
   The Salamax, descendants of Salmonad, are a warrior tribe with little patience for technology. They are fiercely proud, live for combat and have been known to kill one another over the smallest of insults.
   <br/>
     <br/>

<p> 
Founded by a team of Monad enthusiasts, the Monadians exude a deep passion for the Monad ecosystem. Our ambition is to stand out as the premier collection in the ecosystem and become a nexus for collaboration. Beyond a mere PFP collection, Monadians represents a vibrant culture of like-minded individuals dedicated to enriching the Monad universe.
The minting process is just the initial stage of our project. Join us on this thrilling journey and brace yourself for a multitude of exciting developments ahead.
</p>
     </p>
   )}
   {activeTab === 'tab3' && (
     <p>
      Beings with a natural affinity for space travel and a deep-seated commitment to protect their newfound home. Raised on tales of Molandak's bravery and armed with advanced piloting skills inherited from their forebear, the dukar took to the skies as Monadia's defenders.
     
      <br/>
     <br/>

<p> 
Founded by a team of Monad enthusiasts, the Monadians exude a deep passion for the Monad ecosystem. Our ambition is to stand out as the premier collection in the ecosystem and become a nexus for collaboration. Beyond a mere PFP collection, Monadians represents a vibrant culture of like-minded individuals dedicated to enriching the Monad universe.
The minting process is just the initial stage of our project. Join us on this thrilling journey and brace yourself for a multitude of exciting developments ahead.
</p>
     </p>
   )}
      {activeTab === 'tab4' && (
     <p>
The Aegg society is deeply rooted in tradition and aristocracy. They occupy the highest echelons of Monadian society, holding esteemed positions in governance, commerce, and the arts. Family lineage and heritage are paramount to the Aegg, with each family tracing its roots through generations.
     
<br/>
     <br/>

<p> 
Founded by a team of Monad enthusiasts, the Monadians exude a deep passion for the Monad ecosystem. Our ambition is to stand out as the premier collection in the ecosystem and become a nexus for collaboration. Beyond a mere PFP collection, Monadians represents a vibrant culture of like-minded individuals dedicated to enriching the Monad universe.
The minting process is just the initial stage of our project. Join us on this thrilling journey and brace yourself for a multitude of exciting developments ahead.
</p>
     </p>
   )}
 </div>
 </div>
  </div>
//     <AboutStyleWrapperMobile id="about">
//          <div className="container">
//         <div className="row flex-row-reverse">
//           <div >
//             <div className="v1_about_us_left_sect sm-mt-60">
//               <img src={aboutus} alt="img" />
//             </div>
//           </div>
//           <div >
//             <div className="left-section">

//           <img src={maintitle} />
//       {/* Tab buttons */}
//       <div className="tab-buttons">
//                 <button className={`tab-button ${activeTab === 'tab1' ? 'active' : ''}`} onClick={() => openTab('tab1')}>
//                 Monadians
//                 </button>
//                 <button className={`tab-button ${activeTab === 'tab2' ? 'active' : ''}`} onClick={() => openTab('tab2')}>
//                 Salamax
//                 </button>
//                 <button className={`tab-button ${activeTab === 'tab3' ? 'active' : ''}`}  onClick={() => openTab('tab3')}>
//                   Dakůr
//                 </button>
//                 <button className={`tab-button ${activeTab === 'tab4' ? 'active' : ''}`}  onClick={() => openTab('tab4')}>
//                   Aegg
//                 </button>
//               </div>


//               <div className="v1_about_us_right_text">
//                 {/* Render tab content based on activeTab state */}
//                 {activeTab === 'tab1' && (
//                   <p>
//      The Monadians are a laid-back humanoid race that rely on advanced technology to live a life of leisure. Make no mistake however - when push comes to shove, the Monadians can duke it out with the best of them.
//                   <br/>
//                   <br/>

//                   <p> 
//                   Founded by a team of Monad enthusiasts, the Monadians exude a deep passion for the Monad ecosystem. Our ambition is to stand out as the premier collection in the ecosystem and become a nexus for collaboration. Beyond a mere PFP collection, Monadians represents a vibrant culture of like-minded individuals dedicated to enriching the Monad universe.
// The minting process is just the initial stage of our project. Join us on this thrilling journey and brace yourself for a multitude of exciting developments ahead.
//                   </p>
                  
//                   </p>


//                 )}
//                 {activeTab === 'tab2' && (
//                   <p>
//                 The Salamax, descendants of Salmonad, are a warrior tribe with little patience for technology. They are fiercely proud, live for combat and have been known to kill one another over the smallest of insults.
//                 <br/>
//                   <br/>

// <p> 
// Founded by a team of Monad enthusiasts, the Monadians exude a deep passion for the Monad ecosystem. Our ambition is to stand out as the premier collection in the ecosystem and become a nexus for collaboration. Beyond a mere PFP collection, Monadians represents a vibrant culture of like-minded individuals dedicated to enriching the Monad universe.
// The minting process is just the initial stage of our project. Join us on this thrilling journey and brace yourself for a multitude of exciting developments ahead.
// </p>
//                   </p>
//                 )}
//                 {activeTab === 'tab3' && (
//                   <p>
//                    Beings with a natural affinity for space travel and a deep-seated commitment to protect their newfound home. Raised on tales of Molandak's bravery and armed with advanced piloting skills inherited from their forebear, the dukar took to the skies as Monadia's defenders.
                  
//                    <br/>
//                   <br/>

// <p> 
// Founded by a team of Monad enthusiasts, the Monadians exude a deep passion for the Monad ecosystem. Our ambition is to stand out as the premier collection in the ecosystem and become a nexus for collaboration. Beyond a mere PFP collection, Monadians represents a vibrant culture of like-minded individuals dedicated to enriching the Monad universe.
// The minting process is just the initial stage of our project. Join us on this thrilling journey and brace yourself for a multitude of exciting developments ahead.
// </p>
//                   </p>
//                 )}
//                    {activeTab === 'tab4' && (
//                   <p>
// The Aegg society is deeply rooted in tradition and aristocracy. They occupy the highest echelons of Monadian society, holding esteemed positions in governance, commerce, and the arts. Family lineage and heritage are paramount to the Aegg, with each family tracing its roots through generations.
                  
// <br/>
//                   <br/>

// <p> 
// Founded by a team of Monad enthusiasts, the Monadians exude a deep passion for the Monad ecosystem. Our ambition is to stand out as the premier collection in the ecosystem and become a nexus for collaboration. Beyond a mere PFP collection, Monadians represents a vibrant culture of like-minded individuals dedicated to enriching the Monad universe.
// The minting process is just the initial stage of our project. Join us on this thrilling journey and brace yourself for a multitude of exciting developments ahead.
// </p>
//                   </p>
//                 )}
//               </div>

        
//             </div>
//           </div>
//         </div>
//       </div>
//     </AboutStyleWrapperMobile>

) : (
<AboutStyleWrapper id="about">
      <div className="container">
        <div className="row flex-row-reverse">
          <div className="col-md-6">
            <div className="v1_about_us_left_sect sm-mt-60">
              <img src={aboutus} alt="img" />
            </div>
          </div>
          <div className="col-md-6" style={{ zIndex: 999 }}>
            <div className="left-section">

              <img src={maintitle} />

      {/* Tab buttons */}
      <div className="tab-buttons">
                <button className={`tab-button ${activeTab === 'tab1' ? 'active' : ''}`} onClick={() => openTab('tab1')}>
                Monadians
                </button>
                <button className={`tab-button ${activeTab === 'tab2' ? 'active' : ''}`} onClick={() => openTab('tab2')}>
                Salamax
                </button>
                <button className={`tab-button ${activeTab === 'tab3' ? 'active' : ''}`}  onClick={() => openTab('tab3')}>
                  Dakůr
                </button>
                <button className={`tab-button ${activeTab === 'tab4' ? 'active' : ''}`}  onClick={() => openTab('tab4')}>
                  Aegg
                </button>
              </div>


              <div className="v1_about_us_right_text">
                {/* Render tab content based on activeTab state */}
                {activeTab === 'tab1' && (
                  <p>
     The Monadians are a laid-back humanoid race that rely on advanced technology to live a life of leisure. Make no mistake however - when push comes to shove, the Monadians can duke it out with the best of them.
                  <br/>
                  <br/>

                  <p> 
                  Founded by a team of Monad enthusiasts, the Monadians exude a deep passion for the Monad ecosystem. Our ambition is to stand out as the premier collection in the ecosystem and become a nexus for collaboration. Beyond a mere PFP collection, Monadians represents a vibrant culture of like-minded individuals dedicated to enriching the Monad universe.
The minting process is just the initial stage of our project. Join us on this thrilling journey and brace yourself for a multitude of exciting developments ahead.
                  </p>
                  
                  </p>


                )}
                {activeTab === 'tab2' && (
                  <p>
                The Salamax, descendants of Salmonad, are a warrior tribe with little patience for technology. They are fiercely proud, live for combat and have been known to kill one another over the smallest of insults.
                <br/>
                  <br/>

<p> 
Founded by a team of Monad enthusiasts, the Monadians exude a deep passion for the Monad ecosystem. Our ambition is to stand out as the premier collection in the ecosystem and become a nexus for collaboration. Beyond a mere PFP collection, Monadians represents a vibrant culture of like-minded individuals dedicated to enriching the Monad universe.
The minting process is just the initial stage of our project. Join us on this thrilling journey and brace yourself for a multitude of exciting developments ahead.
</p>
                  </p>
                )}
                {activeTab === 'tab3' && (
                  <p>
                   Beings with a natural affinity for space travel and a deep-seated commitment to protect their newfound home. Raised on tales of Molandak's bravery and armed with advanced piloting skills inherited from their forebear, the dukar took to the skies as Monadia's defenders.
                  
                   <br/>
                  <br/>

<p> 
Founded by a team of Monad enthusiasts, the Monadians exude a deep passion for the Monad ecosystem. Our ambition is to stand out as the premier collection in the ecosystem and become a nexus for collaboration. Beyond a mere PFP collection, Monadians represents a vibrant culture of like-minded individuals dedicated to enriching the Monad universe.
The minting process is just the initial stage of our project. Join us on this thrilling journey and brace yourself for a multitude of exciting developments ahead.
</p>
                  </p>
                )}
                   {activeTab === 'tab4' && (
                  <p>
The Aegg society is deeply rooted in tradition and aristocracy. They occupy the highest echelons of Monadian society, holding esteemed positions in governance, commerce, and the arts. Family lineage and heritage are paramount to the Aegg, with each family tracing its roots through generations.
                  
<br/>
                  <br/>

<p> 
Founded by a team of Monad enthusiasts, the Monadians exude a deep passion for the Monad ecosystem. Our ambition is to stand out as the premier collection in the ecosystem and become a nexus for collaboration. Beyond a mere PFP collection, Monadians represents a vibrant culture of like-minded individuals dedicated to enriching the Monad universe.
The minting process is just the initial stage of our project. Join us on this thrilling journey and brace yourself for a multitude of exciting developments ahead.
</p>
                  </p>
                )}
              </div>

        
            </div>
          </div>
        </div>
      </div>
    </AboutStyleWrapper>

)}
    </>
  );
};

export default About;
