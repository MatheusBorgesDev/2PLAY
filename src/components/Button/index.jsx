import { Render } from "./style";


export function Button({ title }){
  return(
    <Render type="button">
      {title}
    </Render>
  )
}