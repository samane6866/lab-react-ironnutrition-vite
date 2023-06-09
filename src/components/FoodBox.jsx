// Your code here

// Style Guide:
// In this file you can find a reference example of the structure
// and content that the component should render.
// Remember to import Ant Design components before using them.
import { Card, Col, Button } from "antd";

function FoodBox({food, onDelete}) {
  return (
    <Col>
      <Card title={food.name} style={{ width: 230, height: 300, margin: 10 }}>
        <img src={food.image} height={60} alt={food.name} />
        <p>Calories: { food.calories}</p>
        <p>Servings { food.servings}</p>
        <p>
          <b>Total Calories:{food.servings*food.calories} </b> kcal
        </p>
        <Button type="primary" onClick={() => onDelete(food.id)}> Delete </Button>
      </Card>
    </Col>
  );
}

export default FoodBox;



























// function FoodBox({ food, onDelete }) {
    
//     return (
//         <>
            
// <div>
//     <p>{food.name}</p>

//     <img  style={{ width: '200px' }}   src={food.image } />

//     <p>Calories: { food.calories}</p>
//     <p>Servings { food.servings}</p>

//   <p>
//     <b>Total Calories:{food.servings*food.calories}  </b> kcal
//                 </p>
                

//                 <button onClick={()=>onDelete(food.id)}>Delete</button>
                
                
// </div> 
        
//  </>
// )





// }
// export default FoodBox;