import React from 'react';
import { TouchableOpacity, View, Dimensions, Text } from 'react-native';
import ProductCard from './ProductCard';

let { width, height } = Dimensions.get('screen');
//console.log('1: ' + width + '\nH: ' + height);

const ProductList = (props) => {

    const { item } = props;

    return (
        <TouchableOpacity style={{ width: '50%'}}>
            <View style={{ width: width / 0.8}}>
                <ProductCard {...item} />  
            </View>
        </TouchableOpacity>
    )
};

export default ProductList;
