import React, { useState } from 'react';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import {
  Alert,
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { Int32 } from 'react-native/Libraries/Types/CodegenTypes';
import { useNavigation } from '@react-navigation/native';

const MainScreen = () => {
    const navigation = useNavigation();
      
    async function selectImage(opt: Int32, navigation: any) {
      let output = null
      if (opt == 0) {
        output = await launchCamera({mediaType: 'photo'});
      } else {
        output = await launchImageLibrary({mediaType: 'photo'})
      }
      if (output.errorCode === "permission") {
        Alert.alert("Please give shroomsniffer camera permissions")
      }
      if (!output.didCancel && output.assets != null) {
        return navigation.navigate('Mush', {uri: output.assets[0].uri})
      }
    }
  
    return (
      <View style={[styles.container, {flex: 1, backgroundColor: Colors.darker}]}>
        <Image 
          source={require('../assets/logo.png')}
          style={{
            width: 256, height: 256}}
        />
        <Text style={styles.textNormal}>
          Welcome to shroomsniffer
        </Text>
        <Text style={[styles.textNormal, {marginBottom: 16}]} >
          Upload an image to proceed
        </Text>
  
        <Button 
          title='Use camera'
          onPress={async () => {selectImage(0, navigation)}}
          color='gray'
        />
        <Text>
        </Text>
        <Button 
          title='Use gallery'
          onPress={async () => {selectImage(1, navigation)}}
          color='gray'
        />
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  textNormal: {
    fontSize: 18,
    color: 'white',
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default MainScreen;
