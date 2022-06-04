import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';

import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';
const SearchSreen = () => {

  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);

  const onTermChange = (newTerm) => setTerm(newTerm);
  const searchApi = async () => {
    const response = await yelp.get('/search', {
      params: {
        limit: 50,
        term,
        location: 'm259ne'
      }
    });
    setResults(response.data.businesses);
    console.log(response.data.businesses);
  }

  return (
    <View style={styles.page}>
      <SearchBar term={term} onTermChange={onTermChange} onTermSubmit={searchApi} />
      <Text>SearchSreen</Text>
      <Text>We have found {results.length} results</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: 'white' },
})

export default SearchSreen
