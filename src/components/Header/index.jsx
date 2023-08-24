import { Render, Search, Profile } from "./style";
import { Link } from "react-router-dom"

export function Header (){
  return(
    <Render>
      <h1 class="logo"> <span>2</span>PLAY</h1>

      <Search>
        <input type="text" placeholder="Pesquisar por título"/>
      </Search>  
  
      <Profile>
        <div>
          <p>Matheus Borges</p>
          <Link to="#">Sair</Link>
        </div>

        <Link to="/profile">
          <img src="https://github.com/MatheusBorgesDev.png" alt="Imagem do usuário" />
        </Link>
      </Profile>

    </Render>
  )
}