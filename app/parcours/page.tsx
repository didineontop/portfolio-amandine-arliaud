"use client";

import { useState } from "react";
import Image from "next/image";

export default function ParcoursPage() {
  const [selectedStep, setSelectedStep] = useState("but");

  return (
    <main className="bg-slate-50 min-h-screen text-slate-900 pt-28">

      {/* Titre */}

      <section className="text-center py-16">

        <h1 className="text-5xl font-bold mb-4">
          Mon parcours
        </h1>

        <p className="text-slate-600 text-lg">
          Les principales étapes qui ont construit mon projet professionnel.
        </p>

      </section>

      {/* Frise */}

      <section className="max-w-6xl mx-auto px-6 py-10">

        <div className="relative">

          {/* Flèche */}

          <div className="absolute top-10 left-0 w-full h-1 bg-teal-300"></div>

          {/* Points */}

          <div className="relative flex justify-between items-start">

            {/* BAC */}

            <div
              onClick={() => setSelectedStep("bac")}
              className="flex flex-col items-center cursor-pointer"
            >
              <div className="w-20 h-20 rounded-full bg-blue-100 border-4 border-white shadow-lg flex items-center justify-center text-3xl hover:scale-110 transition">
             <Image
    src="/mariepila.png"
    alt="Logo Marie Pila"
    width={50}
    height={50}
  />
              </div>

              <p className="mt-3 font-semibold">
                Baccalauréat
              </p>

              <p className="text-sm text-slate-500">
                2022
              </p>
            </div>

            {/* IFMS */}

            <div
              onClick={() => setSelectedStep("ifms")}
              className="flex flex-col items-center cursor-pointer"
            >
              <div className="w-20 h-20 rounded-full bg-blue-100 border-4 border-white shadow-lg flex items-center justify-center text-xl hover:scale-110 transition">
              <Image
    src="/ifms.png"
    alt="Logo IFMS"
    width={50}
    height={50}
  />
              </div>

              <p className="mt-3 font-semibold">
                IFMS
              </p>

              <p className="text-sm text-slate-500">
                2022
              </p>
            </div>

            {/* BUT */}

            <div
              onClick={() => setSelectedStep("but")}
              className="flex flex-col items-center cursor-pointer"
            >
              <div className="w-20 h-20 rounded-full bg-blue-100 border-4 border-white shadow-lg flex items-center justify-center text-xl hover:scale-110 transition">
              <Image
    src="/logo mail GBIO.png"
    alt="Logo BUT"
    width={50}
    height={50}
  />
              </div>

              <p className="mt-3 font-semibold">
                BUT GB
              </p>

              <p className="text-sm text-slate-500">
                2023-2026
              </p>
            </div>

           {/* INRAE */}

            <div
              onClick={() => setSelectedStep("inrae")}
              className="flex flex-col items-center cursor-pointer"
            >
              <div className="w-20 h-20 rounded-full bg-green-100 border-4 border-white shadow-lg flex items-center justify-center text-xl hover:scale-110 transition">
                <Image
    src="/logoinrae.png"
    alt="Logo INRAE"
    width={50}
    height={50}
  />
              </div>

              <p className="mt-3 font-semibold">
                INRAE
              </p>

              <p className="text-sm text-slate-500">
                2025
              </p>
            </div>

            {/* MGG */}

            <div
              onClick={() => setSelectedStep("mgg")}
              className="flex flex-col items-center cursor-pointer"
            >
              <div className="w-20 h-20 rounded-full bg-green-100 border-4 border-white shadow-lg flex items-center justify-center text-xl hover:scale-110 transition">
                <Image
    src="/mmg.png"
    alt="Logo MMG"
    width={50}
    height={50}
  />
              </div>

              <p className="mt-3 font-semibold">
                MMG
              </p>

              <p className="text-sm text-slate-500">
                2026
              </p>
            </div>


            {/* FUTUR */}

            <div
              onClick={() => setSelectedStep("ecole")}
              className="flex flex-col items-center cursor-pointer"
            >
              <div className="w-20 h-20 rounded-full bg-purple-100 border-4 border-white shadow-lg flex items-center justify-center text-3xl hover:scale-110 transition">
                🚀
              </div>

              <p className="mt-3 font-semibold">
                École d'ingénieur
              </p>

              <p className="text-sm text-slate-500">
                09/2026
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* Carte dynamique */}

      <section className="max-w-4xl mx-auto px-6 py-16">

        <div className="bg-white rounded-3xl shadow-lg p-8">

          {selectedStep === "bac" && (
            <>
              <h2 className="text-3xl font-bold mb-4">
                Bac général
              </h2>

              <p className="text-justify">
                J'ai obtenu un baccalauréat général mention Bien avec les spécialités Sciences de la Vie et de la Terre (SVT) et Physique-Chimie, et l'option Maths Complémentaires. Ces enseignements ont renforcé mon intérêt pour les sciences expérimentales et m'ont donné les bases nécessaires pour poursuivre des études dans le domaine de la santé et des biotechnologies.
            
              </p>
            </>
          )}

          {selectedStep === "ifms" && (
            <>
              <h2 className="text-3xl font-bold mb-4">
                IFMS
              </h2>

              <p className="text-justify">
                Après l'obtention de mon baccalauréat, j'ai intégré l'Institut de Formation en Soins Infirmiers (IFSI) du CHU de Nîmes. Cette expérience m'a permis de découvrir le fonctionnement du système de santé ainsi que la prise en charge des patients.
                </p>
<p className="text-justify">
Au fil du semestre, j'ai réalisé que mes centres d'intérêt s'orientaient davantage vers la compréhension des mécanismes biologiques, l'expérimentation et les sciences du vivant. Cette réflexion m'a conduite à réorienter mon parcours vers le BUT Génie Biologique, plus en adéquation avec mon projet et mes aspirations.
              </p>
            </>
          )}

          {selectedStep === "but" && (
            <>
              <h2 className="text-3xl font-bold mb-4">
                BUT Génie Biologique
              </h2>

              <p className="text-justify">
                Intégrer le BUT Génie Biologique a confirmé mon intérêt pour les biotechnologies appliquées à la santé. Cette formation m'a permis d'acquérir des compétences en biologie moléculaire, culture cellulaire, bioinformatique, pharmacologie, analyses biologiques et génétique.

Les nombreux travaux pratiques, projets et stages réalisés au cours du BUT ont contribué à construire mon projet professionnel orienté vers les biotechnologies de la santé et le développement d'approches diagnostiques ou thérapeutiques innovantes.
              </p>
            </>
          )}

          {selectedStep === "inrae" && (
            <>
              <h2 className="text-3xl font-bold mb-4 text-justify">
                Stage INRAE
              </h2>

              <p className="text-justify">
                Lors de ce stage, j'ai participé à un projet visant à développer des lignées de tomates résistantes aux virus grâce à l'édition génomique par CRISPR/Cas9.

J'ai notamment réalisé différentes étapes de génotypage moléculaire afin d'identifier les plantes éditées et de caractériser les mutations obtenues.
</p>
              <p className="text-justify">
Cette expérience a constitué ma première immersion dans un laboratoire de recherche et m'a permis de découvrir concrètement les applications des biotechnologies et de l'ingénierie génétique.
              </p>
            </>
          )}

          {selectedStep === "mgg" && (
            <>
              <h2 className="text-3xl font-bold mb-4">
                Stage MGG
              </h2>

              <p className="text-justify">
                Réalisé au sein de l'équipe Marseille Medical Genetics (MMG), ce stage portait sur l'étude de la maladie NEM1 à l'aide d'outils d'édition génomique.
              </p>
              <p className="text-justify">
                Ce stage m'a permis de découvrir l'environnement de la recherche biomédicale et de développer des compétences en culture cellulaire, édition génomique et biologie moléculaire avancée.
              </p>
              <p className="text-justify">
                Cette expérience a fortement renforcé mon intérêt pour les biotechnologies appliquées à la santé et a confirmé mon souhait de poursuivre mes études dans ce domaine.
              </p>
            </>
          )}

          {selectedStep === "ecole" && (
            <>
              <h2 className="text-3xl font-bold mb-4">
                École d'ingénieur
              </h2>

              <p className="text-justify">
                À l'issue du BUT, je souhaite poursuivre mes études dans le domaine des biotechnologies appliquées à la santé afin d'approfondir mes compétences scientifiques et techniques.

Les formations envisagées me permettront de me spécialiser davantage dans les domaines de la pharmacologie, du développement de médicaments, des thérapies innovantes ou encore du diagnostic biomédical.
              </p>
            </>
          )}

        </div>

      </section>

    </main>
  );
}