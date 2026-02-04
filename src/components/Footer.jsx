function Footer(){
    return(
        <>
        <div className=" footer">
             

           <div className="container">

        <div className="links ">
        <div className="footerlink nav-item">
                    <a href="#">Home</a>
                    <a href="#Popular">Popular</a>
                    <a href="#Starter">Starter</a>
                    <a href="#Sweets">Dessert</a>
                    <a href="#">Menu</a>
                    
        </div>
        
      </div>

      <div className="social">
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-instagram"></i>
        </a>

        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-facebook"></i>
        </a>

        <a href="https://maps.google.com" target="_blank" rel="noreferrer">
          <i className="fa-solid fa-location-dot"></i>
        </a>
      </div>

      <div className="copyright">
        <p>© All copyright held by Anand Kr. Agarhari</p>
        </div>

        </div>
        
        </div>
        </>
    )
}

export default Footer;