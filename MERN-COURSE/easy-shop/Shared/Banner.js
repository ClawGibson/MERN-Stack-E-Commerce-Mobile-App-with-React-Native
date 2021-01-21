import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Dimensions, View, ScrollView } from 'react-native';
import Swiper from 'react-native-swiper';

let { width } = Dimensions.get('screen');

const Banner = () => {
    const [ bannerData, setBannerData ] = useState([]);

    useEffect(() => {
        setBannerData(['https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsysde.com%2Fwp-content%2Fuploads%2F2014%2F02%2Fbanner-movil.jpg&f=1&nofb=1',
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs3.amazonaws.com%2Fuploads.hotmart.com%2Fblog%2F2018%2F04%2FBLOG_Publicidad.png&f=1&nofb=1', 
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fblog.vivanuncios.com.mx%2Fwp-content%2Fuploads%2F2019%2F12%2FPublicidad-para-inmobiliarias-1.png&f=1&nofb=1', 
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fassets.entrepreneur.com%2Fcontent%2F3x2%2F2000%2F20180328214520-publicidaddigital.jpeg&f=1&nofb=1', 
        'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.mundomarketing.com%2Fwp-content%2Fuploads%2F2016%2F06%2FMarketing-de-contenidos-publicidad-en-descuento-texto1.jpg&f=1&nofb=1'
        ]);
    
    
        return () => {
            setBannerData([]);
        };

    }, []);

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.swiper}>
                    <Swiper style = {{height: width/3}} showsButtons = {false} autoplay = {true} autoplayTimeout = {2}>
                        {bannerData.map((item) => {
                            return (
                                <Image 
                                    key = {item}
                                    style = {styles.imageBanner}
                                    resizeMode = 'stretch'
                                    source = {{uri: item}}
                                />
                            )
                        })}
                    </Swiper>
                </View>
            </View>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#BBBBFF',
        paddingBottom: 20
    },
    swiper: {
        width: width,
        alignContent: 'center',
        marginTop: 10
    },
    imageBanner: {
        height: width / 2,
        width: width - 40,
        borderRadius: 10,
        marginHorizontal: 20
    }
});

export default Banner;

