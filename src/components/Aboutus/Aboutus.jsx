import bg from "../../assets/Images/Download Attractive arrangement of coffee beans for free.jpg";
import './About.css';

function Aboutus() {
  return (
    <section 
      className="aboutus"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="about-content">

        <p>
          At ReStore, we believe great food brings people together. Our cafe
          was created to offer a warm, welcoming space where friends meet,
          families celebrate, and every cup and plate is served with care.
        </p>

        <div className="socialmedia">
          <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-instagram"></i>
          </a>

          <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-facebook"></i>
          </a>

          <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
            <i className="fa-solid fa-location-dot"></i>
          </a>
        </div>

      </div>
    </section>
  );
}

export default Aboutus;