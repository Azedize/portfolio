import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="flex flex-col w-full gap-10 lgl:flex-row lgl:gap-20"
    >
      <div>
        <div className="flex flex-col gap-4 py-6 lgl:py-12 font-titleFont">
          <p className="text-sm text-designColor tracking-[4px]"></p>
          <h2 className="text-3xl font-bold md:text-4xl">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Web Developer"
            subTitle="Location de Voitures en Ligne - (2023 - 2024)"
            result="Maroc"
            des="Conception et développement d'un site Web de location de voitures offrant une interface facile à utiliser. "
          />

  
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-4 py-6 lgl:py-12 font-titleFont">
          <p className="text-sm text-designColor tracking-[4px] " >  </p>
          <h2 className="text-3xl font-bold md:text-4xl">2022 - 2024 </h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Nuevo car"
            subTitle=""
            result="Maroc"
            des="Responsable du développement des fonctionnalités front-end et back-end, de la gestion des bases de données et de l'intégration des paiements en ligne."
          />

        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
