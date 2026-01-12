import './About.css';

function About() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="container">
          <h1>About Us</h1>
          <p>Learn more about our mission, vision, and values</p>
        </div>
      </section>

      <section className="about-content">
        <div className="container">
          <div className="about-section">
            <h2>Our Story</h2>
            <p>
              We are passionate about creating beautiful and functional websites 
              that provide great user experiences. Our team combines creativity 
              with technical expertise to deliver outstanding results.
            </p>
            <p>
              Founded with a vision to make web development accessible and 
              enjoyable, we've grown into a trusted partner for businesses 
              looking to establish a strong online presence.
            </p>
          </div>

          <div className="about-section">
            <h2>Our Mission</h2>
            <p>
              To empower businesses with cutting-edge web solutions that drive 
              growth and success. We believe in building long-term relationships 
              with our clients and helping them achieve their digital goals.
            </p>
          </div>

          <div className="about-section">
            <h2>Our Values</h2>
            <div className="values-grid">
              <div className="value-card">
                <h3>Excellence</h3>
                <p>We strive for excellence in everything we do</p>
              </div>
              <div className="value-card">
                <h3>Innovation</h3>
                <p>We embrace new technologies and creative solutions</p>
              </div>
              <div className="value-card">
                <h3>Integrity</h3>
                <p>We conduct business with honesty and transparency</p>
              </div>
              <div className="value-card">
                <h3>Collaboration</h3>
                <p>We work closely with clients to achieve shared goals</p>
              </div>
            </div>
          </div>

          <div className="about-section">
            <h2>Our Team</h2>
            <p>
              Our diverse team of developers, designers, and strategists brings 
              together years of experience and a shared passion for creating 
              exceptional digital experiences.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;

