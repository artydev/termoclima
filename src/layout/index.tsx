import Nav from '@/components/navigation';
import Footer from '@/components/footer';
import Diaporama from '@/components/diaporama';

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

        <Diaporama />

        <main>{children}</main>
        <Footer />

        <button class="scroll-to-top" id="scrollToTopBtn">↑</button>
        <script src="/main.js"></script>
        <script type="module" src="/diapo.js"></script>
      </body>
    </html>
  );
}
