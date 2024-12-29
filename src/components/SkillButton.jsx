import React from 'react';



const SkillButton = ({ skill ,icons}) => {
  return (
    <button 
      className="relative group items-center bg-slate-400 rounded-3xl px-6 py-3 m-2 transition-all duration-300 hover:bg-slate-500"
    >
      <span className="text-white text-sm md:text-base">
      
   
      {icons}
        {skill}</span>
      <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap text-white bg-black/80 px-2 py-1 rounded text-xs">
        {skill}
      </span>
    </button>
  );
};

export default SkillButton;