# Grand Optical – Official Business Website

A modern, fast, and mobile-friendly static business website for **Grand Optical**, an optical showroom located in Mira Road, Mumbai.

---

## 🏢 Business Details

- **Business Name:** Grand Optical
- **Address:** Shop No. 2/3, Moreshwar Shantinagar CHS Ltd, Building No. 68, Sector 1, Opp. TMT Bus Stop, Mira Road, Mumbai – 401107
- **Mobile:** `+91 95945 06701`
- **Landline:** `022 3543 4252`
- **WhatsApp:** [wa.me/919594506701](https://wa.me/919594506701)

---

## 🚀 Key Features

1. **Non-E-Commerce Lead Generation Architecture:**
   - No cart, checkout, or account friction.
   - Every product card features an **"Enquire on WhatsApp"** button pre-filled with the exact product title.
   - One-tap mobile dialing for both Mobile (`9594506701`) and Landline (`022 35434252`).
2. **Product Showcase (10 Categories):**
   - Eyeglasses Frames
   - Sunglasses
   - Reading Glasses
   - Prescription Eyeglasses
   - Kids Eyeglasses
   - Contact Lenses
   - Blue Light Glasses
   - Polarized Sunglasses
   - Computer Glasses
   - Premium Eyewear Frames
3. **Interactive UI:**
   - Filter tabs to sort products (All, Frames & Specs, Sunglasses, Digital & Lens Care).
   - Sticky navigation header with backdrop blur.
   - Mobile hamburger drawer navigation.
   - Floating WhatsApp beacon widget for quick inquiries.
   - Mobile fixed bottom quick-contact bar (Call Now & WhatsApp).
4. **Local SEO & Schema.org Rich Results:**
   - Pre-configured `Optician` / `LocalBusiness` JSON-LD structured data for Google Maps & Local Pack rankings.
   - Optimized for local search terms (`Optical store in Mira Road`, `Optician in Mira Road`, `Eyeglasses in Mira Road`, `Optical shop near TMT Bus Stop`).
5. **Zero Dependencies & Blazing Fast:**
   - Pure HTML5, modern CSS3 (with CSS variables), and vanilla JavaScript.
   - Works instantly without Node.js or build steps.
   - Easily hostable on GitHub Pages, Netlify, Vercel, Hostinger, or Apache/Nginx.

---

## 📁 File Structure

```
grandoptics/
├── index.html              # Main semantic webpage with Schema.org JSON-LD
├── css/
│   └── style.css           # Responsive design, tokens, typography, and micro-interactions
├── js/
│   └── main.js             # Mobile menu, sticky nav, filters, WhatsApp link helpers
├── assets/
│   ├── images/             # Product photos, showroom visuals, and favicon.svg
│   │   ├── hero-eyewear.jpg
│   │   ├── about-store.jpg
│   │   ├── eyeglasses-frames.jpg
│   │   ├── sunglasses.jpg
│   │   ├── reading-glasses.jpg
│   │   ├── prescription-eyeglasses.jpg
│   │   ├── kids-eyeglasses.jpg
│   │   ├── contact-lenses.jpg
│   │   ├── blue-light-glasses.jpg
│   │   ├── polarized-sunglasses.jpg
│   │   ├── computer-glasses.jpg
│   │   ├── premium-eyewear.jpg
│   │   └── favicon.svg
├── robots.txt              # Search engine crawler instructions
├── sitemap.xml             # XML sitemap
└── README.md               # Documentation & maintenance guide
```

---

## 🖼️ How to Replace Product Images

All product images are located in the `assets/images/` directory:
1. To replace an image, simply save your new photo with the exact same filename (e.g. `eyeglasses-frames.jpg`) in `assets/images/`.
2. Recommended image format: JPG or WebP, approximately 800×500 px.

---

## 🛍️ Future E-Commerce Upgrade Path

The codebase has been structured with semantic `<article class="product-card">` components and clear `data-category` attributes. When ready to upgrade to e-commerce in the future:
1. Add a price element inside `.product-body`: `<span class="price">₹1,499</span>`.
2. Replace the WhatsApp link with an "Add to Cart" button `<button class="btn btn-primary add-to-cart" data-id="...">Add to Cart</button>`.
3. Integrate a cart drawer and payment gateway (such as Razorpay or Stripe).
