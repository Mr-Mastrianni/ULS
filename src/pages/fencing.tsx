export const FencingPage = () => {
  return (
    <div>
      <section class="bg-gradient-to-r from-red-600 to-red-700 text-white py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 class="text-5xl font-bold mb-4">
            <i class="fas fa-home mr-3"></i>Fencing Services
          </h1>
          <p class="text-2xl">Complete Fence Lifecycle Solutions - Install, Repair, Stain & Restore</p>
        </div>
      </section>

      <section class="py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-4xl font-bold text-center text-gray-800 mb-12">Comprehensive Fencing Solutions</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <i class="fas fa-hammer text-4xl text-red-600 mb-4"></i>
              <h3 class="text-xl font-bold mb-2">Fence Installation</h3>
              <p class="text-gray-700">Professional installation of wood, vinyl, chain link, and decorative fencing.</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <i class="fas fa-tools text-4xl text-orange-600 mb-4"></i>
              <h3 class="text-xl font-bold mb-2">Fence Repairs</h3>
              <p class="text-gray-700">Expert repairs for damaged posts, panels, gates, and structural issues.</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <i class="fas fa-paint-roller text-4xl text-blue-600 mb-4"></i>
              <h3 class="text-xl font-bold mb-2">Staining & Painting</h3>
              <p class="text-gray-700">Professional staining and painting to protect and beautify your fence.</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <i class="fas fa-broom text-4xl text-green-600 mb-4"></i>
              <h3 class="text-xl font-bold mb-2">Cleaning & Restoration</h3>
              <p class="text-gray-700">Deep cleaning and restoration services to bring old fences back to life.</p>
            </div>
          </div>
        </div>
      </section>

      <section class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 class="text-3xl font-bold text-gray-800 mb-6">Why Choose United Lawn Specialist for Fencing?</h2>
              <ul class="space-y-4">
                <li class="flex items-start">
                  <i class="fas fa-check-circle text-green-600 text-xl mr-3 mt-1"></i>
                  <div>
                    <strong>Complete Lifecycle Service:</strong> From installation to ongoing maintenance and restoration
                  </div>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check-circle text-green-600 text-xl mr-3 mt-1"></i>
                  <div>
                    <strong>Metro Atlanta Coverage:</strong> Project-based service throughout the metro area
                  </div>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check-circle text-green-600 text-xl mr-3 mt-1"></i>
                  <div>
                    <strong>Seasonal Expertise:</strong> We understand temperature requirements for staining (40°+)
                  </div>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check-circle text-green-600 text-xl mr-3 mt-1"></i>
                  <div>
                    <strong>Quality Materials:</strong> Professional-grade products and proven installation techniques
                  </div>
                </li>
              </ul>
            </div>
            <div class="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              <div class="text-center">
                <i class="fas fa-image text-6xl text-gray-400 mb-4"></i>
                <p class="text-gray-600">Fence Project Gallery</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="py-16">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded-lg">
            <h3 class="text-2xl font-bold text-gray-800 mb-4">
              <i class="fas fa-thermometer-half mr-2"></i>Seasonal Considerations
            </h3>
            <p class="text-lg text-gray-700 mb-4">
              <strong>Q2 Spring Season:</strong> Perfect time for fence staining and painting projects! We require temperatures of 40°F or higher for optimal results.
            </p>
            <p class="text-gray-700">
              Fence installations can be performed year-round, but staining and painting projects are weather-dependent. Contact us to schedule your project during optimal conditions.
            </p>
          </div>
        </div>
      </section>

      <section class="py-16 bg-brand-navy text-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 class="text-4xl font-bold mb-4">Ready to Transform Your Property?</h2>
          <p class="text-xl mb-8">Get a free quote on fence installation, repair, or restoration services.</p>
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
