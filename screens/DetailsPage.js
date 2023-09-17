import { StyleSheet, Text, TouchableWithoutFeedback, View ,ImageBackground} from 'react-native'
import React from 'react'
import Constants from 'expo-constants';


const DetailsPage = ({navigation, route}) => {
  return (
    <View style={{paddingTop:Constants.statusBarHeight, display:'flex',alignItems:'center'}}>
       
       
       <View style={{width:'80%',borderRadius:6,overflow:'hidden'}}>
       <ImageBackground source={{uri:route.params.NewsData.image}} resizeMode="cover"
                         style={{width:"100%",height:200, justifyContent:"center"}}
        />
       </View>

      <View style={{width:'80%',display:'flex',alignItems:'flex-start'}}>
        <Text style={{fontWeight:'bold',fontSize:17,marginTop:10,marginBottom:10}}>{route.params.NewsData.title} </Text>
      </View>
      <View style={{width:'80%',display:'flex',alignItems:'flex-start'}}>
        <Text>{route.params.NewsData.description} </Text>
      </View>


      {

        route.params.NewsData.author !== null &&
        <View style={{width:'80%',display:'flex',alignItems:'flex-start'}}>
           <Text> Author : {route.params.NewsData.author} </Text>
        </View>

      }
      
      

      <TouchableWithoutFeedback onPress={() => navigation.goBack()}> 
      <Text style={{padding:10,width:"80%",textAlign:'center',height:40,margin:10,display:'flex',justifyContent:'center',
              alignItems:'center',backgroundColor:'#000000',color:'white',marginTop:30,overflow:'hidden',borderRadius:6,borderRadius:6}}>
        Go Back
      </Text>
    </TouchableWithoutFeedback>
    </View>
   
  )
}

export default DetailsPage

const styles = StyleSheet.create({})