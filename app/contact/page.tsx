export default function Contact() {
  return (
    <main className="bg-slate-50 min-h-screen mt-20">

      {/* Titre */}

      <section className="text-center py-20 px-6">

        <h1 className="text-5xl font-bold mb-6">
          📬 Contact
        </h1>

        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Merci d'avoir pris le temps de consulter mon portfolio.
          N'hésitez pas à me contacter pour toute question ou demande d'information.
        </p>

      </section>

      {/* Carte contact */}

      <section className="max-w-3xl mx-auto px-6 pb-20">

        <div className="bg-white rounded-3xl shadow-lg p-10">

          <div className="space-y-8">

            {/* Email */}

            <div>

              <h2 className="text-xl font-semibold mb-2">
                📧 Adresse e-mail
              </h2>

              <a
                href="mailto:amandinearliaud@gmail.com"
                className="text-blue-600 hover:underline"
              >
                amandinearliaud@gmail.com
              </a>

            </div>

            {/* Téléphone */}

            <div>

              <h2 className="text-xl font-semibold mb-2">
                📱 Téléphone
              </h2>

              <p>
                06 19 82 28 78
              </p>

            </div>

            {/* LinkedIn */}

            <div>

              <h2 className="text-xl font-semibold mb-2">
                💼 LinkedIn
              </h2>

              <a
                href="https://www.linkedin.com/in/amandine-arliaud-a91ab9306"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Consulter mon profil LinkedIn
              </a>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}