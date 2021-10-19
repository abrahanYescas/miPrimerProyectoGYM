import React,{Component} from "react"

class Formulario extends Component{

    //Crear el constructor
    constructor(props){
        super(props)

        this.state = {
            nombre : "",
            correo : "",
        }
        this.cambiarNombre = this.cambiarNombre.bind(this)
        this.cambiarCorreo = this.cambiarCorreo.bind(this)
    }

    cambiarNombre (e){
        this.setState({
            nombre: e.target.value
        })
    }
    cambiarCorreo (e){
        this.setState({
            correo: e.target.value
        })
    }

    render(){
        return(
            <div className="edGrid">
                <h1>Formulario de registro</h1>
                <form>
                    <div className="form-item">
                        <label>Nombre completo</label>
                        <input type="text"
                        
                        onChange = {this.cambiarNombre}

                        /> 
                    </div>
                    <div className="form-item">
                        <label>Email: </label>
                        <input type="email"
                        
                        onChange = {this.cambiarCorreo}
                        />
                    </div>
                    <div className="form-item">
                        <input className="button full" type="submit" value="Enviar"/>
                    </div>
                </form>
                <div>
                    <h2>{`hola ${this.state.nombre}`}</h2>
                    <span>{`Tu correo es: ${this.state.correo}`}</span>
                </div>
            </div>

        )
    }

}

export default Formulario;