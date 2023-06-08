import "./App.css";
import AddFoodForm from "./components/AddFoodForm";
import FoodBox from "./components/FoodBox";
import foodsJson from "./foods.json";
import { useState } from "react";

function App() {
  const [foods, setFoods] = useState([...foodsJson]);
  console.log(foods);
  const handleDelete = (id) => {
    console.log('Queremos borrar el id ' + id);

    //1. Aplicar correctamente el método filter
    const result=foods.filter((item) =>item.id!==id)
    setFoods(result);
    //2. Actualizar la variable de estado
  }
 
  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      <AddFoodForm/>
      {/** Iterate over the foods array and render a <FoodBox /> component for each individual food item. */}
      {foods.map(f => <FoodBox key={f.id} food={f} onDelete={handleDelete} />)}

    </div>
  );
}

export default App;
