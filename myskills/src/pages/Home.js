import React, { useState } from 'react';
import { 
  View,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  TouchableOpacity,
  SafeAreaView
} from 'react-native';

// import { Container } from './styles';

export function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] =  useState([]);

  function handleAddNewSkill(){
    setMySkills(oldState => [...oldState, newSkill]);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Welcome, Mailson
      </Text>

      <TextInput 
        style={styles.input}
        placeholder="New skill"
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
      />

      <TouchableOpacity 
        style={styles.button}
        activeOpacity={.7}
        onPress={handleAddNewSkill}
      >
        <Text style={styles.buttonText} >Add</Text>
      </TouchableOpacity>

      <Text style={[styles.title, { marginVertical: 50 }]}>
        My Skills
      </Text>

      {
          mySkills.map(skill => (
            <TouchableOpacity  key={skill}
              style={styles.buttonSkill}
              activeOpacity={.7}
            >
              <Text style={styles.textSkill}>
              {skill}
              </Text>
            </TouchableOpacity>      
          ))  
      }

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,    
    backgroundColor: '#121015',
    paddingVertical: 60,
    paddingHorizontal: 30
  },
  title:{
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold'
  },
  input: {
    backgroundColor: '#1F1E25',
    color: '#FFF',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginTop: 30,
    borderRadius: 7
  },
  button: {
    backgroundColor: '#A370F7',
    padding: 15,
    borderRadius: 7,
    alignItems: 'center',    
    marginTop: 20
  },
  buttonText: {
    color: '#FFF',
    fontSize: 17,
    fontWeight: 'bold'
  },
  textSkill: {
    color: '#FFF',    
    fontSize: 22,
    fontWeight: 'bold',       
  },
  buttonSkill: {
    alignItems: 'center', 
    borderRadius: 50,
    backgroundColor: '#1F1E25',
    padding: 15,
    marginVertical: 10 
  }
});