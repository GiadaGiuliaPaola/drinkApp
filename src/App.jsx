import { useState } from "react";
import { DrinkChoice } from "../components/DrinkChoice";
import { DrinkSearch } from "../components/DrinkSearch";
import { Center, Heading } from '@chakra-ui/react'

export const App = () => {
  const [userDrink, setUserDrink] = useState();
  const greeting = "Welcome to our cafe!";
  

  return (

    <Center h="100vh" flexDir="column">
      {userDrink ? (
        <DrinkChoice drink={userDrink} clickFn={setUserDrink} />
      ) : (
        <>
          <Heading mb={8} fontSize={"2xl"} color={"blue.400"}>{greeting}</Heading>

          <DrinkSearch onClick={setUserDrink}/>
          
        </>
      )}
    </Center>
  );
};

export default App;
