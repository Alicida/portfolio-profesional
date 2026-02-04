export default function Navbar() {
  return (
    <nav className="w-full bg-white border-b border-gray-200 shadow-sm mb-8 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <div className="font-bold text-xl">
          <a href="#inicio" className="hover:text-accent transition-colors">Portafolio</a>
        </div>
        <div className="space-x-6">
          <a href="#proyectos" className="hover:text-accent transition-colors">Proyectos</a>
          <a href="#acerca" className="hover:text-accent transition-colors">Acerca de mí</a>
          <a href="#contacto" className="hover:text-accent transition-colors">Contacto</a>
        </div>
      </div>
    </nav>
  );
}
