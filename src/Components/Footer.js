import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import {SiLeetcode} from "react-icons/si"

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Rudri Jani</h4>
      <h4>Copyright &copy; 2025 RJ</h4>
      <div className='footerLinks'>
        <a href="https://github.com/rudri1202" target='_blank' rel="noreferrer"><FaGithub/></a>
        <a href="https://www.linkedin.com/in/rudri-jani-579b17256/" target='_blank' rel="noreferrer"><FaLinkedin/></a>
        <a href='mailTo:rudri3626@gmail.com' target='_blank' rel="noreferrer"><GrMail/></a>
        <a href="https://leetcode.com/u/rudri3626/" target="_blank" rel="noreferrer"><SiLeetcode/></a>
      </div>
    </footer>
  )
}

export default Footer