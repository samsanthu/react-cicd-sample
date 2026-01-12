import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>Welcome to My Website</h1>
          <p>Building amazing experiences with modern web technologies</p>
          <div className="hero-buttons">
            <Link to="/services" className="cta-button primary">
              Our Services
            </Link>
            <Link to="/contact" className="cta-button secondary">
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2>Why Choose Us</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🚀</div>
              <h3>Fast & Reliable</h3>
              <p>Lightning-fast performance with reliable infrastructure</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎨</div>
              <h3>Beautiful Design</h3>
              <p>Modern and intuitive user interfaces</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💡</div>
              <h3>Innovative Solutions</h3>
              <p>Cutting-edge technology for your business</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🤝</div>
              <h3>Expert Support</h3>
              <p>Dedicated team to help you succeed</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Get Started?</h2>
          <p>Let's work together to bring your vision to life</p>
          <Link to="/contact" className="cta-button primary">
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;

