import bg from "../../assets/Images/Download Attractive arrangement of coffee beans for free.jpg";
// import bg from '../assets/Images/Top view cup of coffee with roasted beans _ Free Vector.jpg'
import './About.css'
function Aboutus() {
  return (
    <>
      <div className="aboutus">
        <img className="aboutimg" src={bg} alt="" />
        <div className="aboutinfo">
          <div className="info">
            <p>
              At ReStore, we believe great food brings people together. Our cafe
              was created to offer a warm, welcoming space where friends meet,
              families celebrate, and every cup and plate is served with care.
              Whether you're stopping by for a quick coffee, a relaxed dinner,
              or a special occasion, our goal is simple — to make every visit
              memorable.
            </p>
            
            <div className="socialmedia">
            <a href="https://instagram.com/" target="_blank">
              <i className="fa-brands fa-instagram"></i>
            </a>

            <a href="https://facebook.com/" target="_blank">
              <i className="fa-brands fa-facebook"></i>
            </a>

            <a href="https://maps.google.com" target="_blank">
              <i className="fa-solid fa-location-dot"></i>
            </a>
          </div>
          </div>
          
        </div>

          
      </div>
    </>
  );
}

export default Aboutus;
