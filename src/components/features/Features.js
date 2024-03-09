import React from 'react'
import {  AiFillBuild, AiFillCodeSandboxCircle, AiFillSketchSquare } from "react-icons/ai";
import {  FaDatabase, FaCode } from "react-icons/fa";
import {  SiAntdesign } from "react-icons/si";
import Title from '../layouts/Title';
import Card from './Card';

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 xl:gap-20">
        <Card
          title="Conception Projets"
          des="Passionné par la création de plans détaillés pour les projets Web."
          icon={<AiFillBuild />}
        />


        <Card
          title="Interface Utilisateur"
          des="Expert en création d'expériences utilisateur attrayantes et intuitives."
          icon={<AiFillSketchSquare />}
        />



        <Card
          title="Front-End"
          des="Expert en création d'expériences utilisateur attrayantes et intuitives."
          icon={<AiFillCodeSandboxCircle />}
        />

        <Card
          title="Gestion des Données"
          des="Expert en conception, implémentation et optimisation de bases de données pour répondre aux besoins spécifiques d'une application."
          icon={<FaDatabase />}
        />

        <Card
          title="Résolution de Problèmes"
          des=" capable d'identifier rapidement les défis techniques et de trouver des solutions innovantes."
          icon={<SiAntdesign />}
        />
        <Card
          title="API RESTful"
          des="Conception d'API RESTful suivant les principes REST, en utilisant les méthodes HTTP standard pour la manipulation des ressources."
          icon={<FaCode />}
        />

      </div>
    </section>
  );
}

export default Features