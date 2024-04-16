import { Title, Subtitle } from 'Components';
import style from './HeaderStyle';

const Header = ({theme, setTheme}) => {
  return (
    <div style={style}>
        <Title />
        <Subtitle theme={theme} setTheme={setTheme} />
    </div>
  );
};

export default Header;