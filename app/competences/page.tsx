"use client";

import { useState } from "react";

export default function CompetencesPage() {

  const [selectedCompetence, setSelectedCompetence] = useState("");
const [selectedImage, setSelectedImage] = useState("");
  return (

    <main className="bg-slate-50 min-h-screen pt-28">

      {/* Titre */}

      <section className="text-center py-16">

        <h1 className="text-5xl font-bold mb-6">
          Compétences développées au cours du BUT
        </h1>

        <p className="max-w-4xl mx-auto text-lg text-slate-600 leading-relaxed">
          Au cours du BUT Génie Biologique parcours Biologie Médicale et Biotechnologies,
          j'ai développé des compétences scientifiques, techniques et méthodologiques
          mobilisées lors des enseignements, des SAÉ et de mes expériences professionnelles.
        </p>

      </section>
<section className="max-w-6xl mx-auto py-12">

  <h2 className="text-3xl font-bold text-center mb-12">
    Domaines scientifiques explorés au cours du BUT
  </h2>

 <div className="relative h-[700px]">

  {/* Bulle centrale */}

  <div
    className="
      absolute
      top-[60%] left-1/2
      -translate-x-1/2 -translate-y-1/2
      w-72 h-72
      rounded-full
      bg-slate-200
      shadow-xl
      flex flex-col
      items-center
      justify-center
      text-center
      font-bold
      text-xl
      z-10
    "
  >
    🔬

    <span className="mt-2">
      Concrètement, 
      <br />
      qu'est-ce que  
      <br />
      je sais faire ?
    </span>
  </div>

  {/* Biologie moléculaire */}

  <button
    onClick={() =>
      setSelectedCompetence(
        selectedCompetence === "biomol" ? "" : "biomol"
      )
    }
    className={`absolute top-0 left-1/2 -translate-x-1/2
      w-52 h-52 rounded-full shadow-lg
      transition duration-300 hover:scale-105
      ${
        selectedCompetence === "biomol"
          ? "bg-blue-300 ring-4 ring-blue-400"
          : "bg-blue-100"
      }`}
  >
    🧬
    <br />
    Biologie
    <br />
    moléculaire
  </button>

  {/* Pharmacologie */}

  <button
    onClick={() =>
      setSelectedCompetence(
        selectedCompetence === "pharmaco" ? "" : "pharmaco"
      )
    }
    className={`absolute top-48 left-0
      w-48 h-48 rounded-full shadow-lg
      transition duration-300 hover:scale-105
      ${
        selectedCompetence === "pharmaco"
          ? "bg-red-300 ring-4 ring-red-400"
          : "bg-red-100"
      }`}
  >
    💊
    <br />
    Pharmacologie
    <br />
    &
    <br />
    Toxicologie
  </button>

  {/* Bioinformatique */}

  <button
    onClick={() =>
      setSelectedCompetence(
        selectedCompetence === "bioinfo" ? "" : "bioinfo"
      )
    }
    className={`absolute top-48 right-0
      w-48 h-48 rounded-full shadow-lg
      transition duration-300 hover:scale-105
      ${
        selectedCompetence === "bioinfo"
          ? "bg-purple-300 ring-4 ring-purple-400"
          : "bg-purple-100"
      }`}
  >
    💻
    <br />
    Bioinformatique
  </button>

  {/* Analyses biologiques */}

  <button
    onClick={() =>
      setSelectedCompetence(
        selectedCompetence === "analyses" ? "" : "analyses"
      )
    }
    className={`absolute bottom-0 left-12
      w-52 h-52 rounded-full shadow-lg
      transition duration-300 hover:scale-105
      ${
        selectedCompetence === "analyses"
          ? "bg-orange-300 ring-4 ring-orange-400"
          : "bg-orange-100"
      }`}
  >
    🔬
    <br />
    Analyses
    <br />
    biologiques
  </button>

  {/* Culture cellulaire */}

  <button
    onClick={() =>
      setSelectedCompetence(
        selectedCompetence === "culture" ? "" : "culture"
      )
    }
    className={`absolute bottom-0 right-12
      w-52 h-52 rounded-full shadow-lg
      transition duration-300 hover:scale-105
      ${
        selectedCompetence === "culture"
          ? "bg-teal-300 ring-4 ring-teal-400"
          : "bg-teal-100"
      }`}
  >
    🧫
    <br />
    Culture
    <br />
    cellulaire
  </button>

</div>
</section>
{selectedCompetence && (

<section className="max-w-5xl mx-auto px-6 py-10">

  <div className="bg-white rounded-3xl shadow-lg p-10">

    {selectedCompetence === "analyses" && (
        <div>

  <h2 className="text-3xl font-bold mb-8">
    🔬 Analyses biologiques et médicales
  </h2>

  {/* Présentation */}

  <div className="mb-8">

    <h3 className="text-xl font-bold mb-3">
      📖 Présentation
    </h3>

    <p className="text-justify">
      Les enseignements d'analyses biologiques et médicales m'ont permis de découvrir les principales méthodes utilisées dans les laboratoires de diagnostic. Ces enseignements couvrent différents domaines tels que la bactériologie, la parasitologie, la virologie, l'immunologie, l'hématologie et la biochimie médicale.
    </p>

  </div>

  {/* Techniques */}

  <div className="mb-8">

    <h3 className="text-xl font-bold mb-3">
      🧪 Techniques mobilisées
    </h3>

    <div className="flex flex-wrap gap-3">

      <span className="bg-orange-100 px-3 py-1 rounded-full">
        Microscopie
      </span>

      <span className="bg-orange-100 px-3 py-1 rounded-full">
        Culture bactérienne
      </span>

      <span className="bg-orange-100 px-3 py-1 rounded-full">
        Isolement sur gélose
      </span>

      <span className="bg-orange-100 px-3 py-1 rounded-full">
        Antibiogramme
      </span>

      <span className="bg-orange-100 px-3 py-1 rounded-full">
        Immunofluorescence
      </span>

      <span className="bg-orange-100 px-3 py-1 rounded-full">
        Immunoélectrophorèse
      </span>

      <span className="bg-orange-100 px-3 py-1 rounded-full">
        Groupage sanguin
      </span>

      <span className="bg-orange-100 px-3 py-1 rounded-full">
        Dosages biochimiques
      </span>

    </div>

  </div>

  {/* Galerie de preuves */}

  <div className="mb-8">

    <h3 className="text-xl font-bold mb-4">
      📂 Quelques preuves
    </h3>

    <div className="grid md:grid-cols-2 gap-6">

      {/* Photo 1 */}

      <div className="bg-slate-100 rounded-xl p-4">

        <img
          src="/preuves/plasmo.jpeg"
          alt="Plasmodium falciparum"
          onClick={() => setSelectedImage("/preuves/plasmo.jpeg")}
          className="w-70 h-70 object-cover rounded-full mx-auto mb-3 border-4 border-slate-300 shadow-lg hover:scale-105 transition duration-300"
        />

        <p className="text-sm">
          Observation microscopique de <i>Plasmodium falciparum</i>, agent responsable du paludisme.
        </p>

      </div>

      {/* Photo 2 */}

      <div className="bg-slate-100 rounded-xl p-4">

        <img
          src="/preuves/schisto.jpeg"
          alt="Œuf de schistosome"
          onClick={() => setSelectedImage("/preuves/schisto.jpeg")}
          className="w-70 h-70 object-cover rounded-full mx-auto mb-3 border-4 border-slate-300 shadow-lg hover:scale-105 transition duration-300"
        />

        <p className="text-sm">
          Observation microscopique d'un œuf de <i>Schistosoma mansoni</i> dans le cadre des enseignements de parasitologie.
        </p>

      </div>

      {/* Photo 3 */}

      <div className="bg-slate-100 rounded-xl p-4">

        <img
          src="/preuves/gelose.jpeg"
          alt="Isolement bactérien"
            onClick={() => setSelectedImage("/preuves/gelose.jpeg")}
          className="w-70 h-70 object-cover rounded-full mx-auto mb-3 border-4 border-slate-300 shadow-lg hover:scale-105 transition duration-300"
        />

        <p className="text-sm">
          Isolement et observation de colonies bactériennes sur milieu gélosé.
        </p>

      </div>

      {/* Photo 4 */}

      <div className="bg-slate-100 rounded-xl p-4">

        <img
          src="/preuves/immunofluo.jpeg"
          alt="Immunofluorescence"
            onClick={() => setSelectedImage("/preuves/immunofluo.jpeg")}
          className="w-70 h-70 object-cover rounded-full mx-auto mb-3 border-4 border-slate-300 shadow-lg hover:scale-105 transition duration-300"
        />

        <p className="text-sm">
          Observation de cellules marquées par immunofluorescence.
        </p>
        
 

      </div>
<div className="bg-slate-100 rounded-xl p-4">

        <img
          src="/preuves/if.jpeg"
          alt="Immunofluorescence"
          onClick={() => setSelectedImage("/preuves/if.jpeg")}
          className="w-70 h-70 object-cover rounded-full mx-auto mb-3 border-4 border-slate-300 shadow-lg hover:scale-105 transition duration-300"
        />

        <p className="text-sm ">
          Immunoélectrophorèse pour la détection d'anticorps spécifiques dans le sérum (gammapathies monoclonales).
        </p>
        
      </div>
<div className="bg-slate-100 rounded-xl p-4">

        <img
          src="/preuves/bacteries.jpeg"
          alt="Immunofluorescence"
          onClick={() => setSelectedImage("/preuves/bacteries.jpeg")}
          className="w-70 h-70 object-cover rounded-full mx-auto mb-3 border-4 border-slate-300 shadow-lg hover:scale-105 transition duration-300"
        />

        <p className="text-sm">
          Coloration de Gram et observation des bactéries de la flore vaginale au microscope.
        </p>
        
 

      </div>

    </div>

  </div>

  {/* Référentiel */}

  <div className="mb-8">

    <h3 className="text-xl font-bold mb-3">
      📘 Compétences du référentiel associées
    </h3>

    <div className="flex flex-wrap gap-3">

      <span className="bg-green-100 px-3 py-1 rounded-full">
        Réaliser des examens de biologie médicale
      </span>

      <span className="bg-red-100 px-3 py-1 rounded-full">
        Analyser
      </span>

    </div>

  </div>

  {/* Projet */}

  <div>

    <h3 className="text-xl font-bold mb-3">
      🎯 Ce que cette matière m'a apporté
    </h3>

    <p className="text-justify">
      Ces enseignements m'ont permis d'acquérir une vision globale des méthodes utilisées dans les laboratoires de diagnostic médical et d'approfondir mes connaissances sur les agents pathogènes, les analyses biologiques et les outils d'aide au diagnostic.
    </p>

  </div>

</div>
    )}

    {selectedCompetence === "biomol" && (

      <div>

  <h2 className="text-3xl font-bold mb-8">
    🧬 Biologie moléculaire
  </h2>

  {/* Présentation */}

  <div className="mb-8">

    <h3 className="text-xl font-bold mb-3">
      📖 Présentation
    </h3>

    <p className="text-justify">
      La biologie moléculaire occupe une place centrale dans le parcours Biologie Médicale et Biotechnologies. Elle permet d'étudier l'organisation, l'expression et les modifications du matériel génétique grâce à des techniques utilisées aussi bien en recherche fondamentale qu'en recherche appliquée.
    </p>

  </div>

  {/* Techniques */}

  <div className="mb-8">

    <h3 className="text-xl font-bold mb-3">
      🧪 Techniques mobilisées
    </h3>

    <div className="flex flex-wrap gap-3">

      <span className="bg-blue-100 px-3 py-1 rounded-full">PCR</span>

      <span className="bg-blue-100 px-3 py-1 rounded-full">qPCR</span>

      <span className="bg-blue-100 px-3 py-1 rounded-full">RT-PCR</span>

      <span className="bg-blue-100 px-3 py-1 rounded-full">Extraction ADN</span>

      <span className="bg-blue-100 px-3 py-1 rounded-full">Extraction ARN</span>

      <span className="bg-blue-100 px-3 py-1 rounded-full">HRM</span>

      <span className="bg-blue-100 px-3 py-1 rounded-full">Séquençage ADN</span>

      <span className="bg-blue-100 px-3 py-1 rounded-full">CRISPR/Cas9</span>

      <span className="bg-blue-100 px-3 py-1 rounded-full">Génotypage</span>

      <span className="bg-blue-100 px-3 py-1 rounded-full">Fragmentation plasmidique</span>

    </div>

  </div>

  {/* Preuves */}

  <div className="mb-8">

    <h3 className="text-xl font-bold mb-4">
      📂 Quelques preuves
    </h3>

    <div className="grid md:grid-cols-2 gap-6">

      <div className="bg-slate-100 rounded-xl p-5">

        <h4 className="font-bold mb-2">
          📚 TP extraction ARN, RT-PCR…
        </h4>

        <p className="text-sm text-slate-600 mb-3 text-justify">
          
Les effets de l'inhibition de l'expression du gène Xlox sur le développement embryonnaire des oursins.
        </p>

       <a
  href="/compterendus/Compte Rendu - TP1 Xlox.pdf"
  target="_blank"
  className="text-blue-600 underline"
>
  Consulter le compte-rendu
</a>

        </div>

      <div className="bg-slate-100 rounded-xl p-5">

        <h4 className="font-bold mb-2">
          🧬 Stage INRAE
        </h4>

        <p className="text-sm text-slate-600 mb-3">
          Génotypage de lignées de tomates éditées par CRISPR/Cas9 à l'aide du HRM et du séquençage.
        </p>

       <a
  href="/compterendus/rapportinrae.pdf"
  target="_blank"
  className="text-blue-600 underline"
>
  Consulter le rapport de stage
</a>

      </div>

      <div className="bg-slate-100 rounded-xl p-5">

        <h4 className="font-bold mb-2">
          Construction plasmidique dans la cadre des thérapies innovantes
        </h4>

        <p className="text-sm text-slate-600 mb-3 text-justify">
          Création d'un modèle cellulaire hiPSC porteur
d'un variant MEN1 par CRISPR/Cas9 afin d'étudier
la pathogénicité des variants de signification
inconnue et d'améliorer
le diagnostic moléculaire de la NEM1
        </p>

       <a
  href="/compterendus/travail_crisprcas9_Amandine_Arliaud.pdf"
  target="_blank"
  className="text-blue-600 underline"
>
  Consulter le compte-rendu
</a>

      </div>

    </div>

  </div>

  {/* Référentiel */}

  <div className="mb-8">

    <h3 className="text-xl font-bold mb-3">
      📘 Compétences du référentiel associées
    </h3>

    <div className="flex flex-wrap gap-3">

      <span className="bg-red-100 px-3 py-1 rounded-full">
        Analyser
      </span>

      <span className="bg-orange-100 px-3 py-1 rounded-full">
        Expérimenter
      </span>

      <span className="bg-blue-100 px-3 py-1 rounded-full">
        Ingénierie moléculaire
      </span>

    </div>

  </div>

  {/* Projet */}

  <div>

    <h3 className="text-xl font-bold mb-3 text-justify">
      🎯 Lien avec mon projet professionnel
    </h3>

    <p className="text-justify">
      Les outils de biologie moléculaire sont aujourd'hui au cœur de nombreuses approches innovantes en pharmacologie et en biotechnologies de la santé. Les expériences réalisées au cours du BUT et de mes stages m'ont permis de découvrir concrètement ces technologies et ont fortement contribué à mon intérêt pour ce secteur.
    </p>

  </div>

</div>

    )}
 {selectedCompetence === "pharmaco" && (

<div>

  <h2 className="text-3xl font-bold mb-8">
    💊 Pharmacologie & Toxicologie
  </h2>

  <div className="mb-8">

    <h3 className="text-xl font-bold mb-3">
      📖 Présentation
    </h3>

    <p className="text-justify">
      Les enseignements de pharmacologie et toxicologie m'ont permis d'étudier les interactions entre les molécules et les organismes vivants ainsi que les méthodes utilisées pour évaluer leur efficacité et leur sécurité. Ces enseignements constituent une première approche du développement préclinique des médicaments et des études toxicologiques.
    </p>

  </div>

  <div className="mb-8">

    <h3 className="text-xl font-bold mb-3">
      🧪 Méthodes et notions abordées
    </h3>

    <div className="flex flex-wrap gap-3">

      <span className="bg-red-100 px-3 py-1 rounded-full">
        Cytotoxicité cellulaire
      </span>

      <span className="bg-red-100 px-3 py-1 rounded-full">
        Pharmacocinétique
      </span>

      <span className="bg-red-100 px-3 py-1 rounded-full">
        Perméabilité épithéliale
      </span>

      <span className="bg-red-100 px-3 py-1 rounded-full">
        Élaboration de protocoles expérimentaux
      </span>

      <span className="bg-red-100 px-3 py-1 rounded-full">
        Études précliniques
      </span>

      <span className="bg-red-100 px-3 py-1 rounded-full">
        Toxicologie
      </span>

    </div>

  </div>

  <div className="mb-8">

    <h3 className="text-xl font-bold mb-4">
      📂 Quelques preuves
    </h3>

    <div className="grid md:grid-cols-2 gap-6">

      <div className="bg-slate-100 rounded-xl p-5">

        <h4 className="font-bold mb-2">
          📚 Étude du potentiel cytotoxique de l'azide de sodium
        </h4>

        <p className="text-sm text-slate-600 mb-3">
          Évaluation des effets de l'azide de sodium sur une lignée cellulaire Vero.
        </p>

        <a
          href="/compterendus/CR xénobiotique Arliaud Nespoulous TP3.pdf"
          target="_blank"
          className="text-blue-600 underline"
        >
          Consulter le compte-rendu
        </a>

      </div>

      <div className="bg-slate-100 rounded-xl p-5">

        <h4 className="font-bold mb-2">
          📚 Pharmacocinétique du paracétamol
        </h4>

        <p className="text-sm text-slate-600 mb-3">
          Étude de l'absorption et de l'élimination d'un médicament.
        </p>

        <a
          href="/compterendus/Compte rendu de TP pharma (1).pdf"
          target="_blank"
          className="text-blue-600 underline"
        >
          Consulter le compte-rendu
        </a>

      </div>

      <div className="bg-slate-100 rounded-xl p-5">

        <h4 className="font-bold mb-2">
          📚 Étude de la perméabilité d'un épithélium reconstitué
        </h4>

        <p className="text-sm text-slate-600 mb-3">
          Analyse du passage de molécules à travers une barrière épithéliale.
        </p>

        <a
          href="/compterendus/Compte rendu pharmaco Epithelium.pdf"
          target="_blank"
          className="text-blue-600 underline"
        >
          Consulter le compte-rendu
        </a>

      </div>

      <div className="bg-slate-100 rounded-xl p-5">

        <h4 className="font-bold mb-2">
          📚 Élaboration d'un protocole d'étude de psychotropes
        </h4>

        <p className="text-sm text-slate-600 mb-3">
          Conception d'une étude expérimentale portant sur deux molécules psychotropes.
        </p>

        <a
          href="/compterendus/TP Pharmacologie.pdf"
          target="_blank"
          className="text-blue-600 underline"
        >
          Consulter le compte-rendu
        </a>

      </div>

    </div>

  </div>

  <div className="mb-8">

    <h3 className="text-xl font-bold mb-3">
      📘 Compétences du référentiel associées
    </h3>

    <div className="flex flex-wrap gap-3">

      <span className="bg-orange-100 px-3 py-1 rounded-full">
        Expérimenter
      </span>

      <span className="bg-red-100 px-3 py-1 rounded-full">
        Analyser
      </span>

      <span className="bg-yellow-100 px-3 py-1 rounded-full">
        Mener des études de in vivo à in vitro
      </span>

    </div>

  </div>

  <div>

    <h3 className="text-xl font-bold mb-3">
      🎯 Lien avec mon projet professionnel
    </h3>

    <p className="text-justify">
      Cette matière a particulièrement retenu mon attention au cours du BUT. Elle m'a permis de découvrir les différentes étapes de l'évaluation d'une molécule thérapeutique, depuis les études précliniques jusqu'à l'analyse de ses effets biologiques. Ces enseignements ont renforcé mon intérêt pour la pharmacologie et contribuent aujourd'hui à mon projet de poursuite d'études dans le domaine des biotechnologies appliquées à la santé.
    </p>

  </div>

</div>

)}
{selectedCompetence === "bioinfo" && (
    <div>

  <h2 className="text-3xl font-bold mb-8">
    💻 Bioinformatique
  </h2>

  {/* Présentation */}

  <div className="mb-8">

    <h3 className="text-xl font-bold mb-3">
      📖 Présentation
    </h3>

    <p className="text-justify">
      La bioinformatique permet d'exploiter les données biologiques générées par les techniques de séquençage et de génomique. Au cours du BUT, j'ai découvert différents outils d'analyse permettant d'étudier les séquences, l'expression génique et les variations génétiques.
    </p>

  </div>

  {/* Techniques */}

  <div className="mb-8">

    <h3 className="text-xl font-bold mb-3">
      🧪 Outils et méthodes abordés
    </h3>

    <div className="flex flex-wrap gap-3">

      <span className="bg-purple-100 px-3 py-1 rounded-full">
        BLAST
      </span>

      <span className="bg-purple-100 px-3 py-1 rounded-full">
        Alignement de séquences
      </span>

      <span className="bg-purple-100 px-3 py-1 rounded-full">
        Analyse Sanger
      </span>

      <span className="bg-purple-100 px-3 py-1 rounded-full">
        Analyse NGS
      </span>

      <span className="bg-purple-100 px-3 py-1 rounded-full">
        RNAseq
      </span>

      <span className="bg-purple-100 px-3 py-1 rounded-full">
        PCA
      </span>

      <span className="bg-purple-100 px-3 py-1 rounded-full">
        Heatmaps
      </span>

      <span className="bg-purple-100 px-3 py-1 rounded-full">
        Volcano plots
      </span>

      <span className="bg-purple-100 px-3 py-1 rounded-full">
        Analyse de variants
      </span>
      <span className="bg-purple-100 px-3 py-1 rounded-full">
        Maîtrise de logiciels spécialisés (Rstudio, Galaxy, IGV, SnapGene, Ubuntu)
      </span>

    </div>

  </div>

  {/* Preuves */}

  <div className="mb-8">

    <h3 className="text-xl font-bold mb-4">
      📂 Quelques preuves
    </h3>

    <div className="grid md:grid-cols-2 gap-6">

      {/* TP RNAseq */}

      <div className="bg-slate-100 rounded-xl p-5">

        <h4 className="font-bold mb-2">
          📚 Analyse RNAseq
        </h4>

        <p className="text-sm text-slate-600 mb-3 text-justify">
          Étude de l'expression génique à partir de données de séquençage.
        </p>

        <a
          href="/compterendus/TP_Rstudio_Amandine_Arliaud.pdf"
          target="_blank"
          className="text-blue-600 underline"
        >
          Consulter le compte-rendu
        </a>

      </div>

      {/* TP NGS */}

      <div className="bg-slate-100 rounded-xl p-5">

        <h4 className="font-bold mb-2">
          📚 Analyse de données NGS
        </h4>

        <p className="text-sm text-slate-600 mb-3">
          Interprétation de données de séquençage haut débit.
        </p>

        <a
          href="/compterendus/TP Techniques omiques BMB3 Arliaud Bonne.pdf"
          target="_blank"
          className="text-blue-600 underline"
        >
          Consulter le compte-rendu
        </a>

      </div>

      {/* TP BLAST */}

      <div className="bg-slate-100 rounded-xl p-5">

        <h4 className="font-bold mb-2">
          📚 Annotation et analyse comparative de génomes mitochondriaux
        </h4>

        <p className="text-sm text-slate-600 mb-3">
          Détection d'ORF, annotation fonctionnelle, étude de l'organisation génique et comparaison structurale de génomes mitochondriaux à l'aide d'outils bioinformatiques spécialisés.
        </p>

        <a
          href="/compterendus/TD Bioinformatique S4 ARLIAUD Amandine copie.pdf"
          target="_blank"
          className="text-blue-600 underline"
        >
          Consulter le compte-rendu
        </a>

      </div>

      {/* Stage MMG */}

      <div className="bg-slate-100 rounded-xl p-5">

        <h4 className="font-bold mb-2">
          🧠 Stage MMG
        </h4>

        <p className="text-sm text-slate-600 mb-3">
          Analyse de variants MEN1 et interprétation de données génétiques dans un contexte diagnostique.
        </p>

        <a
          href="/compterendus/bioinfostage.pdf"
          target="_blank"
          className="text-blue-600 underline"
        >
          Consulter des exemples d'analyses bioinformatiques réalisées
        </a>

      </div>

    </div>

  </div>

  {/* Référentiel */}

  <div className="mb-8">

    <h3 className="text-xl font-bold mb-3">
      📘 Compétences du référentiel associées
    </h3>

    <div className="flex flex-wrap gap-3">

      <span className="bg-red-100 px-3 py-1 rounded-full">
        Analyser
      </span>

      <span className="bg-blue-100 px-3 py-1 rounded-full">
        Ingénierie moléculaire
      </span>

    </div>

  </div>

  {/* Projet */}

  <div>

    <h3 className="text-xl font-bold mb-3">
      🎯 Lien avec mon projet professionnel
    </h3>

    <p className="text-justify">
      La bioinformatique occupe aujourd'hui une place essentielle dans les biotechnologies et la médecine de précision. Les enseignements suivis au cours du BUT ainsi que mon stage au MMG m'ont permis de découvrir l'importance de l'analyse des données génétiques dans la compréhension des maladies et le développement d'approches thérapeutiques innovantes.
    </p>

  </div>

</div>
)}
{selectedCompetence === "culture" && (
<div>

  <h2 className="text-3xl font-bold mb-8">
    🧫 Culture cellulaire
  </h2>

  {/* Présentation */}

  <div className="mb-8">

    <h3 className="text-xl font-bold mb-3">
      📖 Présentation
    </h3>

    <p className="text-justify">
      La culture cellulaire constitue un outil fondamental en recherche biomédicale. Au cours du BUT et de mes expériences professionnelles, j'ai découvert différents modèles cellulaires permettant d'étudier le fonctionnement des cellules, les mécanismes pathologiques ainsi que les effets de traitements ou de modifications génétiques.
    </p>

  </div>

  {/* Techniques */}

  <div className="mb-8">

    <h3 className="text-xl font-bold mb-3">
      🧪 Techniques mobilisées
    </h3>

    <div className="flex flex-wrap gap-3">

      <span className="bg-teal-100 px-3 py-1 rounded-full">
        Culture de cellules Vero
      </span>

      <span className="bg-teal-100 px-3 py-1 rounded-full">
        Culture de hiPSC
      </span>


      <span className="bg-teal-100 px-3 py-1 rounded-full">
        Cytométrie en flux
      </span>
      <span className="bg-teal-100 px-3 py-1 rounded-full">
        Culture de cellules MDCK
      </span>

      <span className="bg-teal-100 px-3 py-1 rounded-full">
        Travail en conditions stériles
      </span>

      <span className="bg-teal-100 px-3 py-1 rounded-full">
        Passage cellulaire
      </span>

      <span className="bg-teal-100 px-3 py-1 rounded-full">
        Congélation cellulaire
      </span>

      <span className="bg-teal-100 px-3 py-1 rounded-full">
        Électroporation
      </span>
     

    </div>

  </div>

  {/* Preuves */}

  <div className="mb-8">

    <h3 className="text-xl font-bold mb-4">
      📂 Quelques preuves
    </h3>

    <div className="grid md:grid-cols-2 gap-6">

      {/* TP Cytométrie */}

      <div className="bg-slate-100 rounded-xl p-5">

        <h4 className="font-bold mb-2">
          📚 Cytométrie en flux sur cellules Vero
        </h4>

        <p className="text-sm text-slate-600 mb-3 text-justify">
          Caractérisation du cycle cellulaire de cellules Vero par cytométrie en flux.
        </p>

        <a
          href="/compterendus/CR cytometrie Arliaud Bernard Nespoulous.pdf"
          target="_blank"
          className="text-blue-600 underline"
        >
          Consulter le compte-rendu
        </a>

      </div>

      {/* TP Cytotoxicité */}

      <div className="bg-slate-100 rounded-xl p-5">

        <h4 className="font-bold mb-2">
          📚 Étude de cytotoxicité sur cellules Vero
        </h4>

        <p className="text-sm text-slate-600 mb-3 text-justify">
          Évaluation de l'effet de l'azide de sodium sur une lignée cellulaire épithéliale.
        </p>

        <a
          href="/compterendus/CR xénobiotique Arliaud Nespoulous TP3.pdf"
          target="_blank"
          className="text-blue-600 underline"
        >
          Consulter le compte-rendu
        </a>

      </div>

      {/* Stage MMG */}

      <div className="bg-slate-100 rounded-xl p-5">

        <h4 className="font-bold mb-2">
          🧠 Stage MMG
        </h4>

        <p className="text-sm text-slate-600 mb-3 text-justify">
          Culture et entretien de hiPSC utilisées pour l'étude de variants de signification inconnue impliqués dans la maladie MEN1.
        </p>

       

      </div>

      

    </div>

  </div>

  {/* Galerie photos */}

  <div className="mb-8">

    <h3 className="text-xl font-bold mb-4">
      📸 Observations et manipulations
    </h3>

    <div className="grid md:grid-cols-3 gap-6">

      <div className="text-center">

        <img
          src="/preuves/hipsc.jpg"
          alt="hiPSC"
          onClick={() => setSelectedImage("/preuves/hiPSC.jpg")}
          className="w-52 h-52 object-cover rounded-full mx-auto border-4 border-slate-300 shadow-lg hover:scale-105 transition duration-300 cursor-pointer"
        />

        <p className="mt-3 text-sm">
          Culture de cellules souches pluripotentes induites (hiPSC).
        </p>

      </div>
<div className="text-center">

        <img
          src="/preuves/manip.JPG"
          alt="Cytométrie"
          onClick={() => setSelectedImage("/preuves/manip.JPG")}
          className="w-52 h-52 object-cover rounded-full mx-auto border-4 border-slate-300 shadow-lg hover:scale-105 transition duration-300 cursor-pointer"
        />

        <p className="mt-3 text-sm">
          Manipulation de cellules en conditions stériles dans un PSM de type II.
        </p>

      </div>
      <div className="text-center">

        <img
          src="/preuves/epithelium.jpeg"
          alt="Épithélium"
          onClick={() => setSelectedImage("/preuves/epithelium.jpeg")}
          className="w-52 h-52 object-cover rounded-full mx-auto border-4 border-slate-300 shadow-lg hover:scale-105 transition duration-300 cursor-pointer"
        />

        <p className="mt-3 text-sm">
          Observation microscopique d'un épithélium reconstitué à partir de cellules MDCK.
        </p>

      </div>

      

    </div>

  </div>

  {/* Référentiel */}

  <div className="mb-8">

    <h3 className="text-xl font-bold mb-3">
      📘 Compétences du référentiel associées
    </h3>

    <div className="flex flex-wrap gap-3">

      <span className="bg-orange-100 px-3 py-1 rounded-full">
        Expérimenter
      </span>

      <span className="bg-yellow-100 px-3 py-1 rounded-full">
        Mener des études de in vivo à in vitro
      </span>

    </div>

  </div>

  {/* Projet */}

  <div>

    <h3 className="text-xl font-bold mb-3">
      🎯 Lien avec mon projet professionnel
    </h3>

    <p className="text-justify">
      Les modèles cellulaires constituent aujourd'hui des outils indispensables pour comprendre les mécanismes biologiques, évaluer de nouvelles approches thérapeutiques et développer des stratégies innovantes en médecine de précision. Les expériences acquises au cours du BUT et de mon stage au MMG ont renforcé mon intérêt pour ces approches expérimentales appliquées à la santé.
    </p>

  </div>

</div>

)}
  </div>

</section>

)}

 <section className="text-center py-16">

        <h1 className="text-5xl font-bold mb-6">
          Et bien d'autres compétences...
        </h1>

        <p className="max-w-4xl mx-auto text-lg text-slate-600 leading-relaxed text-justify">
          Les compétences présentées dans cette page correspondent aux domaines que j'ai le plus approfondis au cours de ma formation et de mes expériences en laboratoire. Cependant, le BUT Génie Biologique m'a également permis d'explorer de nombreux autres champs disciplinaires tels que la biochimie, l'enzymologie, la chimie organique, la physiologie/physiopathologie, les statistiques appliquées aux sciences du vivant, les procédés de bioproduction ou encore les démarches qualité. Cette diversité d'enseignements constitue l'une des richesses de la formation et m'a permis de développer une approche pluridisciplinaire des biotechnologies et de la santé.
        </p>

      </section>

{selectedImage && (

  <div
    className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
  >

    {/* Bouton fermer */}

    <button
      onClick={() => setSelectedImage("")}
      className="absolute top-6 right-6 text-white text-4xl font-bold hover:scale-110 transition"
    >
      ✕
    </button>

    {/* Image */}

    <img
      src={selectedImage}
      alt="Agrandissement"
      className="max-w-[90%] max-h-[85%] rounded-xl shadow-2xl"
    />

  </div>

)}

    </main>

  );
}