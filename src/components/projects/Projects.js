import React from 'react'
import Title from '../layouts/Title'
import { homme,calc,p1,p2,shop, p3} from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex items-center justify-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 xl:gap-14">
        <ProjectsCard
          title="Projet HTML CSS"
          des=" j'ai utilisé HTML et CSS pour créer une interface utilisateur élégante et fonctionnelle. Ce projet met en avant mes compétences en développement web front-end en combinant les meilleures pratiques de HTML pour la structure et de CSS pour la mise en forme. !"
          src={p1}
          link={'https://azedize.github.io/CC1_react'}
          link1={'https://github.com/Azedize/CC1_react'}
        />
        <ProjectsCard
          title="Projet HTML CSS"
          des=", j'ai poursuivi ma exploration du développement web avec HTML et CSS. Ce projet présente une autre facette de mes compétences en création d'interfaces utilisateur attrayantes et réactives. En utilisant des techniques avancées de mise en page CSS et en veillant à une structure HTML propre et sémantique, j'ai créé une expérience utilisateur captivante."
          src={p2}
          link={'https://azedize.github.io/Projet_1_HTML_CSS/'}
          link1={'https://github.com/Azedize/Projet_1_HTML_CSS'}


        />
        <ProjectsCard
          title="Multi App"
          des="  j'ai développé une application multi-applications qui combine plusieurs fonctionnalités utiles en une seule plateforme, le tout alimenté par ReactJS. Cette application polyvalente comprend une calculatrice pour les calculs rapides, une liste de tâches (Todo List) pour la gestion des tâches quotidiennes, un slider pour la visualisation d'images ou de contenu multimédia, et une fonction de pagination pour  à travers des  ensembles de données. "
          src={p3}
          link={'https://azedize.github.io/CC1_react'}
          link1={'https://github.com/Azedize/CC1_react'}

        />
        <ProjectsCard
          title="Calculatrice"
          des=" une calculatrice réalisée avec ReactJS, combine la puissance de JavaScript avec la facilité de React pour créer une application interactive et conviviale. Cette calculatrice permet aux utilisateurs d'effectuer des opérations de base telles que l'addition, la soustraction, la multiplication et la division"
          src={calc}
          link={'https://azedize.github.io/Tp1_react/'}
          link1={'https://github.com/Azedize/Tp1_react/'}

        />
        <ProjectsCard
          title="AS-Homme"
          des="  j'ai utilisé ReactJS pour créer un site web similaire à Airbnb, offrant aux utilisateurs une plateforme immersive pour la recherche et la réservation d'hébergements de vacances. En utilisant les composants réutilisables et la gestion efficace de l'état fournis par ReactJS, j'ai pu développer une interface utilisateur interactive et réactive"
          src={homme}
          link={'https://azedize.github.io/Projet-React/'}
          link1={'https://github.com/Azedize/Projet-React/'}

        />
        <ProjectsCard
          title="E-commerce Website"
          des=" j'ai utilisé Laravel pour développer un site e-commerce complet, offrant aux utilisateurs une plateforme robuste et sécurisée pour acheter et vendre des produits en ligne. En utilisant les fonctionnalités avancées de Laravel telles que l'authentification, les migrations de base de données et le routage,"
          src={shop}
          link={'http://shop-ch.000.pe/'}
          link1={'http://shop-ch.000.pe/'}

        />
      </div>
    </section>
  );
}

export default Projects