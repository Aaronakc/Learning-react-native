import { View, Text, TouchableOpacity } from 'react-native'
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'

const ProfileScreen = () => {
  console.log('profile rendered at first')
  const [count,setCount]=useState(0)
  const ref=useRef(0)
  const [number,setNumber]=useState(0)
  

  useEffect(()=>{
    console.log('count increased from useEffect')
  },[count])

  const doubleValue=useMemo(()=>{
    console.log('usememo recalculated')
    return count*2

  },[count])

  return (
    <View>
      <TouchableOpacity onPress={()=>setCount(count+1)}>
        <Text style={{marginLeft:20,backgroundColor:"pink",width:60,padding:5,marginTop:10}}>Increase</Text>

      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{
        ref.current=ref.current +1;
        console.log(`you clicked ${ref.current} time`)
      }}>
        <Text style={{marginLeft:20,backgroundColor:"pink",width:80,padding:5,marginTop:10}}>Ref Increase</Text>

      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{
        setNumber(number+1)
        console.log('usestate count increased')
      }}>
        <Text style={{marginLeft:20,backgroundColor:"pink",width:80,padding:5,marginTop:10}}>useState Increase</Text>

      </TouchableOpacity>

      <Text>fromUseMemo:{doubleValue}</Text>
      
    </View>
  )
}

export default ProfileScreen