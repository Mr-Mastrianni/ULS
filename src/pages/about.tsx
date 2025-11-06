export const AboutPage = () => {
  return (
    <div>
      <section class="bg-gradient-to-r from-brand-navy to-brand-blue text-white py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 class="text-5xl font-bold mb-4">About United Lawn Specialist</h1>
          <p class="text-2xl italic">"We Beautify Your Peace of America"</p>
        </div>
      </section>

      <section class="py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 class="text-4xl font-bold text-gray-800 mb-6">Our Mission</h2>
              <p class="text-lg text-gray-700 mb-6">
                At United Lawn Specialist, we're dedicated to comprehensive property beautification that enhances the appearance, value, and enjoyment of your outdoor spaces. From year-round lawn care subscriptions to major fencing and installation projects, we're your trusted partner for all aspects of property enhancement.
              </p>
              <p class="text-lg text-gray-700 mb-6">
                Our patriotic name reflects our commitment to serving our local communities with pride, professionalism, and excellence. We believe that a beautiful property is an expression of your own "peace of America" - a place where you can relax, entertain, and create lasting memories.
              </p>
            </div>
            <div class="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              <div class="text-center">
                <i class="fas fa-users text-6xl text-gray-400 mb-4"></i>
                <p class="text-gray-600">Our Professional Team</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-4xl font-bold text-center text-gray-800 mb-12">Why Choose United Lawn Specialist?</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <i class="fas fa-award text-4xl text-brand-blue mb-4"></i>
              <h3 class="text-xl font-bold mb-2">Professional Excellence</h3>
              <p class="text-gray-700">Licensed, insured, and committed to the highest standards of workmanship</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <i class="fas fa-handshake text-4xl text-green-600 mb-4"></i>
              <h3 class="text-xl font-bold mb-2">Customer First</h3>
              <p class="text-gray-700">Your satisfaction is our priority with responsive service and clear communication</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <i class="fas fa-tools text-4xl text-orange-600 mb-4"></i>
              <h3 class="text-xl font-bold mb-2">Comprehensive Services</h3>
              <p class="text-gray-700">One company for all your outdoor property needs from lawn care to fencing</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <i class="fas fa-map-marked-alt text-4xl text-red-600 mb-4"></i>
              <h3 class="text-xl font-bold mb-2">Local Expertise</h3>
              <p class="text-gray-700">Deep understanding of Georgia lawns, weather, and landscaping needs</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <i class="fas fa-calendar-check text-4xl text-purple-600 mb-4"></i>
              <h3 class="text-xl font-bold mb-2">Year-Round Service</h3>
              <p class="text-gray-700">Subscription programs ensure consistent care throughout every season</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <i class="fas fa-shield-alt text-4xl text-blue-600 mb-4"></i>
              <h3 class="text-xl font-bold mb-2">Trusted Partner</h3>
              <p class="text-gray-700">Decades of experience serving homeowners with integrity and reliability</p>
            </div>
          </div>
        </div>
      </section>

      <section class="py-16">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-4xl font-bold text-center text-gray-800 mb-8">Our Service Philosophy</h2>
          <div class="space-y-6">
            <div class="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg">
              <h3 class="text-xl font-bold text-gray-800 mb-2">
                <i class="fas fa-leaf mr-2"></i>Subscription Excellence
              </h3>
              <p class="text-gray-700">
                For lawn care and pest control, we maintain dense service routes in our core counties (Fayette, Coweta, South Fulton) to ensure reliable, scheduled service throughout the year. Our subscription model provides consistent care and better value.
              </p>
            </div>
            
            <div class="bg-red-50 border-l-4 border-red-600 p-6 rounded-lg">
              <h3 class="text-xl font-bold text-gray-800 mb-2">
                <i class="fas fa-hammer mr-2"></i>Project Expertise
              </h3>
              <p class="text-gray-700">
                For major installations like fencing, hydro seeding, and deck work, we serve the entire Metro Atlanta area. These project-based services showcase our versatility and commitment to quality workmanship on every job.
              </p>
            </div>
            
            <div class="bg-green-50 border-l-4 border-green-600 p-6 rounded-lg">
              <h3 class="text-xl font-bold text-gray-800 mb-2">
                <i class="fas fa-calendar-alt mr-2"></i>Seasonal Awareness
              </h3>
              <p class="text-gray-700">
                We understand the importance of timing. Lawn care programs follow seasonal cycles, and painting/staining projects require proper temperatures (40°+). We'll work with you to schedule services at optimal times for best results.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="py-16 bg-brand-navy text-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 class="text-4xl font-bold mb-4">Ready to Experience the Difference?</h2>
          <p class="text-xl mb-8">Join the many homeowners who trust United Lawn Specialist for their property care.</p>
          <a href="/contact" class="btn-realistic text-white px-8 py-4 rounded-xl text-lg font-bold">
            Get Started Today
          </a>
        </div>
      </section>
    </div>
  )
}
