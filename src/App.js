import './App.css';
import { useRef , useState } from 'react'

function App() {
  const en1 = useRef()
  const en2 = useRef()
  const [numero, setNumero] = useState(null)

  function clicaSomar() {
     ms(parseFloat(en1.current.value)+parseFloat(en2.current.value))
    }

    function clicaSubtrair() {
        ms(parseFloat(en1.current.value)-parseFloat(en2.current.value))
    }
    function clicaMultiplicar() {
       ms(parseFloat(en1.current.value)*parseFloat(en2.current.value))
    }
    function clicaDividir() {
        ms(parseFloat(en1.current.value)/parseFloat(en2.current.value))
    }

    function ms(valor){
      setNumero(valor)
    }

  return (
    <div>
      <div className="App">
      <input type="numb" ClassName="input-group-prepend" ref={en1}  ></input> 
      <button className="btn btn-primary" onClick={clicaSomar}>+</button>
      <button className="btn btn-secondary" onClick={clicaSubtrair}>-</button>
      <button className="btn btn-success" onClick={clicaMultiplicar}>*</button>
      <button className="btn btn-danger" onClick={clicaDividir}>/</button>
      <input type="numb" ClassName="input-group-prepend" ref={en2}  ></input> 
       </div>
      {numero!==null&&(<div className="alert alert-primary"><p>={numero.toFixed(2)}</p></div>)}  
    </div>
  );
}

export default App;
