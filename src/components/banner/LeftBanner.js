import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import {  SiJavascript, SiLaravel, SiCss3, SiPhp, SiBootstrap, SiHtml5, SiMongodb } from "react-icons/si";

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Professional Coder.", "Full Stack Developer."],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="flex flex-col w-full gap-20 lgl:w-1/2">
      <div className="flex flex-col gap-5">
        <h4 className="text-lg font-normal ">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="capitalize text-designColor">Azedine </span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base leading-6 tracking-wide font-bodyFont">
          Je suis un développeur full stack débutant passionné par la création de solutions innovantes et fonctionnelles. Fort d'une solide formation et d'une volonté d'apprendre constamment, je m'efforce de relever les défis techniques avec enthousiasme et rigueur. Mon objectif est de contribuer de manière significative à des projets stimulants tout en continuant à développer mes compétences et mon expertise dans le domaine du développement web.
        </p>
      </div>
      <div className="flex flex-col justify-between gap-6 xl:flex-row lgl:gap-0">
        <div>
          <h2 className="mb-4 text-base uppercase font-titleFont">
            Find me in
          </h2>
          <div className="flex gap-4" >
            <a className="bannerIcon" href='https://www.facebook.com/profile.php?id=100080413527937&sk=about'>
              <FaFacebookF />
            </a>
            <a className="bannerIcon" href='https://www.linkedin.com/feed/?trk=404_page'>
              <FaTwitter />
            </a>
            <a className="bannerIcon" href='https://www.linkedin.com/feed/?trk=404_page'>
              <FaLinkedinIn />
            </a>
          </div>
        </div>
        <div>
          <h2 className="mb-4 text-base uppercase font-titleFont">
            BEST SKILL ON LANGUAGE
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <SiHtml5 />
            </span>
            <span className="bannerIcon">
              <SiJavascript />
            </span>
            <span className="bannerIcon">
              <SiPhp />
            </span>
            <span className="bannerIcon">
              <SiCss3 />
            </span>

          </div>
        </div>
        
      </div>
      <div className="flex flex-col justify-between gap-6 xl:flex-row lgl:gap-0">
        <div>
          <h2 className="mb-4 text-base uppercase font-titleFont">
            BEST SKILL ON FREAMEWORK

          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiLaravel />
            </span>
            <span className="bannerIcon">
              <SiBootstrap />
            </span>
            <span className="bannerIcon">
              <FaNodeJs />
            </span>


        
          </div>
        </div>
        <div>
          <h2 className="mb-4 text-base uppercase font-titleFont">
            BEST SKILL ON BASE DONNES

          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaDatabase /> 
            </span>
            <span className="bannerIcon">
              <SiMongodb /> 
            </span>

            
          </div>
        </div>

      </div>
      
    </div>
  );
}

export default LeftBanner