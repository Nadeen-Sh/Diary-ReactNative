import * as React  from 'react';
import { Button, TextInput, View , Image} from 'react-native';
import { Formik } from 'formik';
import Icon from 'react-native-vector-icons/FontAwesome'
import { Input } from 'react-native-elements';
import ButtonComponent from '../components/ButtonComponent';

 const RegisterScreen = ({ navigation }) => {
  return(
    <View  style={{backgroundColor: "white" , height: "100%"}}>
  <Image source={require("../../assest/logo.png")} style={{width: 300, height: 200, alignSelf: "center"}} />
  <Formik
    initialValues={{ email: '' }}
    onSubmit={values => console.log(values)}
  >
    {({ handleChange, handleBlur, handleSubmit, values }) => (
      <View style={{width: 350, alignSelf: "center", alignItems: 'center'}}>
     <Input
  placeholder='Email'
  leftIcon={
     <Icon  type="EvilIcons" name="user"  size={30}  />
  }
/>

<Input
  placeholder='Password'
  errorStyle={{ color: 'red' }}
  leftIcon={
    <Icon  type="EvilIcons" name="lock"  size={30}  />
 }
//   errorMessage='ENTER A VALID ERROR HERE'
/>
          <View style={{paddingTop: 30}}>
        <ButtonComponent onPress={() => navigation.navigate('My Diary')} name="Register" btnWidth={250} btnHeight={50} textSize={16} />
        </View>
      </View>
    )}
  </Formik>
  </View>
  )
 }

 export default RegisterScreen