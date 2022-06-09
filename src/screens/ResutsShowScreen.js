import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react';
import yelp from '../api/yelp';
import ResultsDetail from '../components/ResultsDetail';

const ResutsShowScreen = ({ route }) => {
  const [result, serResult] = useState(null);

  console.log(result);

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    serResult(response.data);
  }


  useEffect(() => { getResult(route.params.id) }, []);

  if (!result) {
    return null;
  }

  return (
    <View>
      <Text>{route.params.screenTitle}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />
        }} />
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 300,
  }
})

export default ResutsShowScreen
