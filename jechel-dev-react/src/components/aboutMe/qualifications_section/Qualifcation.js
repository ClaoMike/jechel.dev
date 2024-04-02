import React from 'react'
import { ExternalLink } from "Components";
import { Stack } from "@mui/material";

const Qualifcation = ({link, text, date, grade}) => {
    return (
        <Stack
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            spacing={0.5}
            >
                <ExternalLink link={link} text={text} />
                <small>{date}</small>
                <ul>
                    <li>{grade}</li>
                </ul>
        </Stack>
    )
}

export default Qualifcation