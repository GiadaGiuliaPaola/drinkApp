
import { Input } from '@chakra-ui/react'

export const TextInput = ({ onChange, ...props }) => {

    return(

<Input variant={"flushed"} placeholder='Type here your drink' size="md" _placeholder={{ opacity: 0.4, color: 'inherit' }} width='auto' onChange={onChange} {...props}></Input>

    );
};

