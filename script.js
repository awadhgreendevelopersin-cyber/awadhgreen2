// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile nav toggle
const navToggle = document.getElementById('nav-toggle');
const mainNav = document.getElementById('main-nav');
if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
  mainNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Hero diagram animation — only start once visible, and respect reduced motion
const heroVisual = document.querySelector('.hero-visual');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (heroVisual && !prefersReducedMotion) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        heroVisual.classList.add('anim-ready');
        io.disconnect();
      }
    });
  }, { threshold: 0.3 });
  io.observe(heroVisual);
}

// Savings calculator
const billInput = document.getElementById('bill-input');
const billSlider = document.getElementById('bill-slider');
const monthlyOut = document.getElementById('monthly-savings');
const yearlyOut = document.getElementById('yearly-savings');

function formatINR(n) {
  return '₹ ' + Math.round(n).toLocaleString('en-IN');
}

function updateSavings(value) {
  const bill = Number(value) || 0;
  if (bill <= 0) {
    monthlyOut.textContent = '₹ —';
    yearlyOut.textContent = '₹ —';
    return;
  }
  // Indicative estimate: a well-sized rooftop system can typically
  // offset a large share of a monthly bill. We show a conservative
  // single estimate rather than a false-precision figure.
  const monthlySavings = bill * 0.7;
  const yearlySavings = monthlySavings * 12;
  monthlyOut.textContent = formatINR(monthlySavings);
  yearlyOut.textContent = formatINR(yearlySavings);
}

if (billInput && billSlider) {
  billInput.addEventListener('input', () => {
    billSlider.value = billInput.value;
    updateSavings(billInput.value);
  });
  billSlider.addEventListener('input', () => {
    billInput.value = billSlider.value;
    updateSavings(billSlider.value);
  });
  // initialize with slider default
  updateSavings(billSlider.value);
  billInput.value = billSlider.value;
}
