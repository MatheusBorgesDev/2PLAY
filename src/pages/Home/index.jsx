import { Header } from "../../components/Header";
import { Button } from "../../components/Button"
import { FilmNote } from "../../components/FilmNote"
import { Render } from "./style";

export function Home (){
  return(
    <Render>
      <Header>
      </Header>
      
      <main>
        <div>
          <h1>Meus filmes</h1>
          <Button title=" + Adicionar filmes" />
        </div>

        <div class="notes_wrapper">
          <FilmNote title="Interestellar" content="" />
          <FilmNote title="Interestellar" content="" />
          <FilmNote title="Interestellar" content="" />
        </div>
      </main>
    </Render>
    
  )
}