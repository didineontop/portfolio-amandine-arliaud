"use client";

import { useState } from "react";
export default function ButGBPage() {

  const [selectedItem, setSelectedItem] = useState("");
const [showPoster, setShowPoster] = useState(false);
  return (
    
    <main className="bg-slate-50 min-h-screen text-slate-900">
<main className="pt-24"></main>
      {/* Bannière */}
      <section className="h-[40vh] flex items-center justify-center bg-gradient-to-r from-teal-100 to-cyan-100">

        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">
            Le BUT Génie Biologique
          </h1>

          <p className="text-xl text-slate-600">
            Parcours Biologie Médicale et Biotechnologies
          </p>
        </div>

      </section>

      {/* Carte d'identité */}
      <section className="max-w-6xl mx-auto px-6 py-20">

        <h2 className="text-3xl font-bold mb-10">
          Carte d'identité du BUT
        </h2>

       <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl p-10 border border-slate-200">

  <div className="flex flex-col md:flex-row gap-8 items-start">

    {/* Image */}
    <div className="flex-shrink-0">

      <div className="w-48 h-48 rounded-2xl bg-slate-100 flex items-center justify-center border-2 border-slate-200">

        <img
  src="/gbio.png"
  alt="BUT Génie Biologique BMB"
  className="w-full h-full object-cover"
/>

      </div>

    </div>

    {/* Informations */}
    <div className="flex-1">

      <h3 className="text-2xl font-bold mb-6">
        Bachelor Universitaire de Technologie
        <br />
        Génie Biologique
        <br />
        Parcours Biologie Médicale et Biotechnologies
      </h3>

      <div className="space-y-4">

        <p>
          ⏳ <strong>Durée :</strong> 3 ans (6 semestres)
        </p>
<p>
          📍 <strong>Localisation :</strong > IUT de La Garde, dépendant de l'Université de Toulon
        </p>
        <p>
          🧪 <strong>Formation :</strong> Alliance entre théorie et pratique
        </p>

        <p>
          📚 <strong>Évaluation :</strong> Contrôle continu
        </p>

        <p>
          👨‍🔬 <strong>Stages :</strong> 8 semaines + 16 semaines
        </p>

        <p>
          🎯 <strong>Débouchés :</strong> Insertion professionnelle ou poursuite d'études
        </p>

      </div>

    </div>

  </div>

</div>

      </section>

      {/* Organisation */}
      <section className="max-w-6xl mx-auto px-6 py-20">

  <h2 className="text-3xl font-bold mb-16 text-center">
    Comment est organisée la formation ?
  </h2>

  <div className="flex flex-col items-center gap-10">

  {/* COMPÉTENCES */}

  <div
    onClick={() => setSelectedItem("competences")}
    className="bg-teal-200 px-16 py-8 rounded-2xl shadow-lg border border-teal-300 hover:scale-105 transition duration-300 cursor-pointer"
  >
    <h3 className="text-2xl font-bold">
        🎯 COMPÉTENCES
      </h3>
  </div>

  {/* Ligne */}

  <div className="w-1 h-10 bg-slate-300"></div>

  {/* Ligne centrale */}

  <div className="grid grid-cols-3 items-center gap-8">

    {/* Ressources */}

    <div
      onClick={() =>
  setSelectedItem(
    selectedItem === "ressources" ? "" : "ressources"
  )
}
      className="bg-blue-100 px-8 py-5 rounded-2xl shadow border border-blue-200 hover:scale-105 transition duration-300 cursor-pointer text-center"
    >
      📚 RESSOURCES
    </div>

    {/* Apprentissages */}

    <div
      onClick={() =>
  setSelectedItem(
    selectedItem === "ac" ? "" : "ac"
  )
}
      className="bg-green-100 px-8 py-5 rounded-2xl shadow border border-green-200 hover:scale-105 transition duration-300 cursor-pointer text-center"
    >
      🧠 APPRENTISSAGES CRITIQUES
    </div>

    {/* SAÉ */}

    <div
      onClick={() =>
  setSelectedItem(
    selectedItem === "sae" ? "" : "sae"
  )
}
      className="bg-orange-100 px-8 py-5 rounded-2xl shadow border border-orange-200 hover:scale-105 transition duration-300 cursor-pointer text-center"
    >
      🧪 SAÉ
    </div>

  </div>

  {/* Ligne */}

  <div className="w-1 h-10 bg-slate-300"></div>

  {/* Composantes essentielles */}

  <div
    onClick={() =>
  setSelectedItem(
    selectedItem === "ce" ? "" : "ce"
  )
}
    className="bg-slate-100 px-8 py-5 rounded-2xl shadow border border-slate-200 hover:scale-105 transition duration-300 cursor-pointer"
  >
    ⚙️ COMPOSANTES ESSENTIELLES
  </div>

</div>

{selectedItem && (

  <div className="mt-10 max-w-2xl mx-auto bg-white p-6 rounded-2xl shadow-lg border">

    {selectedItem === "competences" && (
      <>
        <h3 className="font-bold text-xl mb-3">
          🎯 Compétences
        </h3>

        <p>
          Les compétences correspondent aux capacités que l'étudiant doit développer progressivement afin de répondre à des situations professionnelles.
        </p>
      </>
    )}

    {selectedItem === "ressources" && (
      <>
        <h3 className="font-bold text-xl mb-3">
          📚 Ressources
        </h3>

        <p>
          Les ressources regroupent les enseignements théoriques et pratiques qui apportent les connaissances et savoir-faire nécessaires au développement des compétences.
        </p>
      </>
    )}

    {selectedItem === "ac" && (
      <>
        <h3 className="font-bold text-xl mb-3">
          🧠 Apprentissages critiques
        </h3>

        <p>
          Les apprentissages critiques permettent de mesurer la progression vers une compétence donnée.
        </p>
      </>
    )}

    {selectedItem === "sae" && (
      <>
        <h3 className="font-bold text-xl mb-3">
          🧪 SAÉ
        </h3>

        <p>
          Les Situations d'Apprentissage et d'Évaluation sont des projets mobilisant plusieurs ressources afin de développer et évaluer les compétences. Il y a donc une SAÉ pour chaque compétence chaque année afin d'atteindre les différents niveaux établis dans le référentiel.
        </p>
        <div className="mt-8 text-center">

  <h3 className="font-semibold text-lg mb-4">
    Exemple de SAÉ réalisée
  </h3>

  <img
    src="/Poster SAE4.1.jpg"
    alt="Poster SAÉ 4.01"
    onClick={() => setShowPoster(true)}
    className="
      w-56
      mx-auto
      rounded-xl
      shadow-lg
      cursor-pointer
      hover:scale-105
      transition
    "
  />

  <p className="text-sm text-slate-500 mt-2">
    Cliquer pour agrandir
  </p>

<div className="mt-8 bg-slate-50 rounded-2xl p-6">

  <h4 className="font-bold text-xl mb-4">
    SAÉ 4.01 – Mise en œuvre d'une expérimentation et suivi analytique
  </h4>

  <p className="mb-4 text-justify">
    Cette SAÉ avait pour objectif d'isoler, purifier et identifier une phosphatase acide produite par Saccharomyces cerevisiae à l'aide de plusieurs techniques biochimiques complémentaires.
  </p>

  <h5 className="font-semibold mb-2">
    Matières mobilisées :
  </h5>

  <ul className="list-disc pl-6 text-left">

    <li>Biochimie</li>

    <li>Biologie moléculaire</li>

    <li>Analyses biologiques</li>

    <li>Traitement et interprétation des données expérimentales</li>

<li>Communication scientifique</li>
   
    <li>Anglais</li>

    

  </ul>

  <h5 className="font-semibold mt-4 mb-2">
    Techniques mises en œuvre :
  </h5>

  <ul className="list-disc pl-6 text-left">

    <li>Lyse cellulaire par sonication</li>

    <li>Précipitation au sulfate d'ammonium</li>

    <li>Chromatographie échangeuse d'ions</li>

    <li>SDS-PAGE</li>

    <li>Analyse et interprétation des résultats</li>

  </ul>

</div>
</div>
      </>
    )}

    {selectedItem === "ce" && (
      <>
        <h3 className="font-bold text-xl mb-3">
          ⚙️ Composantes essentielles
        </h3>

        <p>
          Les composantes essentielles représentent les dimensions fondamentales constituant une compétence.
        </p>
      </>
    )}

  </div>

)}

      </section>

      {/* Référentiel */}
      <section className="max-w-6xl mx-auto pt-4 pb-10">

        <div className="bg-white rounded-3xl p-10 shadow">

          <h2 className="text-3xl font-bold mb-4">
            Référentiel de formation
          </h2>

          <p className="text-slate-600 mb-6">
            Le référentiel de formation définit les compétences
            et les apprentissages critiques développés au fil des trois années.
          </p>

          <a
  href="/referentiel2.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block bg-teal-600 text-white px-6 py-3 rounded-xl shadow-md hover:bg-teal-700 transition"
>
  📄 Consulter le référentiel
</a>

        </div>

      </section>

      {/* Pourquoi ce BUT */}
      <section className="max-w-6xl mx-auto px-6 py-20">

        <h2 className="text-3xl font-bold mb-12">
          Pourquoi ai-je choisi cette formation ?
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-white rounded-3xl p-8 shadow">
            <h3 className="text-2xl font-bold mb-3">
              🧪 Pratique
            </h3>

            <p>
              Une formation riche en travaux pratiques,
              SAÉ et stages.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow">
            <h3 className="text-2xl font-bold mb-3">
              🔬 Diversité
            </h3>

            <p>
              Explorer différentes disciplines scientifiques.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow">
            <h3 className="text-2xl font-bold mb-3">
              🎯 Professionnalisation
            </h3>

            <p>
              Développer progressivement des compétences concrètes.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow">
            <h3 className="text-2xl font-bold mb-3">
              🚀 Avenir
            </h3>

            <p>
              Une ouverture vers la poursuite d'études et l'emploi.
            </p>
          </div>

        </div>

      </section>
{showPoster && (

<div
  className="
    fixed inset-0
    bg-black/70
    flex items-center justify-center
    z-50
  "
>

  <div className="relative max-w-6xl max-h-[90vh]">

    <button
      onClick={() => setShowPoster(false)}
      className="
        absolute
        top-4 right-4
        bg-white
        rounded-full
        w-10 h-10
        text-xl
        shadow-lg
      "
    >
      ✕
    </button>

    <img
      src="/Poster SAE4.1.jpg"
      alt="Poster SAÉ 4.01"
      className="
        max-h-[90vh]
        rounded-xl
      "
    />

  </div>

</div>

)}
{showPoster && (

<div className="mt-8 bg-slate-50 rounded-2xl p-6">

  <h4 className="font-bold text-xl mb-4">
    SAÉ 4.01 – Mise en œuvre d'une expérimentation et suivi analytique
  </h4>

  <p className="mb-4">
  Cette SAÉ avait pour objectif d'isoler, purifier et identifier une phosphatase acide produite par <span className="italic">Saccharomyces cerevisiae</span> à l'aide de plusieurs techniques biochimiques complémentaires.
</p>

  <h5 className="font-semibold mb-2">
    Matières mobilisées :
  </h5>

  <ul className="list-disc pl-6">

    <li>Biochimie</li>

    <li>Biologie moléculaire</li>

    <li>Analyses biologiques</li>

    <li>Traitement et interprétation des données expérimentales</li>

  </ul>

  <h5 className="font-semibold mt-4 mb-2">
    Techniques mises en œuvre :
  </h5>

  <ul className="list-disc pl-6">

    <li>Lyse cellulaire par sonication</li>

    <li>Précipitation au sulfate d'ammonium</li>

    <li>Chromatographie échangeuse d'ions</li>

    <li>SDS-PAGE</li>

    <li>Analyse et interprétation des résultats</li>

  </ul>

</div>

)}
    </main>
  );
}