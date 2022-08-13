import * as React  from 'react';
import { ScrollView, Text, TouchableOpacity, Image, View} from 'react-native';
import styles from './MoodStyle.js';
import { addEmoji } from '../../Redux/MoodSlice.js';
import { useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome'
import themeStyle from '../../../themeStyle.js';
import ButtonComponent from '../../components/ButtonComponent.js';


const Mood = () =>{
    const PrimaryMood = [{photo: require("../../../assest/smile.png"), title: "smile"}, {photo: require("../../../assest/sad.png"), title: "sad"}, {photo: require("../../../assest/neutral.png"), title: "neutral"}]
    const otherMood= [{photo:require("../../../assest/angry.png") , title: "angry"}, 
    ,{photo:require("../../../assest/arrogant.png") , title: "arrogant"}, 
    {photo: require("../../../assest/furious.png"), title: "furious"},
    {photo: require("../../../assest/mad.png"), title: "mad"},{photo: require("../../../assest/love.png"),title: "love"}, 
    {photo: require("../../../assest/happy.png"), title: "happy"},
    {photo: require("../../../assest/gestures.png"), title: "gestures"}, 
    {photo: require("../../../assest/laughing.png"), title: "laughing"},
    {photo: require("../../../assest/lol.png"), title: "lol"},{photo: require("../../../assest/hungry.png"), title: "hungry"},
    {photo: require("../../../assest/sleep.png"), title: "sleep"},
    {photo: require("../../../assest/money.png"), title: "money"}]
    const dispatch = useDispatch();
   
    const submitMood = (emoji) => {
      dispatch(addEmoji(emoji));
    }


      return (
             <ScrollView style={{backgroundColor: "white"}}>
               <View style={styles.title}>
            <Text style={styles.textStyle1}>Hello!</Text>
            <Text style={styles.textStyle2} >How are you today?</Text>
            <Text style={styles.textStyle3} >Choose Your Mood!!!!</Text>
            </View>
            <View style={styles.moodContainer}>
             {PrimaryMood.map((mood, index)=>{
                return( <TouchableOpacity key={index} style={styles.mood} onPress={()=> submitMood(mood)}>
                 <Image source={mood.photo} style={styles.moodImg} />
                 <Text style={styles.moodTxt}>{mood.title}</Text>
                </TouchableOpacity>)
             })}
        </View>
          <Text style={styles.OthertextStyle} >Other Mood</Text>
            <ScrollView  horizontal = {true} style={styles.secondarymoodContainer}>
             {otherMood.map((mood, index)=>{
                return( <TouchableOpacity key={index} style={styles.mood} onPress={()=> submitMood(mood)}>
                 <Image source={mood.photo} style={styles.SecondarymoodImg} />
                 <Text style={styles.SecondarymoodTxt}>{mood.title}</Text>
                </TouchableOpacity>)
             })}
        </ScrollView>
        <View style={styles.icons}>
        {/* <Icon  type="EvilIcons" name="arrow-left"  size={30} color={themeStyle.colors.LIGHT_BLACK} style={styles.arrowIcon} />
        <Icon  type="EvilIcons" name="arrow-right"  size={30} color={themeStyle.colors.LIGHT_BLACK} style={styles.arrowIcon}  /> */}
        </View>
         <View style={styles.btnContainer}>
        <ButtonComponent  name= "NEXT" icon="arrow-right" paddingRight= {10}  />
        </View>
             </ScrollView>

      );
    }

 
  export default Mood