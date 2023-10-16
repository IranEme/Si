'use client'
import React, { useState } from "react";
import '../css/Page.css';

// Definir el componente React llamado Page
function Page() {
  // Definir dos variables de estado con useState
  // texto almacena la entrada del usuario
  // esPalabraValida almacena si la palabra es válida o no
  const [texto, setTexto] = useState('');
  const [esPalabraValida, setEsPalabraValida] = useState(null);

  // Definir una matriz que se utilizará en el análisis léxico
  const matriz = [
    [1, 200, 200],
    [1, 1, 200]
  ];

  // Definir una función llamada analizar
  const analizar = () => {
    // Variables para el análisis léxico
    let c = texto.split(''); // Dividir la entrada en caracteres individuales
    let i = 0; // Contador de posición en la entrada
    let estado = 0; // Estado inicial
    let caracter = 0; // Categoría del caracter actual

    // Expresiones regulares para verificar letras y números/signos
    const letras = new RegExp('[a-zA-Z]'); // Iniciar con letra
    const numeroSigno = new RegExp('[0-9]'); // Iniciar con número

    // Bucle que recorre la entrada
    while (i < texto.length) {
      // Determinar la categoría del caracter actual
      if (letras.test(c[i])) {
        caracter = 0; // Caracter es una letra
      } else if (numeroSigno.test(c[i])) {
        caracter = 1; // Caracter es un número o signo
      } else {
        caracter = 2; // Otro tipo de caracter
      }

      // Actualizar el estado del analizador usando la matriz de transiciones
      estado = matriz[estado][caracter];

      // Verificar si se encontró una palabra inválida
      if (estado === 200) {
        setEsPalabraValida(false); // Establecer esPalabraValida en falso
        break; // Salir del bucle cuando se encuentra una palabra inválida
      }

      // Verificar si se encontró una palabra válida
      if (estado === 1) {
        setEsPalabraValida(true); // Establecer esPalabraValida en verdadero
      }

      i++; // Incrementar la posición en la iteración para procesar el siguiente caracter
    }
  };

  // Renderizar la interfaz de usuario del componente
  return (
    <div className="div_contenedor">
      <div className="div_main">
        <div className="div_main_txt">
          <h1><img src= "https://scontent.fmxl1-1.fna.fbcdn.net/v/t1.15752-9/387519858_1700612617124759_4004545743758024618_n.png?_nc_cat=110&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=wAtXo3SJiDkAX_nYYrd&_nc_ht=scontent.fmxl1-1.fna&oh=03_AdRTjBOTapo7Biqd0yrPUp-Qp49HsX_el0Z4LyS7QRyMCA&oe=654EF864" alt="Descripción de la imagen"     style={{ width: '500px', height: '25px' }} /></h1>
         
        </div><br /> <br />
        
        <div className="div_btn">
          
        <input
        
            type="text"
            placeholder="Coloca una expresión"
            value={texto}
            onChange={(event) => setTexto(event.target.value)}
          />
          
         
        </div> <button onClick={analizar}><img src= "https://media3.giphy.com/media/qsZa1hblVZZ4RFtZFR/giphy.gif?cid=ecf05e47ww90hcnihm0elwra0s9twcc23so1s1dldjzjn1ls&ep=v1_stickers_search&rid=giphy.gif&ct=s" alt="Descripción de la imagen"     style={{ width: '100px', height: '100px' }} /></button>
        <div className="div_resultado">
          {/* Mostrar mensajes dependiendo de si la palabra es válida o no */}
          {esPalabraValida === true &&  <h1><img src= "https://scontent.fmxl1-1.fna.fbcdn.net/v/t1.15752-9/387481899_2357496477972211_8634579194025940002_n.png?_nc_cat=102&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=pUaT9-Z9_PEAX9cYnHI&_nc_oc=AQk4yjYKn6dRXBKx2VQl26h0ndCkG7UzQJttL10vGOMDr20Vhxtq3YnEzBEPweNMTZ0&_nc_ht=scontent.fmxl1-1.fna&oh=03_AdQmwwLdySdNG_owbYuc8F6WIJVEtPuR4MfEiXklUt6Uzg&oe=654F13AA" alt="Descripción de la imagen"     style={{ width: '200px', height: '25px' }} /></h1>}
          {esPalabraValida === false && <h1><img src= "https://scontent.fmxl1-1.fna.fbcdn.net/v/t1.15752-9/387472692_691474659282725_572741736827905817_n.png?_nc_cat=107&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=CH0yoJQPOA0AX9j_rGi&_nc_ht=scontent.fmxl1-1.fna&oh=03_AdTlECzsw5kU7qIX8WcyMhvKrWPMIOzhT_tqkRIzgI8qTQ&oe=654F084D" alt="Descripción de la imagen"     style={{ width: '200px', height: '25px' }} /></h1>}
        </div>
      </div>
    </div>
  );
}

// Exportar el componente Page para su uso en otros archivos
export default Page;
