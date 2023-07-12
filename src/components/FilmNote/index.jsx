import { Render } from "./style";

export function FilmNote(data, ...rest){
  return(
    <Render {...rest}>
      <h2> {data.title} </h2>    

      <p>{data.content}</p>
    </Render>
  )
}