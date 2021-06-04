import React from 'react';

import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image,
    Animated
} from 'react-native';
// import RNGestureHandlerButton from 'react-native-gesture-handler/lib/typescript/components/GestureHandlerButton';
import { icons, COLORS, SIZES, FONTS } from '../constants'


const ProductsDetails = ({ route, navigation }) => {
    const scrollX = new Animated.Value(0);
    const [products, setProducts] = React.useState(null);
    const [orderItems, setOrderItems] = React.useState([]);
    // const [currentLocation, setCurrentLocation] = React.useState(null);
    let { item } = route.params;

    React.useEffect(() => {
        let { item } = route.params;

        setProducts(item)
        // setCurrentLocation(currentLocation)
    })

    function renderHeaderSection() {
        return (
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity style={{
                    width: 50,
                    paddingLeft: SIZES.padding * 2,
                    justifyContent: 'center'
                }}
                    onPress={() => navigation.goBack()}
                >
                    <Image
                        source={icons.back}
                        resizeMode="contain"
                        style={{
                            width: 30,
                            height: 30
                        }}
                    />
                </TouchableOpacity>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ height: 50, alignItems: 'center', justifyContent: 'center', paddingHorizontal: SIZES.padding * 3, borderRadius: SIZES.radius, backgroundColor: COLORS.lightGray }}>
                        <Text style={{ ...FONTS.h3 }}>{products?.name}</Text>
                    </View>
                </View>
                <TouchableOpacity style={{ width: 50, paddingRight: SIZES.padding * 2, justifyContent: 'center' }}>
                    <Image source={icons.list} resizeMode="contain" style={{ width: 30, height: 30 }} />
                </TouchableOpacity>
            </View >
        )
    }


    function getOrderQuantity(menuId) {
        let orderItem = orderItems.filter(a => a.menuId == menuId)

        if (orderItem.length > 0) {
            return orderItem[0].qty
        }

        return 0
    }

    function editOrder(action, menuId, price) {
        let orderList = orderItems.slice()
        let item = orderList.filter(a => a.menuId == menuId)

        if (action == "+") {
            if (item.length > 0) {
                let newQty = item[0].qty + 1
                item[0].qty = newQty
                item[0].total = item[0].qty * price
            } else {
                const newItem = {
                    menuId: menuId,
                    qty: 1,
                    price: price,
                    total: price
                }
                orderList.push(newItem)
            }

            setOrderItems(orderList)
        } else {
            if (item.length > 0) {
                if (item[0]?.qty > 0) {
                    let newQty = item[0].qty - 1
                    item[0].qty = newQty
                    item[0].total = newQty * price
                }
            }

            setOrderItems(orderList)
        }
    }

    function renderProductInfo() {
        return (
            <Animated.ScrollView horizontal
                pagingEnabled
                scrollEventThrottle={16}
                snapToAlignment="center"
                showsHorizontalScrollIndicator={false}
                onScroll={Animated.event([
                    { nativeEvent: { contentOffset: { x: scrollX } } }
                ], { useNativeDriver: false })}>
                {
                    products?.menu.map((item, index) => (
                        <View key={`menu-${index}`}
                            style={{ alignItems: 'center' }}>
                            <View style={{ height: SIZES.height * 0.35 }}>
                                <Image source={item.photo} resizeMode="cover"
                                    style={{
                                        width: SIZES.width,
                                        height: "100%"
                                    }} />
                                <View
                                    style={{
                                        position: 'absolute',
                                        bottom: - 20,
                                        width: SIZES.width,
                                        height: 50,
                                        justifyContent: 'center',
                                        flexDirection: 'row'
                                    }}
                                >
                                    <TouchableOpacity
                                        style={{
                                            width: 50,
                                            backgroundColor: COLORS.white,
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            borderTopLeftRadius: 25,
                                            borderBottomLeftRadius: 25
                                        }}
                                        onPress={() => editOrder("-", item.menuId, item.price)}
                                    >
                                        <Text style={{ ...FONTS.body1 }}>-</Text>
                                    </TouchableOpacity>

                                    <View
                                        style={{
                                            width: 50,
                                            backgroundColor: COLORS.white,
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}
                                    >
                                        <Text style={{ ...FONTS.h2 }}>{getOrderQuantity(item.menuId)}</Text>
                                    </View>

                                    <TouchableOpacity
                                        style={{
                                            width: 50,
                                            backgroundColor: COLORS.white,
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            borderTopRightRadius: 25,
                                            borderBottomRightRadius: 25
                                        }}
                                        onPress={() => editOrder("+", item.menuId, item.price)}
                                    >
                                        <Text style={{ ...FONTS.body1 }}>+</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View
                                style={{
                                    width: SIZES.width,
                                    alignItems: 'center',
                                    marginTop: 15,
                                    paddingHorizontal: SIZES.padding * 2
                                }}
                            >
                                <Text style={{ marginVertical: 10, textAlign: 'center', ...FONTS.h2 }}>{item.name} - ${item.price.toFixed(2)}</Text>
                                <Text style={{ ...FONTS.body3 }}>{item.description}</Text>
                            </View>
                        </View>
                    ))
                }
            </Animated.ScrollView>
        )
    }


    function renderDetailsPageDots() {

        const detailPageDotPosition = Animated.divide(scrollX, SIZES.width)

        return (
            <View style={{ height: 30 }}>
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: SIZES.padding
                    }}
                >
                    {products?.menu.map((item, index) => {

                        const opacity = detailPageDotPosition.interpolate({
                            inputRange: [index - 1, index, index + 1],
                            outputRange: [0.3, 1, 0.3],
                            extrapolate: "clamp"
                        })

                        const detailPageDotSize = detailPageDotPosition.interpolate({
                            inputRange: [index - 1, index, index + 1],
                            outputRange: [SIZES.base * 1.5, 10, SIZES.base * 1.8],
                            extrapolate: "clamp"
                        })

                        const detailPageDotColor = detailPageDotPosition.interpolate({
                            inputRange: [index - 1, index, index + 1],
                            outputRange: [COLORS.darkgray, COLORS.primary, COLORS.darkgray],
                            extrapolate: "clamp"
                        })

                        return (
                            <Animated.View
                                key={`dot-${index}`}
                                opacity={opacity}
                                style={{
                                    borderRadius: SIZES.radius,
                                    marginHorizontal: 6,
                                    width: detailPageDotSize,
                                    height: detailPageDotSize,
                                    backgroundColor: detailPageDotColor
                                }}
                            />
                        )
                    })}
                </View>
            </View>
        )
    }

    function cartorderItemCount() {
        let orderItemCount = orderItems.reduce((a, b) => a + (b.qty || 0), 0)

        return orderItemCount
    }

    function totalOrder() {
        let total = orderItems.reduce((a, b) => a + (b.total || 0), 0)

        return total.toFixed(2)
    }


    function renderOrder() {
        return (
            <View>
                {
                    renderDetailsPageDots()
                }
                <View
                    style={{
                        backgroundColor: COLORS.white,
                        borderTopLeftRadius: 40,
                        borderTopRightRadius: 40
                    }}
                >
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            paddingVertical: SIZES.padding * 2,
                            paddingHorizontal: SIZES.padding * 3,
                            borderBottomColor: COLORS.lightGray2,
                            borderBottomWidth: 1
                        }}
                    >
                        <Text style={{ ...FONTS.h3 }}>{cartorderItemCount()} Added in Your Cart</Text>
                        <Text style={{ ...FONTS.h3 }}>${totalOrder()}</Text>
                    </View>

                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            paddingVertical: SIZES.padding * 2,
                            paddingHorizontal: SIZES.padding * 3
                        }}
                    >
                    </View>
                    <View
                        style={{
                            padding: SIZES.padding * 2,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <TouchableOpacity
                            style={{
                                width: SIZES.width * 0.9,
                                padding: SIZES.padding,
                                backgroundColor: COLORS.primary,
                                alignItems: 'center',
                                borderRadius: SIZES.radius
                            }}
                            onPress={() => navigation.navigate("OrderDelivery", {
                                item

                            })}
                        >
                            <Text style={{ color: COLORS.white, ...FONTS.h2 }}>Confirm Order</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        )

    }


    return (
        <SafeAreaView style={styles.container}>
            {renderHeaderSection()}
            {renderProductInfo()}
            {renderOrder()}
        </SafeAreaView >
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightGray2
    }
})


export default ProductsDetails;