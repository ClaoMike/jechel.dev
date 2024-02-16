import appStyle from 'AppStyle'
import { Stack } from '@mui/material';

import ReactIcon from 'components/icons/ReactIcon';
import JSIcon from 'components/icons/JSIcon';
import HTMLIcon from 'components/icons/HTMLIcon';
import CSSIcon from 'components/icons/CSSIcon';

const VersionSection = () => {
    return (
        <div style={appStyle.horizontalCenterStyle} className='foo'>
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
                <p> Version 1.0.0 </p>

    </div>
  )
}

export default VersionSection