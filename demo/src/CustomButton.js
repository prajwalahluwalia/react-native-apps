import React from 'react'
import {
    Pressable,
    Text,
    StyleSheet,
} from 'react-native'
const NewButton = (props) => {
    return (
        <Pressable
        onPress={props.onPressFunction}
        hitSlop={{top: 10, bottom: 10, right: 10, left: 10}}
        android_ripple={{color: '#00f'}}
        style={({pressed}) => [
          {backgroundColor: pressed ? '#dddddd' : '#00ff00'},
          props.style,
        ]}>
        <Text style={styles.text}>{props.title}</Text>
      </Pressable>
    )
}

const styles = StyleSheet.create({
    text: {
        color: '#000000',
        fontSize: 20,
        margin: 10,
        textAlign: 'center',
      },
      input: {
        width: 200,
        borderWidth: 1,
        borderColor: '#555',
        borderRadius: 5,
        textAlign: 'center',
        fontSize: 20,
        marginBottom: 10,
      },
      button: {
        width: 150,
        height: 50,
        alignItems: 'center',
      },
})
export default NewButton