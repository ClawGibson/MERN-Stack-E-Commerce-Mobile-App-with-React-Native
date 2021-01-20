import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Content, Left, Body, ListItem, Thumbnail, Text, List } from 'native-base';

let { width } = Dimensions.get('screen');

const SearchedProduct = (props) => {
    
    const { productsFiltered } = props;
    const imageBase = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimage.flaticon.com%2Ficons%2Fpng%2F512%2F166%2F166913.png&f=1&nofb=1';
    
    return (
        <Content style={{width: width}}>
            {productsFiltered.length > 0 ? (
                productsFiltered.map((item) => (
                    <ListItem 
                        //onPress = {navigation}
                        key = {item._id.$iod}
                        avatar
                    >
                         <Left>
                            <Thumbnail 
                                source = {{uri: item.image ? item.image : imageBase}}
                            />
                        </Left>
                        <Body>
                            <Text>{item.name}</Text>
                            <Text note>{item.description}</Text>
                        </Body>
                    </ListItem>
                ))
            ) : (
                <View style={StyleSheet.center}>
                    <Text style={{alignSelf: 'center'}}>
                        No se encontró :c
                    </Text>
                </View>
            )}
        </Content>
    )
};

const styles = StyleSheet.create({
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default SearchedProduct;