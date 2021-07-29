import React, { useState, useEffect } from 'react';
import {   
  Text,
  StyleSheet,
  TextInput,
  Platform,
  FlatList,
  SafeAreaView
} from 'react-native';

import { Button } from './components/Button';
import { SkillCard } from './components/SkillCard';

export function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] =  useState([]);
  const [greetings, setGreetings] = useState('');

  function handleAddNewSkill(){
    setMySkills(oldState => [...oldState, newSkill]);
  }

  useEffect(( ) => {
    const currentHour = new Date().getHours();

    if (currentHour < 12) {
      setGreetings('Bom dia');
    } else if (currentHour >= 12 && currentHour < 18){
      setGreetings('Boa tarde');
    } else {
      setGreetings('Boa noite');
    }
  },[greetings]);

  return (
    <SafeAreaView style={styles.container}>      

      <Text style={styles.title}>
        Welcome, Mailson
      </Text>

      <Text style={styles.greetings}>
        {greetings}
      </Text>

      <TextInput 
        style={styles.input}
        placeholder="New skill"
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
      />

      <Button onPress={handleAddNewSkill}/>

      <Text style={[styles.title, { marginVertical: 50 }]}>
        My Skills
      </Text>
      
      <FlatList 
        data={mySkills}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <SkillCard skill={item} />
        )}
      />      

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,    
    backgroundColor: '#121015',
    paddingVertical: 40,
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
  greetings: {
    color: '#fff',
  }
});