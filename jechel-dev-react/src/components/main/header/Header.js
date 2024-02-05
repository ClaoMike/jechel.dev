import Title from './Title';
import Subtitle from './Subtitle';

const Header = ({theme, setTheme}) => {
  return (
    <div>
        <Title />
        <Subtitle theme={theme} setTheme={setTheme} />
    </div>
  );
};

export default Header;