import React, { useState } from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
} from 'react-native';
import Todo from './Todo';

let id = 0;
const App = () => {

  let [todos, setTodos] = useState([]);
  let [todoText, setTodoText] = useState("");

  addTodo = () => {
    setTodos([...todos, { text: todoText, id: ++id }])
    setTodoText("");
  }
  removeTodo = (id) => {
    setTodos(
      todos.filter((todo) => todo.id !== id),
    )
  }
  return (
    <>
      <View>
        <Text style={{ textAlign: "center", marginTop: 20, marginBottom: 20, fontSize: 44, color: "black", textShadowOffset: { width: 4, height: 3 }, }}> TODO APP</Text>
        <TextInput
          placeholder="Enter Todo..."
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, margin: 5 }}
          onChangeText={(value) => setTodoText(value)}
          value={todoText} />
        <Button onPress={() => addTodo()} title="Add Todo" ></Button>
        <Todo todo={todos} removeTodo={removeTodo}/>
      </View>
    </>
  );
}

export default App;
