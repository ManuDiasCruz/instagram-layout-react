export default function NavigationBar(){
    return (
        <nav>
            <div className="container">
                <Logo />
                <MobileLogo />
                <MobileInstagram />
                <Search />
                <Icons />
                <MobileIcons />
            </div>
        </nav>
    );
}

function Logo(){
    return (
        <div className="logo">
            <ion-icon name="logo-instagram"></ion-icon>
            <div className="space-between"></div>
            <img src="assets/img/logo.png" alt=""/>
        </div>
    );
}

function MobileLogo(){
    return (
        <div className="logo-mobile">
            <ion-icon name="logo-instagram"></ion-icon>
        </div>
    );
}

function MobileInstagram(){
    return (
        <div className="instagram-mobile">
            <img src="assets/img/logo.png" alt=""/>
        </div>
    );
}

function Search(){
    return (
        <div className="search">
            <input type="text" placeholder="Pesquisar" />
        </div>
    );
}

function Icons(){
    return (
        <div className="icons">
            <ion-icon name="paper-plane-outline"></ion-icon>
            <ion-icon name="compass-outline"></ion-icon>
            <ion-icon name="heart-outline"></ion-icon>
            <ion-icon name="person-outline"></ion-icon>
        </div>
    );
}

function MobileIcons(){
    return (
        <div className="mobile-icons">
            <ion-icon name="paper-plane-outline"></ion-icon>
        </div>
    );
}