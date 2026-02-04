import img1 from "../assets/Images/Homemade Margherita Pizza Recipe.jpg";
import img2 from "../assets/Images/Soft Gulab Jamuns 🍯✨.jpg";
import img3 from"../assets/Images/download (3).jpg";
import img4 from "../assets/Images/چکن بریانی.jpg"
function PopularDish() {
    return (
        <>
            <div className="topdishdiv " id="Popular">

                <div className="container-div">
                    <div className="section-title">
                    <h1 className="title-h1"> 🫰 Popular Dish</h1>
                    <p className="title-p">Where You Looking for</p>
                    </div>

                    <div className="card-container grid">

                        
                        
                        <div className="card">
                            <img src={img3} className="card-img-top" alt="image" />

                            <div className="card-body">
                                <h5 className="card-title">Veg Burger</h5>

                                <div className="d-flex justify-content-between Cate-type">
                                    <span className="category">Starter</span>
                                    <span className="type">Veg</span>
                                </div>

                                <a href="#" className="btn  w-100 mt-3">
                                    Price: 99.00
                                </a>
                            </div>
                        </div>
                        <div className="card">
                            <img src={img2} className="card-img-top" alt="image" />

                            <div className="card-body">
                                <h5 className="card-title">Gulab Jamuns</h5>

                                <div className="d-flex justify-content-between Cate-type">
                                    <span className="category">Starter</span> 
                                    <span className="type">Veg</span>
                                </div>

                                <a href="#" className="btn w-100 mt-3">
                                 Price: 99.00
                                </a>
                            </div>
                        </div>
                        
                        <div className="card">
                            <img src={img4} className="card-img-top" alt="image" />

                            <div className="card-body">
                                <h5 className="card-title">Chicken Biryani</h5>

                                <div className="d-flex justify-content-between Cate-type">
                                    <span className="category">Main Course</span>
                                    <span className="type">Non-Veg</span>
                                </div>

                                <a href="#" className="btn w-100 mt-3">
                                   Price: 99.00
                                </a>
                            </div>
                        </div>

                        <div className="card">
                            <img src={img1} className="card-img-top" alt="image" />

                            <div className="card-body">
                                <h5 className="card-title">Margherita Pizza</h5>

                                <div className="d-flex justify-content-between Cate-type">
                                    <span className="category">Main Course</span>
                                    <span className="type">Veg</span>
                                </div>

                                 <a href="#" className="btn w-100 mt-3">
                                    Price: 99.00 
                                </a>
                                
                                 
                            </div>
                        </div>


                         


                    </div>

                </div>
            </div>

        </>
    )
}

export default PopularDish