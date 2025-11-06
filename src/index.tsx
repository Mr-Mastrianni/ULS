import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { serveStatic } from 'hono/cloudflare-workers'
import { HomePage } from './pages/home'
import { AboutPage } from './pages/about'
import { FertilizationPage } from './pages/fertilization'
import { HydroSeedingPage } from './pages/hydro-seeding'
import { FencingPage } from './pages/fencing'
import { DeckPage } from './pages/deck'
import { PestControlPage } from './pages/pest-control'
import { ServiceAreasPage } from './pages/service-areas'
import { GalleryPage } from './pages/gallery'
import { TestimonialsPage } from './pages/testimonials'
import { ContactPage } from './pages/contact'
import { Layout } from './components/layout'

const app = new Hono()

// Enable CORS for API routes
app.use('/api/*', cors())

// Serve static files from public/static directory
app.use('/static/*', serveStatic({ root: './public' }))

// API route for contact form submission
app.post('/api/contact', async (c) => {
  const data = await c.req.json()
  
  // In production, this would send to email service or CRM
  console.log('Contact form submission:', data)
  
  return c.json({ 
    success: true, 
    message: 'Thank you for contacting United Lawn Specialist. We will reach out to you shortly!' 
  })
})

// API route for quote request
app.post('/api/quote', async (c) => {
  const data = await c.req.json()
  
  // In production, this would send to email service or CRM
  console.log('Quote request:', data)
  
  return c.json({ 
    success: true, 
    message: 'Thank you for your quote request! We will contact you within 24 hours.' 
  })
})

// Page routes
app.get('/', (c) => c.html(<Layout title="Home - United Lawn Specialist"><HomePage /></Layout>))
app.get('/about', (c) => c.html(<Layout title="About Us - United Lawn Specialist"><AboutPage /></Layout>))
app.get('/fertilization', (c) => c.html(<Layout title="Fertilization & Weed Control - United Lawn Specialist"><FertilizationPage /></Layout>))
app.get('/hydro-seeding', (c) => c.html(<Layout title="Hydro Seeding & Lawn Installation - United Lawn Specialist"><HydroSeedingPage /></Layout>))
app.get('/fencing', (c) => c.html(<Layout title="Fencing Services - United Lawn Specialist"><FencingPage /></Layout>))
app.get('/deck-services', (c) => c.html(<Layout title="Deck Services - United Lawn Specialist"><DeckPage /></Layout>))
app.get('/pest-control', (c) => c.html(<Layout title="Pest Control Services - United Lawn Specialist"><PestControlPage /></Layout>))
app.get('/service-areas', (c) => c.html(<Layout title="Service Areas - United Lawn Specialist"><ServiceAreasPage /></Layout>))
app.get('/gallery', (c) => c.html(<Layout title="Gallery - United Lawn Specialist"><GalleryPage /></Layout>))
app.get('/testimonials', (c) => c.html(<Layout title="Testimonials - United Lawn Specialist"><TestimonialsPage /></Layout>))
app.get('/contact', (c) => c.html(<Layout title="Contact Us - United Lawn Specialist"><ContactPage /></Layout>))

export default app
