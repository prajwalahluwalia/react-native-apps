import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Pressable,
  Modal,
  Image,
  ImageBackground,
} from 'react-native';
import NewButton from './CustomButton';

const App = () => {
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const onPressHandler = () => {
    if (name.length > 3) {
      setSubmitted(!submitted);
    } else {
      setShowWarning(true);
    }
  };

  return (
    <ImageBackground
      style={styles.body}
      source={{
        uri: 'https://images.pexels.com/photos/2680270/pexels-photo-2680270.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      }}>
      <Modal
        visible={showWarning}
        transparent
        onRequestClose={() => setShowWarning(false)}
        animationType="slide">
        <View style={styles.centered_view}>
          <View style={styles.warning_modal}>
            <View style={styles.warning_title}>
              <Text style={styles.text}>Warning!!</Text>
            </View>
            <View style={styles.warning_body}>
              <Text style={styles.text}>
                Text should be greater than 3 words
              </Text>
            </View>
            <NewButton
              onPressFunction={() => setShowWarning(false)}
              title={'Back'}
              style={styles.warning_button}
            />
          </View>
        </View>
      </Modal>
      <Text style={styles.text}>Please write your name:</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g. John"
        onChangeText={value => setName(value)}
      />
      <NewButton
        onPressFunction={onPressHandler}
        title={submitted ? 'Clear' : 'Submit'}
        style={styles.button}
      />
      {submitted ? (
        <View style={styles.body}>
          <Text style={styles.text}>You are registered as {name}</Text>
          <Image
            style={styles.image}
            source={require('../assets/done.png')}
            resizeMode="stretch"
          />
        </View>
      ) : (
        <Image
          style={styles.image}
          source={require('../assets/error.png')}
          resizeMode="stretch"
        />
      )}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
  },
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
  warning_modal: {
    width: 300,
    height: 300,
    backgroundColor: '#ffffff',
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 20,
  },
  centered_view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9999',
  },
  warning_title: {
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ff0',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  warning_body: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  warning_button: {
    backgroundColor: '#00ffff',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  image: {
    width: 100,
    height: 100,
    margin: 10,
  },
});

export default App;

// const [Items, setItems] = useState([
//   {name: 'Item1'},
//   {name: 'Item2'},
//   {name: 'Item3'},
//   {name: 'Item4'},
//   {name: 'Item5'},
//   {name: 'Item6'},
//   {name: 'Item7'},
// ]);
// const [Data, setData] = useState([
//   {
//     title: 'Title 1',
//     data: ['Item11', 'Item12'],
//   },
// ]);

// const [Refreshing, setRefreshing] = useState(false);

// const onRefresh = () => {
//   setRefreshing(true);
//   const len = Data.length + 1;
//   setItems([...Items, {name: 'Item8'}]);
//   setData([
//     ...Data,
//     {title: 'Title ' + len, data: ['Item' + len + '1', 'Item' + len + '2']},
//   ]);
//   setRefreshing(false);
// };

// Alert.alert(
//   'Warning',
//   'The name must be longer than 3 characters', [
//   {
//     text: 'Do not show again',
//     onPress: () => console.warn('Do not show Pressed!')
//   },
//   {
//     text: 'Cancel',
//     onPress: () => console.warn('Cancel Pressed!')
//   },
//   {
//     text: 'OK',
//     onPress: () => console.warn('OK Pressed!')
//   },
// ],
//   {
//     cancelable: true,
//     onDismiss: () => console.warn('Alert dismissed!')
//   })

// ToastAndroid.showWithGravity(
//   'The name must be longer than 3 characters',
//   ToastAndroid.LONG,
//   ToastAndroid.CENTER,
// );

// {/* <Button
//   title={submitted ? 'Clear' : 'Submit'}
//   style={styles.button}
//   onPress={onPressHandler}
//   disabled={submitted}
// /> */}
// {/* <TouchableOpacity
//   style={styles.button}
//   onPress={onPressHandler}
//   activeOpacity={0.2}
//   underlayColor="#dddddd">
//   <Text style={styles.text}>{submitted ? 'Clear' : 'Submit'}</Text>
// </TouchableOpacity> */}
// {/* {submitted ? (
//   <Text style={styles.text}>You are registered as {name}</Text>
// ) : null} */}
// <SectionList
//   keyExtractor={(item, index) => index.toString()}
//   sections={Data}
//   renderItem={({item}) => <Text style={styles.text}>{item}</Text>}
//   renderSectionHeader={({section}) => (
//     <View style={styles.item}>
//       <Text style={styles.text}>{section.title}</Text>
//     </View>
//   )}
//   refreshControl={
//     <RefreshControl refreshing={Refreshing} onRefresh={onRefresh} />
//   }
// />
// shows item in column by default
// <FlatList
//   // assigns key as index
//   keyExtractor={(item, index) => index.toString()}
//   data={Items}
//   renderItem={({item}) => (
//     <View style={styles.item}>
//       <Text style={styles.text}>{item.name}</Text>
//     </View>
//   )}
//   refreshControl={
//     <RefreshControl refreshing={Refreshing} onRefresh={onRefresh} />
//   }
// />
// <ScrollView
//   style={styles.body}
//   refreshControl={
//     <RefreshControl refreshing={Refreshing} onRefresh={onRefresh} />
//   }>
//   {Items.map(items => {
//     return (
//       <View style={styles.item} key={items.key}>
//         <Text style={styles.text}>{items.item}</Text>
//       </View>
//     );
//   })}
// </ScrollView>
