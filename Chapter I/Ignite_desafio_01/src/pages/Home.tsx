import React, { useState } from 'react';
import { StyleSheet, View, Alert } from 'react-native';

import { Header } from '../components/Header';
import { Task, TasksList } from '../components/TasksList';
import { TodoInput } from '../components/TodoInput';

export type EditTaskArgs = {
  taskId: number;
  taskNewTitle: string;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    
    const existTask = tasks.find(t => t.title.toUpperCase() === newTaskTitle.toUpperCase());

    if(existTask)
      return Alert.alert('Você não pode cadastrar uma task com o mesmo nome.');
      
      const newTask = {
        id: String(new Date().getTime()),
        title: newTaskTitle,
        done: false
      }

      setTasks(oldTasks => [...oldTasks, newTask]);
  }

  function handleToggleTaskDone(id: number) {
    const updatedTask = tasks.map(tasks => ({...tasks}));
    const fountask = updatedTask.find( item => item.id === id);

    if(!fountask)
      return;

    fountask.done = !fountask.done;
    setTasks(updatedTask);
  }

  function handleRemoveTask(id: number) {
    Alert.alert(
      "Remover item",
      "Tem certeza que você deseja remover esse item?",
      [
        {
          text: "Sim",
          onPress: () => {
            setTasks(oldTasks => oldTasks.filter(
            task => task.id != id
            ));
          }
        },
        {
          text: "Não",          
        }
      ]
    );    
  }

  function handleEditTask({ taskId, taskNewTitle }: EditTaskArgs ){
    const updatedTask = tasks.map(tasks => ({...tasks}));
    const fountask = updatedTask.find( item => item.id === taskId);

    if(!fountask)
      return;

    fountask.title = taskNewTitle;
    setTasks(updatedTask);
  }

  return (
    <View style={styles.container}>
      <Header tasksCounter={tasks.length} />

      <TodoInput addTask={handleAddTask} />

      <TasksList 
        tasks={tasks} 
        toggleTaskDone={handleToggleTaskDone}
        removeTask={handleRemoveTask} 
        editTask={handleEditTask}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEBEB'
  }
})