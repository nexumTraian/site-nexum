// components/Header.jsx
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-3 px-4 md:px-8">
        <div className="flex items-center gap-2">
          <img src="/logo-nexum.svg" alt="Nexum Energy" className="h-10 w-auto" />
        </div>
        <nav className="hidden md:flex gap-6 items-center">
          <a href="#" className="text-gray-900 font-medium hover:text-blue-700">Acasă</a>
          <a href="#produse" className="text-gray-900 font-medium hover:text-blue-700">Produse & Servicii</a>
          <a href="#proiectare" className="text-gray-900 font-medium hover:text-blue-700">Proiectare & Instalare</a>
          <a href="#beneficii" className="text-gray-900 font-medium hover:text-blue-700">Beneficii</a>
          <a href="#finantare" className="text-gray-900 font-medium hover:text-blue-700">Finanțare</a>
          <a href="#portofoliu" className="text-gray-900 font-medium hover:text-blue-700">Portofoliu</a>
          <a href="#despre" className="text-gray-900 font-medium hover:text-blue-700">Despre noi</a>
          <a href="#contact" className="text-gray-900 font-medium hover:text-blue-700">Contact</a>
        </nav>
        <a
          href="#oferta"
          className="ml-4 bg-blue-700 text-white px-5 py-2 rounded-2xl font-semibold shadow hover:bg-blue-800 transition-all duration-200"
        >
          Cere ofertă
        </a>
        <button className="md:hidden ml-4" onClick={() => setMenuOpen(!menuOpen)}>
          <svg width={28} height={28} fill="none" stroke="currentColor" strokeWidth={2} className="text-blue-700">
            <path d="M4 7h20M4 14h20M4 21h20"/>
          </svg>
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg px-8 py-4 flex flex-col gap-3">
          <a href="#" className="text-gray-900 font-medium" onClick={() => setMenuOpen(false)}>Acasă</a>
          <a href="#produse" className="text-gray-900 font-medium" onClick={() => setMenuOpen(false)}>Produse & Servicii</a>
          <a href="#proiectare" className="text-gray-900 font-medium" onClick={() => setMenuOpen(false)}>Proiectare & Instalare</a>
          <a href="#beneficii" className="text-gray-900 font-medium" onClick={() => setMenuOpen(false)}>Beneficii</a>
          <a href="#finantare" className="text-gray-900 font-medium" onClick={() => setMenuOpen(false)}>Finanțare</a>
          <a href="#portofoliu" className="text-gray-900 font-medium" onClick={() => setMenuOpen(false)}>Portofoliu</a>
          <a href="#despre" className="text-gray-900 font-medium" onClick={() => setMenuOpen(false)}>Despre noi</a>
          <a href="#contact" className="text-gray-900 font-medium" onClick={() => setMenuOpen(false)}>Contact</a>
          <a href="#oferta" className="bg-blue-700 text-white px-5 py-2 rounded-2xl font-semibold shadow mt-2 text-center" onClick={() => setMenuOpen(false)}>Cere ofertă</a>
        </div>
      )}
    </header>
  );
}
3. Folosește componenta în layout sau pagină
Dacă folosești Next.js 13+, mergi în /app/layout.js sau /app/page.js

Dacă ai Next.js clasic, mergi în /pages/_app.js sau direct în /pages/index.js

Exemplu în /app/layout.js sau /pages/_app.js:

jsx
Copy
Edit
import Header from '../components/Header';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
Exemplu direct în /pages/index.js:

jsx
Copy
Edit
import Header from '../components/Header';

export default function HomePage() {
  return (
    <>
      <Header />
      {/* restul paginii */}
    </>
  );
}
