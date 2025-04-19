const harmfulKeywords = [
  // General non-eco-friendly terms
  'plastic', 'thermocol', 'disposable', 'synthetic', 'polythene', 'non-biodegradable', 'artificial', 'non-recyclable',
  'non-compostable', 'toxic', 'chemical', 'bleached', 'foam', 'engineered', 'faux', 'man-made', 'industrial-grade', 'mass-produced', 'treated', 'impregnated', 'laminated',
  'non-organic', 'petroleum-based', 'oil-derived', 'vinyl', 'acrylic', 'resin', 'polymer', 'coated',
  'chemically-treated', 'non-natural', 'microplastic', 'nanoplastic', 'scented', 'perfumed', 'colored', 'dyed',
  'chlorinated', 'fire-retardant', 'dye-based', 'waterproofed', 'sealed', 'varnished', 'lacquered', 'hardener',
  'emulsifier', 'non-degradable', 'industrial finish', 'solvent-based', 'UV-treated', 'non-eco', 'non-green',
  'non-sustainable', 'carbon-heavy', 'emission-intensive', 'climate-unfriendly', 'excess packaging', 'multi-layered packaging',
  'non-renewable', 'plastic-wrapped', 'sealed in plastic', 'single-use', 'PVC-based', 'PU-coated', 'fake leather',
  'faux suede', 'non-breathable', 'heat-sealed', 'machine-polished', 'non-toxic (misleading)',
  'non-PVC (misleading term if still contains synthetics)', 'PU leather', 'vegan leather (when plastic-based)',
  'synthetic leather', 'eco-friendly (greenwashed)', 'biodegradable (greenwashed)', 'not recyclable',
  'difficult to dispose', 'not reusable', 'wasteful packaging', 'excessive wrapping', 'multi-material',
  'harsh materials', 'chemical smell', 'non-washable', 'non-refillable', 'non-durable', 'short lifespan',
  'fragile plastic', 'low-quality plastic', 'lightweight plastic', 'plastic composite', 'bonded material',
  'fiber-reinforced plastic', 'rubberized', 'rubbery', 'plastic-like', 'packaged with plastic', 'laminated cover',
  'non-compostable laminate', 'soft-touch plastic', 'plasticized', 'artificial feel', 'coating residue',
  'non-absorbent', 'sticky surface', 'shiny finish (plastic)', 'glossy coating', 'wrapped individually (plastic)',
  'vacuum packed (plastic)', 'sleeved in plastic', 'bubble wrap', 'cellophane', 'cling film', 'non-renewable foam',
  'compressed material', 'molded plastic', 'non-upcycled', 'non-regenerative', 'synthetic blend', 'lab-made','leather','silicone',

  // Harmful textiles and fibers
  'polyester', 'nylon', 'microfiber', 'acrylic', 'acrylonitrile', 'modacrylic', 'rayon', 'viscose', 'triacetate',
  'acetate', 'spandex', 'elastane', 'polyamide', 'aramid', 'kevlar', 'nomex',

  // Plastics and polymers
  'pvc', 'hdpe', 'ldpe', 'pet', 'petg', 'pp', 'polystyrene', 'styrene', 'abs', 'tpu', 'polycarbonate', 'polypropylene',
  'polyethylene', 'polyurethane', 'polyoxymethylene', 'polyimide', 'polyolefin', 'polyvinylidene', 'acetal',
  'polybutylene', 'fluoropolymer',

  // Foams & insulation
  'styrofoam', 'urethane foam', 'phenolic foam', 'rigid foam', 'spray foam', 'xps', 'eps', 'closed-cell foam',

  // Harmful chemicals & additives
  'bpa', 'phthalates', 'mercury', 'lead', 'arsenic', 'formaldehyde', 'urea', 'solvent', 'dye', 'chlorine', 'ammonia',
  'fragrance', 'detergent', 'sulfate', 'nitrate', 'alkaline', 'caustic', 'carcinogen', 'phenol', 'toluene', 'benzene',
  'ethanolamine', 'vinyl chloride', 'alkylphenol', 'paraben', 'silicone', 'butane', 'propane','rubber',

  // Coatings, composites & resins
  'resin', 'fiberglass', 'epoxy', 'mylar', 'melamine', 'mdf', 'particleboard', 'teflon', 'ceramic coating',
  'urea-formaldehyde', 'phenolic resin', 'chlorinated rubber', 'carbon fiber (synthetic)', 'epdm', 'saran',
  'non-stick coating', 'Teflon-coated', 'ceramic-coated', 'PTFE-coated', 'PFOA-free coating', 'scratch-resistant', 'waterproof coating',
   'stain-resistant', 'wrinkle-free', 'fire-retardant', 'mold-resistant', 'water-repellent', 'chemical-resistant', 
   'anti-fog', 'anti-microbial', 'odor-resistant', 'fade-resistant', 'weatherproof', 'corrosion-resistant', 'pleather',
    'vinyl-coated', 'melamine finish', 'formaldehyde-treated', 'lead-based', 'chrome-plated', 'powder-coated', 'anodized', 
    'epoxy-coated', 'lacquer finish', 'enamel coating', 'alkyd resin', 'solvent-based', 'acid-resistant', 'alkali-proof', 
    'non-slip rubber', 'textured powder', 'electroplated', 'vacuum metalized', 'conductive coating', 'insulating varnish', 
    'flame-sprayed', 'thermal-sprayed', 'dip-coated', 'spray-on liner', 'self-leveling', 'two-part epoxy', 'multi-layer laminate', 'pressure-sensitive', 'hot-melt coated', 'extrusion-coated', 'plasma-treated', 'ion-beam coated', 'CVD-coated', 'PVD-coated', 'electroless plated', 'anodic film', 'black oxide', 'zinc flake', 'intumescent', 'sacrificial coating', 'anti-graffiti', 'self-cleaning', 'photocatalytic', 'thermochromic', 'electrochromic', 'conductive ink', 'magnetic coating', 'optical coating', 'anti-reflective', 'mirror finish', 'metallized film', 'low-E coating', 'IR-reflective', 'UV-absorbing', 'mold release', 'anti-block', 'slip additive', 'UV stabilizer', 'heat stabilizer', 'flame retardant', 'smoke suppressant', 'biocide', 'fungicide', 'preservative', 'antibacterial', 
  'fragrance encapsulated', 'slow-release', 'time-release', 'enteric coating', 'pH-sensitive', 'oxo-degradable'
];


