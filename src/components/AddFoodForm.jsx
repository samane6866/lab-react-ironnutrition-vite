// Your code here
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Divider, Input, Button } from "antd";

function AddFoodForm({ onCreateFood }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [calories, setCalories] = useState();
  const [serving, setServing] = useState(2);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFood = {
      name: name,
      image: image,
      calories: calories,
      serving: serving,
      id: uuidv4(),
    };
    console.log(newFood);
    onCreateFood(newFood);

    // 3. Crear un objeto del tipo Food y mostrarlo por consola (asequible)

    //4. (dificil): enviar este objeto al padre mediante la elevación del estado. El padre debe actualizar en el array de foods este objeto
  };

  return (
    <div>
      <Divider>Add Food Entry</Divider>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <lable>Name</lable>
        <Input
          id="name"
          name="name"
          type="text"
          maxLength={50}
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></Input>
        <label>Image</label>{" "}
        <Input
          id="image"
          name="image"
          type="url"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        ></Input>
        <label>Calories</label>
        <Input
          id="calories"
          name="calories"
          type="number"
          value={calories}
          onChange={(e) => setCalories(e.target.value)}
        ></Input>
        <label>Serving</label>
        <Input
          id="serving"
          name="serving"
          type="number"
          value={serving}
          onChange={(e) => setServing(e.target.value)}
        ></Input>
        <Input type="submit" name="create"></Input>
      </form>
    </div>
  );

  // 1. Necesitamos una variable de estado para cada campo d formulario, establecer value y onChange
  // 2. Cuando el usuario tenga todo rellenado, hara lcick en Submit
}
export default AddFoodForm;
