import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
function ProfileScreen() {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Haven't you Sign in?</Text>
      <View style={styles.btnContainer}>
        <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
            <View style={styles.btn}>
                <Text>Login</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('Signup')}>
            <View style={styles.btn}>
                <Text>Sign Up</Text>
            </View>
        </TouchableOpacity>
      </View>

    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: 20,
      marginBottom:150,
    },

    btn:{
        backgroundColor: 'tomato',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 10,
        alignItems: 'center',         // Center text inside the button
        justifyContent: 'center',     // Center text vertically
        marginVertical: 10,
    },
    btnContainer:{
        display: 'flex',
        flexDirection: 'row',      // Side-by-side layout
        justifyContent: 'space-between', // Creates spacing between buttons
        alignItems: 'center',      // Align items in the center vertically
        width: '70%',              // Adjust width as needed
        marginTop: 20,
    }
  });

export default ProfileScreen