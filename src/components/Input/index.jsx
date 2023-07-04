import { Render } from "./style";

export function Input({ icon: Icon, ...rest}){
  return(
    <Render>
      {Icon && <Icon size={20} />}
      <input {...rest}/>
    </Render>
  )
}