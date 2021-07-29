import React from 'react';
import {
    TouchableOpacity,
    Text,
    StyleSheet
} from 'react-native';

export function SkillCard({ skill }) {
    return (
        <TouchableOpacity
            style={styles.buttonSkill}
            activeOpacity={.7}
        >
            <Text style={styles.textSkill}>
                {skill}
            </Text>
        </TouchableOpacity>   
    )
}

const styles = StyleSheet.create({
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