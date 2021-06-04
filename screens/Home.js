import React from 'react';
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    FlatList,
    ScrollView
} from 'react-native';


import { icons, images, SIZES, COLORS, FONTS } from '../constants'

const Home = () => {

    const categoryData = [
        {
            id: 1,
            name: "Home Appliances",
            icon: icons.house,
        },
        {
            id: 2,
            name: "Industry Appliances",
            icon: icons.factory,
        },
    ]

    const productData = [
        {
            id: 1,
            name: 'Rice Cooker',
            photo: images.smallCooker,
            shortDescription: 'High durable, Colorful designs, Brand:  Walton',
            price: 180,
            categories: [2, 4, 6],
            menu: [
                {
                    menuId: 1,
                    name: 'Small Size Rice Cooker',
                    photo: 'https://waltonbd.com/image/cache/catalog/Home%20Appliances/Gas%20stove/wrc-pape/16-364x364.jpg',
                    description: 'Two Aluminum Inner pots, High Temperature resistant Plastic body, High Temperature resistant Poly-carbonate Food Steamer',
                    price: 110,
                    capacity: '1.8 L',
                    power: '700 watt'
                },
                {
                    menuId: 2,
                    name: 'Large Size Rice Cooker',
                    photo: 'https://waltonbd.com/image/cache/catalog/Home%20Appliances/Gas%20stove/wrc-pape/16-364x364.jpg',
                    description: 'Usable For 1.8-2.0 KG Uncooked Rice, Double Aluminum Pot with Non Stick Coating, Seamless Body',
                    price: 210,
                    capacity: '2.8 L',
                    power: '1000 watt'
                },
                {
                    menuId: 3,
                    name: 'Medium Size Rice Cooker',
                    photo: 'https://waltonbd.com/image/cache/catalog/Home%20Appliances/Gas%20stove/wrc-pape/16-364x364.jpg',
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
            categories: [1, 3, 5],
            menu: [
                {
                    menuId: 1,
                    name: 'Small Size Curry Cooker',
                    photo: 'https://waltonbd.com/image/catalog/Home%20Appliances/Curry%20Cooker/WCC-WK30/WCC-WK30-1.jpg',
                    description: 'FASHIONABLE DESIGN & ATTRACTIVE COLOR COOKER, TEMPERED GLASS LID WITH FASHIONABLE STAND TYPE HANDLE. ALUMINUM INNER POT WITH NON-STICK COATING',
                    price: 130,
                    power: '900 watt'
                },
                {
                    menuId: 2,
                    name: 'Large Size Curry Cooker',
                    photo: 'https://waltonbd.com/image/catalog/Home%20Appliances/Curry%20Cooker/WCC-WK50/WK50-700-green.jpg',
                    description: '4.5 litter non-stick curry cooker has unique.Innovative non- stick ceramic coating. Four times more durable than ordinary non-stick surfaces',
                    price: 250,
                    power: '1500 watt'
                },
                {
                    menuId: 3,
                    name: 'Medium Size Curry Cooker',
                    photo: 'https://waltonbd.com/image/catalog/Home%20Appliances/Curry%20Cooker/WCC-WK50/WK50-700-green.jpg',
                    description: 'Fashionable design attractive color cooker.Tempered glass lid with fashionable stand type handle',
                    price: 180,
                    power: '1350 watt'
                },

            ]
        },
        {
            id: 3,
            name: 'Hot Pot',
            shortDescription: 'High durable, Colorful designs, Brand: Best Buy',
            photo: images.largeSizeHotpot,
            price: 160,
            categories: [2, 4, 6],
            menu: [
                {
                    menuId: 1,
                    name: 'Small Size HotPot',
                    photo: 'https://images.othoba.com/images/thumbs/0137581_solar-stelo-hotpot-5000ml.jpeg',
                    description: 'Keeps food hot more than 8 hours, Attractive, New Design, Highly Durable',
                    price: 160,
                    capacity: '1.5 L',
                    power: '1350 watt'
                },
                {
                    menuId: 2,
                    name: 'Medium Size HotPot',
                    photo: 'https://images.othoba.com/images/thumbs/0137570_titan-stelo-hotpot-700ml-by-dpls_300.jpeg',
                    description: 'Keeps food hot more than 10 hours, Attractive, Shiney Design, Highly effective and Durable',
                    price: 190,
                    capacity: '1.8 L',
                    power: '1350 watt'
                },
                {
                    menuId: 3,
                    name: 'Large Size HotPot',
                    photo: 'https://static-01.daraz.com.bd/p/601f129a49642aed365c1a13b8a5aefd.jpg',
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
            menu: [
                {
                    menuId: 1,
                    name: 'Small Fridge',
                    photo: 'https://waltonbd.com/image/catalog/Refrigerator%20and%20Freezer/Direct%20Cool%20Refrigerator/Jan%202017/1X1/id1.jpg',
                    description: '',
                    price: 250,
                    capacity: '101 L',
                    power: '3000 watt'
                },
                {
                    menuId: 2,
                    name: 'Medium Fridge',
                    photo: 'https://waltonbd.com/image/catalog/Refrigerator%20and%20Freezer/Direct%20Cool%20Refrigerator/2019/1D4-GDEL/1.jpg',
                    description: 'Type: Direct Cool, Gross Volume: 157 Ltr, Net Volume: 144 Ltr, Refrigerant: R134a',
                    price: 300,
                    capacity: '157 L',
                    power: '4000 watt'
                },
                {
                    menuId: 3,
                    name: 'Large Fridge',
                    photo: 'https://waltonbd.com/image/cache/catalog/Refrigerator%20and%20Freezer/Direct%20Cool%20Refrigerator/2019/October/WFC-3A7-ELEX-XX/1-364x364.jpg',
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

            menu: [
                {
                    menuId: 1,
                    name: 'Small Washing Machine',
                    photo: 'https://waltonbd.com/image/cache/catalog/Home%20Appliances/Washing/WWM-AFM/wwm-afm60-1-364x364.jpg',
                    description: 'Walton Washing machine is a result of constant innovation which is designed with a view to ease the lives of the people',
                    price: 410,
                    capacity: '6.5 kg',
                    power: '1950 watt'

                },
                {
                    menuId: 2,
                    name: 'Medium Washing Machine',
                    photo: 'https://waltonbd.com/image/cache/catalog/Home%20Appliances/Washing/WWM-AFT80W/wwm-aft80w-white-1-364x364.png',
                    description: 'Front Loading	A+++ Energy Efficiency Class, 140° Wide Angle Super Large Door',
                    price: 480,
                    capacity: '8 kg',
                    power: '2200 watt'
                },
                {
                    menuId: 3,
                    name: 'Large washing Machine',
                    photo: 'https://waltonbd.com/image/cache/catalog/Home%20Appliances/Washing/WWM-AFC90W/wwm-afc90w-1-364x364.png',
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
            menu: [
                {
                    menuId: 1,
                    name: 'Small Air Conditioner',
                    photo: 'https://waltonbd.com/image/cache/catalog/air-conditioner/split-ac/12000-btu/wsi-inverna-12a/01-364x364.jpg',
                    description: '',
                    price: 400,
                    capacity: '1 ton',
                    power: '3517 watt'
                },
                {
                    menuId: 2,
                    name: 'Medium Air Conditioner',
                    photo: 'https://waltonbd.com/image/cache/catalog/air-conditioner/split-ac/18000-btu/wsi-oceanus-voice%20control-18f/02-364x364.jpg',
                    description: 'Compressor Warranty: 10 Years, Spare Parts support: 3 Years, After Sales Service: 1 Year Free',
                    price: 480,
                    capacity: '1.5 ton',
                    power: '5275 watt'
                },
                {
                    menuId: 3,
                    name: 'Large Air Conditioner',
                    photo: 'https://waltonbd.com/image/cache/catalog/air-conditioner/split-ac/24000-btu/wsi-daimond-24c/01-364x364.jpg',
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
            categories: [2, 4, 6],
            menu: [
                {
                    menuId: 1,
                    name: 'Small Petrol Generator',
                    photo: 'https://services.powerequipment.honda.com/content/images/pe/models/eu2200itag_pe_imglg.jpg',
                    description: 'Ideal for TV, DVD, satellite, fridge, coffee, pot, & more, Super quiet & lightweight, Inverter - stable power',
                    price: 850,
                    capacity: 'Based on ampers',
                    power: '2200 watt'
                },
                {
                    menuId: 2,
                    name: 'Medium Size Generator',
                    photo: 'https://services.powerequipment.honda.com/content/images/pe/models/eg2800iag_pe_imglg.jpg',
                    description: 'Trusted, quiet power for home back up & more, Lightweight and portable, Inverter - Fuel efficient, quality power for sensitive equipment & electronics',
                    price: 1150,
                    capacity: 'Based on ampers',
                    power: '3400 watt'
                },
                {
                    menuId: 3,
                    name: 'Large Electric Geneartor',
                    photo: 'https://services.powerequipment.honda.com/content/images/pe/models/eb6500x1ag_pe_imglg.jpg',
                    description: 'Provides 7,000 watts for 10 secs to start larger equipment, Full GFCI protection',
                    price: 1400,
                    capacity: 'Based on ampers',
                    power: '7034 watt'
                },

            ]
        }
    ]


    const [categories, setCategories] = React.useState(categoryData);
    const [selectedCategory, setSelectedCategory] = React.useState(null)
    const [products, setProducts] = React.useState(productData)
    console.log(products)



    function renderHeaderSection() {
        return (
            <View style={{ flexDirection: 'row', height: 50 }}>
                <TouchableOpacity style={{ width: 50, paddingLeft: SIZES.padding * 2, justifyContent: 'center' }}>
                    <Image source={icons.map} resizeMode="contain" style={{ width: 30, height: 30 }} />
                </TouchableOpacity>

                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ width: '70 %', height: '100 %', backgroundColor: COLORS.lightGray4, alignItems: 'center', justifyContent: 'center', borderRadius: SIZES.radius }}>
                        <Text style={{ ...FONTS.h3 }}>Search For Home Appliances</Text>
                    </View>
                </View>
                <TouchableOpacity style={{ width: 50, paddingRight: SIZES.padding * 2, justifyContent: 'center' }}>
                    <Image source={icons.cart} resizeMode="contain" style={{ height: 30, width: 30 }} />
                </TouchableOpacity>

            </View>
        )


    }




    function onSelectCategory(category) {
        console.log(products)
        let productList = products.filter(a => a.categories.includes(category.id))
        setProductDetails(productList)
        setSelectedCategory(category)
    }


    function renderProductCategories() {
        const renderItem = ({ item }) => {
            return (
                <TouchableOpacity style={{
                    padding: SIZES.padding,
                    paddingBottom: SIZES.padding * 2,
                    // backgroundColor:COLORS.primary,
                    backgroundColor: (selectedCategory?.id == item.id) ? COLORS.primary : COLORS.white,
                    borderRadius: SIZES.radius,
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: SIZES.padding,
                    ...styles.shadow
                }}
                    onPress={() => onSelectCategory(item)}
                >

                    <View style={{ width: 50, height: 50, borderRadius: 25, alignItems: 'center', justifyContent: 'center', backgroundColor: COLORS.teal }}>
                        <Image source={item.icon} resizeMode='contain' style={{ width: 30, height: 30 }} />
                    </View>
                    <Text style={{ marginTop: SIZES.padding, color: COLORS.grey, ...FONTS.h4 }}> {item.name}</Text>
                </TouchableOpacity>
            )
        }
        return (
            <View style={{ padding: SIZES.padding * 2, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ ...FONTS.h2, alignitems: 'center' }}>Prdoucts</Text>
                <Text style={{ ...FONTS.h2 }}>We Offer</Text>
                <FlatList
                    data={categories}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => `${item.id}`}
                    renderItem={renderItem}
                    contentContainerStyle={{ paddingVertical: SIZES.padding * 2 }} />

            </View>
        )
    }


    function renderProductList() {

        const renderItem = ({ item }) => {
            <TouchableOpacity style={{ marginBottom: SIZES.padding * 2 }}>
                <View>
                    <Image source={item.photo} resizeMode="cover" style={{ width: "100%", height: "200%", borderRadius: SIZES.radius }} />
                </View>
            </TouchableOpacity>
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

            {renderHeaderSection()}
            {renderProductCategories()}
            {renderProductList()}


        </SafeAreaView>
    );
};




const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightGray3
    },
    shadow: {
        shadowColor: "red",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.8,
        shadowRadius: 3,
        elevation: 0,
    }
})
export default Home;
