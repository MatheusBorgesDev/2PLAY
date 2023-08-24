import { Render, Form, Avatar } from "./style";
import { FiUser, FiMail, FiLock, FiArrowLeft, FiCamera } from "react-icons/fi"
import { Link } from "react-router-dom"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

export function Profile(){
  return(
    <Render>
      <header>
        <Link to="/"> <FiArrowLeft /> Voltar </Link>
      </header>

      <Form >
        <Avatar>
          <img src="https://github.com/MatheusBorgesDev.png" alt="Imagem do usuário" />
          
          <label htmlFor="avatar">

            <FiCamera />
            <input id="avatar" type="file" />

          </label>

        </Avatar>

        <Input icon={FiUser} placeholder="Matheus Borges" type="text"/>

        <Input icon={FiMail} placeholder="matheusb.dev@gmail.com" type="email"/>

        <Input icon={FiLock} placeholder="Senha atual" type="password"/>

        <Input icon={FiLock} placeholder="Nova senha" type="password"/>

        <Button title="Salvar" />
      </Form>
    </Render>
  )
}