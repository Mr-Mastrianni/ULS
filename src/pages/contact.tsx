export const ContactPage = () => {
  return (
    <div>
      <section class="bg-gradient-to-r from-brand-navy to-brand-blue text-white py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 class="text-5xl font-bold mb-4">
            <i class="fas fa-envelope mr-3"></i>Contact Us
          </h1>
          <p class="text-2xl">Get Your Free Quote Today</p>
        </div>
      </section>

      <section class="py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 class="text-3xl font-bold text-gray-800 mb-6">Get In Touch</h2>
              <p class="text-lg text-gray-700 mb-8">
                Ready to beautify your peace of America? Contact us today for a free, no-obligation quote. We serve homeowners throughout Fayette County, Coweta County, South Fulton County, and Metro Atlanta.
              </p>

              <div class="space-y-6 mb-8">
                <div class="flex items-start">
                  <i class="fas fa-phone-alt text-2xl text-brand-blue mr-4 mt-1"></i>
                  <div>
                    <h3 class="font-bold text-lg mb-1">Phone</h3>
                    <a href="tel:+1234567890" class="text-gray-700 hover:text-brand-blue text-lg">
                      (123) 456-7890
                    </a>
                  </div>
                </div>

                <div class="flex items-start">
                  <i class="fas fa-envelope text-2xl text-brand-blue mr-4 mt-1"></i>
                  <div>
                    <h3 class="font-bold text-lg mb-1">Email</h3>
                    <a href="mailto:info@unitedlawnspecialist.com" class="text-gray-700 hover:text-brand-blue">
                      info@unitedlawnspecialist.com
                    </a>
                  </div>
                </div>

                <div class="flex items-start">
                  <i class="fas fa-clock text-2xl text-brand-blue mr-4 mt-1"></i>
                  <div>
                    <h3 class="font-bold text-lg mb-1">Business Hours</h3>
                    <p class="text-gray-700">Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p class="text-gray-700">Saturday: 9:00 AM - 4:00 PM</p>
                    <p class="text-gray-700">Sunday: Closed</p>
                  </div>
                </div>

                <div class="flex items-start">
                  <i class="fas fa-map-marker-alt text-2xl text-brand-blue mr-4 mt-1"></i>
                  <div>
                    <h3 class="font-bold text-lg mb-1">Service Areas</h3>
                    <p class="text-gray-700">Fayette County, GA</p>
                    <p class="text-gray-700">Coweta County, GA</p>
                    <p class="text-gray-700">South Fulton County, GA</p>
                    <p class="text-gray-700">Metro Atlanta (Projects)</p>
                  </div>
                </div>
              </div>

              <div class="bg-green-50 border-l-4 border-green-600 p-6 rounded-lg">
                <h3 class="font-bold text-lg mb-2">
                  <i class="fas fa-info-circle mr-2"></i>Quick Response Guarantee
                </h3>
                <p class="text-gray-700">
                  We respond to all quote requests within 24 hours. For urgent needs, please call us directly.
                </p>
              </div>
            </div>

            {/* Quote Request Form */}
            <div class="bg-white rounded-lg shadow-lg p-8">
              <h2 class="text-3xl font-bold text-gray-800 mb-6">Request a Free Quote</h2>
              
              <form id="quoteForm" class="space-y-4">
                <div>
                  <label class="block text-gray-700 font-semibold mb-2" for="name">
                    Full Name *
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-blue"
                    placeholder="John Smith"
                  />
                </div>

                <div>
                  <label class="block text-gray-700 font-semibold mb-2" for="email">
                    Email Address *
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-blue"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label class="block text-gray-700 font-semibold mb-2" for="phone">
                    Phone Number *
                  </label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    required
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-blue"
                    placeholder="(123) 456-7890"
                  />
                </div>

                <div>
                  <label class="block text-gray-700 font-semibold mb-2" for="address">
                    Service Address *
                  </label>
                  <input 
                    type="text" 
                    id="address" 
                    name="address" 
                    required
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-blue"
                    placeholder="123 Main St, Fayetteville, GA"
                  />
                </div>

                <div>
                  <label class="block text-gray-700 font-semibold mb-2" for="serviceType">
                    Service Type *
                  </label>
                  <select 
                    id="serviceType" 
                    name="serviceType" 
                    required
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-blue"
                  >
                    <option value="">Select a service...</option>
                    <option value="lawn-care">Fertilization & Weed Control (Subscription)</option>
                    <option value="pest-control">Pest Control (Subscription)</option>
                    <option value="hydro-seeding">Hydro Seeding</option>
                    <option value="sod-installation">Sod Installation</option>
                    <option value="fence-installation">Fence Installation</option>
                    <option value="fence-repair">Fence Repair</option>
                    <option value="fence-staining">Fence Staining/Painting</option>
                    <option value="deck-staining">Deck Staining/Painting</option>
                    <option value="aeration">Core Aeration</option>
                    <option value="other">Other / Multiple Services</option>
                  </select>
                </div>

                <div>
                  <label class="block text-gray-700 font-semibold mb-2" for="message">
                    Additional Details
                  </label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="4"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-blue"
                    placeholder="Tell us about your project or property needs..."
                  ></textarea>
                </div>

                <div class="bg-blue-50 p-4 rounded-lg">
                  <label class="flex items-start">
                    <input type="checkbox" name="subscription" class="mt-1 mr-3" />
                    <span class="text-sm text-gray-700">
                      I'm interested in learning about subscription programs for year-round service
                    </span>
                  </label>
                </div>

                <button 
                  type="submit" 
                  class="w-full bg-brand-red text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-red-700 transition"
                >
                  <i class="fas fa-paper-plane mr-2"></i>Send Quote Request
                </button>

                <p class="text-sm text-gray-600 text-center">
                  * Required fields. We'll respond within 24 hours.
                </p>
              </form>

              <div id="formMessage" class="mt-4 hidden"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Map Placeholder */}
      <section class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl font-bold text-center text-gray-800 mb-8">Our Service Areas</h2>
          <div class="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
            <div class="text-center">
              <i class="fas fa-map-marked-alt text-6xl text-gray-400 mb-4"></i>
              <p class="text-xl text-gray-600">Interactive Map Coming Soon</p>
              <p class="text-gray-500 mt-2">Serving Fayette, Coweta, South Fulton & Metro Atlanta</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
