import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';

import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {

  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();
  const onTermChange = (newTerm) => setTerm(newTerm);
  const filterResultsByPrice = (price) => {
   
    //price === '$' || '$$' || '$$$'
    // return results ? results.filter(result => {
    //   return result.price?.length === price.length;
    // }) : null
    return results.filter(result => {
      if (!result.price && !result) {return result}
      return result.price?.length === price?.length;
    })
  };

  return (
    <View style={styles.page}>
      <SearchBar term={term} onTermChange={onTermChange} onTermSubmit={() => searchApi(term)} />
      {!errorMessage ? <Text> We have found {results?.length} results </Text> : <Text>{errorMessage}</Text>}
      <ResultsList results={filterResultsByPrice('$')} title='Cost Effective' />
      <ResultsList results={filterResultsByPrice('$$')} title='Bit Pricer' />
      <ResultsList results={filterResultsByPrice('$$$')} title='Big Spender' />
      <ResultsList results={filterResultsByPrice('$$$$')} title='Luxury' />
      <ResultsList results={filterResultsByPrice()} title='Unspecified price range' />
    </View>
  )
}

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: 'white' },

})

export default SearchScreen
