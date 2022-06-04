import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';

import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';

const SearchSreen = () => {

  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();
  const onTermChange = (newTerm) => setTerm(newTerm);

  return (
    <View style={styles.page}>
      <SearchBar term={term} onTermChange={onTermChange} onTermSubmit={() => searchApi(term)} />
      <Text>SearchSreen</Text>
      {!errorMessage ? <Text> We have found {results?.length} results </Text> : <Text>{errorMessage}</Text>}
    </View>
  )
}

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: 'white' },
})

export default SearchSreen
