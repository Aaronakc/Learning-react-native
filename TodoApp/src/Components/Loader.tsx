import React from 'react'
import { View, ActivityIndicator, StyleSheet } from 'react-native'

interface LoaderProps {
  size?: 'small' | 'large'
  color?: string
}

const Loader = ({ size = 'large', color = '#E3098C' }: LoaderProps) => {
  return (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size={size} color={color} />
    </View>
  )
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default Loader
