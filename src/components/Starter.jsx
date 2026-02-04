import img3 from "../assets/Images/download (3).jpg"
import img1 from "../assets/Images/mashedpatato.jpg"
import img4 from "../assets/Images/download (4).jpg"
import img8 from "../assets/Images/download (5).jpg"
import img2 from "../assets/Images/log in or sign up.jpg"
import img5 from "../assets/Images/Dumpling_ Momo 🥟.jpg"
import img6 from "../assets/Images/Hot and Spicy Noodles.jpg"
import img7 from "../assets/Images/usa.jpg"



function Starter() {
    return (
        <>
            <div className="Starter-dish" id="Starter">
                <div className="container-div">
                    <div className="section-title s-title">
                        <h1 className="title-h1" > 😋 Starter </h1>
                        <p className="title-p" >Chalo suru karte hai</p>
                    </div>

                    <div className="card-container grid">


                    <div className="card starter-card">
                        <img src={img1} className="card-img-top" alt="image" />

                        <div className="card-body">
                            <h5 className="card-title">Crispy Samosa</h5>

                            <div className="d-flex justify-content-between Cate-type">
                                <span className="category">Starter</span>
                                <span className="type">Veg</span>
                            </div>

                            <a className="btn  w-100 mt-3">
                                 Price: 30.00
                            </a>
                        </div>
                    </div>

                    <div className="card starter-card">
                        <img src={img2} className="card-img-top" alt="image" />

                        <div className="card-body">
                            <h5 className="card-title">Fired Momo</h5>

                            <div className="d-flex justify-content-between Cate-type">
                                <span className="category">Starter</span>
                                <span className="type">Veg</span>
                            </div>

                            <a  className="btn  w-100 mt-3">
                                Price: 60.00
                            </a>
                        </div>
                    </div>

                    <div className="card starter-card">
                        <img src={img8} className="card-img-top" alt="image" />

                        <div className="card-body">
                            <h5 className="card-title">Dossa</h5>

                            <div className="d-flex justify-content-between Cate-type">
                                <span className="category">Starter</span>
                                <span className="type">Veg</span>
                            </div>

                            <a   className="btn  w-100 mt-3">
                              Price: 140.00
                            </a>
                        </div>
                    </div>

                    <div className="card starter-card">
                        <img src={img4} className="card-img-top" alt="image" />

                        <div className="card-body">
                            <h5 className="card-title">Mashed Patato</h5>

                            <div className="d-flex justify-content-between Cate-type">
                                <span className="category">Starter</span>
                                <span className="type">Veg</span>
                            </div>

                            <a  className="btn   w-100 mt-3">
                               Price: 120.00
                            </a>
                        </div>
                    </div>

                    <div className="card starter-card">
                        <img src={img5} className="card-img-top" alt="image" />

                        <div className="card-body">
                            <h5 className="card-title">Stream Momo</h5>

                            <div className="d-flex justify-content-between Cate-type">
                                <span className="category">Starter</span>
                                <span className="type">Veg</span>
                            </div>

                            <a  className="btn   w-100 mt-3">
                               Price: 70.00
                            </a>
                        </div>
                    </div>

                    <div className="card starter-card">
                        <img src={img6} className="card-img-top" alt="image" />

                        <div className="card-body">
                            <h5 className="card-title">Noodles</h5>

                            <div className="d-flex justify-content-between Cate-type">
                                <span className="category">Starter</span>
                                <span className="type">Veg</span>
                            </div>

                            <a   className="btn  w-100 mt-3">
                             Price: 50.00
                            </a>
                        </div>
                    </div>

                    <div className="card starter-card">
                        <img src={img7} className="card-img-top" alt="image" />

                        <div className="card-body">
                            <h5 className="card-title">Pani Puri</h5>

                            <div className="d-flex justify-content-between Cate-type">
                                <span className="category">Starter</span>
                                <span className="type">Veg</span>
                            </div>

                            <a   className="btn w-100 mt-3">
                             Price: 120.00
                            </a>
                        </div>
                    </div>

                    <div className="card starter-card">
                        <img src={img3} className="card-img-top" alt="image" />

                        <div className="card-body">
                            <h5 className="card-title">Veg Burger</h5>

                            <div className="d-flex justify-content-between Cate-type">
                                <span className="category">Starter</span>
                                <span className="type">Veg</span>
                            </div>

                            <a  className="btn w-100 mt-3">
                                Price: 89.00
                            </a>
                        </div>
                    </div>

                    </div>


                </div>
            </div>

            </>
    )
}
export default Starter;