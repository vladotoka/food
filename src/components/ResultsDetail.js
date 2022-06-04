import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const ResultsDetail = ({ result }) => {
    const imageUri = !!result.image_url ? result.image_url : 'https://www.gmt-sales.com/wp-content/uploads/2015/10/no-image-found.jpg';
    return (
        <View>
            <Image style={styles.image} source={{ uri: imageUri }} />
            <Text style={styles.name}>{result.name}</Text>
            <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 250,
        height: 120,
        borderRadius: 4
    },
    name: {
        fontWeight: 'bold'
    }
})

export default ResultsDetail
