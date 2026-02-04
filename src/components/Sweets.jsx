// import img1 from "../assets/Images/mashedpatato.jpg"
import img1 from "../assets/Images/download (7).jpg"
import img2 from "../assets/Images/download (8).jpg"
import img3 from "../assets/Images/download (9).jpg"
import img4 from "../assets/Images/download (10).jpg"
import img5 from "../assets/Images/Golden-brown gulab jamuns.jpg"
import img6 from "../assets/Images/Die Grundlagen des Kuchen Backens_ Was jeder Hobbybäcker wissen sollte.jpg"
import img7 from "../assets/Images/🎂 Matcha Chocolate Drip Cake Recipe.jpg"
import img8 from "../assets/Images/Gajjar Ka Halwa.jpg"


function Sweets() {
    return (
        <>
            <div className="Sweets" id="Sweets">
                <div className="container-div">
                    <div className="section-title sw-title">
                        <h1 className="title-h1"> 🍨Desserts</h1>
                        <p className="title-p">Kuch Metha ho jaay</p>
                    </div>

                    <div className="card-container grid">
                        <div className="card sweet-card">
                            <img src={img1} className="card-img-top" alt="image" />

                            <div className="card-body">
                                <h5 className="card-title">Ras Malae</h5>

                                {/* <div className="d-flex justify-content-between Cate-type">
                                    <span className="category">Starter</span>
                                    <span className="type">Veg</span>
                                </div> */}

                                <a className="btn  w-100 mt-3">
                                    Price: 55.00 / piece
                                </a>
                            </div>
                        </div>
                        <div className="card sweet-card">
                            <img src={img2} className="card-img-top" alt="image" />

                            <div className="card-body">
                                <h5 className="card-title">Kaju Katle</h5>

                                {/* <div className="d-flex justify-content-between Cate-type">
                                    <span className="category">Starter</span>
                                    <span className="type">Veg</span>
                                </div> */}

                                <a className="btn  w-100 mt-3">
                                    Price: 40.00 / piece
                                </a>
                            </div>
                        </div>
                        <div className="card sweet-card">
                            <img src={img3} className="card-img-top" alt="image" />

                            <div className="card-body">
                                <h5 className="card-title">Jalebi</h5>

                                {/* <div className="d-flex justify-content-between Cate-type">
                                    <span className="category">Starter</span>
                                    <span className="type">Veg</span>
                                </div> */}

                                <a className="btn  w-100 mt-3">
                                   Price: 40 / 250g
                                </a>
                            </div>
                        </div>
                        <div className="card sweet-card">
                            <img src={img4} className="card-img-top" alt="image" />

                            <div className="card-body">
                                <h5 className="card-title">Basen Ladoo</h5>

                                {/* <div className="d-flex justify-content-between Cate-type">
                                    <span className="category">Starter</span>
                                    <span className="type">Veg</span>
                                </div> */}

                                <a className="btn  w-100 mt-3">
                                   Price: 30.00 / piece
                                </a>
                            </div>
                        </div>
                        <div className="card sweet-card">
                            <img src={img5} className="card-img-top" alt="image" />

                            <div className="card-body">
                                <h5 className="card-title">Gulab Jamun</h5>

                                {/* <div className="d-flex justify-content-between Cate-type">
                                    <span className="category">Starter</span>
                                    <span className="type">Veg</span>
                                </div> */}

                                <a className="btn  w-100 mt-3">
                                    Price: 55.00 / piece
                                </a>
                            </div>
                        </div>
                        <div className="card sweet-card">
                            <img src={img6} className="card-img-top" alt="image" />

                            <div className="card-body">
                                <h5 className="card-title">Cup Cake</h5>

                                {/* <div className="d-flex justify-content-between Cate-type">
                                    <span className="category">Starter</span>
                                    <span className="type">Veg</span>
                                </div> */}

                                <a className="btn  w-100 mt-3">
                                 Price: 50.00 / piece
                                </a>
                            </div>
                        </div>
                        <div className="card sweet-card">
                            <img src={img7} className="card-img-top" alt="image" />

                            <div className="card-body">
                                <h5 className="card-title">Crispy Samosa</h5>

                                {/* <div className="d-flex justify-content-between Cate-type">
                                    <span className="category">Starter</span>
                                    <span className="type">Veg</span>
                                </div> */}

                                <a className="btn  w-100 mt-3">
                                  Price: 99.00
                                </a>
                            </div>
                        </div>
                        <div className="card sweet-card">
                            <img src={img8} className="card-img-top" alt="image" />

                            <div className="card-body">
                                <h5 className="card-title">Gajjar Halwa</h5>

                                {/* <div className="d-flex justify-content-between Cate-type">
                                    <span className="category">Starter</span>
                                    <span className="type">Veg</span>
                                </div> */}

                                <a className="btn  w-100 mt-3 bg-green-900">
                                   Price: 70.00 / 100g
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Sweets