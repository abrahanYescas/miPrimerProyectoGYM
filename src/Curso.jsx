import React from "react";
import PropTypes from 'prop-types';
//import { Component } from "react";
//const persona = { "nombre": "Abrahan", "apellido": "Reyes" } //propiedades Llave valor y {persona.nombre}{...}
//const curso = { "nombre": "React desde cero", "image": "/Users/abrahanr/Documents/DOCS/Diplomado/Benito/5. REACT/perro1.jpg", "price": "$1,200.00mnx", "profesor":"Rosalio Arias" }


//const Curso = props => ( //se puede pasar todas las propiedades
const Curso = ({ nombre, image, price, profesor }) => (
    <>
        <article className="card">
            <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
                <img src={image} alt="" />
            </div>
            <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
                <h3 className="t5 s-mb-2 s-center">
                    {nombre}
                </h3>
                <div className="s-mb-2 s-main-center">
                    <div className="card__teacher s-cross-center">
                        <div className="card__avatar s-mr-1">
                            <div className="circle img-container">
                                <img src="https://i.pinimg.com/736x/28/48/79/2848799ee345fbfa150333238819871b.jpg" alt="" />
                            </div>
                        </div>
                        <span className="small">{profesor}</span>
                    </div>
                </div>
                <div className="s-main-center">
                    <a className="button--ghost-alert button--tiny" href="https://www.uaemex.com">{price}</a>
                </div>
            </div>
            <>
            </>
        </article>

    </>
)

Curso.propTypes = {
    nombre: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.string,
    profesor: PropTypes.string,
}
Curso.defaultProps = {
    nombre: "No se encontro nombre de curso",
    image: "https://sc01.alicdn.com/kf/HTB10rNvX0fvK1RjSspoq6zfNpXaP/230571185/HTB10rNvX0fvK1RjSspoq6zfNpXaP.jpg",
    price: "- -",
    profesor: "Sin instructor",
}


export default Curso;
