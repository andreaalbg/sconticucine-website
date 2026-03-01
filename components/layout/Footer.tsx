import Link from 'next/link'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary text-white py-8">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <div className="text-2xl font-light mb-2 tracking-wide" style={{fontFamily: 'var(--font-cormorant)', letterSpacing: '0.05em'}}>
              <span className="text-gray-400">Sconti</span>
              <span className="text-gray-200">Cucine</span>
            </div>
            <p className="text-sm text-gray-300">
              ScontiCucine.it - P.IVA 04914800265
            </p>
            <p className="text-sm text-gray-400 mt-1">
              © {currentYear} Tutti i diritti riservati
            </p>
          </div>

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
              Condizioni di Vendita
            </Link>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-600 text-center">
          <p className="text-sm text-gray-400">
            Oltre 40 showroom in tutta Italia • Cucine Made in Italy • Garanzia 5 anni
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
