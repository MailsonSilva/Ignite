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

interface SkillData {
  id: string;
  name: string;
}

export function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] =  useState<SkillData[]>([]);
  const [greeting, setGreeting] = useState('');

  function handleAddNewSkill(){
    const data = {
      id: String(new Date().getTime()),
      name: newSkill
    }
    
    setMySkills(oldState => [...oldState, data]);
  }

  function handleRemoveSkill(id: string) {
    setMySkills(oldState => oldState.filter(
      skill => skill.id !== id
    ));
  }

  useEffect(( ) => {
    const currentHour = new Date().getHours();

    if (currentHour < 12) {
      setGreeting('Bom dia');
    } else if (currentHour >= 12 && currentHour < 18){
      setGreeting('Boa tarde');
    } else {
      setGreeting('Boa noite');
    }
  },[greeting]);

  return (
    <SafeAreaView style={styles.container}>      

      <Text style={styles.title}>
        Bem vindo, Mailson
      </Text>

      <Text style={styles.greetings}>
        {greeting}
      </Text>

      <TextInput 
        style={styles.input}
        placeholder="New skill"
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
      />

      <Button         
        title="Add"
        onPress={handleAddNewSkill}
      />

      <Text style={[styles.title, { marginVertical: 50 }]}>
        My Skills
      </Text>
      
      <FlatList 
        data={mySkills}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <SkillCard 
            skill={item.name}
            onPress={() => handleRemoveSkill(item.id)}
          />
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