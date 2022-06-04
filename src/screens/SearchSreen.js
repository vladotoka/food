import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';

import SearchBar from '../components/SearchBar';


const SearchSreen = () => {

  const [term, setTerm] = useState('');
  const onTermChange = (newTerm) => setTerm(newTerm);

  return (
    <View style={styles.page}>
      <SearchBar term={term} onTermChange={onTermChange} onTermSubmit={() => console.log('search:', term)} />
      <Text>SearchSreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: 'white' },
})

export default SearchSreen
