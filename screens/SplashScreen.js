import React, {useEffect} from 'react';
import {Text, View, Image} from 'react-native';
import {COLORS} from '../Theme';

const SplashScreen = (props) => {
  global.cartData = [];
  useEffect(() => {
    setTimeout(() => {
      props.navigation.replace('Home');
    }, 1500);
  }, []);

  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: COLORS.background,
      }}>
      <Image
        style={{width: 200, height: 200}}
        source={require('../assets/logo.png')}
      />
      <Text style={{fontSize: 24, fontWeight: 'bold', paddingTop: 20}}>
        MobileInfo
      </Text>
    </View>
  );
};

export default SplashScreen;
