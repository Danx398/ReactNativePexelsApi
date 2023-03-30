import { View, StyleSheet, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getImages } from '../api/pexels'
import ImageList from '../components/ImageList'
import { Input, Button } from 'react-native-elements'

const HomeScreen = ({ openSearch }) => {

	const [photos, setPhotos] = useState([])


	const loadImages = async () => {
		const res = await getImages();
		// console.log(res.headers);
		setPhotos(res.data.photos)
	}

	useEffect(() => {
		loadImages();
	}, [])
	return (
		<>
			{openSearch && (<View style={styles.searchSection}>
				<Input placeholder='Search Term'
					style={styles.searchInput}
				/>
				<Button title="Search" />
			</View>)}
			<View style={styles.container}>
				<Text style={styles.totalResultsText}>1000 Results</Text>
				<ImageList photos={photos} />
			</View>
		</>
	)
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#0d0d0d',
		alignItems: 'center',
		justifyContent: 'center'
	},
	totalResultsText: {
		color: '#D0D0D0',
		textAlign: 'center',
		textAlign: 'right',
		width: '100%',
		paddingTop: 35,
	},
	searchInput: {
		backgroundColor: '#2c292c',
		borderBottomWidth: 0,
		paddingHorizontal: 4,


	},
	searchSection:{
		backgroundColor: '#0d0d0d',
		width:'100%',
		paddingLeft:10
	}
})
export default HomeScreen