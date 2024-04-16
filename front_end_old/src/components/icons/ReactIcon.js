import { FaReact } from "react-icons/fa";
import style from './IconStyle';
import { IconContext } from "react-icons";
import { isMobile } from 'react-device-detect';

const ReactIcon = () => {
  return (
    <IconContext.Provider value={{size: isMobile ? '30px' : '50px', className: "react-icon" }}>
    <div>
      <FaReact
        style={style}
      />
    </div>
  </IconContext.Provider>
    
  )
}

export default ReactIcon