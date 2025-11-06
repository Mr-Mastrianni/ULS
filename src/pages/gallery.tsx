export const GalleryPage = () => {
  return (
    <div>
      <section class="bg-gradient-to-r from-brand-navy to-brand-blue text-white py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 class="text-5xl font-bold mb-4">
            <i class="fas fa-images mr-3"></i>Gallery
          </h1>
          <p class="text-2xl">See the Transformation - Before & After Results</p>
        </div>
      </section>

      <section class="py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-12">
            <p class="text-xl text-gray-700">
              Explore our portfolio of completed projects showcasing the quality and transformation we bring to every property.
            </p>
          </div>

          {/* Featured Transformations */}
          <div class="mb-16">
            <h2 class="text-3xl font-bold text-gray-800 mb-8 text-center">
              <i class="fas fa-star text-yellow-500 mr-3"></i>
              Featured Transformations
            </h2>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div class="bg-white rounded-lg shadow-lg overflow-hidden">
                <img 
                  src="/static/before-after-1.jpg" 
                  alt="Professional lawn transformation - before and after hydro seeding" 
                  class="w-full h-auto"
                />
                <div class="p-6">
                  <h3 class="text-xl font-bold text-gray-800 mb-2">Complete Lawn Transformation</h3>
                  <p class="text-gray-700">Professional hydro seeding transformed this neglected backyard into a lush, beautiful lawn perfect for family enjoyment.</p>
                </div>
              </div>

              <div class="bg-white rounded-lg shadow-lg overflow-hidden">
                <img 
                  src="/static/before-after-2.jpg" 
                  alt="Complete property makeover - fencing, painting, and lawn care" 
                  class="w-full h-auto"
                />
                <div class="p-6">
                  <h3 class="text-xl font-bold text-gray-800 mb-2">Complete Property Makeover</h3>
                  <p class="text-gray-700">Comprehensive transformation including fence installation, house painting, and professional lawn care. True curb appeal enhancement.</p>
                </div>
              </div>

              <div class="bg-white rounded-lg shadow-lg overflow-hidden lg:col-span-2">
                <img 
                  src="/static/before-after-3.jpg" 
                  alt="Fence installation and lawn restoration" 
                  class="w-full h-auto"
                />
                <div class="p-6">
                  <h3 class="text-xl font-bold text-gray-800 mb-2">Fencing & Lawn Care Combined</h3>
                  <p class="text-gray-700">Beautiful white picket fence installation combined with professional lawn restoration. This project showcases our ability to handle both hardscape and lawn care services.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Lawn Care Gallery */}
          <div class="mb-16">
            <h2 class="text-3xl font-bold text-gray-800 mb-8 flex items-center">
              <i class="fas fa-seedling text-green-600 mr-3"></i>
              Lawn Care & Fertilization
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div class="bg-white rounded-lg shadow-lg overflow-hidden">
                <img 
                  src="/static/before-after-1.jpg" 
                  alt="Lawn care transformation" 
                  class="w-full h-64 object-cover"
                />
                <div class="p-4">
                  <p class="text-gray-700 font-semibold">Hydro Seeding Success</p>
                  <p class="text-sm text-gray-600">From bare patches to lush green lawn</p>
                </div>
              </div>
              <div class="bg-white rounded-lg shadow-lg overflow-hidden">
                <img 
                  src="/static/before-after-2.jpg" 
                  alt="Professional lawn care results" 
                  class="w-full h-64 object-cover"
                />
                <div class="p-4">
                  <p class="text-gray-700 font-semibold">Complete Lawn Restoration</p>
                  <p class="text-sm text-gray-600">Professional fertilization program results</p>
                </div>
              </div>
              <div class="bg-gray-200 rounded-lg aspect-video flex items-center justify-center">
                <div class="text-center">
                  <i class="fas fa-image text-5xl text-gray-400 mb-2"></i>
                  <p class="text-gray-600">More photos coming soon</p>
                </div>
              </div>
            </div>
          </div>

          {/* Fencing Gallery */}
          <div class="mb-16">
            <h2 class="text-3xl font-bold text-gray-800 mb-8 flex items-center">
              <i class="fas fa-home text-red-600 mr-3"></i>
              Fencing Projects
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div class="bg-white rounded-lg shadow-lg overflow-hidden">
                <img 
                  src="/static/before-after-3.jpg" 
                  alt="White picket fence installation" 
                  class="w-full h-64 object-cover"
                />
                <div class="p-4">
                  <p class="text-gray-700 font-semibold">Picket Fence Installation</p>
                  <p class="text-sm text-gray-600">Beautiful white picket fence adds charm</p>
                </div>
              </div>
              <div class="bg-white rounded-lg shadow-lg overflow-hidden">
                <img 
                  src="/static/before-after-2.jpg" 
                  alt="Complete property fencing" 
                  class="w-full h-64 object-cover"
                />
                <div class="p-4">
                  <p class="text-gray-700 font-semibold">Property Fence Transformation</p>
                  <p class="text-sm text-gray-600">From old chain link to beautiful privacy fence</p>
                </div>
              </div>
              <div class="bg-gray-200 rounded-lg aspect-video flex items-center justify-center">
                <div class="text-center">
                  <i class="fas fa-image text-5xl text-gray-400 mb-2"></i>
                  <p class="text-gray-600">More photos coming soon</p>
                </div>
              </div>
            </div>
          </div>

          {/* Complete Property Transformations */}
          <div class="mb-16">
            <h2 class="text-3xl font-bold text-gray-800 mb-8 flex items-center">
              <i class="fas fa-magic text-purple-600 mr-3"></i>
              Complete Property Transformations
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div class="bg-white rounded-lg shadow-lg overflow-hidden">
                <img 
                  src="/static/before-after-2.jpg" 
                  alt="Complete property makeover including fencing, painting, and lawn care" 
                  class="w-full h-auto"
                />
                <div class="p-6">
                  <h3 class="text-xl font-bold text-gray-800 mb-2">
                    <i class="fas fa-check-circle text-green-600 mr-2"></i>
                    Multi-Service Transformation
                  </h3>
                  <p class="text-gray-700 mb-4">
                    This complete property makeover showcases our comprehensive service capabilities:
                  </p>
                  <ul class="space-y-2 text-gray-700">
                    <li><i class="fas fa-check text-green-600 mr-2"></i>New white picket fence installation</li>
                    <li><i class="fas fa-check text-green-600 mr-2"></i>House exterior painting</li>
                    <li><i class="fas fa-check text-green-600 mr-2"></i>Professional lawn restoration</li>
                    <li><i class="fas fa-check text-green-600 mr-2"></i>Landscape bed maintenance</li>
                  </ul>
                </div>
              </div>

              <div class="bg-white rounded-lg shadow-lg overflow-hidden">
                <img 
                  src="/static/before-after-3.jpg" 
                  alt="Fence and lawn care combined service" 
                  class="w-full h-auto"
                />
                <div class="p-6">
                  <h3 class="text-xl font-bold text-gray-800 mb-2">
                    <i class="fas fa-check-circle text-green-600 mr-2"></i>
                    Fencing & Lawn Care Excellence
                  </h3>
                  <p class="text-gray-700 mb-4">
                    Beautiful results from combining our fencing and lawn care services:
                  </p>
                  <ul class="space-y-2 text-gray-700">
                    <li><i class="fas fa-check text-green-600 mr-2"></i>Professional fence installation</li>
                    <li><i class="fas fa-check text-green-600 mr-2"></i>Lawn hydro seeding</li>
                    <li><i class="fas fa-check text-green-600 mr-2"></i>Property cleanup and preparation</li>
                    <li><i class="fas fa-check text-green-600 mr-2"></i>Complete curb appeal enhancement</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div class="bg-gradient-to-r from-brand-blue to-brand-navy text-white rounded-lg p-8 text-center">
            <h3 class="text-3xl font-bold mb-4">Your Property Could Be Next!</h3>
            <p class="text-xl mb-6">
              These transformations are real results from homeowners just like you. Let us beautify your peace of America!
            </p>
            <a href="/contact" class="inline-block bg-brand-red text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-red-700 transition">
              Get Your Free Quote Today
            </a>
          </div>
        </div>
      </section>

      <section class="py-16 bg-gray-50">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 class="text-3xl font-bold text-gray-800 mb-6">Ready to Transform Your Property?</h2>
          <p class="text-lg text-gray-700 mb-8">
            Join the hundreds of satisfied homeowners who have trusted United Lawn Specialist with their property beautification needs.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" class="bg-brand-red text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-red-700 transition">
              Get Free Quote
            </a>
            <a href="tel:+14702419957" class="bg-brand-navy text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-blue-900 transition">
              Call 470-241-9957
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
