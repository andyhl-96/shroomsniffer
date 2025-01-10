import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

function MushroomScreen({route}: any) {
    const navigation = useNavigation();
    function back(navigation: any) {
        return navigation.navigate('Main');
    }
    return (
        <View style={[{flex: 1, backgroundColor: Colors.darker}, styles.container]}>
            <Image
                source={{uri: route.params.uri}}
                style={{width: 256, height: 256, marginBottom: 8}}
            />
            <Text style={styles.textLarge}>
                This smells like...
            </Text>
            <Text style={styles.textNormal}>
                {route.params.pred}
            </Text>

            <Button
            title='Back to menu'
            onPress={() => {back(navigation)}}
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
    textLarge: {
        fontSize: 24,
        color: 'white',
        marginBottom: 12,
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

export default MushroomScreen;