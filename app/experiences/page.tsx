"use client";
import { useState } from "react";
export default function ExperiencesPage() {

 const [selectedScience, setSelectedScience] = useState("");
const [showBakery, setShowBakery] = useState(false);
  return (

    <main className="bg-slate-50 min-h-screen pt-28">

      <section className="text-center py-16">

        <h1 className="text-5xl font-bold mb-6">
          Expériences professionnelles
        </h1>

        <p className="max-w-4xl mx-auto text-lg text-slate-600 leading-relaxed text-justify">

          Au cours de ma formation, j'ai eu l'opportunité d'évoluer dans des environnements variés, allant de la recherche en génétique végétale et humaine à une expérience professionnelle dans le secteur commercial. Ces expériences ont contribué au développement de mes compétences techniques, organisationnelles et relationnelles.

        </p>

      </section>
<section className="max-w-6xl mx-auto px-6 py-12">

  <h2 className="text-4xl font-bold text-center mb-12">

    Expériences scientifiques

  </h2>
<div className="flex justify-center gap-8 flex-wrap">
<button
  onClick={() =>
  setSelectedScience(
    selectedScience === "inrae" ? "" : "inrae"
  )
}
className={`p-6 rounded-2xl shadow-lg w-64 transition duration-300 cursor-pointer hover:scale-105 ${
  selectedScience === "inrae"
    ? "bg-green-300 ring-4 ring-green-400"
    : "bg-green-100 hover:bg-green-200"
}`}
>

  <h3 className="text-2xl font-bold mb-2">
    🧬 INRAE
  </h3>

  <p className="text-slate-700">
    Production de lignées de tomates KO éditées par CRISPR/Cas9
  </p>
<p className="text-sm text-slate-500 mt-4">
  {selectedScience === "inrae"
    ? "▲ Cliquer pour masquer la fiche"
    : "▼ Cliquer pour afficher la fiche"}
</p>
</button>
<button
  onClick={() =>
  setSelectedScience(
    selectedScience === "cdd" ? "" : "cdd"
  )
}
className={`p-6 rounded-2xl shadow-lg w-64 transition duration-300 cursor-pointer hover:scale-105 ${
  selectedScience === "cdd"
    ? "bg-green-300 ring-4 ring-green-400"
    : "bg-green-100 hover:bg-green-200"
}`}
>

  <h3 className="text-2xl font-bold mb-2">
    🔬 CDD INRAE
  </h3>

  <p className="text-slate-700">
    Génotypage et stabilisation de lignées éditées
  </p>
<p className="text-sm text-slate-500 mt-4">
  {selectedScience === "cdd"
    ? "▲ Cliquer pour masquer la fiche"
    : "▼ Cliquer pour afficher la fiche"}
</p>
</button>
<button
  onClick={() =>
  setSelectedScience(
    selectedScience === "mmg" ? "" : "mmg"
  )
}
className={`p-6 rounded-2xl shadow-lg w-64 transition duration-300 cursor-pointer hover:scale-105 ${
  selectedScience === "mmg"
    ? "bg-purple-300 ring-4 ring-purple-400"
    : "bg-purple-100 hover:bg-purple-200"
}`}
>

  <h3 className="text-2xl font-bold mb-2">
    🧠 MMG
  </h3>

  <p className="text-slate-700">
    Édition de hiPSC et construction plasmidique
  </p>
<p className="text-sm text-slate-500 mt-4">
  {selectedScience === "mmg"
    ? "▲ Cliquer pour masquer la fiche"
    : "▼ Cliquer pour afficher la fiche"}
</p>
</button>
</div>
</section>
<section className="max-w-5xl mx-auto px-6 py-10">

  <div className="bg-white rounded-3xl shadow-lg p-10">

    {selectedScience === "inrae" && (

  <div>

    <h2 className="text-3xl font-bold mb-8">
      🧬 Stage INRAE
    </h2>

    <div className="space-y-8">

      <div>

        <h3 className="font-bold text-xl mb-2">
          📅 Période
        </h3>

        <p>
          Janvier 2025 - Mars 2025
        </p>

      </div>

      <div>

        <h3 className="font-bold text-xl mb-2">
          📍 Structure
        </h3>

        <p>
          INRAE – Équipe GAFL (Génétique d'Amélioration des Fruits et Légumes), Avignon
        </p>

      </div>

      <div>

        <h3 className="font-bold text-xl mb-2">
          🎯 Sujet
        </h3>

        <p className="text-justify">
          Développement de lignées de tomates résistantes aux virus grâce à l'édition génomique par CRISPR/Cas9.
        </p>

      </div>

      <div>

        <h3 className="font-bold text-xl mb-2">
          🔬 Contexte scientifique
        </h3>

        <p className="text-justify">
          L'objectif du projet était de produire des lignées de tomates présentant des mutations ciblées de gènes impliqués dans la sensibilité aux infections virales afin d'améliorer leur résistance.
        </p>

      </div>

      <div>

        <h3 className="font-bold text-xl mb-3">
          🧪 Techniques utilisées
        </h3>

        <div className="flex flex-wrap gap-3">

          <span className="bg-green-100 px-3 py-1 rounded-full">
            Culture de tissus végétaux
          </span>

          <span className="bg-green-100 px-3 py-1 rounded-full">
            Transformation génétique
          </span>

          <span className="bg-green-100 px-3 py-1 rounded-full">
            PCR
          </span>

          <span className="bg-green-100 px-3 py-1 rounded-full">
            HRM
          </span>

          <span className="bg-green-100 px-3 py-1 rounded-full">
            Séquençage ADN
          </span>

          <span className="bg-green-100 px-3 py-1 rounded-full">
            CRISPR/Cas9
          </span>

        </div>

      </div>

      <div>

        <h3 className="font-bold text-xl mb-3">
          🧠 Compétences développées
        </h3>

        <ul className="list-disc pl-6 space-y-1">

          <li>Analyse moléculaire de lignées éditées</li>

          <li>Interprétation de résultats de génotypage</li>

          <li>Travail en équipe de recherche</li>

          <li>Autonomie expérimentale</li>

          <li>Rigueur scientifique</li>

        </ul>

      </div>

      <div>

        <h3 className="font-bold text-xl mb-2">
          💡 Ce que cette expérience m'a apporté
        </h3>

        <p className="text-justify">
          Cette première immersion dans la recherche m'a permis de découvrir les applications concrètes de l'édition génomique et de développer une approche rigoureuse du travail expérimental. Elle a renforcé mon intérêt pour les biotechnologies et la génétique moléculaire.
        </p>

      </div>

    </div>

  </div>

)}

    {selectedScience === "cdd" && (

  <div>

    <h2 className="text-3xl font-bold mb-8">
      🔬 CDD INRAE
    </h2>

    <div className="space-y-8">

      <div>

        <h3 className="font-bold text-xl mb-2">
          📅 Période
        </h3>

        <p>
          Juillet 2025
        </p>

      </div>

      <div>

        <h3 className="font-bold text-xl mb-2">
          📍 Structure
        </h3>

        <p>
          INRAE – Équipe GAFL (Génétique d'Amélioration des Fruits et Légumes), Avignon
        </p>

      </div>

      <div>

        <h3 className="font-bold text-xl mb-2">
          🎯 Mission
        </h3>

        <p className="text-justify">
          Poursuite du projet de création de lignées de tomates résistantes aux virus et caractérisation génétique des générations suivantes.
        </p>

      </div>

      <div>

        <h3 className="font-bold text-xl mb-2">
          🔬 Contexte scientifique
        </h3>

        <p className="text-justify">
          Les plantes éditées ont été transférées en serre OGM afin de poursuivre leur développement. L'objectif était de vérifier la transmission des mutations d'intérêt et d'obtenir des lignées homozygotes par autofécondation afin de stabiliser génétiquement les caractères recherchés.
        </p>

      </div>

      <div>

        <h3 className="font-bold text-xl mb-3">
          🧪 Activités réalisées
        </h3>

        <div className="flex flex-wrap gap-3">

          <span className="bg-green-100 px-3 py-1 rounded-full">
            Génotypage
          </span>

          <span className="bg-green-100 px-3 py-1 rounded-full">
            Extraction d'ADN
          </span>

          <span className="bg-green-100 px-3 py-1 rounded-full">
            PCR
          </span>

          <span className="bg-green-100 px-3 py-1 rounded-full">
            Séquençage
          </span>

          <span className="bg-green-100 px-3 py-1 rounded-full">
            Analyse de mutations
          </span>

          <span className="bg-green-100 px-3 py-1 rounded-full">
            Autofécondation
          </span>

        </div>

      </div>

      <div>

        <h3 className="font-bold text-xl mb-3">
          🧠 Compétences développées
        </h3>

        <ul className="list-disc pl-6 space-y-1">

          <li>Analyse critique de résultats génétiques</li>

          <li>Gestion d'un projet sur le long terme</li>

          <li>Autonomie expérimentale</li>

          <li>Interprétation de données de séquençage</li>

          <li>Suivi de lignées végétales modifiées</li>

        </ul>

      </div>

      <div>

        <h3 className="font-bold text-xl mb-2">
          💡 Ce que cette expérience m'a apporté
        </h3>

        <p className="text-justify">
          Cette expérience m'a permis de gagner en autonomie et de mieux comprendre le suivi à long terme d'un projet de recherche. J'ai découvert l'importance du génotypage dans la validation des modifications génétiques et les enjeux liés à la stabilisation des mutations.
        </p>

      </div>

      <div>

        <h3 className="font-bold text-xl mb-2">
          ⭐ Particularité
        </h3>

        <p className="text-justify">
          Cette expérience se poursuit avec un renouvellement du contrat durant l'été 2026 afin de poursuivre le suivi des lignées obtenues.
        </p>

      </div>

    </div>

  </div>

)}

    {selectedScience === "mmg" && (

  <div>

    <h2 className="text-3xl font-bold mb-8">
      🧠 Stage MMG
    </h2>

    <div className="space-y-8">

      <div>

        <h3 className="font-bold text-xl mb-2">
          📅 Période
        </h3>

        <p>
          Mars 2026 - Juin 2026
        </p>

      </div>

      <div>

        <h3 className="font-bold text-xl mb-2">
          📍 Structure
        </h3>

        <p>
          MMG – Équipe MoPED (Mechanisms of Paracrine and Endocrine Disorders), Marseille
        </p>

      </div>

      <div>

        <h3 className="font-bold text-xl mb-2">
          🎯 Sujet
        </h3>

        <p className="text-justify">
          Édition de hiPSC par CRISPR/Cas9 afin d'étudier la pathogénicité de variants MEN1 et développement d'un plasmide fluorescent destiné à améliorer l'identification des cellules éditées par Prime Editing.
        </p>

      </div>

      <div>

        <h3 className="font-bold text-xl mb-2">
          🔬 Contexte scientifique
        </h3>

        <p className="text-justify">
          La NEM1 est une maladie génétique rare liée à des mutations du gène MEN1. L'objectif du projet était d'introduire des variants de signification inconnue (VUS) dans des cellules souches pluripotentes humaines afin de déterminer leur impact pathologique et d'améliorer l'interprétation diagnostique.
        </p>

      </div>

      <div>

        <h3 className="font-bold text-xl mb-3">
          🧪 Techniques utilisées
        </h3>

        <div className="flex flex-wrap gap-3">

          <span className="bg-purple-100 px-3 py-1 rounded-full">
            Culture de hiPSC
          </span>

          <span className="bg-purple-100 px-3 py-1 rounded-full">
            CRISPR/Cas9
          </span>

          <span className="bg-purple-100 px-3 py-1 rounded-full">
            Prime Editing
          </span>

          <span className="bg-purple-100 px-3 py-1 rounded-full">
            Construction plasmidique
          </span>

          <span className="bg-purple-100 px-3 py-1 rounded-full">
            Clonage moléculaire
          </span>

          <span className="bg-purple-100 px-3 py-1 rounded-full">
            Transformation bactérienne
          </span>

          <span className="bg-purple-100 px-3 py-1 rounded-full">
            Bioinformatique
          </span>

        </div>

      </div>

      <div>

        <h3 className="font-bold text-xl mb-3">
          🧠 Compétences développées
        </h3>

        <ul className="list-disc pl-6 space-y-1">

          <li>Conception et construction de vecteurs plasmidiques</li>

          <li>Édition génomique appliquée à la santé humaine</li>

          <li>Utilisation de modèles cellulaires complexes</li>

          <li>Analyse de variants génétiques</li>

          <li>Bioinformatique appliquée au diagnostic</li>

          <li>Gestion simultanée de plusieurs projets expérimentaux</li>

        </ul>

      </div>

      <div>

        <h3 className="font-bold text-xl mb-2">
          💡 Ce que cette expérience m'a apporté
        </h3>

        <p className="text-justify">
          Ce stage m'a permis de découvrir la recherche biomédicale appliquée aux maladies génétiques rares. J'ai travaillé à la fois sur l'édition génomique de cellules humaines et sur le développement d'outils moléculaires innovants. Cette expérience a confirmé mon intérêt pour les biotechnologies appliquées à la santé, la pharmacologie et la médecine de précision.
        </p>

      </div>

    </div>

  </div>

)}

  </div>

</section>
<section className="max-w-6xl mx-auto px-6 py-16">

  <h2 className="text-4xl font-bold text-center mb-12">
    Techniques clés acquises
  </h2>

  <p className="text-center text-slate-600 mb-10 max-w-3xl mx-auto ">
    Les différentes expériences réalisées au cours du BUT m'ont permis d'acquérir et de consolider de nombreuses techniques en biologie moléculaire, génétique et culture cellulaire.
  </p>

  <div className="flex flex-wrap justify-center gap-4">

    <span className="
px-4 py-2 rounded-full shadow-lg
bg-gradient-to-br
from-green-200
to-purple-200
">
      CRISPR/Cas9
    </span>

    <span className="bg-purple-100 px-4 py-2 rounded-full shadow">
      Prime Editing
    </span>

    <span className="
px-4 py-2 rounded-full shadow-lg
bg-gradient-to-br
from-green-200
to-purple-200
">
      PCR
    </span>

    <span className="
px-4 py-2 rounded-full shadow-lg
bg-gradient-to-br
from-green-200
to-purple-200
">
      Séquençage ADN
    </span>

    <span className="bg-green-100 px-4 py-2 rounded-full shadow">
      HRM
    </span>

    <span className="bg-purple-100 px-4 py-2 rounded-full shadow">
      Culture cellulaire
    </span>

    <span className="bg-purple-100 px-4 py-2 rounded-full shadow">
      hiPSC
    </span>

    <span className="bg-purple-100 px-4 py-2 rounded-full shadow">
      Construction plasmidique
    </span>

    <span className="bg-purple-100 px-4 py-2 rounded-full shadow">
      Clonage moléculaire
    </span>

    <span className="bg-purple-100 px-4 py-2 rounded-full shadow">
      Transformation bactérienne
    </span>

    <span className="bg-green-100 px-4 py-2 rounded-full shadow">
      Culture de tissus végétaux
    </span>

    <span className="bg-green-100 px-4 py-2 rounded-full shadow">
      Génotypage
    </span>

    <span className="
px-4 py-2 rounded-full shadow-lg
bg-gradient-to-br
from-green-200
to-purple-200
">
      Bioinformatique
    </span>
<span className="bg-green-100 px-4 py-2 rounded-full shadow">
      Transformation génétique végétale 
    </span>
  </div>

</section>
<section className="max-w-6xl mx-auto px-6 py-16">

  <h2 className="text-4xl font-bold text-center mb-12">
    Autre expérience professionnelle
  </h2>

  <div className="flex justify-center">

    <button
  onClick={() => setShowBakery(!showBakery)}
  className={`p-8 rounded-2xl shadow-lg w-80 transition duration-300 cursor-pointer hover:scale-105 ${
    showBakery
      ? "bg-orange-300 ring-4 ring-orange-400"
      : "bg-orange-100 hover:bg-orange-200"
  }`}
>

      <h3 className="text-2xl font-bold mb-3">
        🥖 Boulangerie Augusta
      </h3>

      <p className="text-slate-700">
        Vendeuse polyvalente
      </p>

      <p className="text-sm text-slate-500 mt-2">
        Juin - Août 2024
      </p>
<p className="text-sm text-slate-500 mt-4">
  {showBakery
    ? "▲ Cliquer pour masquer la fiche"
    : "▼ Cliquer pour afficher la fiche"}
</p>
    </button>

  </div>

</section>
{showBakery && (
<section className="max-w-5xl mx-auto px-6 py-10">

  <div className="bg-white rounded-3xl shadow-lg p-10">

    <h2 className="text-3xl font-bold mb-8">
      🥖 Boulangerie Augusta – Pains & Merveilles
    </h2>

    <div className="space-y-8">

      <div>

        <h3 className="font-bold text-xl mb-2">
          📅 Période
        </h3>

        <p>
          Du 21 juin 2024 au 30 août 2024
        </p>

      </div>

      <div>

        <h3 className="font-bold text-xl mb-2">
          💼 Poste
        </h3>

        <p>
          Vendeuse polyvalente
        </p>

      </div>

      <div>

        <h3 className="font-bold text-xl mb-2">
          📋 Missions
        </h3>

        <ul className="list-disc pl-6 space-y-1">

          <li>Accueil et conseil des clients</li>

          <li>Préparation des commandes professionnelles</li>

          <li>Mise en place et entretien du magasin</li>

          <li>Gestion des stocks et approvisionnements</li>

          <li>Aide aux équipes de boulangerie et pâtisserie</li>

          <li>Prise de commandes</li>

        </ul>

      </div>

      <div>

        <h3 className="font-bold text-xl mb-3">
          🧠 Compétences développées
        </h3>

        <div className="flex flex-wrap gap-3">

          <span className="bg-orange-100 px-3 py-1 rounded-full">
            Relation client
          </span>

          <span className="bg-orange-100 px-3 py-1 rounded-full">
            Travail en équipe
          </span>

          <span className="bg-orange-100 px-3 py-1 rounded-full">
            Organisation
          </span>

          <span className="bg-orange-100 px-3 py-1 rounded-full">
            Gestion du stress
          </span>

          <span className="bg-orange-100 px-3 py-1 rounded-full">
            Autonomie
          </span>

          <span className="bg-orange-100 px-3 py-1 rounded-full">
            Sens des responsabilités
          </span>

        </div>

      </div>

      <div>

        <h3 className="font-bold text-xl mb-2">
          💡 Ce que cette expérience m'a apporté
        </h3>

        <p className="text-justify">
          Cette expérience m'a permis de développer mon autonomie et mon sens de l'organisation dans un environnement dynamique nécessitant réactivité et rigueur. J'y ai également appris à travailler efficacement au sein d'une équipe tout en étant capable d'assurer certaines responsabilités de manière indépendante.
        </p>

      </div>

    </div>

  </div>

</section>
)}
    </main>

  );
}