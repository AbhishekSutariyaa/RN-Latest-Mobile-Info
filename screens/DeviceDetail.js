import React from 'react';
import {Text, View, StyleSheet, Image, FlatList, Button} from 'react-native';
import {COLORS} from '../Theme';
import {useSelector, useDispatch} from 'react-redux';

import {ADD_TO_CART, REMOVE_FROM_CART} from '../redux/CartReducer';

const DeviceDetail = ({route}) => {
  const {data} = route.params;
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state);
  const addItemToCart = (item) => dispatch({type: ADD_TO_CART, payload: item});
  const removeItemFromCart = (item) =>
    dispatch({
      type: REMOVE_FROM_CART,
      payload: item,
    });

  const isDataInCart = cartItems.some((item) => item == data);
  return (
    <View style={styles.container}>
      <Image
        style={styles.mobileImage}
        source={{url: data.image}}
        resizeMode="contain"
      />
      <View style={styles.titleView}>
        <Text style={{fontWeight: 'bold', fontSize: 20}}>{data.model}</Text>
        <Text style={{fontWeight: 'bold', color: 'green', fontSize: 20}}>
          Price: {data.price}
        </Text>
      </View>
      <View style={styles.titleView}>
        <Text style={{fontWeight: 'bold', fontSize: 20}}>Detail</Text>
        <Button
          title={!isDataInCart ? 'Add to Favorite' : 'Remove from Favorite'}
          onPress={() =>
            !isDataInCart ? addItemToCart(data) : removeItemFromCart(data)
          }></Button>
      </View>
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={data.detail}
        renderItem={({item, index}) => {
          return (
            <View style={styles.detailItemcontainer}>
              <Text style={{fontWeight: 'bold'}}>{item}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default DeviceDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: 10,
  },
  mobileImage: {width: '100%', height: '30%'},
  titleView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
  },
  detailItemcontainer: {
    justifyContent: 'center',
    borderRadius: 4,
    paddingHorizontal: 10,
    marginVertical: 10,
    height: 40,
    backgroundColor: COLORS.categorycolor,
  },
});
