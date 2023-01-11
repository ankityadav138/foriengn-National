import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';

//contants
import {colors} from '../../constants/color';
import {images} from '../../assets/image/images';

const Information = () => {
  const [dobShowEye, setDobShowEye] = useState(false);
  const [emailShowEye, setEmailShowEye] = useState(false);

  useEffect(() => {
    setDobShowEye(false);
    setEmailShowEye(false);
  }, []);
  return (
    <View style={styles.container}>
      {/* first view start */}
      <View style={styles.keyValueBox}>
        <Text style={styles.keyStyle}>First Name</Text>
        <View style={styles.separotorValue}>
          <Text style={styles.separotor}>:</Text>
          <Text style={styles.valueStyle}>Shiv</Text>
        </View>
      </View>
      {/* first view end */}

      {/* second view start */}
      <View style={styles.keyValueBox}>
        <Text style={styles.keyStyle}>Last Name</Text>
        <View style={styles.separotorValue}>
          <Text style={styles.separotor}>:</Text>
          <Text style={styles.valueStyle}>CS</Text>
        </View>
      </View>
      {/* second view end */}

      {/* third view start */}
      <View style={styles.keyValueBox}>
        <Text style={styles.keyStyle}>Date Of Birth</Text>
        <View style={styles.separotorValue}>
          <Text style={styles.separotor}>:</Text>
          {dobShowEye ? (
            <Text style={styles.valueStyle}>01/01/199</Text>
          ) : (
            <Text style={styles.valueStyle}>0*/0*/19**</Text>
          )}

          {dobShowEye ? (
            <TouchableOpacity
              style={styles.eyeContainer}
              onPress={() => setDobShowEye(false)}>
              <Image source={images.open_eye} style={styles.eyeIcon} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.eyeContainer}
              onPress={() => setDobShowEye(true)}>
              <Image source={images.close_eye} style={styles.eyeIcon} />
            </TouchableOpacity>
          )}
        </View>
      </View>
      {/* third view end */}

      {/* fourth view start */}
      <View style={styles.keyValueBox}>
        <Text style={styles.keyStyle}>Work Email Id</Text>
        <View style={styles.separotorValue}>
          <Text style={styles.separotor}>:</Text>
          {emailShowEye ? (
            <Text style={styles.valueStyle}>shiv@immilitycs.com</Text>
          ) : (
            <Text style={styles.valueStyle}>shiv**@immilitycs.com</Text>
          )}

          {emailShowEye ? (
            <TouchableOpacity
              style={styles.eyeContainer}
              onPress={() => setEmailShowEye(false)}>
              <Image source={images.open_eye} style={styles.eyeIcon} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.eyeContainer}
              onPress={() => setEmailShowEye(true)}>
              <Image source={images.close_eye} style={styles.eyeIcon} />
            </TouchableOpacity>
          )}
        </View>
      </View>
      {/* fourth view end */}

      {/* fifth view start */}
      <View style={styles.keyValueBox}>
        <Text style={styles.keyStyle}>Personal Email Id</Text>
        <View style={styles.separotorValue}>
          <Text style={styles.separotor}>:</Text>
          <Text style={styles.valueStyle}>shiv**@immilitycs.com</Text>
        </View>
      </View>
      {/* fifth view end */}

      {/* sixth view start */}
      <View style={styles.keyValueBox}>
        <Text style={styles.keyStyle}>Phone Number</Text>
        <View style={styles.separotorValue}>
          <Text style={styles.separotor}>:</Text>
          <Text style={styles.valueStyle}>404-353-5306</Text>
        </View>
      </View>
      {/* sixth view end */}

      {/* seventh view start */}
      <View style={styles.keyValueBox}>
        <Text style={styles.keyStyle}>Address Line 1</Text>
        <View style={styles.separotorValue}>
          <Text style={styles.separotor}>:</Text>
          <Text style={styles.valueStyle}>1000 Test Circle</Text>
        </View>
      </View>
      {/* seventh view end */}

      {/* eighth view start */}
      <View style={styles.keyValueBox}>
        <Text style={styles.keyStyle}>Address Line 2</Text>
        <View style={styles.separotorValue}>
          <Text style={styles.separotor}>:</Text>
          <Text style={styles.valueStyle}>Test Line 2</Text>
        </View>
      </View>
      {/* eighth view end */}

      {/* ninth view start */}
      <View style={styles.keyValueBox}>
        <Text style={styles.keyStyle}>City</Text>
        <View style={styles.separotorValue}>
          <Text style={styles.separotor}>:</Text>
          <Text style={styles.valueStyle}>Cumming</Text>
        </View>
      </View>
      {/* ninth view end */}

      {/* tenth view start */}
      <View style={styles.keyValueBox}>
        <Text style={styles.keyStyle}>State</Text>
        <View style={styles.separotorValue}>
          <Text style={styles.separotor}>:</Text>
          <Text style={styles.valueStyle}>GA</Text>
        </View>
      </View>
      {/* tenth view end */}

      {/* eleventh view start */}
      <View style={styles.keyValueBox}>
        <Text style={styles.keyStyle}>Zip</Text>
        <View style={styles.separotorValue}>
          <Text style={styles.separotor}>:</Text>
          <Text style={styles.valueStyle}>30041</Text>
        </View>
      </View>
      {/* eleventh view end */}
    </View>
  );
};

export default Information;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  keyValueBox: {
    flexDirection: 'row',
    paddingLeft: 10,
  },
  separotorValue: {
    flexDirection: 'row',
    marginLeft: 160,
    position: 'absolute',
  },

  keyStyle: {
    color: colors.primary,
    fontWeight: '600',
    padding: 5,
  },
  separotor: {
    color: colors.primary,
    marginRight: 5,
    fontWeight: 'bold',
  },
  valueStyle: {
    fontWeight: '500',
  },
  eyeContainer: {
    position: 'absolute',
    marginLeft: 170,
  },
  eyeIcon: {
    width: 18,
    height: 18,
    tintColor: colors.primary,
  },
});
