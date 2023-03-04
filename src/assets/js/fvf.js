const faqitems = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');
  for (i = 0; i < faqitems.length; i++) {
        faqitems[i].setAttribute('aria-expanded', 'false');
    }
  
    if (itemToggle == 'false') {
        this.setAttribute('aria-expanded', 'true');
    }
}
faqitems.forEach(item => item.addEventListener('click', toggleAccordion));