// Function to remove harmful words
function cleanProductName(name) {
  let cleaned = name.toLowerCase();
  for (const word of harmfulKeywords) {
    const regex = new RegExp(`\\b${word}\\b`, 'gi');
    cleaned = cleaned.replace(regex, '');
  }
  return cleaned.replace(/\s{2,}/g, ' ').trim();
}

document.getElementById('findAlt').addEventListener('click', async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: () => {
      const selectors = [
        '#productTitle',
        '#titleSection h1 span',
        'h1 span.a-size-large.a-text-ellipsis',
        'h1 span.a-text-bold',
        '.product-title-word-break',
        '.aplus-title',
        '#title > span',
        '.dp-title-text',
        '#ebooksProductTitle',
        'meta[name="title"]',
        'title'
      ];

      for (let selector of selectors) {
        const el = document.querySelector(selector);
        if (el?.innerText?.trim()) {
          return {
            product: el.innerText.trim(),
            domain: window.location.hostname
          };
        }
      }

      const meta = document.querySelector('meta[name="title"]');
      if (meta?.content?.trim()) {
        return {
          product: meta.content.trim(),
          domain: window.location.hostname
        };
      }

      return null;
    }
  }, (results) => {
    const result = results?.[0]?.result;

    if (result && result.product) {
      // Clean the product name before searching
      const cleanedProductName = cleanProductName(result.product);

      const query = encodeURIComponent(`eco-friendly ${cleanedProductName}`);
      const domain = result.domain;

      let searchUrl = '';

      if (domain.includes('amazon')) {
        searchUrl = `https://www.amazon.in/s?k=${query}`;
      } else if (domain.includes('flipkart')) {
        searchUrl = `https://www.flipkart.com/search?q=${query}`;
      }
      else if (domain.includes('myntra')) {
        searchUrl = `https://www.myntra.com/search?q=${query}`;
      }
      else if (domain.includes('meesho')) {
        searchUrl = `https://www.meesho.com/search?q=${query}`;
      } else {
        // fallback to Google if unknown site
        alert("No ! Product Found ...")
      }

      chrome.tabs.create({ url: searchUrl });
    } else {
      alert("❗ Could not detect the product title. Try refreshing the page and ensure it's a valid product.");
    }
  });
});
