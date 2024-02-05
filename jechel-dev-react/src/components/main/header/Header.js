import Title from './Title';
import Subtitle from './Subtitle';

import appStyle from '../../../AppStyle';

const Header = ({theme, setTheme}) => {
  return (
    <div style={appStyle.headerConfig}>
        <Title />
        <Subtitle theme={theme} setTheme={setTheme} />
    </div>
  );
};

export default Header;