import './style.css'
import { createHeader } from './components/header.js'
import { createHero } from './components/hero.js'
import { createAbout } from './components/about.js'
import { createSpeaking } from './components/speaking.js'
import { createTestimonials } from './components/testimonials.js'
import { createContact } from './components/contact.js'
import { createFooter } from './components/footer.js'

document.querySelector('#app').innerHTML = `
  ${createHeader()}
  ${createHero()}
  ${createAbout()}
  ${createSpeaking()}
  ${createTestimonials()}
  ${createContact()}
  ${createFooter()}
`

// Mobile menu toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn')
const mobileMenu = document.querySelector('.mobile-menu')

if (mobileMenuBtn && mobileMenu) {
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('active')
  })
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute('href'))
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  })
})

// Header scroll effect
window.addEventListener('scroll', () => {
  const header = document.querySelector('.header')
  if (window.scrollY > 100) {
    header.classList.add('scrolled')
  } else {
    header.classList.remove('scrolled')
  }
})