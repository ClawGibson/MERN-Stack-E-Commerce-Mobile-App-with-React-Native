import React from 'react';
import { TouchableOpacity, View, Dimensions, Text } from 'react-native';
import ProductCard from './ProductCard';

let { width, height } = Dimensions.get('window');
//console.log('1: ' + width + '\nH: ' + height);

const ProductList = (props) => {

    const { item } = props;

    return (
        <TouchableOpacity style={{ width: '50%'}}>
            <View style={{ width: width / 2}}>
                <ProductCard {...item} />  
            </View>
        </TouchableOpacity>
    )
};

export default ProductList;
