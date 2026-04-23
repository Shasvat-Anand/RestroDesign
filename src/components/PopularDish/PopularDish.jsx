import img1 from "../../assets/Images/Homemade Margherita Pizza Recipe.jpg";
import img2 from "../../assets/Images/Soft Gulab Jamuns 🍯✨.jpg";
import img3 from "../../assets/Images/download (3).jpg";
import img4 from "../../assets/Images/چکن بریانی.jpg";

import './Popular.css';

function PopularDish() {

  const items = [
    {
      img: img3,
      name: "Veg Burger",
      category: "Starter",
      type: "Veg",
      price: 99
    },
    {
      img: img2,
      name: "Gulab Jamuns",
      category: "Dessert",
      type: "Veg",
      price: 99
    },
    {
      img: img4,
      name: "Chicken Biryani",
      category: "Main Course",
      type: "Non-Veg",
      price: 99
    },
    {
      img: img1,
      name: "Margherita Pizza",
      category: "Main Course",
      type: "Veg",
      price: 99
    }
  ];

  return (
    <section className="topdishdiv" id="Popular">

      <div className="container-div">

        {/* 🔷 Title */}
        <div className="section-title">
          <h1 className="title-h1">🫰 Popular Dish</h1>
          <p className="title-p">What You’re Looking For</p>
        </div>

        {/* 🔷 Cards */}
        <div className="card-container">

          {items.map((item, index) => (
            <div className="card" key={index}>

              <img src={item.img} alt={item.name} />

              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>

                <div className="Cate-type">
                  <span className="category">{item.category}</span>
                  <span className="type">{item.type}</span>
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

export default PopularDish;