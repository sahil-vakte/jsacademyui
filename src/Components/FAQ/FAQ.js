import React, { useState } from 'react'
import "./FAQ.css"
import { AiFillCaretDown } from "react-icons/ai";


const FAQ = () => {
    const faqData = [
        {
          question: "What sets your institute apart from others?",
          answer:
            "At our institute, we differentiate ourselves by providing hands-on, practical training that focuses on real-world scenarios. Our courses are designed to bridge the gap between theory and practice, equipping students with the skills they need to succeed in the software industry.",
        },
        {
            question: "Are your courses up to date with the latest industry trends and technologies?",
          answer:
            "Absolutely! We continually update our course curriculum to align with the latest industry trends and technologies. We understand the importance of staying current in the rapidly evolving software field, and we strive to equip our students with the most relevant skills that employers are seeking.",
        },
        {
            question: "Do you offer any practical projects or real-world case studies as part of the courses?",
          answer:
            "Yes, practical projects and real-world case studies are integral parts of our training methodology. We believe in the power of hands-on experience to reinforce concepts and develop problem-solving skills. Our courses often include projects that simulate real-world scenarios, enabling students to apply their knowledge in practical settings.",
        },
        {
            question: "Are there any alumni events or ongoing learning opportunities after completing the courses?",
          answer:
            "Yes, we have an active alumni community that organizes regular events and learning opportunities. As an alumnus, you can continue to benefit from our network, participate in workshops, attend industry talks, and stay updated on the latest trends in the software field. We believe in lifelong learning and supporting our graduates throughout their careers.",
        },
        {
            question: "Are the courses suitable for beginners?",
          answer:
            "Yes, we offer courses that cater to students with different levels of experience, including beginners. Each course has specific prerequisites mentioned, so you can choose the appropriate level based on your knowledge and skills.",
        },
        {
            question: "What are the qualifications of the instructors?",
          answer:
            "Our instructors are highly experienced professionals with extensive knowledge and expertise in their respective fields. They possess industry experience and are skilled at teaching and mentoring students.",
        },
        {
            question: "How long are the courses?",
          answer:
            "The duration of each course varies depending on the specific program. Some courses are intensive boot camps that last a few weeks, while others are longer-term programs spanning several months. The duration is typically mentioned in the course details on our website.",
        },
        {
            question: "Is there any flexibility in class schedules?",
          answer:
            "Yes, we understand that students have different schedules and commitments. Therefore, we offer both full-time and part-time courses. The schedule options are mentioned in the course details, allowing you to choose the one that suits your availability.",
        },
    ]
    const [openFaqIndex, setOpenFaqIndex] = useState(null);
    
    const handleOpenFaq = (index) => {
      setOpenFaqIndex(index === openFaqIndex ? null : index);
    };

  return (
    <div>
         {faqData.map((faq, index) => (
        <div className="dr-faq-width-div" key={index}>
          <div className="dr-faq-main-div" onClick={() => handleOpenFaq(index)}>
            <h3>{faq.question}</h3> <AiFillCaretDown style={{fill:"black"}}/>
          </div>
          {openFaqIndex === index && (
            <div className="dr-faq-flex-div">
              <p>{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default FAQ