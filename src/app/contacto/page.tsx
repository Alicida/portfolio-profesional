
export default function ContactoPage() {
  return (
    <main className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Contacto</h1>
      <p className="mb-4">¿Te interesa colaborar o tienes alguna consulta profesional? Puedes contactarme a través del formulario o en mis redes profesionales.</p>
      <ul className="list-disc pl-6 mb-4">
        <li>Email: brayantbola@gmail.com</li>
        <li>GitHub: <a href="https://github.com/Alicida" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">Alicida</a></li>
        <li>LinkedIn: <a href="https://www.linkedin.com/in/brayant-bolanos/" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">brayant-bolanos</a></li>
      </ul>
      <p className="text-sm">Próximamente: formulario de contacto integrado.</p>
    </main>
  );
}
