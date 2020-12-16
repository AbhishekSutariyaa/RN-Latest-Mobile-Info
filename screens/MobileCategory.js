import React from 'react';
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import {CATEGORY} from '../Data/Data';
import {COLORS} from '../Theme';

const MobileCategory = ({navigation}) => (
  <View style={styles.container}>
    <FlatList
      keyExtractor={(item) => item.id.toString()}
      data={CATEGORY}
      renderItem={({item}) => {
        return (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() =>
              navigation.navigate('CategoryDetail', {itemId: item.id})
            }
            style={styles.categoryContainer}>
            <Image
              style={styles.iconMobile}
              source={require('../assets/smartphone.png')}
            />
            <Text style={styles.title}>{item.title}</Text>
            <Image
              style={styles.iconArrow}
              source={require('../assets/right-arrow.png')}
            />
          </TouchableOpacity>
        );
      }}
    />
  </View>
);

export default MobileCategory;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.background,
    flex: 1,
    padding: 10,
  },
  categoryContainer: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLORS.categorycolor,
    marginVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  iconMobile: {
    height: 35,
    width: 35,
  },
  iconArrow: {
    height: 15,
    width: 15,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});
