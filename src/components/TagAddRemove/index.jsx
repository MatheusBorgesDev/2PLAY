import { Render } from "./style.js";
import { FiPlus, FiX } from 'react-icons/fi'

export function TagAddRemove({ isNew, value, onClick, ...rest }){
  return(
    <Render isNew={isNew}>
        <input 
          type="text" 
          value={value}
          readOnly={!isNew}
          {...rest}
        />
        
        <button
          type="button"
          onClick={onClick}
          className={isNew ? 'button-add' : 'button-delete'}
        >
          {isNew ? <FiPlus/> : <FiX/>}
        </button>
    </Render>
  )
}