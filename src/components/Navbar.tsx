import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-white border-b border-gray-200 shadow-sm mb-8">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <div className="font-bold text-xl">
          <Link href="/">Portafolio</Link>
        </div>
        <div className="space-x-6">
          <Link href="/proyectos" className="hover:text-blue-600 transition-colors">Proyectos</Link>
          <Link href="/acerca" className="hover:text-blue-600 transition-colors">Acerca de mí</Link>
          <Link href="/contacto" className="hover:text-blue-600 transition-colors">Contacto</Link>
        </div>
      </div>
    </nav>
  );
}
