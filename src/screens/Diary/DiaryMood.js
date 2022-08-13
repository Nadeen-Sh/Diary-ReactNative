import * as React  from 'react';
import { ScrollView, Text, TouchableOpacity, Image, View} from 'react-native';
import styles from './DiaryStyle';
import { useSelector } from "react-redux";
import { Card, ListItem, Button, Icon } from 'react-native-elements'

const DiaryMood = () =>{
    const moods = useSelector((state) => state.moods);
      return (
        <ScrollView style={{backgroundColor: "white"}}>
            <View style={styles.title}>
             <Text style={styles.textStyle1}>Diaries</Text>
         
          {moods.map((mood, index) => (
              <Card >
          <View  key={index}>
          <Card.Title>{mood.date}</Card.Title>
        <Text style={styles.textStyle2}>{mood.text}</Text>
         </View>
         </Card> 
      ))}
           </View>
        </ScrollView >
      );
    }

 
  export default DiaryMood