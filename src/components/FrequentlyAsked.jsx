import React, { useState } from 'react'
import { FaAngleRight, FaExclamationTriangle, FaSortUp } from "react-icons/fa";

function FrequentlyAsked() {
    const [quesAnswers, setQuesAnswers]                = useState([
                {
                    "question" : "How does Scrilla work",
                    "answer"   : "It gives you cash back on medicine" 
                },
                {
                    "question" : "Is my personal and banking information safe",
                    "answer"   : "We can hope so" 
                },
                {
                    "question" : "Does it cost anything to use Scrilla",
                    "answer"   : "Nope! Scrilla is 100% free to download and use the App Store" 
                },
            ]);
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

  return (
    <div className="section-area">
        <div className="container">
            <div className="middle-info">
                <h3 className="boost3 text-center">Frequently Asked Questions</h3>
                    <div className="faq-list">
                    {
                        quesAnswers.map((item, index) => (
                            <div
                                key={index}
                                className="faq-item border-b cursor-pointer"
                                onClick={() => toggleFAQ(index)}
                                >
                                <div className="quesion-point-view">
                                    <div className={`qu-icon transition-transform ${
                                                activeIndex === index ? "rotate-90" : ""
                                            }`}>
                                        <FaSortUp />
                                    </div>
                                    <div className="font-semibold">{item.question}</div>
                                    
                                </div>
                                {activeIndex === index && (
                                    <p className="mt-2 text-gray-600">{item.answer}</p>
                                )}
                                </div>
                            ))
                        }
                    </div>
            </div>

        </div>
    </div>
  )
}

export default FrequentlyAsked