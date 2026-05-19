import React from 'react';
import { CgCPlusPlus } from "react-icons/cg";
import { FaReact, FaPython, FaJava, FaGitAlt, FaGithub, FaNpm, FaDocker } from "react-icons/fa";
import { DiNodejs, DiJavascript1 } from "react-icons/di";
import { SiExpress, SiMongodb, SiPostman, SiTypescript, SiPostgresql, SiRedis,
         SiMicrosoftazure, SiFirebase, SiTensorflow, SiKotlin, SiFastapi } from "react-icons/si";

const Skills = ({ skill }) => {
  const icon = {
    'Python':     <FaPython />,
    'Java':       <FaJava />,
    'Javascript': <DiJavascript1 />,
    'Typescript': <SiTypescript />,
    'C++':        <CgCPlusPlus />,
    'React':      <FaReact />,
    'FastAPI':    <SiFastapi />,
    'Node':       <DiNodejs />,
    'Express':    <SiExpress />,
    'PostgreSQL': <SiPostgresql />,
    'Redis':      <SiRedis />,
    'MongoDB':    <SiMongodb />,
    'Azure':      <SiMicrosoftazure />,
    'Firebase':   <SiFirebase />,
    'Docker':     <FaDocker />,
    'TensorFlow': <SiTensorflow />,
    'Kotlin':     <SiKotlin />,
    'Git':        <FaGitAlt />,
    'Github':     <FaGithub />,
    'Npm':        <FaNpm />,
    'Postman':    <SiPostman />,
  };

  return (
    <div title={skill} className='SkillBox'>
      {icon[skill]}
    </div>
  );
};

export default Skills;
