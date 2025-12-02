export const ServiceAreasPage = () => {
  return (
    <div>
      <section class="relative bg-gradient-to-br from-brand-navy via-brand-blue to-purple-900 text-white py-20 overflow-hidden">
        <div class="absolute inset-0 opacity-10">
          <div class="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div class="absolute bottom-0 right-0 w-96 h-96 bg-blue-300 rounded-full blur-3xl animate-pulse" style="animation-delay: 1s"></div>
        </div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 class="text-6xl font-bold mb-4 animate-fade-in-down">
            <i class="fas fa-map-marked-alt mr-3"></i>Service Areas
          </h1>
          <p class="text-2xl animate-fade-in-up" style="animation-delay: 0.2s">Serving Georgia with Pride - Two Service Models</p>
        </div>
      </section>

      <section class="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16 animate-fade-in">
            <h2 class="text-5xl font-bold text-gray-800 mb-6">Our Service Models</h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect service model for your property needs
            </p>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            {/* Subscription Services Card */}
            <div class="group relative bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-slide-in-left overflow-hidden">
              <div class="absolute top-0 right-0 w-64 h-64 bg-green-400 rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div class="relative z-10">
                <div class="flex items-center mb-6">
                  <div class="bg-green-600 p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <i class="fas fa-calendar-check text-5xl text-white"></i>
                  </div>
                  <h3 class="text-3xl font-bold text-gray-800 ml-4">Subscription Services</h3>
                </div>
                <p class="text-lg text-gray-700 mb-6 leading-relaxed">
                  Year-round lawn care and pest control programs with scheduled, reliable service in our dense route areas
                </p>

                <div class="space-y-4 mb-6">
                  <div class="bg-white/80 backdrop-blur p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:translate-x-2">
                    <div class="flex items-start">
                      <i class="fas fa-map-marker-alt text-green-600 text-2xl mr-4 mt-1"></i>
                      <div>
                        <strong class="text-lg text-gray-800">Fayette County, GA</strong>
                        <p class="text-gray-600">Fayetteville, Peachtree City, Tyrone</p>
                      </div>
                    </div>
                  </div>
                  <div class="bg-white/80 backdrop-blur p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:translate-x-2" style="animation-delay: 0.1s">
                    <div class="flex items-start">
                      <i class="fas fa-map-marker-alt text-green-600 text-2xl mr-4 mt-1"></i>
                      <div>
                        <strong class="text-lg text-gray-800">Coweta County, GA</strong>
                        <p class="text-gray-600">Newnan, Senoia, Sharpsburg</p>
                      </div>
                    </div>
                  </div>
                  <div class="bg-white/80 backdrop-blur p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:translate-x-2" style="animation-delay: 0.2s">
                    <div class="flex items-start">
                      <i class="fas fa-map-marker-alt text-green-600 text-2xl mr-4 mt-1"></i>
                      <div>
                        <strong class="text-lg text-gray-800">South Fulton County, GA</strong>
                        <p class="text-gray-600">Palmetto, Fairburn, Union City</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Services Card */}
            <div class="group relative bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-slide-in-right overflow-hidden">
              <div class="absolute top-0 right-0 w-64 h-64 bg-blue-400 rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div class="relative z-10">
                <div class="flex items-center mb-6">
                  <div class="bg-blue-600 p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <i class="fas fa-hammer text-5xl text-white"></i>
                  </div>
                  <h3 class="text-3xl font-bold text-gray-800 ml-4">Project Services</h3>
                </div>
                <p class="text-lg text-gray-700 mb-6 leading-relaxed">
                  Major installations, fencing, and project-based work throughout the Metro Atlanta region
                </p>

                <div class="space-y-4 mb-6">
                  <div class="bg-white/80 backdrop-blur p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:translate-x-2">
                    <div class="flex items-start">
                      <i class="fas fa-city text-blue-600 text-2xl mr-4 mt-1"></i>
                      <div>
                        <strong class="text-lg text-gray-800">Metro Atlanta Area</strong>
                        <p class="text-gray-600">Expanded coverage for larger projects and installations</p>
                      </div>
                    </div>
                  </div>
                  <div class="bg-white/80 backdrop-blur p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:translate-x-2" style="animation-delay: 0.1s">
                    <div class="flex items-start">
                      <i class="fas fa-check-circle text-blue-600 text-2xl mr-4 mt-1"></i>
                      <div>
                        <p class="text-gray-700">We travel metro-wide for specialized equipment projects</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* All Services Grid */}
          <div class="mb-16">
            <h2 class="text-4xl font-bold text-center text-gray-800 mb-12">All Available Services</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Service Card 1 */}
              <a href="/fertilization" class="group block bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-fade-in border-t-4 border-green-500 cursor-pointer">
                <div class="flex items-center mb-4">
                  <div class="bg-gradient-to-br from-green-400 to-green-600 p-3 rounded-lg group-hover:rotate-12 transition-transform duration-300">
                    <i class="fas fa-seedling text-3xl text-white"></i>
                  </div>
                  <h3 class="text-xl font-bold ml-4 text-gray-800">Fertilization & Weed Control</h3>
                </div>
                <p class="text-gray-600 mb-3">Year-round subscription programs for a healthy, weed-free lawn</p>
                <span class="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">Subscription</span>
              </a>

              {/* Service Card 2 */}
              <a href="/hydro-seeding" class="group block bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-fade-in border-t-4 border-blue-500 cursor-pointer" style="animation-delay: 0.1s">
                <div class="flex items-center mb-4">
                  <div class="bg-gradient-to-br from-blue-400 to-blue-600 p-3 rounded-lg group-hover:rotate-12 transition-transform duration-300">
                    <i class="fas fa-water text-3xl text-white"></i>
                  </div>
                  <h3 class="text-xl font-bold ml-4 text-gray-800">Hydro Seeding</h3>
                </div>
                <p class="text-gray-600 mb-3">New lawn installation and erosion control solutions</p>
                <span class="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">Project</span>
              </a>

              {/* Service Card 3 */}
              <a href="/fencing" class="group block bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-fade-in border-t-4 border-red-500 cursor-pointer" style="animation-delay: 0.2s">
                <div class="flex items-center mb-4">
                  <div class="bg-gradient-to-br from-red-400 to-red-600 p-3 rounded-lg group-hover:rotate-12 transition-transform duration-300">
                    <i class="fas fa-home text-3xl text-white"></i>
                  </div>
                  <h3 class="text-xl font-bold ml-4 text-gray-800">Fencing Services</h3>
                </div>
                <p class="text-gray-600 mb-3">Installation, repair, staining, and painting</p>
                <span class="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">Project</span>
              </a>

              {/* Service Card 4 */}
              <a href="/deck-services" class="group block bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-fade-in border-t-4 border-orange-500 cursor-pointer" style="animation-delay: 0.3s">
                <div class="flex items-center mb-4">
                  <div class="bg-gradient-to-br from-orange-400 to-orange-600 p-3 rounded-lg group-hover:rotate-12 transition-transform duration-300">
                    <i class="fas fa-paint-roller text-3xl text-white"></i>
                  </div>
                  <h3 class="text-xl font-bold ml-4 text-gray-800">Deck Services</h3>
                </div>
                <p class="text-gray-600 mb-3">Professional deck staining and painting</p>
                <span class="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">Project</span>
              </a>

              {/* Service Card 5 */}
              <a href="/pest-control" class="group block bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-fade-in border-t-4 border-purple-500 cursor-pointer" style="animation-delay: 0.4s">
                <div class="flex items-center mb-4">
                  <div class="bg-gradient-to-br from-purple-400 to-purple-600 p-3 rounded-lg group-hover:rotate-12 transition-transform duration-300">
                    <i class="fas fa-bug text-3xl text-white"></i>
                  </div>
                  <h3 class="text-xl font-bold ml-4 text-gray-800">Pest Control</h3>
                </div>
                <p class="text-gray-600 mb-3">Exterior pest control and tree & shrub protection</p>
                <span class="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">Subscription</span>
              </a>

              {/* Service Card 6 */}
              <a href="/fertilization" class="group block bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-fade-in border-t-4 border-teal-500 cursor-pointer" style="animation-delay: 0.5s">
                <div class="flex items-center mb-4">
                  <div class="bg-gradient-to-br from-teal-400 to-teal-600 p-3 rounded-lg group-hover:rotate-12 transition-transform duration-300">
                    <i class="fas fa-leaf text-3xl text-white"></i>
                  </div>
                  <h3 class="text-xl font-bold ml-4 text-gray-800">Core Aeration</h3>
                </div>
                <p class="text-gray-600 mb-3">Improve soil health and lawn vitality</p>
                <span class="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">Subscription</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section class="py-16 bg-gradient-to-r from-brand-navy to-purple-900 text-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 class="text-4xl font-bold mb-6 animate-fade-in">Not Sure If We Serve Your Area?</h2>
          <p class="text-xl mb-8 animate-fade-in" style="animation-delay: 0.1s">
            Contact us with your location and service needs. We'll provide a free quote!
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style="animation-delay: 0.2s">
            <a href="/contact" class="bg-white text-brand-navy px-8 py-4 rounded-xl text-lg font-bold hover:scale-105 transition-transform duration-300 shadow-xl">
              <i class="fas fa-paper-plane mr-2"></i>Get Free Quote
            </a>
            <a href="tel:+14702419957" class="bg-green-600 text-white px-8 py-4 rounded-xl text-lg font-bold hover:scale-105 transition-transform duration-300 shadow-xl">
              <i class="fas fa-phone mr-2"></i>Call 470-241-9957
            </a>
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes fade-in-down {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-fade-in-down {
          animation: fade-in-down 0.8s ease-out;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        
        .animate-slide-in-left {
          animation: slide-in-left 0.8s ease-out;
        }
        
        .animate-slide-in-right {
          animation: slide-in-right 0.8s ease-out;
        }
      `}} />
    </div>
  )
}
