import { Render, Form, Background } from "./style"
import { FiMail, FiLock, FiUser, FiArrowLeft } from "react-icons/fi"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"


export function SignUp(){

  return (
    <Render>
        <Form>
          <h1 class="logo" > <span>2</span>PLAY</h1> 
          <p>Aplicação para acompanhar tudo que assistir.</p> 
          <h2>Crie sua conta</h2>

          <Input icon={FiUser} type="text" placeholder="Nome"/>

          <Input icon={FiMail} type="email" placeholder="E-mail"/>

          <Input icon={FiLock} type="password" placeholder="Senha"/>

          <Button title="Cadastrar"/>

          <a href="/"> ← Voltar para o login</a>
        </Form>
        <Background />
    </Render>
  )
}


