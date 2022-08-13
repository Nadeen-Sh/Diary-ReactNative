import * as React  from 'react';
import { ScrollView, Text, TouchableOpacity, Image, View} from 'react-native';
import styles from './DiaryStyle';
import { useSelector } from "react-redux";
import { Card, ListItem, Button, Icon } from 'react-native-elements'

const MoodEmoji = () =>{
    const moods = useSelector((state) => state.moods);
    const emojis = useSelector((state) => state.emojis);
      return (
        <ScrollView style={{backgroundColor: "white"}}>
            <View style={styles.title}>
             <Text style={styles.textStyle1}>My Mood</Text>
         
          {emojis.map((mood, index) => (
              <Card key={index} >
          <Card.Title>{mood.date}</Card.Title>
         <View style={{flexDirection: "row" }}>
         <Text style={{fontSize: 12, padding: 8}}>{mood.title}</Text>
         <Image source={mood.emoji} style={{width: 30 , height: 30}}/>
         </View>
         </Card>
      ))}
     
            </View>
        </ScrollView >
      );
    }

 
  export default MoodEmoji