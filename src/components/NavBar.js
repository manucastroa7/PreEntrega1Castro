import CartWidget from './CartWidget';

const NavBar = () => {

    return (<div className="NavBar">

        <nav class="navbar sticky-top navbar-expand-lg navbar-light bg-transparent">
            <div class="container-fluid">
                <a class="navbar-brand" href="#"><CartWidget></CartWidget></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav mx-auto">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                        <a class="nav-link" href="#tipoHab">Reservas</a>
                    </div>
                </div>
            </div>
        </nav>

    </div>)
}


export default NavBar;