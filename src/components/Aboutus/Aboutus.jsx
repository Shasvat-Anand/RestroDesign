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
          Experience the perfect blend of flavor, tradition, and hospitality  at <strong>Table Tales</strong>. Located amidst the beautiful hills at Shimla and proudly serving guests since 2016, we specialize in authentic Veg and Non-Veg cuisine prepared with handpicked fresh ingredients and aromatic spices.

         Whether it’s a family dinner, a casual outing, or a special celebration, our warm ambience and signature dishes promise a memorable culinary journey.

         </p>

         <ul>
          <li> Authentic Indian Cuisine</li>
          <li> Chef-Crafted Specialties</li>
          <li> Fresh & Quality Ingredients</li>
          <li> Hospitality Served with Every Meal</li>
         </ul>

        
        
      
       
          <p>
         Timings: Mon – Sun | 10:00 AM – 10:00 PM
          

          </p>
          <p>
        Reservations & Enquiries: +91 8470990585
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