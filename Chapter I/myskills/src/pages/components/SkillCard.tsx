import React from 'react';
import {
    TouchableOpacity,
    Text,
    StyleSheet,
    TouchableOpacityProps
} from 'react-native';

interface SkillCardProps extends TouchableOpacityProps {
    skill: string;
}

export function SkillCard({ skill, ...rest } : SkillCardProps) {
    return (
        <TouchableOpacity
            style={styles.buttonSkill}
            activeOpacity={.7}
            {...rest}
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