import React from 'react';
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    FlatList
} from "react-native";


import { icons, images, SIZES, COLORS, FONTS } from '../constants'



const Home = ({ navigation }) => {
    const initialCurrentLocation = {
        streetName: "Kuching",
        gps: {
            latitude: 1.5496614931250685,
            longitude: 110.36381866919922
        }
    }

    const categoryData = [
        {
            id: 1,
            name: "Home",
            icon: icons.house1,
        },
        {
            id: 2,
            name: "Kitchen",
            icon: icons.kitchen,
        },
        {
            id: 3,
            name: "Laundry",
            icon: icons.laundry,
        },
        {
            id: 4,
            name: "Smart Appliance",
            icon: icons.smart1,
        },
        {
            id: 5,
            name: "Burgers",
            icon: icons.hamburger,
        },
        {
            id: 6,
            name: "Pizza",
            icon: icons.pizza,
        },
        {
            id: 7,
            name: "Snacks",
            icon: icons.fries,
        },
        {
            id: 8,
            name: "Sushi",
            icon: icons.sushi,
        },
        {
            id: 9,
            name: "Desserts",
            icon: icons.donut,
        },
        {
            id: 10,
            name: "Drinks",
            icon: icons.drink,
        },

    ]

    // price rating
    const affordable = 1
    const fairPrice = 2
    const expensive = 3

    // const categoryData = [
    //     {
    //         id: 1,
    //         name: "Home Appliances",
    //         icon: icons.house,
    //     },
    //     {
    //         id: 2,
    //         name: "Industry Appliances",
    //         icon: icons.factory,
    //     },
    // ]

    const productData = [
        {
            id: 1,
            name: 'Rice Cooker',
            photo: images.smallCooker,
            shortDescription: 'High durable, Colorful designs, Brand:  Walton',
            price: 180,
            capacity: '2 L',
            categories: [2, 4, 6],
            rating: 4.8,
            menu: [
                {
                    menuId: 1,
                    name: 'Small Size Rice Cooker',
                    photo: images.smallCooker,
                    description: 'Two Aluminum Inner pots, High Temperature resistant Plastic body, High Temperature resistant Poly-carbonate Food Steamer',
                    price: 110,
                    capacity: '1.8 L',
                    power: '700 watt'
                },
                {
                    menuId: 2,
                    name: 'Large Size Rice Cooker',
                    photo: images.mediumCooker,
                    description: 'Usable For 1.8-2.0 KG Uncooked Rice, Double Aluminum Pot with Non Stick Coating, Seamless Body',
                    price: 210,
                    capacity: '2.8 L',
                    power: '1000 watt'
                },
                {
                    menuId: 3,
                    name: 'Medium Size Rice Cooker',
                    photo: images.large_Cooker,
                    description: 'Usable for 1.3-1.5 KG uncooked rice, Combination of Aluminum and SS Inner pot, Seamless body',
                    price: 170,
                    capacity: '2.2 L',
                    power: '900 watt'
                },

            ]
        },
        {
            id: 2,
            name: 'Curry Cooker',
            photo: images.smallCurryCooker,
            shortDescription: 'High durable, Colorful designs, Brand: Best Buy',
            price: 100,
            capacity: '1.5 L',
            categories: [1, 3, 5],
            rating: 4.7,
            menu: [
                {
                    menuId: 1,
                    name: 'Small Size Curry Cooker',
                    photo: images.smallCurryCooker,
                    description: 'FASHIONABLE DESIGN & ATTRACTIVE COLOR COOKER, TEMPERED GLASS LID WITH FASHIONABLE STAND TYPE HANDLE. ALUMINUM INNER POT WITH NON-STICK COATING',
                    price: 130,
                    power: '900 watt',
                    capacity: '1.8 L',
                },
                {
                    menuId: 2,
                    name: 'Large Size Curry Cooker',
                    photo: images.mediumCurryCooker,
                    description: '4.5 litter non-stick curry cooker has unique.Innovative non- stick ceramic coating. Four times more durable than ordinary non-stick surfaces',
                    price: 250,
                    power: '1500 watt',
                    capacity: '2.2 L',
                },
                {
                    menuId: 3,
                    name: 'Medium Size Curry Cooker',
                    photo: images.mediumCurryCooker,
                    description: 'Fashionable design attractive color cooker.Tempered glass lid with fashionable stand type handle',
                    price: 180,
                    power: '1350 watt',
                    capacity: '2.8 L',
                },

            ]
        },
        {
            id: 3,
            name: 'Hot Pot',
            shortDescription: 'High durable, Colorful designs, Brand: Best Buy',
            photo: images.largeSizeHotpot,
            price: 160,
            capacity: '2.2 L',
            categories: [2, 4, 6],
            rating: 5,
            menu: [
                {
                    menuId: 1,
                    name: 'Small Size HotPot',
                    photo: images.smallSizeHotpot,
                    description: 'Keeps food hot more than 8 hours, Attractive, New Design, Highly Durable',
                    price: 160,
                    capacity: '1.5 L',
                    power: '1350 watt'
                },
                {
                    menuId: 2,
                    name: 'Medium Size HotPot',
                    photo: images.mediumSizeHotPot,
                    description: 'Keeps food hot more than 10 hours, Attractive, Shiney Design, Highly effective and Durable',
                    price: 190,
                    capacity: '1.8 L',
                    power: '1350 watt'
                },
                {
                    menuId: 3,
                    name: 'Large Size HotPot',
                    photo: images.largeSizeHotpot,
                    description: 'Keeps food hot more than 10 hours, Very Good experts have their recomendationAttractive, Shiney Design, Highly effective and Durable',
                    price: 220,
                    capacity: '2.2 L',
                    power: '1350 watt'
                },

            ]
        },
        {
            id: 4,
            name: 'Fridge',
            photo: images.mediumFridge,
            price: 350,
            categories: [2, 4, 6],
            capacity: '265 L',
            rating: 4.9,
            menu: [
                {
                    menuId: 1,
                    name: 'Small Fridge',
                    photo: images.fridge,
                    description: '',
                    price: 250,
                    capacity: '101 L',
                    power: '3000 watt'
                },
                {
                    menuId: 2,
                    name: 'Medium Fridge',
                    photo: images.mediumFridge,
                    description: 'Type: Direct Cool, Gross Volume: 157 Ltr, Net Volume: 144 Ltr, Refrigerant: R134a',
                    price: 300,
                    capacity: '157 L',
                    power: '4000 watt'
                },
                {
                    menuId: 3,
                    name: 'Large Fridge',
                    photo: images.largeFridge,
                    description: 'Refrigerant: R600a, Using Latest Intelligent, INVERTER technology, Do not use Voltage stabilizer, if use warranty will be voided',
                    price: 400,
                    capacity: '265 L',
                    power: '6500 watt'
                },

            ]
        },
        {
            id: 5,
            name: 'Washing Machine',
            photo: images.mediumWashingMachine,
            price: 400,
            capacity: '6.5 kg',
            rating: 4.8,

            menu: [
                {
                    menuId: 1,
                    name: 'Small Washing Machine',
                    photo: images.smallWashingMachine,
                    description: 'Walton Washing machine is a result of constant innovation which is designed with a view to ease the lives of the people',
                    price: 410,
                    capacity: '6.5 kg',
                    power: '1950 watt'

                },
                {
                    menuId: 2,
                    name: 'Medium Washing Machine',
                    photo: images.mediumWashingMachine,
                    description: 'Front Loading	A+++ Energy Efficiency Class, 140° Wide Angle Super Large Door',
                    price: 480,
                    capacity: '8 kg',
                    power: '2200 watt'
                },
                {
                    menuId: 3,
                    name: 'Large washing Machine',
                    photo: images.largeWashingMachine,
                    description: 'OXYFRESH Technology, CIM Inverter Motor, 16 Wash Programs',
                    price: 520,
                    capacity: ' 9.5 kg',
                    power: '3000 watt'
                },

            ]
        },
        {
            id: 6,
            name: 'Air Conditioner',
            photo: images.largeAC,
            price: 480,
            categories: [2, 4, 6],
            capacity: '1 ton',

            rating: 4.95,
            menu: [
                {
                    menuId: 1,
                    name: 'Small Air Conditioner',
                    photo: images.ac,
                    description: '',
                    price: 400,
                    capacity: '1 ton',
                    power: '3517 watt'
                },
                {
                    menuId: 2,
                    name: 'Medium Air Conditioner',
                    photo: images.mediumAC,
                    description: 'Compressor Warranty: 10 Years, Spare Parts support: 3 Years, After Sales Service: 1 Year Free',
                    price: 480,
                    capacity: '1.5 ton',
                    power: '5275 watt'
                },
                {
                    menuId: 3,
                    name: 'Large Air Conditioner',
                    photo: images.largeAC,
                    description: 'Good operating control with comfort level cooling.Has auto opeartion mode, dula rotary compressor.',
                    price: 600,
                    capacity: '2 ton',
                    power: '7034 watt'
                },

            ]
        },
        {
            id: 7,
            name: 'Generator',
            photo: images.mediumGenerator,
            price: 400,
            categories: [1, 2],
            capacity: 'Ampers',
            rating: 4.9,
            menu: [
                {
                    menuId: 1,
                    name: 'Small Petrol Generator',
                    photo: images.generator,
                    description: 'Ideal for TV, DVD, satellite, fridge, coffee, pot, & more, Super quiet & lightweight, Inverter - stable power',
                    price: 850,
                    capacity: 'Ampers',
                    power: '2200 watt'
                },
                {
                    menuId: 2,
                    name: 'Medium Size Generator',
                    photo: images.mediumGenerator,
                    description: 'Trusted, quiet power for home back up & more, Lightweight and portable, Inverter - Fuel efficient, quality power for sensitive equipment & electronics',
                    price: 1150,
                    capacity: 'Ampers',
                    power: '3400 watt'
                },
                {
                    menuId: 3,
                    name: 'Large Electric Geneartor',
                    photo: images.largeGenerator,
                    description: 'Provides 7,000 watts for 10 secs to start larger equipment, Full GFCI protection',
                    price: 1400,
                    capacity: 'Ampers',
                    power: '7034 watt'
                },

            ]
        }
    ]

    // const [categories, setCategories] = React.useState(categoryData)
    const [selectedCategory, setSelectedCategory] = React.useState(null)
    const [categories, setCategories] = React.useState(categoryData);
    // const [selectedCategory, setSelectedCategory] = React.useState(null)
    const [products, setProducts] = React.useState(productData)
    console.log(products)
    const [currentLocation, setCurrentLocation] = React.useState(initialCurrentLocation)


    function onSelectCategory(category) {
        console.log(products)
        let productList = productData.filter(a => console.log(a))
        setProducts(productList)
        setSelectedCategory(category)
    }
    function renderHeader() {
        return (
            <View style={{ flexDirection: 'row', height: 50 }}>
                <TouchableOpacity
                    style={{
                        width: 50,
                        paddingLeft: SIZES.padding * 2,
                        justifyContent: 'center'
                    }}
                >
                    <Image
                        source={icons.nearby}
                        resizeMode="contain"
                        style={{
                            width: 30,
                            height: 30
                        }}
                    />
                </TouchableOpacity>

                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <View
                        style={{
                            width: '70%',
                            height: "100%",
                            backgroundColor: COLORS.lightGray3,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: SIZES.radius
                        }}
                    >
                        <Text style={{ ...FONTS.h3 }}>Location</Text>
                    </View>
                </View>

                <TouchableOpacity
                    style={{
                        width: 50,
                        paddingRight: SIZES.padding * 2,
                        justifyContent: 'center'
                    }}
                >
                    <Image
                        source={icons.basket}
                        resizeMode="contain"
                        style={{
                            width: 30,
                            height: 30
                        }}
                    />
                </TouchableOpacity>
            </View>



        )
    }
    function renderMainCategories() {
        const renderItem = ({ item }) => {
            return (


                <TouchableOpacity
                    style={{
                        padding: SIZES.padding,
                        paddingBottom: SIZES.padding * 2,
                        backgroundColor: (selectedCategory?.id == item.id) ? COLORS.primary : COLORS.white,
                        borderRadius: SIZES.radius,
                        alignItems: "center",
                        justifyContent: "center",
                        marginRight: SIZES.padding,
                        ...styles.shadow
                    }}
                    onPress={() => onSelectCategory(item)}

                >
                    <View
                        style={{
                            width: 50,
                            height: 50,
                            borderRadius: 25,
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: (selectedCategory?.id == item.id) ? COLORS.white : COLORS.lightGray
                        }}
                    >
                        <Image
                            source={item.icon}
                            resizeMode="contain"
                            style={{
                                width: 30,
                                height: 30
                            }}
                        />
                    </View>
                    <Text
                        style={{
                            marginTop: SIZES.padding,
                            color: (selectedCategory?.id == item.id) ? COLORS.white : COLORS.black,
                            ...FONTS.body5
                        }}
                    >
                        {item.name}
                    </Text>

                </TouchableOpacity>
            )
        }
        return (
            <View style={{ padding: SIZES.padding * 2 }}>
                <Text style={{ ...FONTS.h1 }}>Appliance</Text>
                <Text style={{ ...FONTS.h1 }}>Categories</Text>

                <FlatList
                    data={categories}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => `${item.id}`}
                    renderItem={renderItem}
                    contentContainerStyle={{ paddingVertical: SIZES.padding * 2 }}
                />
            </View>
        )
    }

    function renderProductList() {

        const renderItem = ({ item }) => {
            return (
                <TouchableOpacity style={{ marginBottom: SIZES.padding * 2 }}
                    onPress={() => navigation.navigate("ProductsDetails", {
                        item,

                    })}>
                    <View style={{ marginBottom: SIZES.padding }}>
                        <Image source={item.photo} resizeMode="cover" style={{ width: "100%", height: 200, borderRadius: SIZES.radius }} />

                        <View style={{
                            position: 'absolute', bottom: 0, height: 50, width: SIZES.width * 0.3, backgroundColor: COLORS.white, borderTopRightRadius: SIZES.radius,
                            borderBottomLeftRadius: SIZES.radius, alignItems: 'center', justifyContent: 'center', ...styles.shadow
                        }}>
                            <Text style={{ ...FONTS.h4 }}>{item.menu[0].capacity}</Text>
                        </View>
                    </View>
                    <Text style={{ ...FONTS.body2 }}>{item.name}</Text>
                    <View style={{ marginTop: SIZES.padding, flexDirection: 'row' }}>
                        <Image source={icons.star} style={{ height: 20, width: 20, tintColor: COLORS.primary, marginRight: 10 }} />
                        <Text style={{}}>{item.rating}</Text>
                        <View style={{ flexDirection: 'row', marginLeft: 10 }}>
                            <Text style={{ ...FONTS.body3 }}>${item.price}</Text>
                        </View>
                    </View>
                </TouchableOpacity>)
        }

        return (
            <FlatList data={products} keyExtractor={item => `${item.id}`} renderItem={renderItem}
                contentContainerStyle={{
                    paddingHorizontal: SIZES.padding * 2,
                    paddingBottom: 30
                }}
            />
        )
    }




    return (
        <SafeAreaView style={styles.container}>
            {renderHeader()}
            {renderMainCategories()}
            {renderProductList()}
        </SafeAreaView>

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightGray4
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 1,
    }
})

export default Home;
