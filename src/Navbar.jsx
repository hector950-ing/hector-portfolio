export default function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur bg-[#0a1020]/80 border-b border-white/5">
      <nav className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <a
          href="#home"
          className="text-white font-bold tracking-wider hover:text-teal-400 transition"
        >
          HJ
        </a>

        {/* Links */}
        <ul className="hidden md:flex gap-8 text-sm text-gray-300">
          <li>
            <a href="#about" className="hover:text-teal-400 transition">
              Sobre mí
            </a>
          </li>

          <li>
            <a href="#skills" className="hover:text-teal-400 transition">
              Habilidades
            </a>
          </li>

          <li>
            <a href="#projects" className="hover:text-teal-400 transition">
              Proyectos
            </a>
          </li>

          <li>
            <a href="#education" className="hover:text-teal-400 transition">
              Educación
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-teal-400 transition">
              Contacto
            </a>
          </li>
        </ul>

        {/* Idioma */}
        <button className="border border-teal-400 text-teal-400 px-3 py-1 rounded-md text-sm hover:bg-teal-400 hover:text-black transition">
          ES
        </button>
      </nav>
    </header>
  );
}
