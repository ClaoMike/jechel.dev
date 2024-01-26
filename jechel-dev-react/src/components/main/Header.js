import Title from './Title'
import Subtitle from './Subtitle'
import Switch from '@mui/joy/Switch';
import DarkMode from '@mui/icons-material/DarkMode';

const Header = () => {
  return (
    <div>
        <Title />
        <Subtitle />

        <Switch
          size="lg"
          slotProps={{
            input: { 'aria-label': 'Dark mode' },
            thumb: {
              children: <DarkMode />,
            },
          }}
          sx={{
            '--Switch-thumbSize': '16px',
          }}
          />

    </div>
  )
}

export default Header