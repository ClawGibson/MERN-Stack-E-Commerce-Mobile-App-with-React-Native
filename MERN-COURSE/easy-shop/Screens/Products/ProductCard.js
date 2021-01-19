import React from 'react';
import { 
    StyleSheet, 
    View, 
    Dimensions, 
    Image, 
    Text, 
    Button 
} from 'react-native';

const imageBase = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimage.flaticon.com%2Ficons%2Fpng%2F512%2F166%2F166913.png&f=1&nofb=1';
let { width, height } = Dimensions.get('window');
//console.log('2: ' + width + '\nH: ' + height);

const ProductCard = (props) => {
    const { name, price, image, countInStock } = props;

    return (
        <View style = {styles.container}>
            <Image style = {styles.image}
                resizeMode = 'contain'
                source = {{uri: image ? image : imageBase}}
            />
            <View style = {styles.card} />
            <Text style = {styles.title} >
                { name.length > 15 ? name.substring(0, 15 - 3) + '...' : name }
            </Text>
            <Text style = {styles.price} >
                ${price}
            </Text>
            { countInStock > 0 ? (
                <View style = {{marginTop: 15, width: '80%'}}>
                    <Button title = {'Add'} color = {'#A4EB63'}></Button>
                </View>
            ) : <Text style = {{marginTop: 20, color: 'red'}}>Currently Unavailable</Text> }
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        width: width / 2 - 20,
        height: width / 1.7,
        padding: 1,
        borderRadius: 10,
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 15,
        alignItems: 'center',
        elevation: 8,
        backgroundColor: '#F5DD67'
    },
    image: {
        width: width / 2 - 20 - 10,
        height: width / 2 - 20 - 30,
        backgroundColor: 'transparent',
        position: 'absolute',
        top: -45
    },
    card: {
        marginBottom: 10,
        height: width / 2 - 20 - 90,
        backgroundColor: 'transparent',
        width: width / 2 - 20 - 10
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center'
    },
    price: {
        fontSize: 20,
        color: '#78B2F5',
        marginTop: 10
    }
});

export default ProductCard;
