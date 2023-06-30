import React, { useState } from 'react'
import "./Syllabus.css"

const Syllabus = () => {
    const[desc,setdesc]=useState(true)
    const[syl,setsyl]=useState(false)

    const handledesc =()=>{
        setdesc(true)
        setsyl(false)
    }
    const handlesyl =()=>{
        setdesc(false)
        setsyl(true)
    }
  return (
    <div className='syllabus-width-div'>
    <div className='syllabus-main-div'>
    <div className='syllabus-main-div-one'>
    <div className='syllabus-detail-info-div'>
        <div className={desc==true ?'sylla-bus-section-active':'sylla-bus-section'} onClick={handledesc}>Description</div>
        <div className={syl==true ?'sylla-bus-section-active':'sylla-bus-section'} onClick={handlesyl}>Syllabus</div>
    </div>

    {desc &&
    <div className='descr-main-div'>
        <h1 className='desc-he-tag'>Course Overview</h1>
        <p className='desc-pa-tag'>This comprehensive course covers the fundamentals of web development, including HTML, CSS, JavaScript, jQuery, Bootstrap, and the MERN stack (MongoDB, Express.js, React.js, Node.js). Throughout the program, you will engage in hands-on exercises, both in the classroom and through lab assignments, to gain practical experience in creating dynamic and responsive websites.</p>
        <h1 className='desc-he-tag'>Course Objectives:</h1>
        <p className='desc-pa-tag'>The primary objective of this course is to provide you with a strong foundation in web design and development. You will learn the syntax, semantics, and idioms of HTML, CSS, JavaScript, jQuery, and Bootstrap. Additionally, you will gain confidence in building interactive web applications using the MERN stack, which combines MongoDB for the database, Express.js and Node.js for the server-side, and React.js for the front-end.</p>
        <h1 className='desc-he-tag'>Target Audience:</h1>
        <p className='desc-pa-tag'>This course is designed for a diverse range of individuals:</p>

        <li><b>Students:</b></li>
        <p className='desc-pa-tag'>All students pursuing technical or professional courses related to computer science or information technology can benefit from this course. Whether you are a beginner or have some prior programming knowledge, this course will enhance your web development skills.</p>
        <li><b>Teachers/Faculties:</b></li>
        <p className='desc-pa-tag'>Computer science teachers and faculties who are interested in acquiring new web development skills can join this course to enhance their teaching abilities and keep up with the latest industry trends.</p>
        <li><b>Professionals:</b></li>
        <p className='desc-pa-tag'>IT professionals seeking to upgrade their skills or transition into web development can enroll in this course. It provides a comprehensive understanding of HTML, CSS, JavaScript, jQuery, Bootstrap, and the MERN stack, allowing professionals to expand their career opportunities.</p>


        <h1 className='desc-he-tag'>Additional Learning Opportunities:</h1>
        <p className='desc-pa-tag'>In addition to the regular course content, we offer value-added workshops to provide you with extra learning opportunities. These workshops cover various topics beyond the core curriculum, offering you a chance to explore additional areas of interest and enhance your overall knowledge.</p>
        <h1 className='desc-he-tag'>Course Features:</h1>
        <li><b>Updated Quality Content: </b></li>
        <p className='desc-pa-tag'>Our course content is regularly updated to meet the ever-evolving demands of the industry, ensuring that you learn the latest techniques and best practices in web development.</p>
  
        
        <h1 className='desc-he-tag'>Test & Evaluation:</h1>
        <p className='desc-pa-tag'>Throughout the course, you will be assigned various assignments to enhance your learning experience. These assignments will help you apply the concepts you have learned and gauge your understanding. At the end of the program, a final assessment will be conducted to evaluate your overall knowledge and skills.</p>
        <h1 className='desc-he-tag'>Certification:</h1>
        <p className='desc-pa-tag'>Upon successful completion of the course, you will receive a certificate of completion, validating your proficiency in HTML, CSS, JavaScript, jQuery, Bootstrap, and the MERN stack. </p>
    </div>
}
{syl &&

    <div className='descr-main-div'>
    <div className='details-data-of-syl'>
        <h1 className='header-ofsyll'>1. Introduction to Web Development</h1>
        <li className='header-ofsyll-li'>Overview of web technologies</li>
        <li className='header-ofsyll-li'>Understanding the client-server model</li>
        <li className='header-ofsyll-li'>Introduction to front-end and back-end development</li>
    </div>

    <div className='details-data-of-syl'>
        <h1 className='header-ofsyll'>2. HTML Fundamentals</h1>
        <li className='header-ofsyll-li'>Structure of HTML documents</li>
        <li className='header-ofsyll-li'>HTML tags and attributes</li>
        <li className='header-ofsyll-li'>Creating headings, paragraphs, lists, and links</li>
        <li className='header-ofsyll-li'>Working with images and multimedia</li>
        <li className='header-ofsyll-li'>Creating tables and forms</li>
    </div>

    <div className='details-data-of-syl'>
        <h1 className='header-ofsyll'>3. CSS Fundamentals</h1>
        <li className='header-ofsyll-li'></li>
    </div>

    <div className='details-data-of-syl'>
        <h1 className='header-ofsyll'>1.</h1>
        <li className='header-ofsyll-li'></li>
    </div>

    </div>
}
    </div>
    </div>
    </div>
  )
}

export default Syllabus