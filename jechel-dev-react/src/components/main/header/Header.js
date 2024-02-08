import { Title, Subtitle } from 'Components';
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