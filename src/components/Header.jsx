
function Header(){
    return (
       <>
        <div className="navbar nav">
            <div className="nav">
            <h1 className="logo"><i className="fa-solid fa-bowl-food"></i>ReStore</h1>

            </div>
            <div className="nav-container">
                <div className="navlink nav-item">
                    <a href="#">Home</a>
                    <a href="#Popular">Popular</a>
                    <a href="#Starter">Starter</a>
                    <a href="#Sweets">Dessert</a>
                    <a href="#">Menu</a>
                    
                </div>
            </div>

            <div className="navlink contact">                
                <a href="#">Contact <i className="fa-solid fa-hand"></i></a>
            </div>

        </div>
       </>
    )
}

export default Header;