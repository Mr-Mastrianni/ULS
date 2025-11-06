export const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section class="relative bg-gradient-to-r from-brand-navy to-brand-blue text-white py-20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center">
            <div class="mb-6 flex justify-center">
              <img 
                src="/static/logo.png" 
                alt="United Lawn Specialist - Fencing, Painting, & Lawncare" 
                class="h-48 md:h-64 w-auto"
              />
            </div>
            <p class="text-xl mb-8 max-w-3xl mx-auto">
              Professional Fencing, Painting, & Lawncare Services in Fayette County, Coweta County, and Metro Atlanta
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" class="bg-brand-red text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-red-700 transition">
                <i class="fas fa-phone mr-2"></i>Get Free Quote
              </a>
              <a href="tel:+14702419957" class="bg-white text-brand-navy px-8 py-4 rounded-lg text-lg font-bold hover:bg-gray-100 transition">
                <i class="fas fa-phone-alt mr-2"></i>Call 470-241-9957
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section class="bg-white py-8 shadow-md">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div>
              <i class="fas fa-check-circle text-4xl text-green-600 mb-2"></i>
              <h3 class="font-bold text-lg">Licensed & Insured</h3>
              <p class="text-gray-600">Fully certified professionals</p>
            </div>
            <div>
              <i class="fas fa-calendar-check text-4xl text-blue-600 mb-2"></i>
              <h3 class="font-bold text-lg">Year-Round Service</h3>
              <p class="text-gray-600">All seasons covered</p>
            </div>
            <div>
              <i class="fas fa-users text-4xl text-purple-600 mb-2"></i>
              <h3 class="font-bold text-lg">Experienced Team</h3>
              <p class="text-gray-600">Decades of expertise</p>
            </div>
            <div>
              <i class="fas fa-star text-4xl text-yellow-500 mb-2"></i>
              <h3 class="font-bold text-lg">5-Star Reviews</h3>
              <p class="text-gray-600">Customer satisfaction guaranteed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section class="py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-12">
            <h2 class="text-4xl font-bold text-gray-800 mb-4">
              Comprehensive Property Beautification
            </h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              From lawn care subscriptions to major fencing projects, we're your one-stop solution for outdoor property enhancement.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-4xl font-bold text-center text-gray-800 mb-12">Our Services</h2>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Lawn Care Services */}
            <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
              <div class="bg-green-600 text-white p-6">
                <i class="fas fa-seedling text-4xl mb-2"></i>
                <h3 class="text-2xl font-bold">Lawn Care Services</h3>
                <p class="text-sm opacity-90">Subscription Model Available</p>
              </div>
              <div class="p-6">
                <ul class="space-y-3">
                  <li><i class="fas fa-check text-green-600 mr-2"></i>Fertilization & Weed Control</li>
                  <li><i class="fas fa-check text-green-600 mr-2"></i>Lawn Core Aeration</li>
                  <li><i class="fas fa-check text-green-600 mr-2"></i>Lawn Disease Control</li>
                  <li><i class="fas fa-check text-green-600 mr-2"></i>Year-Round Programs</li>
                </ul>
                <a href="/fertilization" class="block mt-6 text-center bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">
                  Learn More
                </a>
              </div>
            </div>

            {/* Hydro Seeding */}
            <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
              <div class="bg-blue-600 text-white p-6">
                <i class="fas fa-water text-4xl mb-2"></i>
                <h3 class="text-2xl font-bold">Hydro Seeding</h3>
                <p class="text-sm opacity-90">High-Demand Service</p>
              </div>
              <div class="p-6">
                <ul class="space-y-3">
                  <li><i class="fas fa-check text-blue-600 mr-2"></i>New Lawn Installation</li>
                  <li><i class="fas fa-check text-blue-600 mr-2"></i>Erosion Control</li>
                  <li><i class="fas fa-check text-blue-600 mr-2"></i>Overseeding</li>
                  <li><i class="fas fa-check text-blue-600 mr-2"></i>Silt Fence Installation</li>
                </ul>
                <a href="/hydro-seeding" class="block mt-6 text-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                  Learn More
                </a>
              </div>
            </div>

            {/* Fencing Services */}
            <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
              <div class="bg-brand-red text-white p-6">
                <i class="fas fa-home text-4xl mb-2"></i>
                <h3 class="text-2xl font-bold">Fencing Services</h3>
                <p class="text-sm opacity-90">Complete Fence Solutions</p>
              </div>
              <div class="p-6">
                <ul class="space-y-3">
                  <li><i class="fas fa-check text-brand-red mr-2"></i>Fence Installation</li>
                  <li><i class="fas fa-check text-brand-red mr-2"></i>Fence Repairs</li>
                  <li><i class="fas fa-check text-brand-red mr-2"></i>Staining & Painting</li>
                  <li><i class="fas fa-check text-brand-red mr-2"></i>Cleaning & Restoration</li>
                </ul>
                <a href="/fencing" class="block mt-6 text-center bg-brand-red text-white px-4 py-2 rounded-lg hover:bg-red-700 transition">
                  Learn More
                </a>
              </div>
            </div>

            {/* Deck Services */}
            <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
              <div class="bg-orange-600 text-white p-6">
                <i class="fas fa-paint-roller text-4xl mb-2"></i>
                <h3 class="text-2xl font-bold">Deck Services</h3>
                <p class="text-sm opacity-90">Seasonal Specialists</p>
              </div>
              <div class="p-6">
                <ul class="space-y-3">
                  <li><i class="fas fa-check text-orange-600 mr-2"></i>Deck Staining</li>
                  <li><i class="fas fa-check text-orange-600 mr-2"></i>Deck Painting</li>
                  <li><i class="fas fa-check text-orange-600 mr-2"></i>Cleaning & Restoration</li>
                  <li><i class="fas fa-check text-orange-600 mr-2"></i>Weather-Dependent Service</li>
                </ul>
                <a href="/deck-services" class="block mt-6 text-center bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition">
                  Learn More
                </a>
              </div>
            </div>

            {/* Pest Control */}
            <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
              <div class="bg-purple-600 text-white p-6">
                <i class="fas fa-bug text-4xl mb-2"></i>
                <h3 class="text-2xl font-bold">Pest Control</h3>
                <p class="text-sm opacity-90">Comprehensive Protection</p>
              </div>
              <div class="p-6">
                <ul class="space-y-3">
                  <li><i class="fas fa-check text-purple-600 mr-2"></i>Exterior Pest Control</li>
                  <li><i class="fas fa-check text-purple-600 mr-2"></i>Tree & Shrub Protection</li>
                  <li><i class="fas fa-check text-purple-600 mr-2"></i>Insect Control</li>
                  <li><i class="fas fa-check text-purple-600 mr-2"></i>Year-Round Programs</li>
                </ul>
                <a href="/pest-control" class="block mt-6 text-center bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition">
                  Learn More
                </a>
              </div>
            </div>

            {/* Future Services */}
            <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition border-2 border-dashed border-gray-300">
              <div class="bg-gray-600 text-white p-6">
                <i class="fas fa-tools text-4xl mb-2"></i>
                <h3 class="text-2xl font-bold">Coming Soon</h3>
                <p class="text-sm opacity-90">Expansion Services</p>
              </div>
              <div class="p-6">
                <ul class="space-y-3">
                  <li><i class="fas fa-check text-gray-600 mr-2"></i>Hardscapes</li>
                  <li><i class="fas fa-check text-gray-600 mr-2"></i>Landscape Design</li>
                  <li><i class="fas fa-check text-gray-600 mr-2"></i>Installation Services</li>
                  <li><i class="fas fa-check text-gray-600 mr-2"></i>Partnership Model</li>
                </ul>
                <div class="mt-6 text-center text-gray-500 font-bold">
                  Stay Tuned!
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas with Map */}
      <section class="py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-4xl font-bold text-center text-gray-800 mb-12">Where We Serve</h2>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div class="bg-green-50 border-l-4 border-green-600 p-6 rounded-lg mb-6">
                <h3 class="text-2xl font-bold text-green-800 mb-2">
                  <i class="fas fa-map-marker-alt mr-2"></i>Subscription Service Areas
                </h3>
                <p class="text-gray-700 mb-4">Year-round lawn care and pest control programs available:</p>
                <ul class="space-y-2">
                  <li class="flex items-center">
                    <i class="fas fa-check-circle text-green-600 mr-2"></i>
                    <span class="font-semibold">Fayette County, GA</span>
                  </li>
                  <li class="flex items-center">
                    <i class="fas fa-check-circle text-green-600 mr-2"></i>
                    <span class="font-semibold">Coweta County, GA</span>
                  </li>
                  <li class="flex items-center">
                    <i class="fas fa-check-circle text-green-600 mr-2"></i>
                    <span class="font-semibold">South Fulton County, GA</span>
                  </li>
                </ul>
              </div>
              
              <div class="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg">
                <h3 class="text-2xl font-bold text-blue-800 mb-2">
                  <i class="fas fa-city mr-2"></i>Project Service Areas
                </h3>
                <p class="text-gray-700 mb-4">Fencing, hydro seeding, and major projects:</p>
                <ul class="space-y-2">
                  <li class="flex items-center">
                    <i class="fas fa-check-circle text-blue-600 mr-2"></i>
                    <span class="font-semibold">Metro Atlanta Area</span>
                  </li>
                  <li class="flex items-center">
                    <i class="fas fa-info-circle text-blue-600 mr-2"></i>
                    <span class="text-sm text-gray-600">Expanded coverage for installations</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div class="bg-gray-200 rounded-lg p-8 flex items-center justify-center">
              <div class="text-center">
                <i class="fas fa-map-marked-alt text-6xl text-brand-blue mb-4"></i>
                <p class="text-xl text-gray-700 font-semibold">Interactive Service Area Map</p>
                <p class="text-gray-600 mt-2">Coming Soon</p>
              </div>
            </div>
          </div>
          
          <div class="text-center mt-8">
            <a href="/service-areas" class="text-brand-blue font-bold text-lg hover:underline">
              View Detailed Service Area Information <i class="fas fa-arrow-right ml-2"></i>
            </a>
          </div>
        </div>
      </section>

      {/* Seasonal Service Callout */}
      <section class="py-16 bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 class="text-4xl font-bold mb-4">
            <i class="fas fa-calendar-alt mr-3"></i>Spring Season Special
          </h2>
          <p class="text-xl mb-8">
            Q1 Focus: Professional Lawn Care Programs | Q2 Focus: Fencing & Staining Projects
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div class="bg-white text-gray-800 p-6 rounded-lg">
              <i class="fas fa-leaf text-4xl text-green-600 mb-3"></i>
              <h3 class="text-xl font-bold mb-2">Early Spring Lawn Care</h3>
              <p>Get your lawn ready for the growing season with our comprehensive fertilization programs.</p>
            </div>
            <div class="bg-white text-gray-800 p-6 rounded-lg">
              <i class="fas fa-paint-brush text-4xl text-orange-600 mb-3"></i>
              <h3 class="text-xl font-bold mb-2">Spring Fence Projects</h3>
              <p>Perfect weather for fence installation and staining (40°+ temperatures required).</p>
            </div>
          </div>
          <a href="/contact" class="inline-block mt-8 bg-white text-green-700 px-8 py-4 rounded-lg text-lg font-bold hover:bg-gray-100 transition">
            Schedule Your Service Today
          </a>
        </div>
      </section>

      {/* Gallery Preview - Real Transformations */}
      <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-4xl font-bold text-center text-gray-800 mb-4">
            <i class="fas fa-images text-brand-blue mr-3"></i>Real Transformations
          </h2>
          <p class="text-xl text-center text-gray-600 mb-12">See the quality and care we bring to every project</p>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
              <img 
                src="/static/before-after-1.jpg" 
                alt="Professional lawn transformation before and after" 
                class="w-full h-64 object-cover"
              />
              <div class="p-4">
                <h3 class="font-bold text-lg text-gray-800 mb-2">Hydro Seeding Success</h3>
                <p class="text-gray-600">Complete lawn transformation from neglected to beautiful</p>
              </div>
            </div>
            
            <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
              <img 
                src="/static/before-after-2.jpg" 
                alt="Complete property makeover with fencing and lawn care" 
                class="w-full h-64 object-cover"
              />
              <div class="p-4">
                <h3 class="font-bold text-lg text-gray-800 mb-2">Complete Property Makeover</h3>
                <p class="text-gray-600">Fence installation, painting, and professional lawn care</p>
              </div>
            </div>
            
            <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
              <img 
                src="/static/before-after-3.jpg" 
                alt="Fence installation with lawn restoration" 
                class="w-full h-64 object-cover"
              />
              <div class="p-4">
                <h3 class="font-bold text-lg text-gray-800 mb-2">Fencing & Lawn Care Combined</h3>
                <p class="text-gray-600">Beautiful results from our comprehensive services</p>
              </div>
            </div>
          </div>
          
          <div class="text-center mt-8">
            <a href="/gallery" class="text-brand-blue font-bold text-lg hover:underline">
              View Full Gallery <i class="fas fa-arrow-right ml-2"></i>
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-4xl font-bold text-center text-gray-800 mb-12">What Our Customers Say</h2>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <div class="flex mb-4">
                <i class="fas fa-star text-yellow-500"></i>
                <i class="fas fa-star text-yellow-500"></i>
                <i class="fas fa-star text-yellow-500"></i>
                <i class="fas fa-star text-yellow-500"></i>
                <i class="fas fa-star text-yellow-500"></i>
              </div>
              <p class="text-gray-700 mb-4 italic">
                "United Lawn Specialist transformed our lawn! The fertilization program brought our yard back to life. Highly recommend their subscription service."
              </p>
              <p class="font-bold text-gray-800">- Sarah M., Fayetteville</p>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <div class="flex mb-4">
                <i class="fas fa-star text-yellow-500"></i>
                <i class="fas fa-star text-yellow-500"></i>
                <i class="fas fa-star text-yellow-500"></i>
                <i class="fas fa-star text-yellow-500"></i>
                <i class="fas fa-star text-yellow-500"></i>
              </div>
              <p class="text-gray-700 mb-4 italic">
                "Excellent fence installation! Professional team, fair pricing, and beautiful results. They completed our project on time and cleaned up perfectly."
              </p>
              <p class="font-bold text-gray-800">- John D., Peachtree City</p>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <div class="flex mb-4">
                <i class="fas fa-star text-yellow-500"></i>
                <i class="fas fa-star text-yellow-500"></i>
                <i class="fas fa-star text-yellow-500"></i>
                <i class="fas fa-star text-yellow-500"></i>
                <i class="fas fa-star text-yellow-500"></i>
              </div>
              <p class="text-gray-700 mb-4 italic">
                "The hydro seeding service saved our property from erosion issues. Fast, efficient, and the results exceeded our expectations. True professionals!"
              </p>
              <p class="font-bold text-gray-800">- Lisa R., Newnan</p>
            </div>
          </div>
          
          <div class="text-center mt-8">
            <a href="/testimonials" class="text-brand-blue font-bold text-lg hover:underline">
              Read More Reviews <i class="fas fa-arrow-right ml-2"></i>
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section class="py-16 bg-brand-navy text-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 class="text-4xl font-bold mb-4">Ready to Beautify Your Peace of America?</h2>
          <p class="text-xl mb-8">Contact us today for a free quote on any of our services.</p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" class="bg-brand-red text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-red-700 transition">
              Get Free Quote
            </a>
            <a href="tel:+14702419957" class="bg-white text-brand-navy px-8 py-4 rounded-lg text-lg font-bold hover:bg-gray-100 transition">
              Call 470-241-9957
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
