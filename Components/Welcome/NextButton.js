import { StyleSheet, Text, View , TouchableOpacity} from 'react-native'
import React ,{useRef,useEffect}from 'react'
import {AntDesign} from '@expo/vector-icons'


const NextButton = ({scrollTo}) => {
  return (
    <View>
      <TouchableOpacity onPress={scrollTo} style={styles.btn} activeOpacity={0.6}>
      <AntDesign name='arrowright' size={32} color='#fff'/>
      </TouchableOpacity>
    </View>
  )
}

export default NextButton

const styles = StyleSheet.create({
    btn:{
        // position:'absolute',
        backgroundColor:'#111111',
        borderRadius:100,
        padding:20,  
    }
})