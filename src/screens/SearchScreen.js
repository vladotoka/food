import { StyleSheet, Text, View, ScrollView } from 'react-native';
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
    return results.filter(result => {
      if (!result.price && !result) { return result }
      return result.price?.length === price?.length;
    })
  };

  return (
    <>
      <SearchBar term={term} onTermChange={onTermChange} onTermSubmit={() => searchApi(term)} />
      {!!errorMessage && <Text>{errorMessage}</Text>}
      <ScrollView>
        <ResultsList results={filterResultsByPrice('$')} title='Cost Effective' />
        <ResultsList results={filterResultsByPrice('$$')} title='Bit Pricer' />
        <ResultsList results={filterResultsByPrice('$$$')} title='Big Spender' />
        <ResultsList results={filterResultsByPrice('$$$$')} title='Luxury' />
        <ResultsList results={filterResultsByPrice()} title='Unspecified price range' />
      </ScrollView>
    </>

  )
}


export default SearchScreen
