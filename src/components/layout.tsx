export const Layout = ({ title, children }: { title: string; children: any }) => {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        <meta name="description" content="United Lawn Specialist - We Beautify Your Peace of America. Professional lawn care, fencing, deck services, and pest control in Fayette County, Coweta County, and Metro Atlanta." />
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet" />
        <link href="/static/styles.css" rel="stylesheet" />
        <script dangerouslySetInnerHTML={{
          __html: `
            tailwind.config = {
              theme: {
                extend: {
                  colors: {
                    'brand-red': '#DC143C',
                    'brand-blue': '#0066CC',
                    'brand-navy': '#003366',
                  }
                }
              }
            }
          `
        }} />
      </head>
      <body class="bg-gray-50">
        <nav class="bg-white shadow-lg sticky top-0 z-50">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-20">
              <div class="flex items-center">
                <a href="/" class="flex items-center">
                  <div class="text-2xl font-bold">
                    <span class="text-brand-blue">UNITED</span>
                    <span class="text-gray-700"> LAWN SPECIALIST</span>
                  </div>
                </a>
              </div>
              
              {/* Mobile menu button */}
              <div class="md:hidden">
                <button id="mobile-menu-button" class="text-gray-700 hover:text-brand-blue">
                  <i class="fas fa-bars text-2xl"></i>
                </button>
              </div>

              {/* Desktop menu */}
              <div class="hidden md:flex space-x-6">
                <a href="/" class="text-gray-700 hover:text-brand-blue transition">Home</a>
                <div class="relative group">
                  <button class="text-gray-700 hover:text-brand-blue transition">
                    Services <i class="fas fa-chevron-down text-xs"></i>
                  </button>
                  <div class="absolute hidden group-hover:block bg-white shadow-lg rounded-lg mt-2 py-2 w-64">
                    <a href="/fertilization" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Fertilization & Weed Control</a>
                    <a href="/hydro-seeding" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Hydro Seeding</a>
                    <a href="/fencing" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Fencing Services</a>
                    <a href="/deck-services" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Deck Services</a>
                    <a href="/pest-control" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Pest Control</a>
                  </div>
                </div>
                <a href="/service-areas" class="text-gray-700 hover:text-brand-blue transition">Service Areas</a>
                <a href="/gallery" class="text-gray-700 hover:text-brand-blue transition">Gallery</a>
                <a href="/testimonials" class="text-gray-700 hover:text-brand-blue transition">Testimonials</a>
                <a href="/about" class="text-gray-700 hover:text-brand-blue transition">About</a>
                <a href="/contact" class="bg-brand-red text-white px-4 py-2 rounded-lg hover:bg-red-700 transition">Get Free Quote</a>
              </div>
            </div>

            {/* Mobile menu */}
            <div id="mobile-menu" class="hidden md:hidden pb-4">
              <a href="/" class="block py-2 text-gray-700 hover:text-brand-blue">Home</a>
              <a href="/fertilization" class="block py-2 text-gray-700 hover:text-brand-blue">Fertilization & Weed Control</a>
              <a href="/hydro-seeding" class="block py-2 text-gray-700 hover:text-brand-blue">Hydro Seeding</a>
              <a href="/fencing" class="block py-2 text-gray-700 hover:text-brand-blue">Fencing Services</a>
              <a href="/deck-services" class="block py-2 text-gray-700 hover:text-brand-blue">Deck Services</a>
              <a href="/pest-control" class="block py-2 text-gray-700 hover:text-brand-blue">Pest Control</a>
              <a href="/service-areas" class="block py-2 text-gray-700 hover:text-brand-blue">Service Areas</a>
              <a href="/gallery" class="block py-2 text-gray-700 hover:text-brand-blue">Gallery</a>
              <a href="/testimonials" class="block py-2 text-gray-700 hover:text-brand-blue">Testimonials</a>
              <a href="/about" class="block py-2 text-gray-700 hover:text-brand-blue">About</a>
              <a href="/contact" class="block py-2 bg-brand-red text-white px-4 rounded-lg hover:bg-red-700">Get Free Quote</a>
            </div>
          </div>
        </nav>

        <main>
          {children}
        </main>

        <footer class="bg-brand-navy text-white mt-16">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 class="text-xl font-bold mb-4">United Lawn Specialist</h3>
                <p class="text-gray-300 italic">"We Beautify Your Peace of America"</p>
                <div class="mt-4">
                  <a href="tel:+14702419957" class="text-gray-300 hover:text-white">
                    <i class="fas fa-phone mr-2"></i>470-241-9957
                  </a>
                </div>
                <div class="mt-2">
                  <a href="mailto:info@unitedlawnspecialist.com" class="text-gray-300 hover:text-white">
                    <i class="fas fa-envelope mr-2"></i>info@unitedlawnspecialist.com
                  </a>
                </div>
                <div class="mt-2 text-gray-300">
                  <i class="fas fa-map-marker-alt mr-2"></i>PO Box 73362, Newnan, GA 30271-3362
                </div>
              </div>
              
              <div>
                <h4 class="font-bold mb-4">Services</h4>
                <ul class="space-y-2">
                  <li><a href="/fertilization" class="text-gray-300 hover:text-white">Fertilization & Weed Control</a></li>
                  <li><a href="/hydro-seeding" class="text-gray-300 hover:text-white">Hydro Seeding</a></li>
                  <li><a href="/fencing" class="text-gray-300 hover:text-white">Fencing Services</a></li>
                  <li><a href="/deck-services" class="text-gray-300 hover:text-white">Deck Services</a></li>
                  <li><a href="/pest-control" class="text-gray-300 hover:text-white">Pest Control</a></li>
                </ul>
              </div>
              
              <div>
                <h4 class="font-bold mb-4">Service Areas</h4>
                <ul class="space-y-2 text-gray-300">
                  <li>Fayette County, GA</li>
                  <li>Coweta County, GA</li>
                  <li>South Fulton County, GA</li>
                  <li>Metro Atlanta (Projects)</li>
                </ul>
              </div>
              
              <div>
                <h4 class="font-bold mb-4">Quick Links</h4>
                <ul class="space-y-2">
                  <li><a href="/about" class="text-gray-300 hover:text-white">About Us</a></li>
                  <li><a href="/service-areas" class="text-gray-300 hover:text-white">Service Areas</a></li>
                  <li><a href="/gallery" class="text-gray-300 hover:text-white">Gallery</a></li>
                  <li><a href="/testimonials" class="text-gray-300 hover:text-white">Testimonials</a></li>
                  <li><a href="/contact" class="text-gray-300 hover:text-white">Contact</a></li>
                </ul>
              </div>
            </div>
            
            <div class="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2025 United Lawn Specialist. All rights reserved.</p>
            </div>
          </div>
        </footer>

        <script src="/static/app.js"></script>
      </body>
    </html>
  )
}
