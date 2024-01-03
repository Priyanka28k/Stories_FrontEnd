import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import users from '../userList.json';
import Ionicons from 'react-native-vector-icons/Ionicons';

const InstaStory = () => {

  return (
    <ScrollView
      style={{flex: 1}}
      horizontal
      showsHorizontalScrollIndicator={false}>
      <View style={{padding: 7}}>
        <Image
          source={{
            uri: 'https://i.pinimg.com/280x280_RS/f5/ba/ae/f5baae12f8765486870e8c4420f1c7d3.jpg',
          }}
          style={styles.userImage}
        />
        <View style={{position: 'absolute'}}>
          <View style={styles.addButtonContainer}>
            <Ionicons name="add" style={styles.addButton} />
          </View>
          <Text style={[styles.userName, {textTransform: 'capitalize'}]}>
            Your Story
          </Text>
        </View>
      </View>
      {users.map((item, index) => (
        <View key={index} style={{width: 85, padding: 5}}>
          <LinearGradient
            colors={['#bc2a8d', '#e95950', '#fccc63']}
            style={{padding: 2, borderRadius: 50}}>
            <Image
              key={index}
              source={{uri: item.photo}}
              style={[styles.userImage, {borderWidth: 1}]}
            />
          </LinearGradient>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 12,
              textTransform: 'lowercase',
              margin: 3,
            }}>
            {item.name}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
}

export default InstaStory;

const styles = StyleSheet.create({
  userImage: {
    height: 70,
    width: 70,
    borderRadius: 50,
    borderColor: 'white',
  },
  userName: {
    textAlign: 'center',
    fontSize: 12,
    textTransform: 'lowercase',
    margin: 3,
  },
  addButtonContainer: {
    marginTop: 55,
    backgroundColor: '#4c68d7',
    marginLeft: 55,
    width: 23,
    height: 23,
    borderRadius: 50,
    borderWidth: 1.5,
    borderColor: 'white',
    justifyContent: 'center',
  },
  addButton: {
    color: 'white',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 12,
  },
});