import React from "react";

const Banner = () => (
    <div className="main-banner img-container" id="main-banner">
        <div className="ed-grid lg-grid-6">
            <div className="lg-cols-4 lg-x-2">
                <img className="main-banner__img" src="https://s3.amazonaws.com/rtvc-assets-senalcolombia.gov.co/s3fs-public/field/image/wallpaper-whipala-organica-escritorio-03-1920x1080.jpg" alt="" />
                <div className="main-banner__data s-center">
                    <p className="t2 s-mb-0">Diplomado en Desarrollo de Software Empresarial</p>
                    <p> UAMex</p>
                    <a href="https://www.uaemex.mx" className="button">Más Información</a>
                </div>
            </div>
        </div>
    </div>
    
)
const Topbar = () => (
    <div className="topbar">
        <div className="ed-grid m-grid-2">
            <p className="s-mb-1 m-mb-0 s-center m-left">Características &gt Topbar</p>
            <a className="button--cta button--tiny s-to-center m-to-right" href="#">Modelo de botón</a>
    </div>
</div >
)

export default Banner;
export default Topbar;