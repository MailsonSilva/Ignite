import React, {useState, useRef, useEffect} from 'react'
import { View, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Feather';
import trashIcon from '../assets/icons/trash/trash.png';
import penIcon from '../assets/icons/pen/pen.png';
import { EditTaskArgs } from '../pages/Home';

export interface Task {
    id: number;
    title: string;
    done: boolean;
  }
  
  interface TasksItemProps {
    task: Task;
    toggleTaskDone: (id: number) => void;
    removeTask: (id: number) => void;
    editTask: ({ taskId, taskNewTitle }: EditTaskArgs) => void;
  }
export function TaskItem({ task, toggleTaskDone, removeTask, editTask }: TasksItemProps) {
    const [isEditing, setIsEditing] = useState(false);
    const [taskNewTitleName, setTaskNewTitleName] = useState(task.title);    
    const textInputRef = useRef<TextInput>(null);

    function handleStartEditing() {
      setIsEditing(true);
    }

    function handleCancelEditing() {
      setTaskNewTitleName(task.title);
      setIsEditing(false);
    }

    function handleSubmitEditing() {    
      editTask({taskId: task.id, taskNewTitle: taskNewTitleName});
      setIsEditing(false);
    }

    useEffect(() => {
        if (textInputRef.current) {
            if (isEditing) {
              textInputRef.current.focus();
            } else {
              textInputRef.current.blur();
            }
          }
    }, [isEditing])

    return (
    <View style={styles.container} >
        <View style={styles.infoContainer} >
            <TouchableOpacity               
                activeOpacity={0.7}
                style={styles.taskButton}
                onPress={() => toggleTaskDone(task.id)}
            >
                <View 
                  style={task.done ? styles.taskMarkerDone : styles.taskMarker}
                >
                  { task.done && (
                    <Icon 
                      name="check"
                      size={12}
                      color="#FFF"
                    />
                  )}
                </View>

                <TextInput 
                  ref={textInputRef}
                  style={task.done ? styles.taskTextDone : styles.taskText}
                  value={taskNewTitleName}
                  editable={isEditing}
                  onChangeText={setTaskNewTitleName}                     
                  onSubmitEditing={handleSubmitEditing}               
                />
            </TouchableOpacity>
        </View>

        <View style={styles.iconsContainer }>
            { isEditing 
            ? (
               <TouchableOpacity                    
                    onPress={handleCancelEditing}
                >
                    <Icon name="x" size={24} color="#b2b2b2" />
                </TouchableOpacity>
            ) : (  
                <TouchableOpacity                    
                    onPress={handleStartEditing}
                >
                    <Image source={penIcon} />
                </TouchableOpacity>
            )}

            <View 
                style={ styles.iconsDivider }
            />

            <TouchableOpacity
                disabled={isEditing}
                onPress={() => removeTask(task.id)}
            >
                <Image source={trashIcon} style={{ opacity: isEditing ? 0.2 : 1 }} />
            </TouchableOpacity>
            
        </View>

    </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    infoContainer: {
      flex: 1,
    },
    taskButton: {
      flex: 1,
      paddingHorizontal: 24,
      marginBottom: 4,
      borderRadius: 4,
      flexDirection: 'row',
      alignItems: 'center'
    },
    taskMarker: {
      height: 16,
      width: 16,
      borderRadius: 4,
      borderWidth: 1,
      borderColor: '#B2B2B2',
      marginRight: 15,
      alignItems: 'center',
      justifyContent: 'center'
    },
    taskText: {
      color: '#666',
      fontFamily: 'Inter-Medium'
    },
    taskMarkerDone: {
      height: 16,
      width: 16,
      borderRadius: 4,
      backgroundColor: '#1DB863',
      marginRight: 15,
      alignItems: 'center',
      justifyContent: 'center'
    },
    taskTextDone: {
      color: '#1DB863',
      textDecorationLine: 'line-through',
      fontFamily: 'Inter-Medium'
    },
    iconsContainer : {
      flexDirection: 'row',
      alignItems: 'center',
      paddingLeft: 12,
      paddingRight: 24
    },
    iconsDivider: {
      width: 1,
      height: 24,
      backgroundColor: '#C4C4C4',
      marginHorizontal: 12
    }
  })