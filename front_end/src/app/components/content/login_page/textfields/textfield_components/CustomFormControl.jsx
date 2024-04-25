import React from 'react'
import { FormControl, FormLabel} from '@chakra-ui/react';
import CustomInput from '@components/content/login_page/textfields/textfield_components/CustomInput';

const CustomFormControl = ({ id, placeholder, type, value, onChange }) => {
    return (
        <FormControl id={id}>
            <FormLabel>{placeholder}</FormLabel>
            <CustomInput
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder.toLowerCase()}
            />
        </FormControl>
    )
}

export default CustomFormControl