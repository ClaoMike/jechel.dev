import appStyle from 'AppStyle'
import React from 'react'
import Tooltip from '@mui/material/Tooltip';
import { Stack } from '@mui/material';

import HtmlIcon from '@mui/icons-material/Html';
import CssIcon from '@mui/icons-material/Css';
import JavascriptIcon from '@mui/icons-material/Javascript';
import { FaReact } from "react-icons/fa";

const VersionSection = () => {
    return (
        <div style={appStyle.horizontalCenterStyle}>
            <Tooltip placement="top" title={
                <Stack
                direction="row"
                justifyContent="space-evenly"
                alignItems="center"
                spacing={1}
                >
                    <FaReact/>
                    <JavascriptIcon />
                    <HtmlIcon />
                    <CssIcon/>
                </Stack>
            }>
                <p> Version 1.0.0 </p>
            </Tooltip>
    </div>
  )
}

export default VersionSection