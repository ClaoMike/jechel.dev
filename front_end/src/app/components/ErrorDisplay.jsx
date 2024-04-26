import React from 'react'
import { Card, CardHeader, CardBody, Heading, Text } from '@chakra-ui/react'

const ErrorDisplay = ({code, error}) => {
    return (
        <Card>

            <CardHeader>
                <Heading size='md'>Error</Heading>
            </CardHeader>

            <CardBody>
                <Heading size='xs' >
                    Status code: {code}
                </Heading>
                <Text pt='2' fontSize='sm'>
                    Error: {error}
                </Text>
            </CardBody>

    </Card>
    )
}

export default ErrorDisplay