import React from 'react';
import {
  ScrollView,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();

  const handleButtonClick = () => {
    navigation.replace('Notif');
  };

  return (
    <ScrollView>
      <View style={styles.containerHome}>
        <Text style={styles.title}>KerjaYuk!</Text>
        <Icon
          style={styles.bell}
          name="bell"
          size={30}
          color="#2424"
          onPress={handleButtonClick}
        />
      </View>
      <View>
        <Text style={styles.greeting}>Hi, Good Morning!</Text>
      </View>

      <View>
        
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  bell: {
    paddingRight: 25,
  },
  greeting: {
    padding: 10,
    fontSize: 15,
  },
  containerHome: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignContent: 'space-between',
  },
  title: {
    fontFamily: 'Helvetica',
    fontSize: 32,
    fontWeight: 'bold',
    color: '#E4232B',
    padding: 10,
  },
});

export default Home;
