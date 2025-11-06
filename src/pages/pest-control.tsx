export const PestControlPage = () => {
  return (
    <div>
      <section class="bg-gradient-to-r from-purple-600 to-purple-700 text-white py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 class="text-5xl font-bold mb-4">
            <i class="fas fa-bug mr-3"></i>Pest Control Services
          </h1>
          <p class="text-2xl">Comprehensive Exterior & Tree/Shrub Protection Programs</p>
        </div>
      </section>

      <section class="py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 class="text-4xl font-bold text-gray-800 mb-6">Year-Round Pest Protection</h2>
              <p class="text-lg text-gray-700 mb-6">
                Our comprehensive pest control programs protect your home's exterior and landscape from damaging insects and pests. We use professional-grade products and proven application methods to create a protective barrier around your property.
              </p>
              <div class="space-y-4">
                <div class="flex items-start">
                  <i class="fas fa-home text-2xl text-purple-600 mr-3 mt-1"></i>
                  <div>
                    <strong class="text-lg">Exterior Pest Control:</strong>
                    <p class="text-gray-700">Protection against ants, spiders, wasps, and other common household pests</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <i class="fas fa-tree text-2xl text-green-600 mr-3 mt-1"></i>
                  <div>
                    <strong class="text-lg">Tree & Shrub Protection:</strong>
                    <p class="text-gray-700">Specialized treatments to protect your landscape investments from damaging insects</p>
                  </div>
                </div>
              </div>
              <a href="/contact" class="inline-block mt-6 bg-purple-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-purple-700 transition">
                Schedule Service
              </a>
            </div>
            <div class="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              <div class="text-center">
                <i class="fas fa-shield-alt text-6xl text-gray-400 mb-4"></i>
                <p class="text-gray-600">Pest Protection Services</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-4xl font-bold text-center text-gray-800 mb-12">Subscription Program Benefits</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="bg-white p-6 rounded-lg shadow-lg text-center">
              <i class="fas fa-calendar-check text-5xl text-purple-600 mb-4"></i>
              <h3 class="text-xl font-bold mb-2">Scheduled Treatments</h3>
              <p class="text-gray-700">Regular applications throughout the year ensure continuous protection</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-lg text-center">
              <i class="fas fa-shield-virus text-5xl text-green-600 mb-4"></i>
              <h3 class="text-xl font-bold mb-2">Proactive Protection</h3>
              <p class="text-gray-700">Prevent infestations before they start with year-round coverage</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-lg text-center">
              <i class="fas fa-dollar-sign text-5xl text-blue-600 mb-4"></i>
              <h3 class="text-xl font-bold mb-2">Better Value</h3>
              <p class="text-gray-700">Subscription pricing offers better value than one-time treatments</p>
            </div>
          </div>
        </div>
      </section>

      <section class="py-16">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 class="text-3xl font-bold text-gray-800 mb-6">Service Area Coverage</h2>
          <p class="text-lg text-gray-700 mb-8">
            Pest control subscription programs available in Fayette County, Coweta County, and South Fulton County with reliable, scheduled service throughout the year.
          </p>
          <div class="flex flex-wrap justify-center gap-4">
            <span class="bg-purple-600 text-white px-6 py-3 rounded-full font-bold">Fayette County</span>
            <span class="bg-purple-600 text-white px-6 py-3 rounded-full font-bold">Coweta County</span>
            <span class="bg-purple-600 text-white px-6 py-3 rounded-full font-bold">South Fulton County</span>
          </div>
        </div>
      </section>

      <section class="py-16 bg-brand-navy text-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 class="text-4xl font-bold mb-4">Protect Your Home & Landscape</h2>
          <p class="text-xl mb-8">Join our pest control program for year-round protection and peace of mind.</p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" class="btn-realistic text-white px-8 py-4 rounded-xl text-lg font-bold">
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
