import { Render } from "./style";

export function ButtonText({ title, isActive=false, icon: Icon, ...rest}){
  return(
    <Render 
      type="button"
      isActive={isActive}
      {...rest}
    >
      {Icon} {title}
    </Render>
  )
}