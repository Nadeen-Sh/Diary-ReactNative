import {StyleSheet} from 'react-native';
import themeStyle from '../../../themeStyle';
  
export default StyleSheet.create({
mood: {
  justifyContent: 'center',
  alignItems: "center",
  alignContent: "center",
  alignSelf: "center",
  paddingLeft: 20
},
moodContainer: {
  flexDirection: "row",
  marginTop: 50,
  paddingLeft: 20,
  paddingRight: 20
  
},
secondarymoodContainer:{
  marginTop: 30,
  marginRight: 20,
  marginLeft: 10
},
moodImg:{
  width: 100,
  height: 100,
},
SecondarymoodTxt:{
  fontSize: 14,
  color: themeStyle.colors.LIGHT_BLACK
},
SecondarymoodImg:{
  width: 60,
  height: 60
},
moodTxt: {
  fontSize: 16,
},
textStyle:{
  fontSize: 20,
  color: themeStyle.colors.LIGHT_BLACK,
  paddingLeft: 20
},
inputContainer:{
    marginTop: 20,
    alignSelf: 'center',
},
inputStyleContainer: {
borderColor: themeStyle.colors.SECONDARY_COLOR,
borderWidth: 2,
borderRadius: 5,
width: 350,
margin: 10,
height: 400
},
inputStyle:{
fontSize: 16,
color: themeStyle.colors.LIGHT_BLACK,
padding: 10
},
textStyle1: {
  color: themeStyle.colors.PRIMARY_COLOR,
  fontSize: 40,
  fontWeight:"bold"
},
textStyle2: {
   color: themeStyle.colors.PRIMARY_COLOR,
   fontSize: 30,
   fontWeight:"bolder",
   paddingBottom: 10
 },
 textStyle3: {
  color: themeStyle.colors.PRIMARY_COLOR,
  fontSize: 20,
  fontWeight:"normal"
},
OthertextStyle:{
  marginTop: 40,
  color: themeStyle.colors.PRIMARY_COLOR,
  fontSize: 20,
  fontWeight:"normal",
  marginLeft: 40
},
 title:{
   margin : 20,
 },
 arrowIcon:{
  paddingLeft : 25,
  paddingRight: 25
},
btnContainer:{marginTop: 80, alignItems: "center"},
icons:{flexDirection: "row", justifyContent: "space-between"  }
});
