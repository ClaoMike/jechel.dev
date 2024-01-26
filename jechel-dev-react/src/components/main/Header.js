import Title from './Title'
import Subtitle from './Subtitle'
import DarkLightModeSwitch from './darkLightModeSwitch/DarkLightModeSwitch'

const Header = () => {
  return (
    <div>
        <Title />
        <Subtitle />
        <DarkLightModeSwitch />
    </div>
  )
}

export default Header