export default function Nav() {
  return (
 
    <div class="navbar-container">
        <nav class="navbar">
      
            <div class="logo"></div>
      
            <div class="nav-links">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#products">Prodotti</a></li>
                    <li><a href="#promotion-products">Promozioni</a></li>
                    <li><a href="#services">Servizi</a></li>
                    <li><a href="#contact">Contatti</a></li>
                </ul>
            </div>
         
            <div class="hamburger" id="hamburger">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
        </nav>
    </div>
  );
}
