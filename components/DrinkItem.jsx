// import './DrinkItem.css';
import { Center, Image, Text, WrapItem } from '@chakra-ui/react'


export const DrinkItem = ({ drink, onClick }) => {

    return (
        <WrapItem>
        <Center padding={4} className="drink-item" onClick={()=> onClick(drink)}>
            <Image src={drink.imgUrl} w={50} h={50} alt={drink.alt}/>
            <Text fontWeight={'450'}>{drink.name}</Text>
        </Center>
        </WrapItem>
    );
};