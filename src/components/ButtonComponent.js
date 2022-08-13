import * as React  from 'react';
import { View} from 'react-native';
import { Button, ButtonGroup, withTheme, Text } from 'react-native-elements';
// import { Button } from "@react-native-material/core";
import themeStyle from '../../themeStyle';

const ButtonComponent = (props) => {
  const {
    onPress, 
    name = "Button",
     icon , 
     btnWidth = 180,
      btnHeight = 100  , 
      textSize=  20, 
      bgColor =themeStyle.colors.PRIMARY_COLOR , 
      textColor = themeStyle.colors.WHITE,
      iconSize= 20,
      fontWeight= "700",
      type='font-awesome',
      paddingRight
    } = props
 
  return (
    <View >
      <Button
        title={name}
        icon={{
          name: icon,
          type: type,
          size: iconSize,
          color: textColor,
        }}
        iconContainerStyle={{ paddingRight:paddingRight }}
        titleStyle={{ fontWeight: fontWeight, fontSize: textSize }}
        buttonStyle={{
          backgroundColor:bgColor,
          borderColor: 'transparent',
          borderWidth: 0,
          borderRadius: 5,
          
        }}
        containerStyle={{
          width: btnWidth,
          height: btnHeight,
          marginHorizontal: 50,
          marginVertical: 10,
        }}
        onPress={onPress}
              />
      
    </View>
  );
};

export default ButtonComponent;