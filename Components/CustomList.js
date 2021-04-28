import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {ListItem,Avatar} from 'react-native-elements';
import { useLayoutEffect } from 'react';
const CustomList = ({id,chatName,enterChat}) => {

    return (
      <ListItem 
      onPress ={()=>enterChat(id,chatName)}
      key ={id} bottomDivider>
        <Avatar
          rounded
          source={{
            uri:
              "https://st2.depositphotos.com/2703645/5669/v/600/depositphotos_56695433-stock-illustration-female-avatar.jpg",
          }}
          size={50}
        />

        <ListItem.Content>
          <ListItem.Title style={{ fontWeight: "bold" }}>{chatName}</ListItem.Title>
          <ListItem.Subtitle numberOfLines={1}
            ellipsizeMode="tail"
          > Enter chat</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    );
}

export default CustomList

const styles = StyleSheet.create({})