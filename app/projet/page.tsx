"use client";
import { useState } from "react";
export default function Projet() {
    
    const [selectedFormation, setSelectedFormation] = useState("");
  return (
    <main className="bg-slate-50 min-h-screen">

      {/* Titre */}

      <section className="text-center py-16">
<div className="h-20"></div>
        <h1 className="text-5xl font-bold mb-6">
          🎯 Mon projet professionnel
        </h1>

        <p className="max-w-3xl mx-auto text-lg text-slate-700">
          Au cours du BUT Génie Biologique, mes enseignements et mes expériences professionnelles m'ont progressivement orientée vers les biotechnologies appliquées à la santé. Cette page présente les domaines qui m'intéressent aujourd'hui ainsi que les formations que j'envisage pour poursuivre mon parcours.
        </p>
</section>
      <section className="max-w-6xl mx-auto px-6 py-10">

        <h2 className="text-3xl font-bold text-center mb-10">
          💡 Les domaines qui m'intéressent
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {/* Médicaments */}

          <div className="bg-white rounded-3xl shadow-lg p-8 text-center hover:scale-105 transition">

            <div className="text-5xl mb-4">
              💊
            </div>

            <h3 className="text-xl font-bold mb-3">
              Développement de médicaments
            </h3>

            <p>
              Participer à la conception et à l'évaluation de nouvelles stratégies thérapeutiques.
            </p>

          </div>

          {/* Thérapies innovantes */}

          <div className="bg-white rounded-3xl shadow-lg p-8 text-center hover:scale-105 transition">

            <div className="text-5xl mb-4">
              🧬
            </div>

            <h3 className="text-xl font-bold mb-3">
              Thérapies innovantes
            </h3>

            <p>
              Explorer les approches basées sur l'ingénierie génétique et cellulaire.
            </p>

          </div>

          {/* Diagnostic */}

          <div className="bg-white rounded-3xl shadow-lg p-8 text-center hover:scale-105 transition">

            <div className="text-5xl mb-4">
              🔬
            </div>

            <h3 className="text-xl font-bold mb-3">
              Diagnostic
            </h3>

            <p>
              Développer ou améliorer les outils permettant de détecter et caractériser les pathologies.
            </p>

          </div>

        </div>

      </section>
            <section className="max-w-4xl mx-auto px-6 py-12">

        <h2 className="text-3xl font-bold text-center mb-10">
          🧭 Comment mon projet s'est construit
        </h2>

        <div className="space-y-8">

          <div className="bg-white rounded-2xl shadow-md p-6">

            <h3 className="font-bold text-lg">
              🧬 Stage INRAE
            </h3>

            <p>
              Découverte de l'édition génomique et du potentiel des biotechnologies végétales.
            </p>

          </div>

          <div className="bg-white rounded-2xl shadow-md p-6">

            <h3 className="font-bold text-lg">
              🧠 Stage MMG
            </h3>

            <p>
              Découverte du lien entre recherche fondamentale, génétique et diagnostic médical.
            </p>

          </div>

          <div className="bg-white rounded-2xl shadow-md p-6">

            <h3 className="font-bold text-lg">
              💊 Enseignements de pharmacologie
            </h3>

            <p>
              Découverte des mécanismes d'action des médicaments et du développement préclinique.
            </p>

          </div>

        </div>

      </section>
           <section className="max-w-5xl mx-auto py-16">

  <h2 className="text-3xl font-bold text-center mb-12">
    🎓 Les formations envisagées
  </h2>

  <p className="text-center text-slate-600 max-w-3xl mx-auto mb-16">
    Plusieurs formations peuvent me permettre d'atteindre mon objectif professionnel dans les biotechnologies appliquées à la santé. Chacune présente des approches complémentaires qui m'intéressent particulièrement.
  </p>
<div className="h-20"></div>
  <div className="relative h-[600px]">

    {/* Centre */}

    <div
      className="
      absolute
      top-1/2 left-1/2
      -translate-x-1/2 -translate-y-1/2
      w-60 h-60
      rounded-full
      bg-slate-200
      shadow-xl
      flex flex-col
      items-center
      justify-center
      text-center
      font-bold
      text-xl
      "
    >
      🎓

      <span className="mt-2">
        Poursuite
        <br />
        d'études
      </span>
    </div>

    {/* ESITech */}

   <button
  onClick={() =>
    setSelectedFormation(
      selectedFormation === "esitech" ? "" : "esitech"
    )
  }
  className={`
    absolute
    left-20 top-[52%]
    -translate-y-1/2
    w-44 h-44
    rounded-full
    shadow-lg
    flex flex-col
    items-center
    justify-center
    text-center
    transition duration-300 hover:scale-105

    ${
      selectedFormation === "esitech"
        ? "bg-green-300 ring-4 ring-green-400"
        : "bg-green-100"
    }
  `}
>

  <img
  src="/logos/esitech.png"
  alt="ESITech"
  className="w-26 h-26 object-contain mb-2"
/>

<p className="text-sm">
  ✅ Admise
</p>

</button>

    {/* Polytech */}

    <button
  onClick={() =>
    setSelectedFormation(
      selectedFormation === "polytech" ? "" : "polytech"
    )
  }
  className={`
    absolute
    right-20 top-[52%]
    -translate-y-1/2
    w-44 h-44
    rounded-full
    shadow-lg
    flex flex-col
    items-center
    justify-center
    text-center
    transition duration-300 hover:scale-105

    ${
      selectedFormation === "polytech"
        ? "bg-blue-300 ring-4 ring-blue-400"
        : "bg-blue-100"
    }
  `}
>

  <img
  src="/logos/polytech.png"
  alt="Polytech"
  className="w-24 h-24 object-contain mb-2"
/>

<p className="text-sm">
  📅 Entretien
</p>

</button>

    {/* ENSTBB */}

    <button
  onClick={() =>
    setSelectedFormation(
      selectedFormation === "enstbb" ? "" : "enstbb"
    )
  }
  className={`
    absolute
    top-[-50] left-1/2
    -translate-x-1/2
    w-44 h-44
    rounded-full
    shadow-lg
    flex flex-col
    items-center
    justify-center
    text-center
    transition duration-300 hover:scale-105

    ${
      selectedFormation === "enstbb"
        ? "bg-orange-300 ring-4 ring-orange-400"
        : "bg-orange-100"
    }
  `}
>

  <img
  src="/logos/enstbb.png"
  alt="ENSTBB"
  className="w-20 h-20 object-contain mb-2"
/>

<p className="text-sm">
  ⏳ Attente
</p>

</button>

    {/* IBIS */}

    <button
  onClick={() =>
    setSelectedFormation(
      selectedFormation === "ibis" ? "" : "ibis"
    )
  }
  className={`
    absolute
    bottom-[-50] left-1/2
    -translate-x-1/2
    w-44 h-44
    rounded-full
    shadow-lg
    flex flex-col
    items-center
    justify-center
    text-center
    transition duration-300 hover:scale-105

    ${
      selectedFormation === "ibis"
        ? "bg-red-300 ring-4 ring-red-400"
        : "bg-red-100"
    }
  `}
>

  <img
  src="/logos/ibis.png"
  alt="IBIS"
  className="w-20 h-20 object-contain mb-2"
/>

<p className="text-sm">
  ✅ Admise
</p>

</button>

  </div>

</section>
{selectedFormation && (

<section className="max-w-4xl mx-auto px-6 py-12">

  <div className="bg-white rounded-3xl shadow-xl p-10">

    {/* Les fiches apparaîtront ici */}
{selectedFormation === "polytech" && (

<div>

  <h2 className="text-3xl font-bold mb-6">
    ⭐ Réseau Polytech
  </h2>

  <p className="mb-4 text-justify">
    Le réseau Polytech représente actuellement l'une des poursuites d'études qui m'intéressent le plus.
  </p>

  <h3 className="font-bold mb-3">
    Pourquoi cette formation ?
  </h3>

  <ul className="list-disc pl-6 space-y-2">

    <li>
      Formation d'ingénieur reconnue.
    </li>

    <li>
      Forte orientation vers les biotechnologies et la santé.
    </li>

    <li>
      Possibilité de spécialisation en pharmacologie.
    </li>

    <li>
      Approche professionnalisante avec stages et projets.
    </li>

  </ul>

  <div className="mt-6 bg-blue-50 rounded-xl p-4">

    <p className="text-justify">
      ❤️ Parmi les écoles du réseau, Polytech Nice attire particulièrement mon attention grâce à sa spécialisation en pharmacologie proposée à partir de la quatrième année.
    </p>

  </div>
  </div>
  )}
{selectedFormation === "esitech" && (

<div>

  <h2 className="text-3xl font-bold mb-6">
    🎓 ESITech
  </h2>

  <p className="mb-4 text-justify">
    J'ai été admise à l'ESITech, école d'ingénieurs de l'Université de Rouen Normandie.
  </p>

  <h3 className="font-bold mb-3">
    Pourquoi cette formation m'intéresse ?
  </h3>

  <ul className="list-disc pl-6 space-y-2">

    <li>
      Formation d'ingénieur reconnue.
    </li>

    <li>
      Approche professionnalisante avec de nombreux projets et stages.
    </li>

    <li>
      Possibilité de poursuivre dans le domaine des biotechnologies et de la santé.
    </li>

    <li>
      Acquisition de compétences complémentaires en gestion de projet et innovation.
    </li>

  </ul>

  <div className="mt-6 bg-green-50 rounded-xl p-4">

    <p>
      ✅ Admission obtenue.
    </p>

  </div>

</div>




)}
{selectedFormation === "ibis" && (

<div>

  <h2 className="text-3xl font-bold mb-6">
    🧬 Master IBIS
  </h2>

  <p className="mb-4 text-justify">
    Le Master IBIS (Ingénierie Biomédicale et Innovations en Santé) de Montpellier propose une formation universitaire spécialisée dans les biotechnologies appliquées à la santé.
  </p>

  <h3 className="font-bold mb-3">
    Pourquoi cette formation m'intéresse ?
  </h3>

  <ul className="list-disc pl-6 space-y-2">

    <li>
      Formation fortement orientée vers la recherche biomédicale.
    </li>

    <li>
      Approfondissement des connaissances en biotechnologies de la santé.
    </li>

    <li>
      Possibilité de poursuivre vers la recherche ou le développement thérapeutique.
    </li>

    <li>
      Proximité avec les laboratoires de recherche montpelliérains.
    </li>

  </ul>

  <div className="mt-6 bg-green-50 rounded-xl p-4">

    <p>
      ✅ Admission obtenue.
    </p>

  </div>

</div>

)}
{selectedFormation === "enstbb" && (

<div>

  <h2 className="text-3xl font-bold mb-6">
    🧪 ENSTBB
  </h2>

  <p className="mb-4 text-justify">
    L'ENSTBB (École Nationale Supérieure de Technologie des Biomolécules de Bordeaux) est une école d'ingénieurs spécialisée dans les biotechnologies.
  </p>

  <h3 className="font-bold mb-3">
    Pourquoi cette formation m'intéresse ?
  </h3>

  <ul className="list-disc pl-6 space-y-2">

    <li>
      Formation entièrement dédiée aux biotechnologies.
    </li>

    <li>
      Forte proximité avec le secteur pharmaceutique et biotechnologique.
    </li>

    <li>
      Développement de compétences en production et innovation biotechnologique.
    </li>

    <li>
      Nombreuses opportunités professionnelles dans le domaine de la santé.
    </li>

  </ul>

  <div className="mt-6 bg-yellow-50 rounded-xl p-4">

    <p>
      ⏳ Actuellement sur liste d'attente.
    </p>

  </div>

</div>

)}
  </div>

</section>

)}
                <section className="max-w-4xl mx-auto px-6 py-16 text-center">

        <h2 className="text-3xl font-bold mb-6">
          🚀 Perspectives
        </h2>

        <p className="text-lg text-justify">
          À long terme, je souhaiterais contribuer au développement de nouvelles approches thérapeutiques, à l'amélioration des outils diagnostiques ou à la mise au point de solutions innovantes dans le domaine des biotechnologies appliquées à la santé.
        </p>

      </section>

   
    </main>
  );
}