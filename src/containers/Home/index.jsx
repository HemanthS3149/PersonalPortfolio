import React from "react";
import { useNavigate } from 'react-router-dom'
import { Animate } from 'react-simple-animate'
import './style.scss'

const Home = () => {
    const navigate = useNavigate();

    const handleNavigateToContactMePage = () => {
        navigate("/contact");
    }
    const downloadResume = () => {
        const link = document.createElement('a');
        link.href = 'https://docs.google.com/document/d/1ztYv2RYGS2o5tvQ5jltEXLj2VVr3TSF1WW_77Ke8NRQ/edit?usp=drive_link'; // Replace '/path/to/resume.pdf' with the actual path to your resume
        link.download = 'resume_Hemanth.pdf'; // Set the filename for the downloaded file
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section id="home" className="home">
            <div className="home__text-wrapper">
                    <h1>
                        Hello, I'm Hemanth Srinivasan
                        <br />
                        Student at VIT Vellore
                    </h1>
                </div>
            <Animate
                play
                duration={1.5}
                delay={1}
                start={{
                    transform: 'translateY(550px)'
                }}
                end={{
                    transform: "translateX(0px)"
                }}>

                <div className="home__contact-me">
                    <button onClick={handleNavigateToContactMePage}>Hire Me</button>
                    <button onClick={downloadResume}>Resume Download</button>
                </div>
            </Animate>
        </section>
    )
}

export default Home;
