import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { FAQStyleWrapper } from "./Faq.style";
import underlineSVG from "../../../../assets/images/title/faqtitle.svg";
import maintitle from "../../../../assets/images/svgs/faq.svg";

const Faq = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [expandedIndexx, setExpandedIndexx] = useState(null);

  
  const data2 = [
    {
      question: "What are Monadians ?       ",
      answer: "An exclusive PFP collection aiming to be the pioneers in the future Monad Ecosystem.",
    },
    {
      question: "What is Monad ?       ",
      answer: "Monad is a decentralized, developer-forward Layer1 smart contract platform that ushers in a new paradigm of possibility through pipelined execution of Ethereum transactions.",
    },
    {
      question: "When will the mint take place ?       ",
      answer: "The Monadians mint will take place right after Monad Mainnet launch, which is scheduled for Q4 2024.",
    }
  ];

  const data = [
    {
      question: "What is the Monadians supply ?       ",
      answer: "10,000",
    },
    {
      question: "What is the Monadians mint price ?       ",
      answer: "TBA",
    },
    {
      question: "Is Monadians open for collabs ?       ",
      answer: "The Monadians are currently not open for collabs.",
    },
  ];

  const handleToggle = (index) => {
    if (index === expandedIndex) {
      setExpandedIndex(null);
      setExpandedIndexx(null);

    } else {
      setExpandedIndex(index);
      setExpandedIndexx(null);

    }
  };
  const handleToggle2 = (indexx) => {
    if (indexx === expandedIndexx) {
      setExpandedIndexx(null);
      setExpandedIndex(null); // Close both indexes
    } else {
      setExpandedIndex(null); // Close the other index
      setExpandedIndexx(indexx);
    }
  };


  const isMobileDevice = window.innerWidth <= 768; // Adjust the width threshold as needed


  return (
    <>
    {isMobileDevice ? (

    <FAQStyleWrapper className="bithu_faq_sect" id="faq">
      <div className="container2mobile">
        <div>
        <img className="title" src={maintitle} />

        </div>
        <img src={underlineSVG} alt="Underline" className="underline-svg" />
        <div className="container_mobile">

          <div className="bithu_faq_questions">
            {data2.map((item, index) => (
              <div key={index} className="accordion__item" onClick={() => handleToggle(index)}>
                <div
                  className={`question ${expandedIndex === index ? 'expanded' : ''}`}
                  
                >
                  <span>{item.question}</span>
                  <span className="icon-wrapper"> {expandedIndex === index ? <FaMinus /> : <FaPlus />}</span>
                </div>
                {expandedIndex === index && <div className="answer">{item.answer}</div>}
              </div>
            ))}



          </div>


          <div className="bithu_faq_questions">
          {data.map((item, index) => (
              <div key={index} className="accordion__item"  onClick={() => handleToggle2(index)}>
                <div
                  className={`question ${expandedIndexx === index ? 'expanded' : ''}`}
                 
                >
                  <span>{item.question}</span>
                  <span className="icon-wrapper"> {expandedIndexx === index ? <FaMinus /> : <FaPlus />}</span>
                </div>
                {expandedIndexx === index && <div className="answer">{item.answer}</div>}
              </div>
            ))}
            </div>

            </div>
      </div>
    </FAQStyleWrapper>

) : (
  <FAQStyleWrapper className="bithu_faq_sect" id="faq">
  <div className="container2">
    <div>
  <img  src={maintitle} />
  </div>
    <img src={underlineSVG} alt="Underline" className="underline-svg" />
    <div className="container">

<div className="column1">
      <div className="bithu_faq_questions">
        {data2.map((item, index) => (
          <div key={index} className="accordion__item" onClick={() => handleToggle(index)}>
            <div
              className={`question ${expandedIndex === index ? 'expanded' : ''}`}
              
            >
              <span>{item.question}</span>
              <span className="icon-wrapper"> {expandedIndex === index ? <FaMinus /> : <FaPlus />}</span>
            </div>
            {expandedIndex === index && <div className="answer">{item.answer}</div>}
          </div>
        ))}



      </div>

</div>

<div className="column2">
      <div className="bithu_faq_questions">
      {data.map((item, index) => (
          <div key={index} className="accordion__item"  onClick={() => handleToggle2(index)}>
            <div
              className={`question ${expandedIndexx === index ? 'expanded' : ''}`}
             
            >
              <span>{item.question}</span>
              <span className="icon-wrapper"> {expandedIndexx === index ? <FaMinus /> : <FaPlus />}</span>
            </div>
            {expandedIndexx === index && <div className="answer">{item.answer}</div>}
          </div>
        ))}
        </div>

        </div>
        </div>
  </div>
</FAQStyleWrapper>

  )}
    </>
  );
};

export default Faq;
