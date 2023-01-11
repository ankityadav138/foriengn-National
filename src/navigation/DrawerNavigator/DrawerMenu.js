import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import {List} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

// components
import {colors} from '../../constants/color';
import {images} from '../../assets/image/images';

const DrawerMenu = () => {
  const navigation = useNavigation();

  return (
    <View>
      <ScrollView>
        <View
          style={{
            backgroundColor: colors.primary,
            width: '100%',
            flexDirection: 'row',
            padding: 13,
          }}>
          <Image source={images.profile} style={styles(colors).profileStyle} />

          <Text style={styles(colors).nameText}>Shiv cv</Text>
        </View>
        <View
          style={{
            paddingLeft: 10,
            paddingVertical: 10,
          }}>
          <List.AccordionGroup>
            <List.Item
              title="Immigration Status"
              titleStyle={styles(colors).menuText}
              left={props => (
                <Image
                  source={images.immigration_status}
                  style={styles(colors).iconStyle}
                />
              )}
              onPress={() => navigation.navigate('ImmigrationStatus')}
            />

            <View style={styles(colors).underLine} />
            <List.Item
              title="Beneficiary Information"
              titleStyle={styles(colors).menuText}
              left={props => (
                <Image
                  source={images.beneficiary_information}
                  style={styles(colors).iconStyle}
                />
              )}
              onPress={() => navigation.navigate('BeneficiaryInformation')}
            />
            <View style={styles(colors).underLine} />
            <List.Item
              title="Passport / Visa / Travel"
              titleStyle={styles(colors).menuText}
              left={props => (
                <Image
                  source={images.passport}
                  style={styles(colors).iconStyle}
                />
              )}
              onPress={() => navigation.navigate('passport')}
            />
            <View style={styles(colors).underLine} />
            <List.Item
              title="Permanent Resident Status"
              titleStyle={styles(colors).menuText}
              left={props => (
                <Image
                  source={images.permanent_resident}
                  style={styles(colors).iconStyle}
                />
              )}
              onPress={() => navigation.navigate('PermanentResident')}
            />
            <View style={styles(colors).underLine} />
            <List.Item
              title="Open Cases"
              titleStyle={styles(colors).menuText}
              left={props => (
                <Image
                  source={images.open_cases}
                  style={styles(colors).iconStyle}
                />
              )}
              onPress={() => navigation.navigate('Opencases')}
            />
            <View style={styles(colors).underLine} />
            <List.Item
              title="Immigration Contacts"
              titleStyle={styles(colors).menuText}
              left={props => (
                <Image
                  source={images.immigration_contact}
                  style={styles(colors).iconStyle}
                />
              )}
              onPress={() => navigation.navigate('Immigrationcontacts')}
            />
            <View style={styles(colors).underLine} />
            <List.Item
              title="Quick Links"
              titleStyle={styles(colors).menuText}
              left={props => (
                <Image
                  source={images.quick_links}
                  style={styles(colors).iconStyle}
                />
              )}
              onPress={() => navigation.navigate('Quicklinks')}
            />

            <View style={styles(colors).underLine} />

            <List.Item
              title="Log Out"
              titleStyle={styles(colors).menuText}
              left={props => (
                <Image
                  source={images.log_out}
                  style={styles(colors).iconStyle}
                />
              )}
              onPress={() => navigation.navigate('Quicklinks')}
            />
          </List.AccordionGroup>
        </View>
      </ScrollView>
    </View>
  );
};

export default DrawerMenu;

const styles = props =>
  StyleSheet.create({
    menuText: {
      fontSize: 13,
      color: props.black,
      fontWeight: '700',
      paddingLeft: '3%',
    },
    menuTitle: {
      fontSize: 20,
      color: props.heading,
      paddingLeft: '5%',
    },
    menuLogout: {
      fontSize: 14,
      color: 'red',
      paddingLeft: '3%',
    },
    itemText: {
      fontSize: 12,
      color: props.heading,
    },

    leftIcon: {
      height: 20,
      width: 20,
      marginLeft: 0,
    },

    iconStyle: {
      width: 25,
      height: 25,
      tintColor: props.primary,
    },
    underLine: {
      width: '100%',
      borderColor: colors.primary,
      borderWidth: 0.3,
      alignSelf: 'center',
    },
    profileStyle: {
      width: 45,
      height: 45,
      borderRadius: 40,
    },
    nameText: {
      color: props.white,
      fontWeight: '800',
      marginLeft: 15,
      alignSelf: 'center',
    },
  });
