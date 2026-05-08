import img1 from "../../assets/Images/Изображения_ просматривайте стоковые фотографии, векторные изображения и видео в количестве 50,451.jpg";
import img2 from "../../assets/Images/A Taste of Tradition_ 10 Must-Try Awadhi Cuisine Delicacies.jpg";
import img3 from "../../assets/Images/Flavors from India - Michele Rocchi.jpg";
import bgimg from "../../assets/Images/abo1.jpg";

import './MovingItem.css'
function MovingItem() {
  return (
    <>
    <section
    className="right" style={{backgroundImage: `url(${bgimg})`}}
    >



     <div className="rightdiv">

 

  {/* 🔷 CAROUSEL FIRST */}
  <div
    id="carouselExampleSlidesOnly"
    className="carousel slide slidingdiv"
    data-bs-ride="carousel"
    data-bs-interval="1500"
  >
    <div className="carousel-inner">

      <div className="carousel-item">
        <img src={img3} alt="img3" />
      </div>
      
      <div className="carousel-item">
        <img src={img2} alt="img2" />
      </div>

      <div className="carousel-item active">
        <img src={img1} alt="img1" />
      </div>

       

    </div>
  </div>

  {/* 🔷 TEXT BELOW */}
      <h1 id="name">
   {/* <i className="fa-solid fa-bowl-food"></i> */}
        Welcome to Table Tales
      </h1>
  <div className="container">
    <div className="container-item">


      <p>Where flavors meet hospitality!

      
        Nestled in Shimla since 2016, savor authentic 
          with fresh ingredients.
      </p>

     

       

       

    </div>
  </div>

</div>
      </section>

 
    </>
  );
}

export default MovingItem;
