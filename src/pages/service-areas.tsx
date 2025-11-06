export const ServiceAreasPage = () => {
  return (
    <div>
      <section class="bg-gradient-to-r from-brand-navy to-brand-blue text-white py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 class="text-5xl font-bold mb-4">
            <i class="fas fa-map-marked-alt mr-3"></i>Service Areas
          </h1>
          <p class="text-2xl">Serving Georgia with Pride - Two Service Models</p>
        </div>
      </section>

      <section class="py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-12">
            <h2 class="text-4xl font-bold text-gray-800 mb-4">Understanding Our Service Areas</h2>
            <p class="text-xl text-gray-700 max-w-3xl mx-auto">
              We offer two distinct service models to best serve our customers: subscription services for ongoing care in our core counties, and project-based services throughout Metro Atlanta.
            </p>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div class="bg-green-50 rounded-lg p-8 shadow-lg">
              <div class="flex items-center mb-6">
                <i class="fas fa-calendar-check text-5xl text-green-600 mr-4"></i>
                <h3 class="text-3xl font-bold text-gray-800">Subscription Services</h3>
              </div>
              <p class="text-lg text-gray-700 mb-6">
                Year-round lawn care and pest control programs with scheduled, reliable service in our dense route areas:
              </p>
              <ul class="space-y-4 mb-6">
                <li class="flex items-start">
                  <i class="fas fa-map-marker-alt text-green-600 text-xl mr-3 mt-1"></i>
                  <div>
                    <strong class="text-lg">Fayette County, GA</strong>
                    <p class="text-gray-600">Fayetteville, Peachtree City, Tyrone, and surrounding areas</p>
                  </div>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-map-marker-alt text-green-600 text-xl mr-3 mt-1"></i>
                  <div>
                    <strong class="text-lg">Coweta County, GA</strong>
                    <p class="text-gray-600">Newnan, Senoia, Sharpsburg, and surrounding areas</p>
                  </div>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-map-marker-alt text-green-600 text-xl mr-3 mt-1"></i>
                  <div>
                    <strong class="text-lg">South Fulton County, GA</strong>
                    <p class="text-gray-600">Palmetto, Fairburn, Union City, and surrounding areas</p>
                  </div>
                </li>
              </ul>
              <div class="bg-white p-4 rounded-lg border-l-4 border-green-600">
                <strong class="text-gray-800">Services Available:</strong>
                <ul class="mt-2 space-y-1 text-gray-700">
                  <li>• Fertilization & Weed Control</li>
                  <li>• Exterior Pest Control</li>
                  <li>• Tree & Shrub Insect Control</li>
                  <li>• Lawn Core Aeration</li>
                  <li>• Lawn Disease Control</li>
                </ul>
              </div>
            </div>

            <div class="bg-blue-50 rounded-lg p-8 shadow-lg">
              <div class="flex items-center mb-6">
                <i class="fas fa-hammer text-5xl text-blue-600 mr-4"></i>
                <h3 class="text-3xl font-bold text-gray-800">Project Services</h3>
              </div>
              <p class="text-lg text-gray-700 mb-6">
                Major installations, fencing, and project-based work throughout the Metro Atlanta region:
              </p>
              <ul class="space-y-4 mb-6">
                <li class="flex items-start">
                  <i class="fas fa-city text-blue-600 text-xl mr-3 mt-1"></i>
                  <div>
                    <strong class="text-lg">Metro Atlanta Area</strong>
                    <p class="text-gray-600">Expanded coverage for larger projects and installations across the metropolitan area</p>
                  </div>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check-circle text-blue-600 text-xl mr-3 mt-1"></i>
                  <div>
                    <p class="text-gray-700">We travel throughout the metro area for project-based services that require specialized equipment and expertise</p>
                  </div>
                </li>
              </ul>
              <div class="bg-white p-4 rounded-lg border-l-4 border-blue-600">
                <strong class="text-gray-800">Services Available:</strong>
                <ul class="mt-2 space-y-1 text-gray-700">
                  <li>• Hydro Seeding & Lawn Installation</li>
                  <li>• Fence Installation & Repair</li>
                  <li>• Fence Staining & Painting</li>
                  <li>• Deck Staining & Painting</li>
                  <li>• Erosion Control & Silt Fence</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="bg-yellow-50 border-l-4 border-yellow-600 p-8 rounded-lg">
            <h3 class="text-2xl font-bold text-gray-800 mb-4">
              <i class="fas fa-question-circle mr-2"></i>Which Service Model is Right for You?
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <strong class="text-lg text-green-700">Choose Subscription Services if:</strong>
                <ul class="mt-2 space-y-2 text-gray-700">
                  <li>✓ You live in Fayette, Coweta, or South Fulton County</li>
                  <li>✓ You want year-round lawn care or pest control</li>
                  <li>✓ You prefer scheduled, automatic service</li>
                  <li>✓ You value consistent care and better pricing</li>
                </ul>
              </div>
              <div>
                <strong class="text-lg text-blue-700">Choose Project Services if:</strong>
                <ul class="mt-2 space-y-2 text-gray-700">
                  <li>✓ You need fencing, hydro seeding, or major installations</li>
                  <li>✓ You're anywhere in Metro Atlanta</li>
                  <li>✓ You have a specific one-time project</li>
                  <li>✓ You need specialized equipment or expertise</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="py-16 bg-gray-50">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 class="text-3xl font-bold text-gray-800 mb-6">Not Sure If We Serve Your Area?</h2>
          <p class="text-lg text-gray-700 mb-8">
            Contact us with your location and service needs. We'll let you know which services are available in your area and provide a free quote.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" class="btn-realistic text-white px-8 py-4 rounded-xl text-lg font-bold">
              Get Free Quote
            </a>
            <a href="tel:+14702419957" class="bg-brand-navy text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-blue-900 transition">
              Call 470-241-9957
            </a>
          </div>
        </div>
      </section>

      <section class="py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-4xl font-bold text-center text-gray-800 mb-12">Why Our Service Model Works</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="text-center">
              <i class="fas fa-route text-5xl text-brand-blue mb-4"></i>
              <h3 class="text-xl font-bold mb-2">Dense Routes</h3>
              <p class="text-gray-700">Concentrated service areas ensure reliable, scheduled care for subscription customers</p>
            </div>
            <div class="text-center">
              <i class="fas fa-truck text-5xl text-green-600 mb-4"></i>
              <h3 class="text-xl font-bold mb-2">Mobile Capability</h3>
              <p class="text-gray-700">Specialized equipment travels metro-wide for major projects and installations</p>
            </div>
            <div class="text-center">
              <i class="fas fa-user-check text-5xl text-purple-600 mb-4"></i>
              <h3 class="text-xl font-bold mb-2">Best of Both</h3>
              <p class="text-gray-700">Consistent local care plus big-project capability - one company for everything</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
