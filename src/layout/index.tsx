import Nav from '@/components/navigation';
import Footer from '@/components/footer';

import '@/styles/nav.css'
import '@/styles/style.css';


export default function Layout({ children }: { children: JSX.Element }) {
  return (
    <html lang="en">
      <head>
        <title id="title">TermoClima - Sassoferratto</title>
        <meta name="theme-color" content="#ad1457" />
        <link rel="shortcut icon" href="/brisa.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>

        <header>
          <Nav />
        </header>

        <div class="swiper">
          <div class="swiper-wrapper" style="margin-top:150px">

            <div class="swiper-slide">
              <img src="1-1.webp"  />
            </div>
            <div class="swiper-slide">
              <img src="2.webp"  />
            </div>
            <div class="swiper-slide">
              <img src="3.webp"  />
            </div>
            <div class="swiper-slide">
              <img src="4.webp"  />
            </div>
            <div class="swiper-slide">
              <img src="5.webp"  />
            </div>
          </div>
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
        </div>

        <main>{children}</main>
        <Footer />

        <button class="scroll-to-top" id="scrollToTopBtn">↑</button>
        <script src="/main.js"></script>
        <script type="module" src="/diapo.js"></script>
      </body>
    </html>
  );
}
