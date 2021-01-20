import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ActivityIndicator, FlatList } from 'react-native';
import { Container, Header, Icon, Input, Item, Text } from 'native-base';

import ProductList from './ProductList';
import SearchedProduct from './SearchedProducts';

const data = require('../../assets/data/products.json');


const ProductContainer = () => {

    const [ products, setProducts ] = useState([]);
    const [ productsFiltered, setProductsFiltered ] = useState([]);
    const [ focus, setFocus ] = useState([]);

    useEffect(() => {
        setProducts(data);
        setProductsFiltered(data);
        setFocus(false);

        return () => {
            setProducts([]);
            setProductsFiltered([]);
            setFocus();
        };
    }, []);

    const searchProduct = (text) => {
        setProductsFiltered(
            products.filter((i) => i.name.toLowerCase().includes(text.toLowerCase()))
        );
    };

    const openList = () => {
        setFocus(true);
    };

    const onBlur = () => {
        setFocus(false);
    };

    return (
        <Container>
            <Header searchBar rounded>
                <Item>
                    <Icon name = 'ios-search'/>
                    <Input
                        placeholder = 'Buscar'
                        onFocus = {openList}
                        onChangeText = {(text) => searchProduct(text)}
                    />
                    { focus  == true ? (
                        <Icon onPress = {onBlur} name= 'ios-close' />
                    ) : null
                    }
                </Item>
            </Header>
                {focus == true ? (
                    <SearchedProduct 
                        productsFiltered = {productsFiltered}
                    />
                ) : (
                    <View style = {styles.bar}>
                        <Text>Product Container</Text>
                        <View style = {{marginTop: '1%', marginBottom: '28%', marginLeft: -6}}>
                            <FlatList
                                horizontal = {false}
                                numColumns = {2}
                                data = {products}
                                renderItem = {({item}) => <ProductList 
                                    key = {item.id}
                                    item = {item}/>}
                                keyExtractor = {item => item.name}
                            />
                        </View>
                    </View>
                )}
        </Container>
    )
};

const styles = StyleSheet.create({
    bar: {
        marginTop: '1%',
        backgroundColor: '#FFFFFF'
    }
});

export default ProductContainer;