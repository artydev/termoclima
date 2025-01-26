import SearchInput from "./searchinput.tsx"

export default function Nav() {
    return (
        <>
            <header class="wrapper">
                <div class="topbar">
                    <div class="left">
                       <img src="logo.png" width="50%" style="min-width:220px"/>
                    </div>
                    <div class="center">
                        <div>
                            CENTER
                        </div>
                    </div>
                    <div class="right">
                        RIGHT
                    </div>
                </div>

                <section class="subtop">
                    <article>
                        Prodotti
                    </article>
                    <article>
                        Promozioni
                    </article>
                    <article>
                        Assistenza
                    </article>
                    <article>
                        Contattacci
                    </article>
                </section>
            </header>

        </>
    );
}
