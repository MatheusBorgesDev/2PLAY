import { Render } from "./style";

export function Tag({ icon: Icon, title }){
  return(
    <Render>
      {title}
      {Icon && <Icon size={20} />}
    </Render>
  )
}