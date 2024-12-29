import React from 'react';
import SkillCategory from './SkillCategory';

const skillsData = {
  programmingLanguages: ['HTML', 'CSS', 'JavaScript', 'C', 'Java', 'Python'],
  frameworksAndLibraries: ['LangChain', 'Numpy', 'Pandas', 'scikit-learn', 'Keras', 'Tensorflow', 'Ollama'],
  softwareAndTools: ['Google Colab', 'AutoCAD', 'IJ-idea', 'Git-Github', 'Kaggle', 'HuggingFace', 'Jupyter', 'Canva']
  
};

const SkillsSection = () => {
  return (
    <section className="py-12 bg-slate-950">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">My Skills</h2>
        <SkillCategory title="PROGRAMMING LANGUAGES" skills={skillsData.programmingLanguages} />
        <SkillCategory title="FRAMEWORKS & LIBRARIES" skills={skillsData.frameworksAndLibraries} />
        <SkillCategory title="SOFTWARE & TOOLS" skills={skillsData.softwareAndTools} />
      </div>
    </section>
  );
};

export default SkillsSection;


