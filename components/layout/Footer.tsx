import Link from 'next/link'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary text-white py-8">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Logo and Copyright */}
          <div className="text-center md:text-left">
            <div className="text-2xl font-light font-heading mb-2 tracking-wider">
              <span className="text-gray-300">Area</span>
              <span className="text-white">Living</span>
              <span className="text-gray-400">Design</span>
            </div>
            <p className="text-sm text-gray-300">
              AreaLivingDesign.it - P.IVA 04914800265
            </p>
            <p className="text-sm text-gray-400 mt-1">
              © {currentYear} Tutti i diritti riservati
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
            <Link 
              href="/privacy" 
              className="text-sm text-gray-300 hover:text-primary transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link 
              href="/cookie-policy" 
              className="text-sm text-gray-300 hover:text-primary transition-colors duration-300"
            >
              Cookie Policy
            </Link>
            <Link 
              href="/terms" 
              className="text-sm text-gray-300 hover:text-primary transition-colors duration-300"
            >
              Termini e Condizioni
            </Link>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-6 pt-6 border-t border-gray-600 text-center">
          <p className="text-sm text-gray-400">
            Oltre 40 showroom in tutta Italia • Design Made in Italy • Garanzia 5 anni
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

