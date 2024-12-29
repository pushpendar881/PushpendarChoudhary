import { useState, useEffect } from "react";
import avatar from "../assets/OIP.jpg"; 
import intern from"../assets/intern.jpg" ;
import nvidia from"../assets/Screenshot 2024-12-22 212105.png"
import Footer from "./Footer";
import ContactSection from "../components/ContactSession";
import SkillsSection from "../components/SkillsSection";
import React from 'react';
import MultiCardGrid from "../components/Card"




const Home = () => {
  const topics = ["Developer", "Engineer"];
  const [topicIndex, setTopicIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTopicIndex((prevIndex) => (prevIndex + 1) % topics.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [topics.length]);

  return (
    <div className="min-h-screen bg-slate-900 text-white mx-auto flex flex-col justify-between">
      {/* Header Section */}
      <header className="mb-16">
        <div className="flex items-center gap-4 bg-[#a5b4fc] p-2 rounded-lg hover:cursor-pointer">
          <img
            src={avatar} // Image import for avatar
            alt="Avatar"
            className="w-12 h-12 rounded-full"
          />
          <h1 className="text-xl font-semibold underline">
            Pushpendar Choudhary
          </h1>
        </div>
      </header>

      {/* Introduction Section */}
      <div className="mb-16 px-6 md:pl-80">
        <h2 className="text-4xl md:text-6xl font-bold mb-8 underline">
          I'm the {topics[topicIndex]}
        </h2>
        <p className="text-lg text-gray-300">
          Hi there! My name is Pushpendar Choudhary, and I am a{" "}
          <a href="#" className="underline hover:text-white">
            builder
          </a>{" "}
          &{" "}
          <a href="#" className="underline hover:text-white">
            Learner
          </a>
        </p>
      </div>

      {/* About Section */}
      <div className="bg-slate-0">
      <div className="text-4xl md:text-5xl text-[#a5b4fc] text-center font-bold underline pb-12   pt-10 ">
        About
      </div>
      <div className="pt-8 flex items-start px-8 md:pl-80  md:pr-24 pb-10 ">
        <img
          src={avatar} // Correct image reference
          alt="About section image"
          className="rounded-full w-32 md:w-48 ml-10  items-center"
        />
        <div className="flex-1 text-justify font-bold pl-20 pr-20 ">
        <p className="  font-extrabold text-2xl pb-4 pr-56" >I'm Pushpendar Choudhary</p>
        Engineering student with a passion for Artificial Intelligence, Machine Learning, and Deep Learning. Currently pursuing a B.Tech in AI/Data Science at Vivekanand Education Society's Institute of Technology in Mumbai with a CGPA of 9.68. I have hands-on experience building machine learning models and creating interactive, user-friendly frontends with tools like Streamlit.        
        </div>
      </div>
      </div>
      {/* Skills Section */}

 
     
      {/* Experinece Section */}
      <div>
        <div className="text-4xl md:text-5xl text-[#a5b4fc]   text-center font-bold underline pb-5   pt-10 ">
          My Certificates
        </div>     
     <div className="p-10">
     <div className="flex space-x-8 "> 
            <div className="card bg-base-100 w-96 shadow-xl h-auto  mr-36 ml-36">
          <figure className="pb-4">
            <img
              src={intern}
              alt="Internship "
              className="w-auto h-80" />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-bold pb-4">ML/DL Internship at Intrnforte</h2>
            <p>Gained hands-on experience in Machine Learning and Deep Learning, working on cutting-edge projects and applying theoretical knowledge to real-world problems.</p>
            
          </div>
        </div>
            <div className="card bg-base-100 w-96 shadow-xl h-auto mr-36 ml-36">
          <figure className="pb-4">
            <img
              src={nvidia}
              alt="Internship "
              className="w-auto h-80" />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-bold pb-4">ML/DL Internship at Intrnforte</h2>
            <p>Gained hands-on experience in Deep Learning and Deep Learning, working on cutting-edge projects and applying theoretical knowledge to real-world problems.</p>
            <div className="card-actions justify-end">
      
            </div>
          </div>
        </div>
            
        </div>
      </div>
    </div>

      <SkillsSection />

       {/* Projects Section */}
       <div>
        <div className="=text-4xl md:text-5xl text-[#a5b4fc]   text-center font-bold underline pb-5   pt-10 ">
        Projects
        </div>
        <div>
  <MultiCardGrid/>
        </div>
      </div>

      
    <ContactSection/>
    <Footer/>
   </div>
  );
};

export default Home;
