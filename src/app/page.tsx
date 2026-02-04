export default function HomePage() {
  return (
    <main className="bg-background text-text font-sans">
      {/* Hero / Inicio */}
      <section id="inicio" className="container mx-auto py-16 flex flex-col items-center justify-center min-h-[60vh]">
        <h1 className="text-5xl font-heading font-bold mb-4 text-primary text-center">Brayant Bolaños</h1>
        <h2 className="text-2xl font-semibold mb-6 text-accent text-center">Arquitecto Web & Full Stack</h2>
        <p className="max-w-2xl text-lg mb-6 text-center">Arquitecto Web Senior y Desarrollador Full Stack con experiencia en soluciones escalables, automatizadas y cloud-native. Apasionado por la innovación, la integración de IA y la mejora continua, con enfoque en calidad y liderazgo técnico.</p>
        <ul className="flex flex-wrap gap-4 justify-center mb-6">
          <li className="bg-secondary text-primary px-4 py-2 rounded-full font-semibold">Cloud Native & Serverless</li>
          <li className="bg-secondary text-primary px-4 py-2 rounded-full font-semibold">Automatización & DevOps</li>
          <li className="bg-secondary text-primary px-4 py-2 rounded-full font-semibold">Integración de IA</li>
        </ul>
        <a href="#contacto" className="bg-accent text-white px-6 py-3 rounded-lg font-bold shadow hover:bg-primary transition">Contáctame</a>
      </section>

      {/* Proyectos */}
      <section id="proyectos" className="container mx-auto py-16">
        <h2 className="text-4xl font-heading font-bold mb-8 text-center text-primary">Proyectos Destacados</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Proyecto 1 */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-accent flex flex-col">
            <h3 className="text-2xl font-bold mb-2 text-accent">Career AI Assistant</h3>
            <p className="mb-2">Asistente inteligente que analiza tu CV y una oferta laboral usando IA, generando sugerencias para adaptar tu perfil y puntuando la compatibilidad.</p>
            <ul className="list-disc pl-6 mb-2 text-sm">
              <li>Frontend: Next.js (React)</li>
              <li>Backend: FastAPI (Python)</li>
              <li>Base de datos: PostgreSQL</li>
              <li>Cloud: AWS Lambda, S3</li>
              <li>IA: OpenAI API / Gemini API</li>
            </ul>
            <span className="text-xs text-gray-500 mt-auto">Incluye CI/CD, pruebas automáticas y despliegue serverless.</span>
          </div>
          {/* Proyecto 2 */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-accent flex flex-col">
            <h3 className="text-2xl font-bold mb-2 text-accent">Site Health Watcher</h3>
            <p className="mb-2">Plataforma de monitoreo y alertas para sitios web. Supervisa URLs, mide disponibilidad y tiempo de carga, y envía alertas ante problemas.</p>
            <ul className="list-disc pl-6 mb-2 text-sm">
              <li>Frontend: Next.js (React)</li>
              <li>Backend: FastAPI (Python)</li>
              <li>Base de datos: DynamoDB / Firestore</li>
              <li>Cloud: AWS Lambda, EventBridge</li>
              <li>Alertas: Email, Telegram</li>
            </ul>
            <span className="text-xs text-gray-500 mt-auto">Automatización, pruebas y monitoreo cloud incluidos.</span>
          </div>
          {/* Proyecto 3 */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-accent flex flex-col">
            <h3 className="text-2xl font-bold mb-2 text-accent">API Explorer PWA (Opcional)</h3>
            <p className="mb-2">PWA para consultar APIs públicas, con soporte offline y caché. Permite explorar datos de fuentes abiertas de forma rápida y moderna.</p>
            <ul className="list-disc pl-6 mb-2 text-sm">
              <li>Frontend: React (Vite) o SvelteKit</li>
              <li>Despliegue: Netlify/Vercel</li>
              <li>Funcionalidad: Service Workers, caché offline</li>
            </ul>
            <span className="text-xs text-gray-500 mt-auto">Ideal para mostrar habilidades en frontend moderno y PWA.</span>
          </div>
        </div>
      </section>

      {/* Acerca de mí */}
      <section id="acerca" className="container mx-auto py-16">
        <h2 className="text-4xl font-heading font-bold mb-8 text-center text-primary">Acerca de mí</h2>
        <div className="max-w-3xl mx-auto text-lg">
          <p className="mb-4">Arquitecto Web y Desarrollador Full Stack con sólida experiencia en el diseño, desarrollo y despliegue de soluciones escalables, automatizadas y cloud-native. Comprometido con la mejora continua, la calidad y la innovación tecnológica.</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Experto en migración a la nube y automatización de procesos</li>
            <li>Integración de sistemas de pago y liderazgo técnico</li>
            <li>Modernización de aplicaciones legacy</li>
            <li>Mentoría de equipos multidisciplinarios</li>
          </ul>
          <p className="mb-2 font-semibold">Educación:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Ingeniería en Sistemas Informáticos — Universidad Tecnológica de Nezahualcóyotl (2013–2017)</li>
          </ul>
          <p className="mb-2 font-semibold">Idiomas:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Español (nativo)</li>
            <li>Inglés (B1 intermedio)</li>
          </ul>
          <p className="mb-2 font-semibold">Intereses:</p>
          <ul className="list-disc pl-6">
            <li>Lectura, retos de estrategia, literatura, filosofía, música, resolución de problemas y tecnología.</li>
          </ul>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="container mx-auto py-16">
        <h2 className="text-4xl font-heading font-bold mb-8 text-center text-primary">Contacto</h2>
        <div className="max-w-xl mx-auto text-lg">
          <p className="mb-4">¿Te interesa colaborar o tienes alguna consulta profesional? Puedes contactarme a través del formulario o en mis redes profesionales.</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Email: brayantbola@gmail.com</li>
            <li>GitHub: <a href="https://github.com/Alicida" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">Alicida</a></li>
            <li>LinkedIn: <a href="https://www.linkedin.com/in/brayant-bolanos/" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">brayant-bolanos</a></li>
          </ul>
          <p className="text-sm">Próximamente: formulario de contacto integrado.</p>
        </div>
      </section>
    </main>
  );
}
