export const DeckPage = () => {
  return (
    <div>
      <section class="bg-gradient-to-r from-orange-600 to-orange-700 text-white py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 class="text-5xl font-bold mb-4">
            <i class="fas fa-paint-roller mr-3"></i>Deck Services
          </h1>
          <p class="text-2xl">Professional Deck Staining, Painting & Restoration</p>
        </div>
      </section>

      <section class="py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-4xl font-bold text-center text-gray-800 mb-12">Deck Care Services</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="bg-white p-6 rounded-lg shadow-lg text-center">
              <i class="fas fa-paint-brush text-5xl text-orange-600 mb-4"></i>
              <h3 class="text-2xl font-bold mb-3">Deck Staining</h3>
              <p class="text-gray-700">Professional staining to protect and enhance your deck's natural beauty.</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-lg text-center">
              <i class="fas fa-fill-drip text-5xl text-blue-600 mb-4"></i>
              <h3 class="text-2xl font-bold mb-3">Deck Painting</h3>
              <p class="text-gray-700">High-quality painting services for color transformation and protection.</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-lg text-center">
              <i class="fas fa-magic text-5xl text-purple-600 mb-4"></i>
              <h3 class="text-2xl font-bold mb-3">Restoration</h3>
              <p class="text-gray-700">Deep cleaning and restoration to bring weathered decks back to life.</p>
            </div>
          </div>
        </div>
      </section>

      <section class="py-16 bg-gray-50">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="bg-yellow-50 border-l-4 border-yellow-600 p-8 rounded-lg">
            <h3 class="text-2xl font-bold text-gray-800 mb-4">
              <i class="fas fa-sun mr-2"></i>Temperature Requirements
            </h3>
            <p class="text-lg text-gray-700 mb-4">
              Deck staining and painting requires temperatures of <strong>40°F or higher</strong> for optimal results and proper curing.
            </p>
            <p class="text-gray-700">
              Spring and fall are ideal seasons for deck projects. We'll work with you to schedule your project during the best weather conditions for lasting results.
            </p>
          </div>
        </div>
      </section>

      <section class="py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl font-bold text-center text-gray-800 mb-8">Why Professional Deck Services Matter</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="flex">
              <i class="fas fa-shield-alt text-3xl text-green-600 mr-4 mt-1"></i>
              <div>
                <h4 class="text-xl font-bold mb-2">Protection</h4>
                <p class="text-gray-700">Proper staining and painting protect your deck from weather damage, UV rays, and moisture.</p>
              </div>
            </div>
            <div class="flex">
              <i class="fas fa-home text-3xl text-blue-600 mr-4 mt-1"></i>
              <div>
                <h4 class="text-xl font-bold mb-2">Curb Appeal</h4>
                <p class="text-gray-700">A well-maintained deck significantly enhances your property's appearance and value.</p>
              </div>
            </div>
            <div class="flex">
              <i class="fas fa-clock text-3xl text-orange-600 mr-4 mt-1"></i>
              <div>
                <h4 class="text-xl font-bold mb-2">Longevity</h4>
                <p class="text-gray-700">Regular maintenance extends the life of your deck by preventing rot and structural damage.</p>
              </div>
            </div>
            <div class="flex">
              <i class="fas fa-dollar-sign text-3xl text-purple-600 mr-4 mt-1"></i>
              <div>
                <h4 class="text-xl font-bold mb-2">Cost Savings</h4>
                <p class="text-gray-700">Preventive maintenance is far less expensive than major repairs or deck replacement.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="py-16 bg-brand-navy text-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 class="text-4xl font-bold mb-4">Ready to Refresh Your Deck?</h2>
          <p class="text-xl mb-8">Contact us for a free quote on deck staining, painting, or restoration.</p>
          <a href="/contact" class="bg-brand-red text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-red-700 transition">
            Get Free Quote
          </a>
        </div>
      </section>
    </div>
  )
}
