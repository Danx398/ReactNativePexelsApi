import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './screens/HomeScreen';
import ImageScreen from './screens/ImageScreen';
import { Text, Image, StyleSheet } from 'react-native';
import pexelsLogo from './assets/pexels.jpg'


const Stack = createNativeStackNavigator()

export default function App() {

	const [openSearch, setOpenSearch] = useState(false)


	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="Home"
					options={{
						headerLeft: () => <Image source={pexelsLogo} style={styles.logo} />,
						headerRight: () => (
							<Text
								style={{ color: "white", fontSize: 18 }}
								onPress={() => setOpenSearch(!openSearch)}
							>
								{openSearch ? "Close" : "Search"}
							</Text>
						),
						title: "Pexels App",
						headerTintColor: "#fff",
						headerTitleStyle: {
							fontWeight: "bold",
						},
						headerStyle: {
							backgroundColor: "#0D0D0D",
						},
					}}
				>
					{(props) => <HomeScreen {...props} openSearch={openSearch} />}
				</Stack.Screen>
				{/* <Stack.Screen name='HomeScreen' component={HomeScreen}
		  options={{
			headerLeft: () => <Image source={pexelsLogo} style={styles.logo} />,
			title: 'Pexels App',
			headerTitleStyle: {
			  color: '#FFF',
			  fontWeight: 'bold'
			},
			headerStyle: {
			  backgroundColor: '#0d0d0d'
			},
			headerRight: () => (
			  <Text style={{ color: 'white', fontSize: 18 }}
				onPress={() => setOpenSearch(!openSearch)}
			  >
				{openSearch ? "Close" : "Search"}
			  </Text>
			),
		  }}
		> 
		   {(props) => <HomeScreen {...props} openSearch={openSearch} />}
		</Stack.Screen> */}
				<Stack.Screen name='ImageScreen' component={ImageScreen} />
			</Stack.Navigator>
			<StatusBar />
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	logo: {
		width: 37, height: 37, marginEnd: 5, borderRadius: 5
	}
})
