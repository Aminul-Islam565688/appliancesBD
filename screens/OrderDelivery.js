import React from 'react';
import { Image, Text, TouchableOpacity, View } from "react-native";
import { COLORS, FONTS, icons, SIZES } from "../constants";



const OrderDelivery = ({ route, navigation }) => {
    const [products, setProducts] = React.useState(null);
    const [streetName, setStreetName] = React.useState("");
    const [fromLocation, setFromLocation] = React.useState(null);
    const [duration, setDuration] = React.useState(0);
    const [isReady, setIsReady] = React.useState(false);


    function renderMap() {
        return (
            <View style={{ flex: 1, position: 'relative' }}>
                {/* <WebView
                    // originWhitelist={['*']}
                    source={{ html: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29215.320255347488!2d90.37487793955076!3d23.75040920000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b9278e92053b%3A0xfe8de7c98a6331c!2sGoogle%20Map!5e0!3m2!1sen!2sbd!4v1622822629751!5m2!1sen!2sbd" width="600" height="450" style="border:0;" allowfullscreen="" ></iframe>' }}
                // source={{ uri: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29215.320255347488!2d90.37487793955076!3d23.75040920000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b9278e92053b%3A0xfe8de7c98a6331c!2sGoogle%20Map!5e0!3m2!1sen!2sbd!4v1622822629751!5m2!1sen!2sbd' }}
                // style={{ flex: 1 }}
                /> */}
                <Image
                    style={{ flex: 1 }}
                    source={{
                        uri: 'https://i.stack.imgur.com/YYoxS.png',
                    }}
                />

            </View>
        )
    }



    React.useEffect(() => {
        let { products } = route.params;
        console.log(products);
        // let { products } = route.params;

        setProducts(products)

        // setCurrentLocation(currentLocation)
    })

    function renderDestinationHeader() {
        return (
            <View
                style={{
                    position: 'absolute',
                    top: 50,
                    left: 0,
                    right: 0,
                    height: "50px",
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        width: SIZES.width * 0.9,
                        paddingVertical: SIZES.padding,
                        paddingHorizontal: SIZES.padding * 2,
                        borderRadius: SIZES.radius,
                        backgroundColor: COLORS.white
                    }}
                >
                    <Image
                        source={icons.locationDrop}
                        style={{
                            width: 30,
                            height: 30,
                            marginRight: SIZES.padding
                        }}
                    />

                    <View style={{ flex: 1 }}>
                        <Text style={{ ...FONTS.body3 }}>Shahbag</Text>
                    </View>

                    <Text style={{ ...FONTS.body3 }}>1 Day</Text>
                </View>
            </View>
        )
    }


    function renderDeliveryInfo() {
        return (
            <View
                style={{
                    position: 'absolute',
                    bottom: 50,
                    left: 0,
                    right: 0,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <View
                    style={{
                        width: SIZES.width * 0.9,
                        paddingVertical: SIZES.padding * 3,
                        paddingHorizontal: SIZES.padding * 2,
                        borderRadius: SIZES.radius,
                        backgroundColor: COLORS.white
                    }}
                >
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        {/* Avatar */}
                        <Image
                            source={products?.photo}
                            // source={restaurant?.courier.avatar}
                            style={{
                                width: 50,
                                height: 50,
                                borderRadius: 25
                            }}
                        />

                        <View style={{ flex: 1, marginLeft: SIZES.padding }}>
                            {/* Name & Rating */}
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ ...FONTS.h4 }}>{products?.name}</Text>
                                <View style={{ flexDirection: 'row' }}>
                                    <Image
                                        source={icons.star}
                                        style={{ width: 18, height: 18, tintColor: COLORS.primary, marginRight: SIZES.padding }}
                                    />
                                    <Text style={{ ...FONTS.body3 }}>{products?.rating}</Text>
                                </View>
                            </View>

                            {/* Restaurant */}
                            <Text style={{ color: COLORS.darkgray, ...FONTS.body4 }}>{products?.name}</Text>
                        </View>
                    </View>

                    {/* Buttons */}
                    <View
                        style={{
                            flexDirection: 'row',
                            marginTop: SIZES.padding * 2,
                            justifyContent: 'space-between'
                        }}
                    >
                        <TouchableOpacity
                            style={{
                                flex: 1,
                                height: 50,
                                marginRight: 10,
                                backgroundColor: COLORS.primary,
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: 10
                            }}
                            onPress={() => navigation.navigate("Home")}
                        >
                            <Text style={{ ...FONTS.h4, color: COLORS.white }}>Call</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={{
                                flex: 1,
                                height: 50,
                                backgroundColor: COLORS.secondary,
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: 10
                            }}
                            onPress={() => navigation.goBack()}
                        >
                            <Text style={{ ...FONTS.h4, color: COLORS.white }}>Cancel</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        )
    }

    function renderButtons() {
        return (
            <View
                style={{
                    position: 'absolute',
                    bottom: SIZES.height * 0.35,
                    right: SIZES.padding * 2,
                    width: 60,
                    height: 130,
                    justifyContent: 'space-between'
                }}
            >
                {/* Zoom In */}
                <TouchableOpacity
                    style={{
                        width: 60,
                        height: 60,
                        borderRadius: 30,
                        backgroundColor: COLORS.white,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                    onPress={() => zoomIn()}
                >
                    <Text style={{ ...FONTS.body1 }}>+</Text>
                </TouchableOpacity>

                {/* Zoom Out */}
                <TouchableOpacity
                    style={{
                        width: 60,
                        height: 60,
                        borderRadius: 30,
                        backgroundColor: COLORS.white,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                    onPress={() => zoomOut()}
                >
                    <Text style={{ ...FONTS.body1 }}>-</Text>
                </TouchableOpacity>
            </View>

        )
    }

    return (
        <View style={{ flex: 1 }}>
            {renderMap()}
            {renderDestinationHeader()}
            {renderDeliveryInfo()}
            {renderButtons()}
        </View>
    )
}
export default OrderDelivery;