import React from 'react';
import SkillButton from './SkillButton';

const SkillCategory = ({ title, skills,icons }) => {
  return (
    <div className="mb-8">
      <h3 className="text-center font-bold text-xl mb-4">{title}</h3>
      <div className="flex flex-wrap justify-center">
        {skills.map((skill, index) => (
          <SkillButton key={index} skill={skill}  icons={icons}/>
        ))}
      </div>
    </div>
  );
};

export default SkillCategory;
