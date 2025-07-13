import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'


interface MealProps {
  icon: any;
  text: string;
  text2: string;
  textDecorationLine?:'none' | 'underline' | 'line-through' | 'underline line-through';
}
const Meal = ({ icon, text, text2,textDecorationLine }: MealProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.flexBox}>
        <Image source={icon} style={styles.icon} />
        <Text style={{textDecorationLine:textDecorationLine,fontWeight:800,fontFamily:"serif"}}>{text}</Text>
        <View style={styles.growContent}>
          <Text style={[styles.text2,{textDecorationLine:textDecorationLine}]}>{text2}</Text>

        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:"white",
    borderRadius: 13,
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginBottom: 5,
    marginTop: 20,

  },
  flexBox: {
    display: "flex",
    flex: 1,
    gap: 17,
    flexDirection: "row",
    justifyContent: "space-between",

  },
  icon: {
    width: 20,
    height: 20,
  },

  growContent:{
  display:"flex",
  flexShrink: 1,
  },
  text2: {
    fontSize: 9,
    display: "flex",
    fontFamily:"serif",
   lineHeight: 15,
    // flex: 1,

  }
})

export default Meal