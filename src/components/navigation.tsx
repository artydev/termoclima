export default function Nav() {
    return (
        <div>
            <nav class="navbar">
                <div class="navbar-left">
                    <img src="/logo.png" width="80%" style="position:relative;top:0.1rem;"/>
                </div>

                <div style="flex:1;background:red;text-align:center">
                    <a href="#home">Home</a>
                </div>

                <div class="navbar-right" style="text-align:right">
                    RIGHT
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
