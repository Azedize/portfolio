import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="flex flex-col w-full gap-10 lgl:flex-row lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="flex flex-col gap-4 py-6 lgl:py-12 font-titleFont">
          <p className="text-sm text-designColor tracking-[4px]">2020 - 2024</p>
          <h2 className="text-3xl font-bold md:text-4xl">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Téchnicien Spécialisé en Développement Digitale"
            subTitle="ISTA NTIC TANGER (2022 - 2024)"
            result="4.90/5"
            des="Le diplôme de Technicien Spécialisé en Développement Digital délivré par l'ISTA NTIC TANGER est une formation spécialisée dans les domaines du développement informatique et de la technologie de l'information et de la communication (TIC)."
          />
          <ResumeCard
            title=" 1 Annee  "
            subTitle="l'Université Abdelmalek Essaadi  (2021 - 2022)"
            result="4.00/5"
            des="Le diplôme en économie délivré par l'Université Abdelmalek Essaadi à Tanger est une formation académique axée sur l'étude des principes fondamentaux de l'économie et de leurs applications dans le monde réel."
          />
          <ResumeCard
            title="Baccalauréat"
            subTitle="Lycée Abbas sebti (2020 – 2021)"
            result="5.00/5"
            des="Le baccalauréat en sciences physiques, obtenu au lycée Abbas Sebti entre 2020 et 2021, est un diplôme d'études secondaires qui atteste des compétences et des connaissances acquises dans le domaine des sciences physiques."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="flex flex-col gap-4 py-6 lgl:py-12 font-titleFont">
          <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p>
          <h2 className="text-3xl font-bold md:text-4xl">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Full Stack"
            subTitle=""
            result="Maroc"
            des="Le diplôme de Technicien Spécialisé en Développement Digital délivré par l'ISTA NTIC TANGER est le fruit d'une expérience éducative enrichissante et pratique dans le domaine de la technologie de l'information et de la communication (TIC)."
          />
          <ResumeCard
            title="Economie"
            subTitle=""
            result="Maroc"
            des=" Les étudiants acquièrent une compréhension approfondie des concepts économiques tels que l'offre et la demande..."
          />
          <ResumeCard
            title=" Sciences Physiques"
            subTitle=""
            result="Maroc"
            des="Ce programme éducatif met l'accent sur l'étude des phénomènes physiques tels que la mécanique, l'électricité, la thermodynamique et l'optique, ainsi que sur les principes fondamentaux des mathématiques appliquées."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
