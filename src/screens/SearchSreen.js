import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';

import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchSreen = () => {

  const onTermChange = (newTerm) => setTerm(newTerm);
  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);
  const [errorMessage, setErrormessage] = useState('');

  const searchApi = async (searchTerm) => {
    try {
      setErrormessage('');
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: 'm259ne'
        }
      });
      setResults(response.data.businesses);
      console.log(response.data.businesses);
    } catch (err) {
      setErrormessage(`Something went wrong. Error message: ${err}`);
    }
  };

  //Default search on firstmount  
  useEffect(() => {
    searchApi('Milano');
  }, []);

  return (
    <View style={styles.page}>
      <SearchBar term={term} onTermChange={onTermChange} onTermSubmit={() => searchApi(term)} />
      <Text>SearchSreen</Text>
      {!errorMessage ? <Text> We have found {results.length} results </Text> : <Text>{errorMessage}</Text>}
    </View>
  )
}

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: 'white' },
})

export default SearchSreen
