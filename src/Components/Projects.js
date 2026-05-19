import React from 'react';
import ProjectBox from './ProjectBox';

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>

      <h2 className='projectCategoryHeading'>Production & Full-stack</h2>
      <div className='project'>
        <ProjectBox projectName="CalTrack" />
        <ProjectBox projectName="YUMI" />
        <ProjectBox projectName="PackMan-Insights" />
        <ProjectBox projectName="SkillSync" />
        <ProjectBox projectName="Marudhra Drishti" />
        <ProjectBox projectName="Generic Data Encryption Module" />
      </div>

      <h2 className='projectCategoryHeading'>Systems & Distributed Computing</h2>
      <div className='project'>
        <ProjectBox projectName="Peer-to-Peer Gossip Network" />
        <ProjectBox projectName="OMNeT++ Network Topology Generator" />
        <ProjectBox projectName="Microservices Architecture" />
        <ProjectBox projectName="Minimum Cost Metro Navigation" />
        <ProjectBox projectName="MIPS Processor Simulator" />
        <ProjectBox projectName="Android Process Monitor" />
      </div>

      <h2 className='projectCategoryHeading'>Machine Learning</h2>
      <div className='project'>
        <ProjectBox projectName="Music Genre Classification" />
        <ProjectBox projectName="Face Detection & Clustering" />
        <ProjectBox projectName="Neural Networks from Scratch" />
        <ProjectBox projectName="Perceptron & Eigenfaces" />
        <ProjectBox projectName="K-Means Clustering from Scratch" />
        <ProjectBox projectName="Decision Tree & Linear Regression" />
        <ProjectBox projectName="Naive Bayes & LDA" />
      </div>
    </div>
  );
};

export default Projects;
