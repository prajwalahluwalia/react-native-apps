import React from 'react';
import {StyleSheet, Text, View, Pressable} from 'react-native';

function ScreenA({navigation, route}) {
    const onPressHandler = () => {
      navigation.navigate('ScreenB');
      // navigation.replace('ScreenB')
    };
    return (
      <View style={styles.body}>
        <Text style={styles.text}>ScreenA</Text>
        <Pressable
          onPress={onPressHandler}
          style={({pressed}) => ({
            backgroundColor: pressed ? '#ddd' : '#0f5',
          })}>
          <Text style={styles.text}>Go to Screen B.</Text>
        </Pressable>
        <Text style={styles.text}>{ route.params?.Message }</Text>
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

export default ScreenA;