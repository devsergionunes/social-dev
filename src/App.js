import { Conteiner } from "./Pages/Home/Home";
import { Header } from "./components/Header/Header";
import { GlobalStyle } from "./style/GlobalStyle";


function App() {
  return (
    <div >
      <Header/>
      <Conteiner />
      <GlobalStyle/>
    </div>
  );
}

export default App;
