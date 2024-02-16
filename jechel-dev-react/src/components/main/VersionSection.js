import appStyle from 'AppStyle'
import React from 'react'
import Tooltip from '@mui/material/Tooltip';

const VersionSection = () => {
    return (
        <div style={appStyle.horizontalCenterStyle}>
            <Tooltip title="Delete">
                <p> Version 1.0.0 </p>
            </Tooltip>
    </div>
  )
}

export default VersionSection