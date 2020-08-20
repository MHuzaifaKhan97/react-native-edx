import React from 'react';
import { View, Text, Button, ScrollView } from 'react-native';

const Todo = (props) => {
    return (
        <ScrollView style={{ marginTop: 40 }}>
            {
                props.todo.map((todo) => {
                    return (
                        <View key={todo.id} style={{ backgroundColor: '#cee', margin: 5, }}>
                            <View style={{ display: 'flex', flex: 8 }}>
                                <Text style={{ textAlign: "center", margin: 10, fontSize: 15 }}> {todo.text} </Text>
                            </View>
                            <View style={{ display: 'flex', flex: 2 }}>
                                <Button title="X" onPress={() => props.removeTodo(todo.id)} />
                            </View>
                        </View>
                    )
                })
            }
        </ScrollView>
    )
}
export default Todo;