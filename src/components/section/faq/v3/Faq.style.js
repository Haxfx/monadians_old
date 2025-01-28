import styled from "styled-components";
import middle from "../../../../assets/images/middleimage.svg"

export const FAQStyleWrapper = styled.section`

.title {
  max-width:125px;
}


margin-top:8%;
.answer{
  margin-top:5%;
  color:#ffffff;
  
}


  position: relative;
  padding-bottom: 70px;

  .container{
    width:100%;
    margin-top:5%;
    display:flex;

    .column1{
      width:50%;
      height:250px;
    }
    .column2{
      height:250px;

      width:50%;
    }

  }
  .container_mobile { 
    margin-top:5%;
  }

  .container2mobile { 
    text-align:center;
    width:100%;
    background: url(${middle}) no-repeat ;
    background-size: 30%; /* Set maximum size of 100 pixels for the background image */
    background-position: -15% 25%; /* Position the background image 10% from the left and 10% from the bottom */

  
  
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

  .container2{
    text-align:center;
    width:100%;
    background: url(${middle}) no-repeat ;

  
  
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

  .bithu_title_text {
    font-family: Popping!important;
    color: #fff;
    margin-top: 50px;
    span {
      display: block;
      a {
        text-decoration: none;
        color: #00fca1;
        padding-left: 10px;
        font-family: Popping!important;
      }
    }
  }
  .bithu_faq_content {
    margin-top: 5%!important;
    max-width: 90%;
    width: 100%;
    margin: auto;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }


  .bithu_faq_questions {
  
    margin: 0 25px; /* Adjust the margin as needed */

    .faq_questions {
      padding:3%;
      margin:3%;
      position: relative;
      z-index: 1;

      .accordion__item + .accordion__item {
        margin-top: 10px;
      }
    }
  }

  .bithu_faq_questions2{
  
    margin: 0 25px; /* Adjust the margin as needed */

    .faq_questions {
      padding:3%;
      margin:3%;
      position: relative;
      z-index: 1;

      .accordion__item + .accordion__item {
        margin-top: 10px;
      }
    }
  }
  .icon-wrapper{
    float:right;
  }
  .accordion__item {
    margin-top:10px;
    cursor:pointer;
    background-color: rgba(71, 51, 94, 0.8);
    border-radius:50px;
    backdrop-filter: blur(10px);
    padding:15px;
  }
  .faq-container {
    /* Apply styles to isolate the FAQ component */
    padding: 20px; /* Add padding or other styles as needed */
  }
  .accordion__header {
    h5 {
      display: flex;
      align-items: center;
      height: 76px;
      margin-bottom: 0px;
      padding: 0 29px;
      color: rgba(255, 255, 255, 0.8);
      font-size: 24px;
      line-height: 34px;
      text-transform: none;
    }
  }

  .accordion__body {
    p {
      padding: 0px 48px 24px 29px;
      font-family: Popping!important;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 28px;
      color: rgba(255, 255, 255, 0.7);
      margin-bottom: 0px;
      max-width: 100%;
    }
  }

  .faq_bg_wattermark {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 0;
  }

  @media only screen and (max-width: 991px) {
    .accordion__header {
      h5 {
        font-size: 18px;
        line-height: 28px;
      }
    }
  }

  @media only screen and (max-width: 667px) {
    .section_title {
      width: 70%;
    }
    .bithu_title_text {
      margin: 30px 0 57px 0;
    }
  }

  @media only screen and (max-width: 500px) {
    .accordion__header {
      h5 {
        font-size: 20px;
        line-height: 25px;
      }
    }

    .accordion__body {
      p {
        font-size: 14px;
        line-height: 25px;
      }
    }
  }

  @media only screen and (max-width: 480px) {
    .accordion__header {
      h5 {
        font-size: 18px;
      }
    }
  }
`;

