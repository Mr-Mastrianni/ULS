// United Lawn Specialist - Frontend JavaScript

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', function() {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // Contact form handling
  const quoteForm = document.getElementById('quoteForm');
  if (quoteForm) {
    quoteForm.addEventListener('submit', async function(e) {
      e.preventDefault();
      
      const formMessage = document.getElementById('formMessage');
      const submitButton = quoteForm.querySelector('button[type="submit"]');
      const originalButtonText = submitButton.innerHTML;
      
      // Show loading state
      submitButton.disabled = true;
      submitButton.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Sending...';
      
      // Get form data
      const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        address: document.getElementById('address').value,
        serviceType: document.getElementById('serviceType').value,
        message: document.getElementById('message').value,
        subscription: document.querySelector('input[name="subscription"]').checked
      };
      
      try {
        const response = await fetch('/api/quote', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData)
        });
        
        const result = await response.json();
        
        if (response.ok && result.success) {
          // Show success message
          formMessage.className = 'message-success';
          formMessage.innerHTML = `
            <i class="fas fa-check-circle mr-2"></i>
            ${result.message}
          `;
          formMessage.classList.remove('hidden');
          
          // Reset form
          quoteForm.reset();
          
          // Scroll to message
          formMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
        } else {
          throw new Error(result.message || 'Failed to submit form');
        }
      } catch (error) {
        // Show error message
        formMessage.className = 'message-error';
        formMessage.innerHTML = `
          <i class="fas fa-exclamation-circle mr-2"></i>
          Sorry, there was an error submitting your request. Please call us directly at (123) 456-7890.
        `;
        formMessage.classList.remove('hidden');
        
        console.error('Form submission error:', error);
      } finally {
        // Reset button
        submitButton.disabled = false;
        submitButton.innerHTML = originalButtonText;
      }
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Add animation class to elements when they come into view
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in-up');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe service cards and other animated elements
  document.querySelectorAll('.service-card, .bg-white.rounded-lg').forEach(el => {
    observer.observe(el);
  });

  // Phone number formatting
  const phoneInputs = document.querySelectorAll('input[type="tel"]');
  phoneInputs.forEach(input => {
    input.addEventListener('input', function(e) {
      let value = e.target.value.replace(/\D/g, '');
      if (value.length > 0) {
        if (value.length <= 3) {
          value = `(${value}`;
        } else if (value.length <= 6) {
          value = `(${value.slice(0, 3)}) ${value.slice(3)}`;
        } else {
          value = `(${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(6, 10)}`;
        }
      }
      e.target.value = value;
    });
  });

  // Add current year to footer
  const currentYear = new Date().getFullYear();
  const yearElements = document.querySelectorAll('.current-year');
  yearElements.forEach(el => {
    el.textContent = currentYear;
  });

  // Service area verification (optional enhancement)
  const addressInput = document.getElementById('address');
  if (addressInput) {
    addressInput.addEventListener('blur', function() {
      const address = this.value.toLowerCase();
      const subscriptionCounties = ['fayette', 'coweta', 'fulton'];
      const isSubscriptionArea = subscriptionCounties.some(county => address.includes(county));
      
      if (isSubscriptionArea) {
        // Could add visual indicator that subscription services are available
        console.log('Subscription services available in this area');
      }
    });
  }
});

// Utility function to format currency
function formatCurrency(amount) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(amount);
}

// Utility function to validate email
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// Export functions for use in other scripts if needed
window.UnitedLawnSpecialist = {
  formatCurrency,
  validateEmail
};
