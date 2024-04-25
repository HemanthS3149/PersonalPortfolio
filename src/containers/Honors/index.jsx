import React from "react";
import { BsInfoCircleFill } from 'react-icons/bs';
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from "react-simple-animate";
import './style.scss'
import img1 from "./Cert1.png";
import img2 from "./Cert2.png";
import img3 from "./Merit Scholarship.jpeg";
import img4 from "./Cert3.png";
import img5 from "./Cert4.png";

function Images1() {
    return (
        <div>
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img4} alt="" />
            <img src={img5} alt="" />
        </div>
    );
}
function Images2(){
    return (
        <div>
            <img src={img3} alt=""/>
        </div>
    )
}

const Honors = () => {
    return (
        <section id="honors" className="honors">
            <PageHeaderContent
                headerText="Honors And Certificates"
                icon={<BsInfoCircleFill size={40} />}
            />
            <div className="honor_content">
                <div className="honor_content_content1">
                    <Animate
                        play
                        duration={1.5}
                        delay={1}
                        start={{
                            transform: 'translateX(-1500px)'
                        }}
                        end={{
                            transform: 'translateX(0px)'
                        }}
                    >
                        <h3 className="header">Certifications</h3>
                        <Images1 />

                    </Animate>
                    <Animate
                        play
                        duration={1.5}
                        delay={1}
                        start={{
                            transform: 'translateX(1550px)'
                        }}
                        end={{
                            transform: 'translateX(0px)'
                        }}
                    >
                        <h3 className="header">Honors</h3>
                        <Images2/>
                    </Animate>
                </div>
            </div>
        </section>
    )
}

export default Honors;
