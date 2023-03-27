import { View, StyleSheet, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getImages } from '../api/pexels'
import ImageList from '../components/ImageList'

const HomeScreen = () => {

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
    <View style={styles.container}>
      <Text style={styles.totalResultsText}>1000 Results</Text>
      <ImageList photos={photos} />
    </View>
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
    paddingTop:35
  }
})
export default HomeScreen