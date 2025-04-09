export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h4 className="text-xl font-semibold mb-2">Sobre Nosotros</h4>
            <p className="text-gray-400">
              Somos una empresa dedicada a brindar soluciones innovadoras para
              tu negocio. Contamos con años de experiencia en el sector.
            </p>
          </div>

          <div className="w-full md:w-1/3 mb-4 md:mb-0 text-center">
            <h4 className="text-xl font-semibold mb-2">Enlaces Rápidos</h4>
            <ul>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Contacto
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/3 text-center md:text-right">
            <h4 className="text-xl font-semibold mb-2">Síguenos</h4>
            <div className="flex justify-center md:justify-end space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                Facebook
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                Twitter
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-400">
            &copy; 2025 REACT PT. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
