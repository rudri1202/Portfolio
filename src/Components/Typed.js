import React from 'react';
import Typewriter from 'typewriter-effect';

const Typed = () => {
  return (
    <div className="TypeEffect">
      <Typewriter
        options={{
          strings: [
            'Software Engineer',
            'Full-Stack Developer',
            'Backend Engineer',
            'AI / ML Enthusiast',
            'Ex-Microsoft Intern',
            'DSA Problem Solver',
            'Open to Opportunities',
          ],
          autoStart: true,
          loop: true,
          delay: 60,
          deleteSpeed: 25,
        }}
      />
    </div>
  );
};

export default Typed;
