export function createHeader() {
  return `
    <header class="header">
      <div class="container">
        <div class="header-content">
          <a href="#" class="logo">Sarah Mitchell</a>
          <nav>
            <ul class="nav">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#speaking">Speaking</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
          <button class="mobile-menu-btn">☰</button>
          <div class="mobile-menu">
            <ul class="nav">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#speaking">Speaking</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  `
}