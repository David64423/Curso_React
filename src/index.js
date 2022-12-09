import React from 'react';
import ReactDOM from 'react-dom'; //Con esto estamos diciendo que vamos a trabajar con react para sitios web

const rootElement = document.getElementById("root"); /* Aqui tenemos el elemento div del HTML pero no 
sabemos que ponerle asi que tenemos que mandarlo al metodo ReactDom.createRoot como el elemto que pide como
parametro*/

function Grettings() {
    return <div>
        <h1>Helou World</h1>
        <p>lorem 123</p>
    </div>
}

const root = ReactDOM.createRoot(rootElement); // Con esto ya tenemos una aplicación de react inicializada

root.render(<div>
    {/*Grettings()  Estas llaves me permiten ejecutar codigo de Javascript y me permiten recibir el return de las funciones o los componentes,
    La forma de abajo es crear mi etiqueta HTML con el nombre de la funcion que yo creé y funcionara igual per seramucho mas legible*/}
    <Grettings />
</div>);