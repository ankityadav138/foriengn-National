//npm module
import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

//components
import {colors} from '../../constants/color';
import {images} from '../../assets/image/images';

const AppHeader = ({title, isBack, isAdd, isMenu}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.HeaderView}>
      <View style={{flexDirection: 'row'}}>
        {isBack ? (
          <TouchableOpacity
            style={styles.iconStyle}
            onPress={() => navigation.goBack()}>
            <Image source={images.back} style={styles.backStyle} />
          </TouchableOpacity>
        ) : null}

        <View style={{flexDirection: 'row'}}>
          <Text
            style={{
              color: colors.white,
              marginLeft: 50,
              fontWeight: '500',
              fontSize: 18,
            }}>
            {title}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  HeaderView: {
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.primary,
    padding: 14,
    flexDirection: 'row',
  },
  iconStyle: {
    marginHorizontal: 4,
  },
  backStyle: {
    width: 25,
    height: 25,
    tintColor: colors.white,
  },
});

export default AppHeader;
