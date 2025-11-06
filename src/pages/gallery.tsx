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

          {/* Lawn Care Gallery */}
          <div class="mb-16">
            <h2 class="text-3xl font-bold text-gray-800 mb-8 flex items-center">
              <i class="fas fa-seedling text-green-600 mr-3"></i>
              Lawn Care & Fertilization
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div class="bg-gray-200 rounded-lg aspect-video flex items-center justify-center">
                  <div class="text-center">
                    <i class="fas fa-image text-5xl text-gray-400 mb-2"></i>
                    <p class="text-gray-600">Before/After #{i}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Fencing Gallery */}
          <div class="mb-16">
            <h2 class="text-3xl font-bold text-gray-800 mb-8 flex items-center">
              <i class="fas fa-home text-red-600 mr-3"></i>
              Fencing Projects
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div class="bg-gray-200 rounded-lg aspect-video flex items-center justify-center">
                  <div class="text-center">
                    <i class="fas fa-image text-5xl text-gray-400 mb-2"></i>
                    <p class="text-gray-600">Fence Project #{i}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hydro Seeding Gallery */}
          <div class="mb-16">
            <h2 class="text-3xl font-bold text-gray-800 mb-8 flex items-center">
              <i class="fas fa-water text-blue-600 mr-3"></i>
              Hydro Seeding & Installation
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div class="bg-gray-200 rounded-lg aspect-video flex items-center justify-center">
                  <div class="text-center">
                    <i class="fas fa-image text-5xl text-gray-400 mb-2"></i>
                    <p class="text-gray-600">Hydro Seeding #{i}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Deck Staining Gallery */}
          <div class="mb-16">
            <h2 class="text-3xl font-bold text-gray-800 mb-8 flex items-center">
              <i class="fas fa-paint-roller text-orange-600 mr-3"></i>
              Deck & Fence Staining
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div class="bg-gray-200 rounded-lg aspect-video flex items-center justify-center">
                  <div class="text-center">
                    <i class="fas fa-image text-5xl text-gray-400 mb-2"></i>
                    <p class="text-gray-600">Staining Project #{i}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section class="py-16 bg-gray-50">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 class="text-3xl font-bold text-gray-800 mb-6">Ready to Transform Your Property?</h2>
          <p class="text-lg text-gray-700 mb-8">
            Join the hundreds of satisfied homeowners who have trusted United Lawn Specialist with their property beautification needs.
          </p>
          <a href="/contact" class="bg-brand-red text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-red-700 transition">
            Get Your Free Quote
          </a>
        </div>
      </section>
    </div>
  )
}
