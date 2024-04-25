import React from "react";
import {BsInfoCircleFill} from 'react-icons/bs';
import PageHeaderContent from "../../components/pageHeaderContent";
import {Animate} from 'react-simple-animate';
import './style.scss';
import {DiApple,DiAndroid} from 'react-icons/di';
import {FaDev,FaDatabase} from 'react-icons/fa'; 


const JobSummary1="An ardent front end developer with good knowledge in HTML, CSS, Javascript and ReactJS. Always on the lookout to build exciting webpages and websites.";
const JobSummary2="Learning the core concepts of Machine Learning for a couple of months now. Deeply interested in the field of Data Science and ML and loves to work with new algorithms and explore their effect on the dataset collected. Excited to play with new data!";
const personalDetails=[
    {
        label:"Name",
        value:"Hemanth Srinivasan",
    },
    {
        label:"Age",
        value:"19",
    },
    {
        label:"Address",
        value:"India",
    },
    {
        label:"Email",
        value:"hemanthsrini09@gmail.com",
    },
    {
        label:"Contact No",
        value:"+91 9080236770",

    }
]
const About=()=>{
    return(
        <section id="about" className="about">
            <PageHeaderContent
            headerText="About Me"
            icon={<BsInfoCircleFill size={40}/>}
            />

            <div className="about__content">
                <div className="about__content__personalWrapper">
                <Animate
                play
                duration={1.5}
                delay={1}
                start={{
                    transform: 'translateX(-900px)'
                }}
                end={{
                    transform: "translateX(0px)"
                }}>

                <h3>Front End Developer</h3>
                <p>{JobSummary1}</p>

                <h3>Data Science and Machine Learning Enthusiast</h3>
                <p>{JobSummary2}</p>
            </Animate>

            <Animate
                play
                duration={1.5}
                delay={1}
                start={{
                    transform: 'translateX(500px)'
                }}
                end={{
                    transform: "translateX(0px)"
                }}>

               <h3 className="personalInformationHeaderText">Personal Information</h3>
                  <ul>
                     {
                    personalDetails.map((item,i)=>(
                        <li key={i}>
                            <span className="title">{item.label}</span>
                            <span className="value">{item.value}</span>
                        </li>
                    ))
                      }
            </ul>
            </Animate>
            </div>

                <div className="about__content__servicesWrapper">
                    <Animate
                       play 
                       duration={1.5}
                       delay={1}
                       start={{
                        transform:"translateX(00px)",
                       }}
                       end={{
                        transform:"translateX(0px)",
                       }}
                       >
                    <div className="about__content__servicesWrapper__innerContent"><div>
                        <FaDev size={60} color="var(--yellow-theme-main-color)"/>
                    </div>
                    <div>
                    <DiAndroid size={60} color="var(--yellow-theme-main-color)"/>
                    </div>
                    <div>
                    <FaDatabase size={60} color="var(--yellow-theme-main-color)"/>
                    </div>
                    <div>
                    <DiApple size={60} color="var(--yellow-theme-main-color)"/>
                    </div>
                    </div>
                    </Animate>
            

                </div>

            
            </div>
        </section>
    )
};

export default About