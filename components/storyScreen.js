import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
const StoryScreen = () => {
  const data = [
    // {
    //   user_id: 1,
    //   user_image:
    //     'https://yt3.googleusercontent.com/_LwwOiyrbdyWg22vgRobEGZMYWR59hpjom1audvZ_pHF3aFMaxnXO9g-4kvJRHm0AyhJG91k6Q=s900-c-k-c0x00ffffff-no-rj',
    //   user_name: 'Naima Fardous',
    //   stories: [
    //     {
    //       story_id: 1,
    //       story_image:
    //         'https://e0.pxfuel.com/wallpapers/903/79/desktop-wallpaper-lock-screen-korean-iphone-iphone-xs-iphone-11-iphone-7-in-2020-aesthetic-nature-cute-flower.jpg',
    //       swipeText: 'Custom swipe text for this story',
    //       onPress: () => console.log('story 1 swiped'),
    //     },
    //     {
    //       story_id: 2,
    //       story_image:
    //         'https://i.pinimg.com/originals/dd/88/08/dd880848a6319a4b7d959fabf5bc4fca.png',
    //     },
    //   ],
    // },
    {
      user_id: 2,
      user_image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX63d8sF9p8Au_apk_y4lx_6Ohieb0bp8dhg&usqp=CAU',
      user_name: 'User 1',
      stories: [
        {
          story_id: 1,
          story_image:
            'https://i.pinimg.com/1200x/93/b8/25/93b825555ae8a7c69606de2759f27d03.jpg',
          swipeText: 'Custom swipe text for this story',
          onPress: () => console.log('story 1 swiped'),
        },
        {
          story_id: 2,
          story_image:
            'https://i.pinimg.com/736x/6c/90/2f/6c902f952e2d8cafa2d56337108a6e82.jpg',
          swipeText: 'Custom swipe text for this story',
          onPress: () => console.log('story 2 swiped'),
        },
        {
          story_id: 3,
          story_image:
            'https://cdn.create.vista.com/common/8bcfe1cf-f6ff-439b-b628-b3e9df0d8323_1024.jpg',
          swipeText: 'Custom swipe text for this story',
          onPress: () => console.log('story 3 swiped'),
        },
      ],
    },
    {
      user_id: 3,
      user_image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX63d8sF9p8Au_apk_y4lx_6Ohieb0bp8dhg&usqp=CAU',
      user_name: 'User 2',
      stories: [
        {
          story_id: 1,
          story_image:
            'https://i.pinimg.com/1200x/93/b8/25/93b825555ae8a7c69606de2759f27d03.jpg',
          swipeText: 'Custom swipe text for this story',
          onPress: () => console.log('story 1 swiped'),
        },
        {
          story_id: 2,
          story_image:
            'https://i.pinimg.com/736x/6c/90/2f/6c902f952e2d8cafa2d56337108a6e82.jpg',
          swipeText: 'Custom swipe text for this story',
          onPress: () => console.log('story 2 swiped'),
        },
        {
          story_id: 3,
          story_image:
            'https://cdn.create.vista.com/common/8bcfe1cf-f6ff-439b-b628-b3e9df0d8323_1024.jpg',
          swipeText: 'Custom swipe text for this story',
          onPress: () => console.log('story 3 swiped'),
        },
      ],
    },
    {
      user_id: 4,
      user_image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX63d8sF9p8Au_apk_y4lx_6Ohieb0bp8dhg&usqp=CAU',
      user_name: 'User 3',
      stories: [
        {
          story_id: 1,
          story_image:
            'https://i.pinimg.com/1200x/93/b8/25/93b825555ae8a7c69606de2759f27d03.jpg',
          swipeText: 'Custom swipe text for this story',
          onPress: () => console.log('story 1 swiped'),
        },
        {
          story_id: 2,
          story_image:
            'https://i.pinimg.com/736x/6c/90/2f/6c902f952e2d8cafa2d56337108a6e82.jpg',
          swipeText: 'Custom swipe text for this story',
          onPress: () => console.log('story 2 swiped'),
        },
        {
          story_id: 3,
          story_image:
            'https://cdn.create.vista.com/common/8bcfe1cf-f6ff-439b-b628-b3e9df0d8323_1024.jpg',
          swipeText: 'Custom swipe text for this story',
          onPress: () => console.log('story 3 swiped'),
        },
      ],
    },
    {
      user_id: 5,
      user_image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX63d8sF9p8Au_apk_y4lx_6Ohieb0bp8dhg&usqp=CAU',
      user_name: 'User 4',
      stories: [
        {
          story_id: 1,
          story_image:
            'https://i.pinimg.com/1200x/93/b8/25/93b825555ae8a7c69606de2759f27d03.jpg',
          swipeText: 'Custom swipe text for this story',
          onPress: () => console.log('story 1 swiped'),
        },
        {
          story_id: 2,
          story_image:
            'https://i.pinimg.com/736x/6c/90/2f/6c902f952e2d8cafa2d56337108a6e82.jpg',
          swipeText: 'Custom swipe text for this story',
          onPress: () => console.log('story 2 swiped'),
        },
        {
          story_id: 3,
          story_image:
            'https://cdn.create.vista.com/common/8bcfe1cf-f6ff-439b-b628-b3e9df0d8323_1024.jpg',
          swipeText: 'Custom swipe text for this story',
          onPress: () => console.log('story 3 swiped'),
        },
      ],
    },
    {
      user_id: 6,
      user_image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX63d8sF9p8Au_apk_y4lx_6Ohieb0bp8dhg&usqp=CAU',
      user_name: 'User 5',
      stories: [
        {
          story_id: 1,
          story_image:
            'https://i.pinimg.com/1200x/93/b8/25/93b825555ae8a7c69606de2759f27d03.jpg',
          swipeText: 'Custom swipe text for this story',
          onPress: () => console.log('story 1 swiped'),
        },
        {
          story_id: 2,
          story_image:
            'https://i.pinimg.com/736x/6c/90/2f/6c902f952e2d8cafa2d56337108a6e82.jpg',
          swipeText: 'Custom swipe text for this story',
          onPress: () => console.log('story 2 swiped'),
        },
        {
          story_id: 3,
          story_image:
            'https://cdn.create.vista.com/common/8bcfe1cf-f6ff-439b-b628-b3e9df0d8323_1024.jpg',
          swipeText: 'Custom swipe text for this story',
          onPress: () => console.log('story 3 swiped'),
        },
      ],
    },
  ];
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
            {/* <Ionicons name="add" style={styles.addButton} /> */}
            <Octicons name="plus" style={styles.addButton} />
          </View>
          <Text style={[styles.userName, {textTransform: 'capitalize'}]}>
            Your Story
          </Text>
        </View>
      </View>
      {data.map((item, index) => (
        // <View key={index}>
        //   <Text>{item.name}</Text>
        //   <Text>{item.photo}</Text>
        // </View>
        <View key={item.user_id} style={{width: 85, padding: 5}}>
          <LinearGradient
            // colors={['#bc2a8d', '#e95950', '#fccc63']}
            colors={[
              '#8a3ab9',
              '#4c68d7',
              '#cd486b',
              '#fbad50',
              '#fccc63',
              // '#cd486b',
            ]}
            style={{padding: 2, borderRadius: 50}}>
            <Image
              source={{uri: item.user_image}}
              style={[styles.userImage, {borderWidth: 1}]}
            />
          </LinearGradient>

          <Text style={styles.userName}>{item.user_name}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default StoryScreen;

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
