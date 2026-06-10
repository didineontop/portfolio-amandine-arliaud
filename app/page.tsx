import Navbar from "@/components/Navbar";
export default function Accueil() {
  return (
    <main className="bg-slate-50 min-h-screen">
<section className="text-center py-24 px-6">

  <h1 className="text-6xl font-bold mt-10 mb-6">
    Amandine Arliaud
  </h1>

  <p className="text-2xl text-slate-700 italic max-w-3xl mx-auto">
    Comprendre le vivant pour imaginer les solutions de demain.
  </p>

</section>
<section className="max-w-6xl mx-auto px-6 py-10">

  <div className="bg-white rounded-3xl shadow-lg p-10">

    <div className="grid md:grid-cols-2 gap-10 items-center"></div>
    <div className="flex justify-center">

  <div className="
    w-72 h-72
    rounded-full
    bg-slate-200
    flex items-center justify-center
  ">

    <img
  src="/photo.png"
  alt="Amandine Arliaud"
  className="
    w-72 h-72
    rounded-full
    object-cover
    shadow-lg
  "
/>

  </div>

</div>
<div>

  <h2 className="text-3xl font-bold mt-10 mb-6">
    👋 Bonjour et bienvenue sur mon portfolio!
  </h2>

  <p className="text-justify leading-relaxed mb-4">

    Actuellement étudiante en troisième année de BUT Génie Biologique
    parcours Biologie Médicale et Biotechnologies à l'IUT de Toulon - La Garde,
    je m'intéresse particulièrement aux biotechnologies appliquées à la santé,
    à la pharmacologie et aux approches innovantes de diagnostic et de thérapie.

  </p>

  <p className="text-justify leading-relaxed mb-4">

    Depuis toujours, je suis fascinée par le fonctionnement du vivant et les
    mécanismes qui permettent de comprendre, prévenir ou traiter les maladies.
    Cette curiosité m'a naturellement conduite vers les sciences biologiques
    puis vers les biotechnologies de la santé.

  </p>

  <p className="text-justify leading-relaxed">

    Curieuse de nature, j'aime apprendre continuellement et explorer de nouveaux domaines. Cette curiosité dépasse le cadre scientifique : je m'intéresse également aux langues, au monde animal, au dessin, à la peinture et à de nombreux loisirs créatifs. Ces passions nourrissent ma créativité et ma capacité à aborder les problèmes sous différents angles.
</p>
</div>
    </div>

  

</section>
<section className="max-w-5xl mx-auto py-16 px-6">

  <h2 className="text-3xl font-bold text-center mb-10">
    📄 Documents
  </h2>

  <div className="grid md:grid-cols-2 gap-8">
  <a
  href="/CV.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="
    bg-white
    rounded-3xl
    shadow-lg
    p-8
    text-center
    hover:scale-105
    transition
  "
>

  <div className="text-5xl mb-4">
    📄
  </div>

  <h3 className="text-xl font-bold mb-2">
    Mon CV
  </h3>

  <p>
    Consulter mon curriculum vitae.
  </p>

</a>
<a
  href="/reco_Caroline_Lebaron.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="
    bg-white
    rounded-3xl
    shadow-lg
    p-8
    text-center
    hover:scale-105
    transition
  "
>

  <div className="text-5xl mb-4">
    ⭐
  </div>

  <h3 className="text-xl font-bold mb-2">
    Lettre de recommandation
  </h3>

  <p>
    Consulter la lettre rédigée par ma tutrice de stage.
  </p>

</a>
  
</div>
</section>

</main>
  );
}