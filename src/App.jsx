import './App.css'
import Cabecalho from './componentes/Cabecalho'
import Evento from './componentes/Evento'
import Galeria from './componentes/Galeria'
import Rodape from './componentes/Rodape'

function App() {

  return (
    <div>  
      <Cabecalho/>
    <Evento
    titulo={"Evento do senai"}
    descricao={"Descrição do evento"}
    horario={"29/04/2024 as 11 horas"}
    local={"Senai são josé"}
    />
    <Galeria/>
    <Rodape/>
    </div>
  )
}

export default App
