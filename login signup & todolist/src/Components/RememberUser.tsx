interface RememberUserProps {
  onPress: () => void;
  remember: boolean;
}




import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'


const RememberUser = ({ onPress, remember }: RememberUserProps) => {

  return (

    <View style={styles.container}>
      <View style={styles.subContainer}>
        <TouchableOpacity onPress={onPress}>
          <Image
            source={
              remember
                ? require("../../assets/checkedbox.png")
                : require("../../assets/uncheckbox.png")
            }
            style={styles.imageContainer}
          />
        </TouchableOpacity>
        <Text style={styles.font}>Remember for 30 days</Text>

      </View>

      <Text style={styles.TextDesignPw}>Forgot password</Text>


    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 30,
    marginRight: 20,
    marginTop: 20,
    display: "flex",
    flexDirection: "row", justifyContent: "space-between",

  },
  subContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 3,

  },
  imageContainer: {
    width: 18,
    height: 18,

  },
  TextDesignPw: {
    color: "#ffcc00",
    textDecorationLine: "underline",
    fontFamily: "serif"

  },
  font: {
    fontFamily: "serif"
  }
})

export default RememberUser