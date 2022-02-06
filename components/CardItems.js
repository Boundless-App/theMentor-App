 import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { COLORS, FONTS,SIZES,icons } from "../constants";

const CardItem = ({ item, isSelected, onPress}) =>{
    return(
       <TouchableOpacity
        style={{
            flexDirection:'row',
            alignItems:'center',
            height:100,
            marginTop: SIZES.radius,
            paddingHorizontal: SIZES.padding,
            borderWidth:2,
            borderRadius: SIZES.radius,
            borderColor:isSelected? COLORS.primary : COLORS.lightGray2

        }}

        onPress={onPress}
       >
           {/* Card image */}
           <View 
           style={{
               width:60,
               height:45,
               alignItems:'center',
               justifyContent:'center',
               borderWidth:2,
               borderRadius:SIZES.radius,
               borderColor: COLORS.lightGray2
           }}
           >
               <Image
               source={item.icon}
               resizeMode='center'
               style={{
                   width:100, 
                   height:100
               }}
               
               />

           </View>

           {/* Name */}
           <Text
           style={{
               flex:1,
               marginLeft:SIZES.radius,
               ...FONTS.h3
           }}
           >{item.name}</Text>

           {/* Radio Button */}
           <Image 
           source={isSelected? icons.check_on:icons.check_off}
           style={{
               width:25,
               height:25
           }}
           />
       </TouchableOpacity>
    )
}
export default CardItem;