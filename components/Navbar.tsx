import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-slate-200 z-50">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <Link
          href="/"
          className="text-xl font-bold text-teal-600 hover:text-teal-500 transition"
        >
          AA
        </Link>

        <ul className="flex gap-8 text-sm md:text-base text-slate-700">

          <li>
            <Link
              href="/"
              className="hover:text-teal-600 transition"
            >
              Accueil
            </Link>
          </li>

          <li>
            <Link
              href="/parcours"
              className="hover:text-teal-600 transition"
            >
              Mon parcours
            </Link>
          </li>

          <li>
            <Link
              href="/butgb"
              className="hover:text-teal-600 transition"
            >
              BUT GB BMB
            </Link>
          </li>

          <li>
            <Link
              href="/competences"
              className="hover:text-teal-600 transition"
            >
              Compétences
            </Link>
          </li>

          <li>
            <Link
              href="/experiences"
              className="hover:text-teal-600 transition"
            >
              Expériences
            </Link>
          </li>

          <li>
            <Link
              href="/projet"
              className="hover:text-teal-600 transition"
            >
              Projet professionnel
            </Link>
          </li>

          <li>
            <Link
              href="/contact"
              className="hover:text-teal-600 transition"
            >
              Contact
            </Link>
          </li>

        </ul>

      </div>

    </nav>
  );
}