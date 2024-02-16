import { FaReact } from "react-icons/fa";
import appStyle from "AppStyle";
import { IconContext } from "react-icons";
import { isMobile } from 'react-device-detect';

const ReactIcon = () => {
  return (
    <IconContext.Provider value={{size: isMobile ? '30px' : '50px', className: "react-icon" }}>
    <div>
      <FaReact
        style={appStyle.iconConfig}
      />
    </div>
  </IconContext.Provider>
    
  )
}

export default ReactIcon