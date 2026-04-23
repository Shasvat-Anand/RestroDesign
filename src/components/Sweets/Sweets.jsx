import img1 from "../../assets/Images/download (7).jpg";
import img2 from "../../assets/Images/download (8).jpg";
import img3 from "../../assets/Images/download (9).jpg";
import img4 from "../../assets/Images/download (10).jpg";
import img5 from "../../assets/Images/Golden-brown gulab jamuns.jpg";
import img6 from "../../assets/Images/Die Grundlagen des Kuchen Backens_ Was jeder Hobbybäcker wissen sollte.jpg";
import img7 from "../../assets/Images/🎂 Matcha Chocolate Drip Cake Recipe.jpg";
import img8 from "../../assets/Images/Gajjar Ka Halwa.jpg";

import './Sweets.css';

function Sweets() {

  const items = [
    { img: img1, name: "Ras Malai", price: "₹55 / piece" },
    { img: img2, name: "Kaju Katli", price: "₹40 / piece" },
    { img: img3, name: "Jalebi", price: "₹40 / 250g" },
    { img: img4, name: "Besan Ladoo", price: "₹30 / piece" },
    { img: img5, name: "Gulab Jamun", price: "₹55 / piece" },
    { img: img6, name: "Cup Cake", price: "₹50 / piece" },
    { img: img7, name: "Chocolate Cake", price: "₹99" },
    { img: img8, name: "Gajjar Halwa", price: "₹70 / 100g" }
  ];

  return (
    <section className="Sweets" id="Sweets">

      <div className="container-div">

        {/* 🔷 Title */}
        <div className="section-title">
          <h1 className="title-h1">🍨 Desserts</h1>
          <p className="title-p">Kuch Meetha Ho Jaaye</p>
        </div>

        {/* 🔷 Cards */}
        <div className="card-container">

          {items.map((item, index) => (
            <div className="card" key={index}>

              <img src={item.img} alt={item.name} />

              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>

                <a className="btn">
                  Price: {item.price}
                </a>
              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Sweets;