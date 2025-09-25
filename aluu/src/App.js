
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
function App() {
  return (
    <div className="App">
      <div>
       
        <Header/>
        <section className="ud-hero" id="home">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="ud-hero-content wow fadeInUp" data-wow-delay=".2s">
                  <h1 className="ud-hero-title">
                    This webapp should be able to perform basic CRUD operations including Login Logout Auth
                  </h1>
                 
                  
                </div>
                <div className="ud-hero-brands-wrapper wow fadeInUp" data-wow-delay=".3s">
                  <img src="assets/images/hero/brand.svg" alt="brand" />
                </div>
                <div className="ud-hero-image wow fadeInUp" data-wow-delay=".25s">
                  <img src="assets/images/hero/hero-image.svg" alt="hero-image" />
                  <img src="assets/images/hero/dotted-shape.svg" alt="shape" className="shape shape-1" />
                  <img src="assets/images/hero/dotted-shape.svg" alt="shape" className="shape shape-2" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ====== Hero End ====== */}
        {/* ====== Features Start ====== */}
        <section id="features" className="ud-features">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="ud-section-title">
                  <span>Features</span>
                  <h2>Main Features of Play</h2>
                  <p>
                    There are many variations of passages of Lorem Ipsum available
                    but the majority have suffered alteration in some form.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-3 col-lg-3 col-sm-6">
                <div className="ud-single-feature wow fadeInUp" data-wow-delay=".1s">
                  <div className="ud-feature-icon">
                    <i className="lni lni-gift" />
                  </div>
                  <div className="ud-feature-content">
                    <h3 className="ud-feature-title">Free and Open-Source</h3>
                    <p className="ud-feature-desc">
                      Lorem Ipsum is simply dummy text of the printing and industry.
                    </p>
                    <a href="javascript:void(0)" className="ud-feature-link">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-sm-6">
                <div className="ud-single-feature wow fadeInUp" data-wow-delay=".15s">
                  <div className="ud-feature-icon">
                    <i className="lni lni-move" />
                  </div>
                  <div className="ud-feature-content">
                    <h3 className="ud-feature-title">Multipurpose Template</h3>
                    <p className="ud-feature-desc">
                      Lorem Ipsum is simply dummy text of the printing and industry.
                    </p>
                    <a href="javascript:void(0)" className="ud-feature-link">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-sm-6">
                <div className="ud-single-feature wow fadeInUp" data-wow-delay=".2s">
                  <div className="ud-feature-icon">
                    <i className="lni lni-layout" />
                  </div>
                  <div className="ud-feature-content">
                    <h3 className="ud-feature-title">High-quality Design</h3>
                    <p className="ud-feature-desc">
                      Lorem Ipsum is simply dummy text of the printing and industry.
                    </p>
                    <a href="javascript:void(0)" className="ud-feature-link">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-sm-6">
                <div className="ud-single-feature wow fadeInUp" data-wow-delay=".25s">
                  <div className="ud-feature-icon">
                    <i className="lni lni-layers" />
                  </div>
                  <div className="ud-feature-content">
                    <h3 className="ud-feature-title">All Essential Elements</h3>
                    <p className="ud-feature-desc">
                      Lorem Ipsum is simply dummy text of the printing and industry.
                    </p>
                    <a href="javascript:void(0)" className="ud-feature-link">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ====== Features End ====== */}
        {/* ====== About Start ====== */}
        <section id="about" className="ud-about">
          <div className="container">
            <div className="ud-about-wrapper wow fadeInUp" data-wow-delay=".2s">
              <div className="ud-about-content-wrapper">
                <div className="ud-about-content">
                  <span className="tag">About Us</span>
                  <h2>Brilliant Toolkit to Build Nextgen Website Faster.</h2>
                  <p>
                    The main ‘thrust’ is to focus on educating attendees on how to
                    best protect highly vulnerable business applications with
                    interactive panel discussions and roundtables led by subject
                    matter experts.
                  </p>
                  <p>
                    The main ‘thrust’ is to focus on educating attendees on how to
                    best protect highly vulnerable business applications with
                    interactive panel.
                  </p>
                  <a href="javascript:void(0)" className="ud-main-btn">Learn More</a>
                </div>
              </div>
              <div className="ud-about-image">
                <img src="assets/images/about/about-image.svg" alt="about-image" />
              </div>
            </div>
          </div>
        </section>
        
        
        
        
      
        <section id="contact" className="ud-contact">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-8 col-lg-7">
                <div className="ud-contact-content-wrapper">
                  <div className="ud-contact-title">
                    <span>CONTACT US</span>
                    <h2>
                      Let’s talk about <br />
                      Love to hear from you!
                    </h2>
                  </div>
                  <div className="ud-contact-info-wrapper">
                    <div className="ud-single-info">
                      <div className="ud-info-icon">
                        <i className="lni lni-map-marker" />
                      </div>
                      <div className="ud-info-meta">
                        <h5>Our Location</h5>
                        <p>401 Broadway, 24th Floor, Orchard Cloud View, London</p>
                      </div>
                    </div>
                    <div className="ud-single-info">
                      <div className="ud-info-icon">
                        <i className="lni lni-envelope" />
                      </div>
                      <div className="ud-info-meta">
                        <h5>How Can We Help?</h5>
                        <p>info@yourdomain.com</p>
                        <p>contact@yourdomain.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-5">
                <div className="ud-contact-form-wrapper wow fadeInUp" data-wow-delay=".2s">
                  <h3 className="ud-contact-form-title">Send us a Message</h3>
                  <form className="ud-contact-form">
                    <div className="ud-form-group">
                      <label htmlFor="fullName">Full Name*</label>
                      <input type="text" name="fullName" placeholder="Adam Gelius" />
                    </div>
                    <div className="ud-form-group">
                      <label htmlFor="email">Email*</label>
                      <input type="email" name="email" placeholder="example@yourmail.com" />
                    </div>
                    <div className="ud-form-group">
                      <label htmlFor="phone">Phone*</label>
                      <input type="text" name="phone" placeholder="+885 1254 5211 552" />
                    </div>
                    <div className="ud-form-group">
                      <label htmlFor="message">Message*</label>
                      <textarea name="message" rows={1} placeholder="type your message here" defaultValue={""} />
                    </div>
                    <div className="ud-form-group mb-0">
                      <button type="submit" className="ud-main-btn">
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <Footer />
      </div>

    </div>
  );
}

export default App;
