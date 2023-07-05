import { useState } from "react";
import { TextInput } from "./ui/TextInput";
import { DrinkItems } from "./DrinkItems";
import { availableDrinks } from "./utils/data";

export const DrinkSearch = ({ onClick }) => {
  const [searchField, setSearchField] = useState('');
  const handleChange = (event) => setSearchField(event.target.value);
  const matchedDrinks = availableDrinks.filter((drink) => {return drink.name.toLowerCase().includes(searchField.toLowerCase())})
  return (
    <>
      <label>Search for drinks:</label>
      <TextInput onClick={handleChange} w={200} mb={8} />
      <DrinkItems onClick={onClick} drinks={matchedDrinks}/>
    </>
  );
};
 