import { FaMapPin } from 'react-icons/fa';
import appStyle from '../../AppStyle';

const PinPointIcon = () => {
  return (
    <FaMapPin 
      className='pinpoint-icon'
      style={appStyle.iconConfig}
    />
  );
};

export default PinPointIcon;