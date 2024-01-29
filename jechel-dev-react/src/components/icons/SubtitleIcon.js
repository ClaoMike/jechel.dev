import { FaTerminal } from 'react-icons/fa';
import appStyle from '../../AppStyle';

const SubtitleIcon = () => {
  return (
    <FaTerminal 
      className='subtitle-icon'
      style={appStyle.iconConfig}
    />
  );
};

export default SubtitleIcon;