import { Render, Form, Background } from "./style"
import { FiMail, FiLock } from "react-icons/fi"
import { Link } from "react-router-dom"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"



export function SignIn(){

  return (
    <Render>
        <Form>
          <h1 class="logo" > <span>2</span>PLAY</h1> 
          <p>Aplicação para acompanhar tudo que assistir.</p> 
          <h2>Faça seu login</h2>

          <Input icon={FiMail} type="email" placeholder="E-mail"/>

          <Input icon={FiLock} type="password" placeholder="Senha"/>

          <Button title="Entrar"/>

          <Link to="/register"> Criar conta </Link>
        </Form>
        <Background />
    </Render>
  )
}


