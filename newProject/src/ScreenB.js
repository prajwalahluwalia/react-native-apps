import React from 'react';
import {StyleSheet, Text, View, Pressable} from 'react-native';

function ScreenB({navigation, route}) {

  const {ItemName, ItemId}=route.params;
    const onPressHandler = () => {
      // navigation.goBack();
      // navigation.toggleDrawer();
      // navigation.setParams({ ItemId:'A1' })
      navigation.navigate('ScreenA', { Message:'Message from Screen B' })
    };
    return (
      <View style={styles.body}>
        <Text style={styles.text}>ScreenB</Text>
        <Pressable
          onPress={onPressHandler}
          style={({pressed}) => ({
            backgroundColor: pressed ? '#ddd' : '#0f5',
          })}>
          <Text style={styles.text}>Go To ScreenA.</Text>
        </Pressable>
        <Text style={styles.text}>{ ItemName }</Text>
        <Text style={styles.text}>ID: { ItemId }</Text>
      </View>
    );
  }

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    margin: 10,
    alignItems: 'center',
    textAlign: 'center',
    color:'black',
  },
});

export default ScreenB;