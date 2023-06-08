// Your code here

function AddFoodForm() {

    const handleSubmit = (e) => {
        e.preventDefault();

        // 3. Crear un objeto del tipo Food y mostrarlo por consola (asequible)

        //4. (dificil): enviar este objeto al padre mediante la elevación del estado. El padre debe actualizar en el array de foods este objeto
    }

    return (
        <div>
            <form onSubmit={handleSubmit} style={{display:"flex", flexDirection:"column"}}>
                <lable>Name:<input name="name" type="text"></input>
                </lable>
                <label>Image:<input name="image" type="text"></input>
                </label>
                <label>Calories:<input name="calories"type="number"></input></label>
                <label>Serving:<input name="serving" type="number"></input>
                </label>
                <input type="submit" name="create"></input>
            </form>

        </div>
    )

    // 1. Necesitamos una variable de estado para cada campo d formulario, establecer value y onChange
    // 2. Cuando el usuario tenga todo rellenado, hara lcick en Submit
    
    




}
export default AddFoodForm;



