import SearchInput from "./searchinput.tsx"

export default function Nav() {
    return (
        <>
            <nav class="navbar">
                <div class="navbar-top">

                    <div class="logo">
                        <img src="/logo.png" />
                    </div>

                    <div class="navbar-search">
                        <SearchInput />
                    </div>

                    <div class="navbar-right">
                        A Proposito
                    </div>
                </div>
                <div class="navbar-bottom">
                    <a href="#prodotti">Prodotti</a>
                    <a href="#promozioni">Promozioni</a>
                    <a href="#assistenza">Assistenza</a>
                    <a href="#contattaci">Contattaci</a>
                </div>
            </nav>

            <div class="hamburger" id="hamburger">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>

        </>
    );
}
