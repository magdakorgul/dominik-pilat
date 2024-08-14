// import {useEffect, useState} from 'react';
import "../../src/App.css";


const About = () => {


    return (
        <div className="about-details">
                    
                    <div className="grid grid-cols-2 gap-4 ml-12 mr-14 mt-28 mb-14">
                       
                        <div >
                    <h1 className="text text-left text-3xl">Dominik Pilat</h1>
                
                    <p className="text text-left text-base mt-8 mb-4 leading-tight">Mauris id augue eu ligula mollis convallis nec at ligula. Praesent pharetra leo erat, et laoreet lacus mattis mollis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce placerat, orci vitae sollicitudin lacinia, justo massa ultrices nibh, at commodo mauris libero vitae mauris.
                        <br />
                        <br />
                        Mauris id augue eu ligula mollis convallis nec at ligula. Praesent pharetra leo erat, et laoreet lacus mattis mollis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce placerat, orci vitae sollicitudin lacinia, justo massa ultrices nibh, at commodo mauris libero vitae mauris.
                        <br />
                        <br />
                        Enquiries
                        dominic.pilat@gmail.com
                        instagram
                    </p>

                    </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <img alt="dominik" className="w-11/12 h-11/12" />
                        </div>
                </div>
    );
}


export default About;