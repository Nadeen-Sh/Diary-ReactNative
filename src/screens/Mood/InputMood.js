import * as React  from 'react';
import { Text,View, TextInput} from 'react-native';
import styles from './MoodStyle.js';
import ButtonComponent from '../../components/ButtonComponent';
import { addMood } from '../../Redux/InputMoodSlice.js';
import { useDispatch } from 'react-redux';


const MoodText = () =>{

    const [text,setText] = React.useState('');
    const dispatch = useDispatch();

    const handleSumbit = () => {
      dispatch(addMood(text));
      setText('');
    }
  

      return (
            <View style={styles.inputContainer}>
             <Text style={styles.textStyle2}>Write about your day</Text>
             <View style={styles.inputStyleContainer}>
             <TextInput  
                placeholder='Mood....'
                onChangeText={newText => setText(newText)}
                defaultValue={text}
                style={styles.inputStyle}
                multiline
                />
                </View>
                <View style={styles.btnContainer}>
                <ButtonComponent name="Submit" onPress={handleSumbit} />
                </View>
            </View>
    
      );
    }

 
  export default MoodText