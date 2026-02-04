
export default function ProyectosPage() {
  return (
    <main className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Proyectos Destacados</h1>
      <div className="space-y-8">
        <section className="border rounded-lg p-4 shadow">
          <h2 className="text-2xl font-semibold mb-2">Career AI Assistant</h2>
          <p className="mb-2">Asistente inteligente que analiza tu CV y una oferta laboral usando IA, generando sugerencias para adaptar tu perfil y puntuando la compatibilidad.</p>
          <ul className="list-disc pl-6 mb-2">
            <li>Frontend: Next.js (React)</li>
            <li>Backend: FastAPI (Python)</li>
            <li>Base de datos: PostgreSQL</li>
            <li>Cloud: AWS Lambda, S3</li>
            <li>IA: OpenAI API / Gemini API</li>
          </ul>
          <p className="text-sm">Incluye CI/CD, pruebas automáticas y despliegue serverless.</p>
        </section>
        <section className="border rounded-lg p-4 shadow">
          <h2 className="text-2xl font-semibold mb-2">Site Health Watcher</h2>
          <p className="mb-2">Plataforma de monitoreo y alertas para sitios web. Supervisa URLs, mide disponibilidad y tiempo de carga, y envía alertas ante problemas.</p>
          <ul className="list-disc pl-6 mb-2">
            <li>Frontend: Next.js (React)</li>
            <li>Backend: FastAPI (Python)</li>
            <li>Base de datos: DynamoDB / Firestore</li>
            <li>Cloud: AWS Lambda, EventBridge</li>
            <li>Alertas: Email, Telegram</li>
          </ul>
          <p className="text-sm">Automatización, pruebas y monitoreo cloud incluidos.</p>
        </section>
        <section className="border rounded-lg p-4 shadow">
          <h2 className="text-2xl font-semibold mb-2">API Explorer PWA (Opcional)</h2>
          <p className="mb-2">PWA para consultar APIs públicas, con soporte offline y caché. Permite explorar datos de fuentes abiertas de forma rápida y moderna.</p>
          <ul className="list-disc pl-6 mb-2">
            <li>Frontend: React (Vite) o SvelteKit</li>
            <li>Despliegue: Netlify/Vercel</li>
            <li>Funcionalidad: Service Workers, caché offline</li>
          </ul>
          <p className="text-sm">Ideal para mostrar habilidades en frontend moderno y PWA.</p>
        </section>
      </div>
    </main>
  );
}
