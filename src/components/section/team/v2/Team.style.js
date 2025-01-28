import styled from "styled-components";

const TeamStyleWrapper = styled.section`
  backdrop-filter: blur(5px);
  position: relative;
  z-index: 1;

  .underline-svg{
    margin-left:15%;
  }
  .title{
    max-width:350px;

  }

  .container2partners{
    margin-top:10%;
    width:100%;
    display:flex;
    .column1{
      width:33%;
      h4{
        font-size:14px!important;
      }
      img{
        
        width:80px;
        height:80px;
        margin-bottom:10%;
      }
    }
  }

  .container2{
    width:100%;
    display:flex;
    margin-top:10%;

    .column1{
      width:33%;

      img {
        width:150px;
        height:150px;
        margin-bottom:10%;

      }
      
    }
  }

  .container{
    text-align:center;
    width:100%;

    .column1{
      width:33%;
      
    }


  h2 {
    font-family: Popping!important;
    font-weight: 900;
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
    padding: 0px 0 115px;
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
