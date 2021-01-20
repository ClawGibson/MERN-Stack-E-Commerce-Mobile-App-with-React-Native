import React from 'react';
import { StyleSheet, Image, SafeAreaView, View, Text } from 'react-native';

const Header = () => {
    return (
        <SafeAreaView style = {styles.header}>
            {/*
            <Image 
                source = {require('../assets/Logo.png')}
                resizeMode = 'center'
                style = {{ height: 80 }}
            />
            */}
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    header: {
        width: '100%',
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        padding: 1,
        marginTop: '5%',
        backgroundColor: '#FFFFFF'
    }
});

export default Header;