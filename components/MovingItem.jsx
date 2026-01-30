import img1 from "../assets/Images/Изображения_ просматривайте стоковые фотографии, векторные изображения и видео в количестве 50,451.jpg";
import img2 from "../assets/Images/A Taste of Tradition_ 10 Must-Try Awadhi Cuisine Delicacies.jpg";
import img3 from "../assets/Images/Flavors from India - Michele Rocchi.jpg";

function MovingItem() {
  return (
    <>
      <div className="rightdiv   d-flex justify-content-center align-items-center">
        <div className="container ">
          <div className="container-item">
            <h1>Welcome to <i className="fa-solid fa-bowl-food"></i> ReStore</h1>
            <p>Where flavors meet hospitality!</p>
            <p>
              Nestled in <span>Shimla</span> since <span>2016</span>, savor authentic  <span>Veg and Non-Veg</span> with
              fresh ingredients.
            </p>
            <p>
              Ideal for any occasion in our cozy setting. Try our signature  <span >chat papade.</span>
              
            </p>
            <h3>Join us today!</h3>
          </div>
        </div>

        <div
          id="carouselExampleSlidesOnly"
          className="carousel slide slidingdiv"
          data-bs-ride="carousel"
          data-bs-interval="1500"
        >
          <div className="carousel-inner ">
            <div className="carousel-item active">
              <img src={img1} className="d-block  " alt="img1" />
            </div>

            <div className="carousel-item">
              <img src={img2} className="d-block " alt="img2" />
            </div>

            <div className="carousel-item">
              <img src={img3} className="d-block  " alt="img3" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MovingItem;
