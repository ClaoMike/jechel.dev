import { Stack } from '@mui/material';
import ReactIcon from 'components/icons/ReactIcon';
import JSIcon from 'components/icons/JSIcon';
import HTMLIcon from 'components/icons/HTMLIcon';
import CSSIcon from 'components/icons/CSSIcon';
import style from './VersionSectionStyle';
import STRINGS from 'Strings';

const VersionSection = () => {
    return (
        <div style={style} className='foo'>
                <Stack
                direction="row"
                justifyContent="space-evenly"
                alignItems="center"
                spacing={1}
                >
                    <ReactIcon/>
                    <JSIcon/>
                    <HTMLIcon/>
                    <CSSIcon/>
                </Stack>
                <p>{STRINGS.main.version + STRINGS.EMPTY_SPACE}1.1.1</p>

    </div>
  )
}

export default VersionSection