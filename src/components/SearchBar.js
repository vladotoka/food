import { StyleSheet, Text, View, TextInput } from 'react-native';
import React from 'react';
import { Feather } from '@expo/vector-icons';


const SearchBar = ({ term, onTermChange, onTermSubmit }) => {

    return (
        <View style={styles.backgroungStyle}>
            <Feather name="search" style={styles.iconStyle} />
            <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.inputStyle}
                placeholder="Search"
                value={term}
                onChangeText={onTermChange}
                onEndEditing={onTermSubmit} />
        </View>
    )
}

const styles = StyleSheet.create({
    backgroungStyle: {
        flexDirection: 'row',
        backgroundColor: 'white',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        marginTop: 15,
        marginBottom:10,
    },
    inputStyle: {
        flex: 1,
        fontSize: 18,

    },
    iconStyle: {
        fontSize: 30,
        alignSelf: 'center',
        color: "black",
        marginHorizontal: 15,

    }
})

export default SearchBar
