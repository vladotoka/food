import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'

import ResultsDetail from './ResultsDetail'

const ResultsList = ({ title, results }) => {
    return (
        <View>
            <Text style={styles.title}>{title}</Text>
            <Text>Results: {results.length}</Text>
            <FlatList horizontal data={results} keyExtractor={result => result.id} renderItem={({ item }) => {
                return <ResultsDetail result={item}/>
            }} />
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold'
    }
})

export default ResultsList
