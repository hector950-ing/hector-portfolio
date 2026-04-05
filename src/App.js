import React from "react";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a1020] to-[#05080f] text-gray-200">
      {/* Glow decorativo */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-teal-500/10 blur-3xl" />
        <div className="absolute top-64 left-20 h-[380px] w-[380px] rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <Navbar />

      {/* HERO */}
      <main id="home" className="relative max-w-6xl mx-auto px-6 pt-28 md:pt-32">
        <p className="text-teal-400 font-semibold mb-4">Hola, mi nombre es</p>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
          Héctor Javier.
        </h1>

        <h2 className="text-3xl md:text-4xl font-semibold text-gray-400 mb-8">
          Estudiante de Ingeniería en Sistemas y <br />
          Programador en formacion
        </h2>

        <p className="max-w-xl text-gray-400 leading-relaxed mb-10">
          Especializado en trabajar a nivel de sistema con Phyton y Linux, migrando a la nube
          con soluciones de Automatización y Web. Construyo software eficiente entendiendo
          cómo funciona el hardware detrás de escena.
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="#projects"
            className="bg-teal-500 hover:bg-teal-600 text-black font-semibold px-6 py-3 rounded-md transition"
          >
            Ver Proyectos
          </a>

          <a
            href="#contact"
            className="border border-gray-500 hover:border-teal-400 hover:bg-white/5 px-6 py-3 rounded-md transition"
          >
            Currículum vitae
          </a>
        </div>
      </main>

      {/* SOBRE MI */}
      <section id="about" className="relative max-w-6xl mx-auto px-6 py-32">
        <div className="flex items-center gap-4 mb-10">
          <span className="text-teal-400 font-mono text-sm">01.</span>
          <h3 className="text-2xl font-bold text-white">Sobre mí</h3>
          <div className="flex-1 h-px bg-white/10 ml-4" />
        </div>

        <div className="max-w-3xl text-gray-400 leading-relaxed space-y-4">
          <p>
            Soy estudiante de Ingeniería en Sistemas con una orientación fuerte hacia el
            desarrollo de software, sistemas Linux y automatización.
          </p>
          <p>
            Me gusta entender cómo funcionan las cosas por dentro: desde estructuras de datos
            y memoria en C++, hasta servicios web y soluciones en la nube.
          </p>
          <p>
            Busco crear software eficiente, mantenible y bien pensado, combinando fundamentos
            teóricos con práctica real.
          </p>
        </div>
      </section>

      {/* HABILIDADES */}
      <section id="skills" className="relative max-w-6xl mx-auto px-6 pb-32">
        <div className="flex items-center gap-4 mb-10">
          <span className="text-teal-400 font-mono text-sm">02.</span>
          <h3 className="text-2xl font-bold text-white">Habilidades</h3>
          <div className="flex-1 h-px bg-white/10 ml-4" />
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {/* Card 1 */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-teal-400/40 hover:bg-white/10 transition">
            <h4 className="text-white font-semibold mb-4">Lenguajes</h4>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="flex items-center justify-between">
                <span>C++</span>
                <span className="text-gray-500">Sistemas / rendimiento</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Python</span>
                <span className="text-gray-500">Automatización / IA</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Java</span>
                <span className="text-gray-500">POO / lógica</span>
              </li>
              <li className="flex items-center justify-between">
                <span>JavaScript</span>
                <span className="text-gray-500">Web</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Bash</span>
                <span className="text-gray-500">Scripting</span>
              </li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-teal-400/40 hover:bg-white/10 transition">
            <h4 className="text-white font-semibold mb-4">Tecnologías</h4>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="flex items-center justify-between">
                <span>Linux</span>
                <span className="text-gray-500">Arch / Ubuntu</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Git & GitHub</span>
                <span className="text-gray-500">Versionado</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Django</span>
                <span className="text-gray-500">Backend</span>
              </li>
              <li className="flex items-center justify-between">
                <span>MySQL</span>
                <span className="text-gray-500">BD</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Docker</span>
                <span className="text-gray-500">Básico</span>
              </li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-teal-400/40 hover:bg-white/10 transition">
            <h4 className="text-white font-semibold mb-4">Fundamentos</h4>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="flex items-center justify-between">
                <span>Estructuras de Datos</span>
                <span className="text-gray-500">Listas / árboles</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Algoritmos</span>
                <span className="text-gray-500">Complejidad</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Redes</span>
                <span className="text-gray-500">TCP/IP</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Arquitectura</span>
                <span className="text-gray-500">Hardware</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Ciberseguridad</span>
                <span className="text-gray-500">Bases</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* PROYECTOS (placeholder listo para rellenar después) */}
      <section id="projects" className="relative max-w-6xl mx-auto px-6 pb-32">
        <div className="flex items-center gap-4 mb-10">
          <span className="text-teal-400 font-mono text-sm">03.</span>
          <h3 className="text-2xl font-bold text-white">Proyectos Destacados</h3>
          <div className="flex-1 h-px bg-white/10 ml-4" />
        </div>

        <div className="grid gap-6">
          {/* Card template */}
          {[
            {
              title: "Próximamente: Proyecto 1",
              desc: "Aquí irá una descripción corta del proyecto (qué resuelve, stack y aporte).",
              tags: ["C++", "Linux", "Performance"],
            },
            {
              title: "Próximamente: Proyecto 2",
              desc: "Aquí irá otra descripción. Usted podrá agregar links a GitHub y demo cuando esté listo.",
              tags: ["Python", "Automatización", "Web"],
            },
          ].map((p, idx) => (
            <div
              key={idx}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 hover:border-teal-400/40 hover:bg-white/10 transition"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h4 className="text-white font-semibold text-xl mb-2">{p.title}</h4>
                  <p className="text-gray-400 leading-relaxed">{p.desc}</p>
                </div>

                <span className="text-xs text-teal-300 border border-teal-400/30 px-3 py-1 rounded-full">
                  En construcción
                </span>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs text-gray-300 bg-white/5 border border-white/10 px-3 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-6 text-sm text-gray-500">
          Tip rápido: cuando tenga un proyecto real, sólo cambia el array de arriba (title/desc/tags)
          y listo. Sin sufrir. (Bueno, “sin” es optimista, pero casi).
        </p>
      </section>

      {/* EDUCACIÓN */}
      <section id="education" className="relative max-w-6xl mx-auto px-6 pb-32">
        <div className="flex items-center gap-4 mb-10">
          <span className="text-teal-400 font-mono text-sm">04.</span>
          <h3 className="text-2xl font-bold text-white">Educación</h3>
          <div className="flex-1 h-px bg-white/10 ml-4" />
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
          <h4 className="text-white font-semibold text-xl mb-2">
            Ingeniería en Sistemas Computacionales
          </h4>
          <p className="text-teal-300 mb-4">Universidad Tecnológica de México (UNITEC)</p>

          <p className="text-gray-400 mb-6">Actualmente cursando (Promedio General: 7.6)</p>

          <p className="text-white font-semibold mb-3">Cursos Destacados (Logrados):</p>
          <ul className="grid md:grid-cols-2 gap-2 text-gray-300 text-sm">
            <li className="flex items-center gap-2">
              <span className="text-teal-300">✓</span> Calculo Vectorial 10
            </li>
            <li className="flex items-center gap-2">
              <span className="text-teal-300">✓</span> Trazabilidad y configuracion de software 9
            </li>
            <li className="flex items-center gap-2">
              <span className="text-teal-300">✓</span> Ingenieria de requermientos 10
            </li>
            <li className="flex items-center gap-2">
              <span className="text-teal-300">✓</span> Protocolo y enrutamiento de redes 8
            </li>
          </ul>

          <p className="text-gray-500 text-sm mt-6">
            Siguientes pasos: Seminario de ingenieria,Fin de la carrera... (Cuatrimestre 26-3).
          </p>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contact" className="relative max-w-6xl mx-auto px-6 pb-32">
        <div className="flex items-center gap-4 mb-10">
          <span className="text-teal-400 font-mono text-sm">05.</span>
          <h3 className="text-2xl font-bold text-white">¿Qué sigue?</h3>
          <div className="flex-1 h-px bg-white/10 ml-4" />
        </div>

        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Contáctame</h2>

        <p className="max-w-2xl text-gray-400 leading-relaxed mb-10">
          Actualmente estoy buscando nuevas oportunidades para aplicar mis habilidades en
          automatización y desarrollo. Si tiene una pregunta o solo quiere saludar, haré lo
          posible por responderle.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Links */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
            <p className="text-white font-semibold mb-4">Links</p>
            <div className="flex gap-4">
              <a
                className="border border-teal-400/40 hover:border-teal-300 hover:bg-white/5 rounded-lg px-4 py-3 transition"
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                title="GitHub"
              >
                GitHub
              </a>
              <a
                className="border border-teal-400/40 hover:border-teal-300 hover:bg-white/5 rounded-lg px-4 py-3 transition"
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                title="LinkedIn"
              >
                LinkedIn
              </a>
              <a
                className="border border-teal-400/40 hover:border-teal-300 hover:bg-white/5 rounded-lg px-4 py-3 transition"
                href="mailto:hector@example.com"
                title="Email"
              >
                Email
              </a>
            </div>

            <p className="text-xs text-gray-500 mt-4">
              Cambie estos links por los suyos cuando quiera (GitHub/LinkedIn/Correo real).
            </p>
          </div>

          {/* Form (visual) */}
          <form className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
            <div className="grid gap-4">
              <input
                className="bg-white/5 border border-white/10 focus:border-teal-400/60 outline-none rounded-lg px-4 py-3 text-gray-200"
                placeholder="Nombre"
              />
              <input
                className="bg-white/5 border border-white/10 focus:border-teal-400/60 outline-none rounded-lg px-4 py-3 text-gray-200"
                placeholder="Asunto"
              />
              <textarea
                className="bg-white/5 border border-white/10 focus:border-teal-400/60 outline-none rounded-lg px-4 py-3 text-gray-200 min-h-[140px]"
                placeholder="Mensaje"
              />
              <button
                type="button"
                className="w-fit bg-teal-500 hover:bg-teal-600 text-black font-semibold px-6 py-3 rounded-md transition"
              >
                Di Hola
              </button>

              <p className="text-xs text-gray-500">
                (Por ahora el botón no envía nada: es solo UI. Luego lo conectamos con EmailJS o un backend.)
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* Footer mini */}
      <footer className="relative text-center text-xs text-gray-600 pb-10">
        Hecho con React + Tailwind. Sin “Escuela secundaria” 😄
      </footer>
    </div>
  );
}

export default App;
