import { StyleSheet, Text, View,Pressable, ImageBackground, Dimensions } from 'react-native'
import React from 'react'

const ListBox = ({handlePress, NewsData}) => {
  return (
    <Pressable 
    style={styles.container}
     onPress={handlePress}
    >
        <ImageBackground source={{uri:NewsData.image}} resizeMode="cover"
                         style={{width:"100%",flex:1, justifyContent:"center"}}
        />


    </Pressable>

   
  )
}
 
export default ListBox

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#B08BBB',
        margin:7,
        height:150,
        width: (Dimensions.get('window').width / 100 * 60),
        overflow:"hidden",
        alignItems:'center',
        justifyContent:'center',
        borderRadius:7
      },
      link: {
        color:'blue',
      }
})