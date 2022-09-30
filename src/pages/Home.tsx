import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { Header } from '../components/Header';
import { Task, TasksList } from '../components/TasksList';
import { TodoInput } from '../components/TodoInput';

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    const newTask : Task = {
      id: new Date().getTime(),
      title: newTaskTitle,
      done: false,
    }
    // console.log(newTask);

    setTasks([...tasks, newTask])
    //TODO - add new task
  }

  function handleToggleTaskDone(id: number) {
    const updatedTasks = tasks.map(task => ({ ...task }))
    const editedTask = updatedTasks.find(task => task.id === id) 

    if(!editedTask)
      return;
    
    editedTask.done = !editedTask.done;

    setTasks(updatedTasks)
    //TODO - toggle task done if exists
  }

  function handleRemoveTask(id: number) {
    setTasks(tasks.filter(task => task.id !== id))
    //TODO - remove task from state
  }

  return (
    <View style={styles.container}>
      <Header tasksCounter={tasks.length} />

      <TodoInput addTask={handleAddTask} />

      <TasksList 
        tasks={tasks} 
        toggleTaskDone={handleToggleTaskDone}
        removeTask={handleRemoveTask} 
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