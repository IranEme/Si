'use client';
import React, {useState} from "react";
import '../css/Page.css'

function Page(){
    const [ texto, setTexto ] = useState('');
    const [ esValido, setEsValido ] = useState(null);
    const matriz = [
        [1, 2, 0],
        [1, 3, 0],
        [4, 2, 0],
        [1, 3, 0],
        [4, 2, 0]

    ];

    function analizar(){
        //! 0, 1, 2 error
        //! 3, 4  aceptacion
        let txt = texto.split('');
        let i = 0;
        let estado = 0;
        let caracter = 0;

        const a = /a/i;
        const b = /b/i;

        // Bucle que recorre la entrada
        while (i < texto.length) {
            const a = /a/i;
            const b = /b/i;
            // Determinar la categoría del caracter actual
            if (a.test(txt[i])) {
              caracter = 0; // Caracter es una letra
            } else if (b.test(txt[i])) {
              caracter = 1; // Caracter es un número o signo
            } else {
              caracter = 2; // Otro tipo de caracter
            } 
      
            // Actualizar el estado del analizador usando la matriz de transiciones
            estado = matriz[estado][caracter];
            if (estado === 0 || estado === 1 || estado === 2) { 
                setEsValido(false); 
                // console.log('No aceptable');
                // console.log('Estado: ' +estado);
            }
            if (estado === 3 || estado === 4) {
                setEsValido(true);
                //console.log('Aceptado');
                //console.log('Estado: ' +estado);
            }
      
            i++; // Incrementar la posición en la iteración para procesar el siguiente caracter
          }
    }

    return(
        <div className="div_contenedor">
        <div className="div_main">
          <div className="div_main_txt">
          <h1><img src= "https://scontent.fmxl1-1.fna.fbcdn.net/v/t1.15752-9/387526908_1057235491956034_1187116230990837244_n.png?_nc_cat=102&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=fzKGr3uteIUAX_8SN1h&_nc_ht=scontent.fmxl1-1.fna&oh=03_AdSsUxqj7VcMAnj0jA4CyAyg6S9x7nGCl5mkLlCwKHsAuw&oe=654F1F34" alt="Descripción de la imagen"     style={{ width: '700px', height: '25px' }} /></h1>
            <br />
          </div><br />
          <div className="div_btn">
          <input
              type="text"
              placeholder="Lenguaje aceptado {a, b}"
              value={texto}
              onChange={(event) => setTexto(event.target.value)}
            />
           
          </div>
          <button onClick={analizar}><img src= "https://media3.giphy.com/media/qsZa1hblVZZ4RFtZFR/giphy.gif?cid=ecf05e47ww90hcnihm0elwra0s9twcc23so1s1dldjzjn1ls&ep=v1_stickers_search&rid=giphy.gif&ct=s" alt="Descripción de la imagen"     style={{ width: '100px', height: '100px' }} /></button>
          <div className="div_resultado">
            {/* Mostrar mensajes dependiendo de si la palabra es válida o no */}
            {esValido === true && <h1><img src= "https://scontent.fmxl1-1.fna.fbcdn.net/v/t1.15752-9/387481899_2357496477972211_8634579194025940002_n.png?_nc_cat=102&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=pUaT9-Z9_PEAX9cYnHI&_nc_oc=AQk4yjYKn6dRXBKx2VQl26h0ndCkG7UzQJttL10vGOMDr20Vhxtq3YnEzBEPweNMTZ0&_nc_ht=scontent.fmxl1-1.fna&oh=03_AdQmwwLdySdNG_owbYuc8F6WIJVEtPuR4MfEiXklUt6Uzg&oe=654F13AA" alt="Descripción de la imagen"     style={{ width: '200px', height: '25px' }} /></h1>}
            {esValido === false && <h1><img src= "https://scontent.fmxl1-1.fna.fbcdn.net/v/t1.15752-9/387472692_691474659282725_572741736827905817_n.png?_nc_cat=107&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=CH0yoJQPOA0AX9j_rGi&_nc_ht=scontent.fmxl1-1.fna&oh=03_AdTlECzsw5kU7qIX8WcyMhvKrWPMIOzhT_tqkRIzgI8qTQ&oe=654F084D" alt="Descripción de la imagen"     style={{ width: '200px', height: '25px' }} /></h1>}
          </div>
        </div>
      </div>
    );
}

export default Page;