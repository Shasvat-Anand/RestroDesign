import img1 from "../../assets/Images/mashedpatato.jpg";
import img2 from "../../assets/Images/log in or sign up.jpg";
import img3 from "../../assets/Images/download (3).jpg";
import img4 from "../../assets/Images/download (4).jpg";
import img5 from "../../assets/Images/Dumpling_ Momo 🥟.jpg";
import img6 from "../../assets/Images/Hot and Spicy Noodles.jpg";
import img7 from "../../assets/Images/usa.jpg";
import img8 from "../../assets/Images/download (5).jpg";

import './Starter.css';

function Starter() {

  const items = [
    { img: img1, name: "Crispy Samosa", price: 30 },
    { img: img2, name: "Fried Momo", price: 60 },
    { img: img8, name: "Dosa", price: 140 },
    { img: img4, name: "Mashed Potato", price: 120 },
    { img: img5, name: "Steam Momo", price: 70 },
    { img: img6, name: "Noodles", price: 50 },
    { img: img7, name: "Pani Puri", price: 120 },
    { img: img3, name: "Veg Burger", price: 89 },
  ];

  return (
    <section className="Starter-dish" id="Starter">

      <div className="container-div">

        {/* Title */}
        <div className="section-title">
          <h1 className="title-h1">😋 Starter</h1>
          <p className="title-p">Chalo suru karte hai</p>
        </div>

        {/* Cards */}
        <div className="card-container">
          {items.map((item, index) => (
            <div className="card" key={index}>

              <img src={item.img} alt={item.name} />

              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>

                <div className="Cate-type">
                  <span className="category">Starter</span>
                  <span className="type">Veg</span>
                </div>

                <a className="btn">
                  Price: ₹{item.price}
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>

    </section>
  );
}

export default Starter;