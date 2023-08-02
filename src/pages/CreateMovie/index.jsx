import { Header } from "../../components/Header";
import { FiArrowLeft, FiX } from "react-icons/fi"
import { Input } from "../../components/Input";
import { Tag } from "../../components/Tag"
import { Button } from "../../components/Button"
import { Render, Form } from "./style"

export function CreateMovie (){
  return(
    <Render>
      <Header />

      <main>
        <div>
          <FiArrowLeft /> <a href="#">Voltar</a> 
        </div>


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

              <Tag  title="React">
                
              </Tag>
              
              <Tag title="Novo marcador" />
      
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