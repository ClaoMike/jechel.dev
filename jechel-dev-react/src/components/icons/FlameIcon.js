import { FaHotjar} from 'react-icons/fa';
import appStyle from "AppStyle";

const FlameIcon = () => {
  return (
    <FaHotjar 
        className='flame-icon'
        style={appStyle.iconConfig}
      />
  );
};

export default FlameIcon;