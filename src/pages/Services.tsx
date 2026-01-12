import { Link } from 'react-router-dom';
import './Services.css';

function Services() {
  const services = [
    {
      title: 'Web Development',
      description: 'Custom web applications built with modern frameworks like React, Vue, and Angular. We create scalable and maintainable solutions.',
      icon: '💻'
    },
    {
      title: 'UI/UX Design',
      description: 'Beautiful and intuitive user interfaces that provide exceptional user experiences. We focus on both aesthetics and functionality.',
      icon: '🎨'
    },
    {
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android. We build apps that users love.',
      icon: '📱'
    },
    {
      title: 'E-Commerce Solutions',
      description: 'Complete e-commerce platforms with payment integration, inventory management, and customer portals.',
      icon: '🛒'
    },
    {
      title: 'Consulting',
      description: 'Expert advice on technology, architecture, and best practices. We help you make informed decisions.',
      icon: '💡'
    },
    {
      title: 'Maintenance & Support',
      description: 'Ongoing maintenance, updates, and support to keep your website running smoothly and securely.',
      icon: '🔧'
    }
  ];

  return (
    <div className="services-page">
      <section className="services-hero">
        <div className="container">
          <h1>Our Services</h1>
          <p>Comprehensive solutions for all your digital needs</p>
        </div>
      </section>

      <section className="services-content">
        <div className="container">
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="services-cta">
        <div className="container">
          <h2>Ready to Get Started?</h2>
          <p>Let's discuss how we can help you achieve your goals</p>
          <Link to="/contact" className="cta-button primary">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Services;

