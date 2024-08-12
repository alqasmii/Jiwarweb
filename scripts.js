// Example script extracted from your Unbounce page

// Window object setup
window.ub = window.ub || {};

// Page-specific settings
window.ub.page = {
    id: "d18f7273-dee3-41f9-8c33-5a3158521cba",
    variantId: "a",
    name: "Jiwar",
    url: "http://jiwar.ubpages.com/jiwar-1/",
    dimensions: {
        desktop: {
            height: 1590,
            width: 940
        },
        mobile: {
            height: 2348,
            width: 320
        }
    }
};

// Web fonts used on the page
window.ub.page.webFonts = ['Cabin:regular,700,500','Arvo:italic','Lato:regular'];

// Form validation rules
window.ub.form = {
    action: "modal",
    validationRules: {
        name: {
            required: false
        },
        email: {
            required: false,
            email: true
        },
        phone_number: {
            required: false,
            phone: true
        }
    },
    validationMessages: {
        name: {},
        email: {},
        phone_number: {}
    },
    url: "a-form_confirmation.html",
    lightboxSize: {
        desktop: {
            height: 177,
            width: 512
        },
        mobile: {
            height: 177,
            width: 240
        }
    },
    isConversionGoal: true
};

// Intersection Observer for animations
(() => { 
  const obs = new IntersectionObserver(
    ents => {
      ents.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('ub-ani-play');
        } else {
          e.target.classList.remove('ub-ani-play');
        }
      });
    }, 
    { threshold: 0.5 }
  );
  const els = document.querySelectorAll('[class*="ub-ani"]');
  els.forEach(el => obs.observe(el));
})();

// Async script loader
(function() {
    var script = document.createElement('script');
    script.src = "//builder-assets.unbounce.com/published-js/main.bundle-24bf7dd.z.js";
    script.async = true;
    document.body.appendChild(script);
})();
