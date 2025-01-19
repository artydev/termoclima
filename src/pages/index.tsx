import CounterServer from '@/components/counter-server';

export default function Homepage() {
  return (
    <>
      


      <div class="content">
        <section id="home" class="home-section">
          <h1>Home</h1>
        </section>


        <section id="products" class="product-section">
          <h1>I Nostri Prodotti</h1>
          <div class="product-grid">
            <section class="product-card">
              <img src="https://via.placeholder.com/300" alt="Prodotto 1"></img>
              <h2>Prodotto 1</h2>
              <p>Questa è una descrizione del prodotto 1. È un ottimo prodotto.</p>
              <span class="price">€29,99</span>
              <button class="buy-btn">Acquista Ora</button>
            </section>

            <section class="product-card">
              <img src="https://via.placeholder.com/300" alt="Prodotto 2"></img>
              <h2>Prodotto 2</h2>
              <p>Questa è una descrizione del prodotto 2. È un prodotto fantastico.</p>
              <span class="price">€39,99</span>
              <button class="buy-btn">Acquista Ora</button>
            </section>
            <section class="product-card">
              <img src="https://via.placeholder.com/300" alt="Prodotto 3"></img>
              <h2>Prodotto 3</h2>
              <p>Questa è una descrizione del prodotto 3. È un prodotto incredibile.</p>
              <span class="price">€49,99</span>
              <button class="buy-btn">Acquista Ora</button>
            </section>
          </div>
        </section>

        <section class="promotion-product-section">
          <h1 id="promotion-products">Le Nostre Promozioni</h1>
          <div class="product-grid">
            <section class="product-card">
              <img src="https://via.placeholder.com/300" alt="Prodotto 1"></img>
              <h2>Prodotto 1</h2>
              <p>Questa è una descrizione del prodotto 1. È un ottimo prodotto.</p>
              <span class="price">€29,99</span>
              <button class="buy-btn">Acquista Ora</button>
            </section>
            <section class="product-card">
              <img src="https://via.placeholder.com/300" alt="Prodotto 2"></img>
              <h2>Prodotto 2</h2>
              <p>Questa è una descrizione del prodotto 2. È un prodotto fantastico.</p>
              <span class="price">€39,99</span>
              <button class="buy-btn">Acquista Ora</button>
            </section>
            <section class="product-card">
              <img src="https://via.placeholder.com/300" alt="Prodotto 3"></img>
              <h2>Prodotto 3</h2>
              <p>Questa è una descrizione del prodotto 3. È un prodotto incredibile.</p>
              <span class="price">€49,99</span>
              <button class="buy-btn">Acquista Ora</button>
            </section>
          </div>
        </section>

        <div class="content contact-page" id="contact">
          <section class="contact-section">
            <h1>Contattaci</h1>
            <p>Hai domande o richieste? Inviaci un messaggio e ti risponderemo al più presto.</p>

            <form action="#" method="post" class="contact-form">
              <div class="form-group">
                <label for="name">Nome</label>
                <input type="text" id="name" name="name" placeholder="Il tuo nome" required />
              </div>

              <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" name="email" placeholder="La tua email" required />
              </div>

              <div class="form-group">
                <label for="message">Messaggio</label>
                <textarea id="message" name="message" placeholder="Il tuo messaggio" rows={5} required></textarea>
              </div>

              <button type="submit" class="submit-btn">Invia Messaggio</button>
            </form>
          </section>
        </div>
      </div>

      <footer class="footer">
        <div class="footer-content">

          <div class="footer-logo">
            <h2>TermoClima</h2>
            <p>Soluzioni per il clima e il comfort della tua casa.</p>
          </div>

          <div class="footer-links">
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#products">Prodotti</a></li>
              <li><a href="#services">Servizi</a></li>
              <li><a href="#contact">Contatti</a></li>
            </ul>
          </div>

          <div class="footer-contact">
            <h3>Contatti</h3>
            <p><strong>Email:</strong> info@termoclima.it</p>
            <p><strong>Telefono:</strong> +39 123 456 789</p>
          </div>

          <div class="footer-social">
            <h3>Seguici</h3>
            <div class="social-icons">
              <a href="#"><img src="https://via.placeholder.com/24" alt="Facebook" /></a>
              <a href="#"><img src="https://via.placeholder.com/24" alt="Instagram" /></a>
              <a href="#"><img src="https://via.placeholder.com/24" alt="Twitter" /></a>
            </div>
          </div>
        </div>

        <div class="footer-bottom">
          <p>&copy; 2024 TermoClima. Tutti i diritti riservati.</p>
        </div>
      </footer>

    </>
  );
}
