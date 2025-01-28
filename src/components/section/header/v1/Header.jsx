import { useEffect, useState } from "react";

import NavWrapper from "./Header.style";
import logo from "../../../../assets/images/icons/Logo.svg";
import logoM from "../../../../assets/images/icons/iconheader.svg";
import button from "../../../../assets/images/icons/button.svg";

import wallet from "../../../../assets/images/icons/wallet.svg";
import xicon from "../../../../assets/images/icons/xsocial.svg";
import logomobile from "../../../../assets/images/footer/iconfooter.svg"
import connect from "../../../../assets/images/icons/connectbutton.png"

import discordIcon from "../../../../assets/images/icons/discord.svg";



import styled from 'styled-components';

const PurpleButton = styled.button`
  border-radius: 25%;
  background-color: purple;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  outline: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: darkpurple;
  }
`;

const Header = () => {
  
  useEffect(() => {


    return () => {
    };
  }, []);
  

  const isMobileDevice = window.innerWidth <= 768; // Adjust the width threshold as needed

  return (
    <>
{isMobileDevice ? (
        // Content for mobile devices


        <NavWrapper className="bithu_header" id="navbar">
        <div className="container">

<div className="column_1_mobile">
<a href="https://discord.gg/Monadians" target="_blank" alt=""><button className="iconsheader" ><img src={discordIcon} alt="Logo" /> </button></a>
 <a href="https://x.com/monadians_xyz" target="_blank">       <button className="iconsheader" ><img src={xicon} alt="Logo" /> </button></a>

</div>
<div className="column_2_mobile">
  <div className="logo_mobile">
  <a href="/">
<img src={logoM} alt="mondia nft logo" />
</a>
</div>

</div>
<div className="column_3_mobile">
  
<img src={button} /> 

  
</div>

        </div>
        </NavWrapper>
      ) : (
    
      <NavWrapper className="bithu_header" id="navbar">
        <div className="container">

        <div class="column_1">
        <div className="bithu_menu_list">
                <ul>
                  <li>
                    <a >Mint</a>
                  </li>
                  <li>
                    <a href="#about">About</a>
                  </li>
                  <li>
                    <a href="#team">Team</a>
                  </li>
                  <li>
                    <a href="#faq">FAQ</a>
                  </li>
                </ul>
              </div>
                  </div>
    <div class="column_2">
    <div className="logo">
                <a href="/">
                  <img src={logo} alt="mondia nft logo" />
                </a>
              </div>    </div>
    <div class="column_3">
    <img src={button} /> 

        {/* <span className="connectback"> 
          <img src={wallet} /> 
          
          Connect 
        
        </span> */}
       <a href="https://discord.gg/Monadians" target="_blank" alt="">  <button className="iconsheader" ><img src={discordIcon} alt="Logo" /> </button></a> 
       <a href="https://x.com/monadians_xyz" target="_blank" alt=""> <button className="iconsheader"  ><img src={xicon} alt="Logo" /> </button> </a>
    </div>
        </div>
      </NavWrapper>

      )}
    </>

  );
};

export default Header;
