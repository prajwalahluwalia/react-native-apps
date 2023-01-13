/**

 * export ANDROID_HOME=$HOME/Android/Sdk
 * export PATH=$PATH:$ANDROID_HOME/emulator
 * export PATH=$PATH:$ANDROID_HOME/platform-tools
 */

import React, {useState} from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Button,
  Linking,
} from 'react-native';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */

const App: () => Node = () => {
  const [name, setName] = useState('Prajwal');

  const onClickHandler = () => {
    setName('This is Prajwal.');
  };
  return (
    <View style={styles.body}>
      <View style={styles.viewFirst}>
        <View style={styles.view1}>
          <Text style={styles.text}> 1 </Text>
        </View>
        <View style={styles.view2}>
          <Text style={styles.text}> 2 </Text>
        </View>
        <View style={styles.view3}>
          <Text style={styles.text}> 3 </Text>
        </View>
      </View>
      <View style={styles.view4}>
        <Text style={styles.text}> 4 </Text>
      </View>
      <View style={styles.view5}>
        <Text style={styles.text}> 5 </Text>
      </View>
      <View style={styles.viewSecond}>
        <View style={styles.view6}>
          <Text style={styles.text}> 6 </Text>
        </View>
        <View style={styles.view7}>
          <Text style={styles.text}> 7 </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  text: {
    color: '#000000',
    fontSize: 30,
    fontStyle: 'italic',
    margin: 10,
  },
  viewFirst: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: '#fddddd',
  },
  view1: {
    flex: 1,
    height: 100,
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2effff',
  },
  view2: {
    flex: 2,
    height: 100,
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ff5cff',
  },
  view3: {
    flex: 3,
    height: 100,
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffff2e',
  },
  view4: {
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e32227',
  },
  view5: {
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#5cffce',
  },
  viewSecond: {
    flexDirection: 'row',
    flex: 1,
  },
  view6: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  view7: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0009ff',
  },

});

export default App;
