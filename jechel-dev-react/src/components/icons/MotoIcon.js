import { FaMotorcycle } from 'react-icons/fa';
import appStyle from '../../AppStyle';

const MotoIcon = () => {
  return (
    <FaMotorcycle 
      className='moto-icon '
      style={appStyle.iconConfig}
    />
  );
};

export default MotoIcon;