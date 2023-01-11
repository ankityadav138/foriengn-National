//npm module
import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useState} from 'react';

//components
import AppHeader from '../../components/Header/AppHeader';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {images} from '../../assets/image/images';
import {colors} from '../../constants/color';
import Information from '../../components/beneficiaryComponents/Information';
const BeneficiaryInformation = () => {
  const [first, setfirst] = useState(false);

  return (
    <View>
      <AppHeader
        navigation
        title={'Beneficiary Information'}
        isBack={true}
        isAdd={false}
        isMenu={false}
      />

      {first ? (
        <TouchableOpacity
          onPress={() => setfirst(false)}
          style={styles.personalInfoBox}>
          <Text style={styles.personalText}>Personal Info</Text>
          <Image source={images.down_arrow} style={styles.arrowStyle} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() => setfirst(true)}
          style={styles.personalInfoBox}>
          <Text style={styles.personalText}>Personal Info</Text>
          <Image source={images.up_arrow} style={styles.arrowStyle} />
        </TouchableOpacity>
      )}

      <View style={styles.underLine} />

      {first ? <Information /> : null}
    </View>
  );
};

export default BeneficiaryInformation;

const styles = StyleSheet.create({
  personalInfoBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
    paddingLeft: 25,
  },
  arrowStyle: {
    width: 17,
    height: 17,
    tintColor: colors.primary,
    marginRight: 15,
  },
  personalText: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.primary,
  },
  underLine: {
    width: '93%',
    alignSelf: 'center',
    borderWidth: 0.5,
    borderColor: colors.gray,
    marginTop: 17,
  },
});
