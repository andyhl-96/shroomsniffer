import React, { useState } from 'react';
import { NativeModules } from 'react-native';
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
    const [testStr, testStrSet] = useState<string | undefined>("initial text");
      
    async function selectImage(opt: Int32, navigation: any) {
        let output = null
        if (opt == 0) {
            output = await launchCamera({mediaType: 'photo', includeBase64: true});
        } else {
            output = await launchImageLibrary({mediaType: 'photo', includeBase64: true})
        }
        if (output.errorCode === "permission") {
            Alert.alert("Please give shroomsniffer camera permissions")
        }
        if (!output.didCancel && output.assets != null) {
            //console.log(output.assets[0].base64);
            let prediction = ""
            if (output.assets[0].base64 != undefined) {
                prediction = infer(output.assets[0].base64);
            }
            return navigation.navigate('Mush', {uri: output.assets[0].uri, pred: prediction})
        }
    }

    function test() {
        const PythonModule = NativeModules.PythonModule;
        let temp = PythonModule.test();
        testStrSet(temp);
    }
  
    function infer(b64Str: string) {
        console.log(b64Str)
        const PythonModule = NativeModules.PythonModule;
        let temp = PythonModule.infer(b64Str);
        testStrSet(temp);
        return temp
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

            {/* <Button
            title="test native module"
            onPress={test2}
            color='gray'
            /> */}

            {/* <Text style={styles.textNormal}>
                {testStr}
            </Text> */}

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
