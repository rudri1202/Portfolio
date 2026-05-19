import React from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react";
import Coder from '../LottieFiles/coder.json';
import { SiMicrosoftazure } from 'react-icons/si';
import { HiAcademicCap } from 'react-icons/hi';
import { BsBriefcaseFill } from 'react-icons/bs';
import MsCertificate from '../Microsoft_Internship_Certificate_-_Rudri_Jani_-_1760747.pdf';

const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>Get to <b>know</b> me!</h1>

          <p>
            Hi, I'm <b>Rudri Jani</b> — a B.Tech CSE graduate from <b>IIT Jodhpur</b> (Surat, Gujarat).
            I build software that is fast, clean, and actually useful. My work spans full-stack web apps,
            backend systems, and applied AI/ML — often all three at once.
          </p>

          <div className='experienceSection'>

            <div className='expCard'>
              <div className='expCardHeader'>
                <SiMicrosoftazure className='expIcon' />
                <div>
                  <span className='expRole'>Software Engineering Intern</span>
                  <span className='expCompany'>Microsoft</span>
                </div>
              </div>
              <p className='expDesc'>
                Built <b>PackMan-Insights</b> — a cloud analytics platform on <b>Azure Functions</b> and{' '}
                <b>Azure Data Explorer</b> that monitors Python and npm package download metrics at scale,
                visualised through <b>Grafana</b> dashboards.
              </p>
              <a href={MsCertificate} className='expCertLink' target="_blank" rel="noopener noreferrer">
                View Internship Certificate →
              </a>
            </div>

            <div className='expCard'>
              <div className='expCardHeader'>
                <HiAcademicCap className='expIcon' />
                <div>
                  <span className='expRole'>B.Tech, Computer Science & Engineering</span>
                  <span className='expCompany'>Indian Institute of Technology, Jodhpur</span>
                </div>
              </div>
              <p className='expDesc'>
                Coursework in Data Structures & Algorithms, OS, Computer Networks, Computer Architecture,
                Machine Learning, and Database Systems. Active in competitive programming and hackathons.
              </p>
            </div>

          </div>

          <p>
            I gravitate toward problems that demand real engineering — distributed systems, LLM integrations,
            optimisation algorithms, scalable APIs. I've shipped production code in <b>Python, Java,
            TypeScript</b>, and <b>C++</b>, with frameworks like <b>FastAPI, React, Spring Boot</b>,
            and cloud infra on <b>Azure</b> and <b>AWS</b>.
          </p>
          <br />
          <p>
            <BsBriefcaseFill style={{ marginRight: 6, color: '#9067C6' }} />
            <b>Actively looking</b> for full-time SWE / backend / AI roles.
            When I'm not coding I'm doing DSA, watching a sport, or tracking down good coffee.
            Links to reach me are in the footer!
          </p>
        </div>

        <div>
          <Tilt>
            <Lottie className="illustration" animationData={Coder} loop={true} />
          </Tilt>
        </div>
      </div>

      <h1 className='SkillsHeading'>Professional Skillset</h1>
      <div className='skills'>
        <Skills skill='Python' />
        <Skills skill='Java' />
        <Skills skill='Javascript' />
        <Skills skill='Typescript' />
        <Skills skill='C++' />
        <Skills skill='React' />
        <Skills skill='FastAPI' />
        <Skills skill='Node' />
        <Skills skill='Express' />
        <Skills skill='PostgreSQL' />
        <Skills skill='Redis' />
        <Skills skill='MongoDB' />
        <Skills skill='Azure' />
        <Skills skill='Firebase' />
        <Skills skill='Docker' />
        <Skills skill='TensorFlow' />
        <Skills skill='Kotlin' />
        <Skills skill='Git' />
        <Skills skill='Postman' />
      </div>
    </>
  );
};

export default About;
