import { FiArrowLeft } from "react-icons/fi"
import { Link } from "react-router-dom"
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { TagAddRemove } from "../../components/TagAddRemove"
import { Button } from "../../components/Button"
import { Render, Form } from "./style"

export function NewMovie (){
  return(
    <Render>
      <Header />

      <main>

        <Link to="/"> <FiArrowLeft /> Voltar </Link>
        
        <Form>

          <h1>Novo filme</h1>

          <section class="movie_inputs">
            <Input class="movie_title" placeholder="Título" type="text"></Input>

            <Input class="movie_rating" placeholder="Sua nota (de 0 a 5)" type="number"></Input>

            <textarea class="movie_notes" placeholder="Observações" id="" cols="30" rows="10"></textarea>

          </section>

          <section class="movie_tags">
            <p>Marcadores</p>

            <div class="tag_wrapper">

              <TagAddRemove value="Comédia" role="textbox" contenteditable>
                
              </TagAddRemove>
              
              <TagAddRemove placeholder='Novo marcador' isNew />
      
            </div>

          </section>

          <section class="new_movie_buttons">

            <Button title="Excluir filme"/>
          
            <Button title="Salvar alterações"/>

          </section>

        </Form>

      </main>

    </Render>

  )
}