import "./App.css";

function App() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">NEXORA</div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Home */}
      <section id="home" className="hero">
        <div className="hero-content">
          <p className="small-title">WELCOME TO NEXORA</p>

          <h1>
            Build Something
            <span> Amazing.</span>
          </h1>

          <p className="description">
            A modern digital experience built with React.js.
            Simple, fast and beautiful.
          </p>

          <a href="#about" className="button">
            Explore More →
          </a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section about">
        <p className="section-label">01 — ABOUT</p>

        <h2>We create digital with bitches 
        experiences.</h2>

        <p>
          Nexora is a modern web platform focused on creating clean,
          interactive and user-friendly digital experiences. This website
          is built using React.js.and im happy to help u..
        </p>
      </section>

      {/* Services */}
      <section id="services" className="section services">
        <p className="section-label">02 — SERVICES</p>

        <h2>What we do</h2>

        <div className="cards">
          <div className="card">
            <div className="card-number">01</div>
            <h3>Web Development</h3>
            <p>
              Modern and responsive websites built with powerful
              technologies.
            </p>
          </div>

          <div className="card">
            <div className="card-number">02</div>
            <h3>UI / UX Design</h3>
            <p>
              Clean and intuitive interfaces designed for a better
              user experience.superrior
            </p>
          </div>

          <div className="card">
            <div className="card-number">03</div>
            <h3>Digital Solutions</h3>
            <p>
              Smart solutions designed to solve real-world problems.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section contact">
        <p className="section-label">03 — CONTACT</p>

        <h2>Let's build something together.</h2>

        <p>
          Have an idea? We'd love to hear about it.
        </p>

        <a
  href="https://wa.me/919876543210?text=Hi%2C%20I%27m%20interested%20in%20your%20project."
  target="_blank"
  rel="noopener noreferrer"
  className="button"
>
  WhatsApp Us →
</a>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2026 Nexora. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;