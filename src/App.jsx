import "./App.css";
import FoodList from "./components/FoodList";

// import AddFoodForm from "./components/AddFoodForm";
// import FoodBox from "./components/FoodBox";
// import foodsJson from "./foods.json";
// import { useState } from "react";

function App() {
  // const [foods, setFoods] = useState([...foodsJson]);
  // console.log(foods);
  // const handleDelete = (id) => {
  //   console.log('Queremos borrar el id ' + id);

    //1. Aplicar correctamente el método filter
    // const result=foods.filter((item) =>item.id!==id)
    // setFoods(result);
    //2. Actualizar la variable de estado
  // }
  //este funcion hemos creado para poder elevar el estado recibe un parametro con nombre createdFood
  // const handleCreateFood = (createdFood) => {
  //   console.log('Nueva comida:',  createdFood);
    // actualizar el array de foods con la nueva comida (actualizar un array con un nuevo objeto)
  //   setFoods([createdFood, ...foods])
  // }
  
  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      
      <FoodList/>
      {/* <AddFoodForm onCreateFood={handleCreateFood}   /> */}
      {/** Iterate over the foods array and render a <FoodBox /> component for each individual food item. */}
      {/* {foods.map(f => <FoodBox key={f.id} food={f} onDelete={handleDelete} />)} */}

    </div>
  );
}

export default App;
