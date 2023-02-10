import {useState} from 'react';
import './app.css'

export default function App(){
  const [peso, setPeso] = useState('');
  const[altura, setAltura] = useState('');
  const[mensagem, setMesagen] = useState('');
  function calcularIMC(){
      const  alt = altura /100;
      const imc = peso/(alt* alt);
      if(imc.toFixed(2) < 18.5){
        setMesagen("Esta abaixo do Peso! Seu imc: "+imc.toFixed(2) );
      }
     else if(imc.toFixed(2)> 18.6 && imc.toFixed(2) < 24.9){
      setMesagen("Peso Normal! Seu imc: "+imc.toFixed(2))
     }else if(imc.toFixed(2)>= 25.0 && imc.toFixed(2) < 34.9){
      setMesagen("Peso esta levemente acima do peso! IMC: "+imc.toFixed(2))
     }
     else if(imc.toFixed(2)>= 34.9){
      setMesagen("Cuidade Obesidade! Seu imc: "+imc.toFixed(2))
     }


  }
  return(
      <div className="app">
         <h1> Calculadora IMC</h1>
         <span>Vamos calcular seu imc</span>
         <div className="area-input">
         <input
          type="text"
          placeholder="Peso em(kg) ex: 90"
          value={peso}
          onChange={(e)=> setPeso(e.target.value)}
         /> 

<input
          type="text"
          placeholder="Altura em (cm) Ex: 180"
          value={altura}
          onChange={(e)=> setAltura(e.target.value)}
         /> 

         <button onClick={calcularIMC}>
          Calcular
         </button>
         </div>
         <h2>{mensagem}</h2>
      </div>
  )
}