import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Image, ScrollView } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';

const Home = ({navigation}) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const Tab = createBottomTabNavigator();

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.header}>
                    <TouchableOpacity onPress={toggleMenu} style={styles.menuButton}>
                        <FontAwesome name={menuOpen ? 'times' : 'bars'} size={24} color="black" />
                    </TouchableOpacity>
                    <Text style={styles.headerText}>Most Preferred Foods</Text>
                </View>

       
        {menuOpen && (
            <View style={styles.menuItems}>
                <Text style={styles.menuItem}>Pizzas</Text>
                <Text style={styles.menuItem}>Hamburgers</Text>
                <Text style={styles.menuItem}>Red Meats</Text>
                <Text style={styles.menuItem}>White Meats</Text>
                <Text style={styles.menuItem}>Pastas</Text>
            </View>
        )}
            

                <View style={styles.boxContainer}>
                    <Box name='Mixed Pizza' category='Pizzas' imageuri='https://images.deliveryhero.io/image/fd-tr/LH/t5vx-hero.jpg' />
                    <Box name='Beef Burger' category='Hamburgers' imageuri='https://cdn.yemek.com/mnresize/940/940/uploads/2016/05/ev-yapimi-hamburger.jpg' />
                </View>
                <View style={styles.boxContainer}>
                    <Box name='Beef Faita' category='Red Meats' imageuri='https://mavibeyazrestaurant.com/upload/resimler/Et_Fajita.jpg' />
                    <Box name='Chicken Steak' category='White Meats' imageuri='https://www.sahimevlana.com/wp-content/uploads/2018/12/Tavuk_Bonfile-1024x683.jpg' />
                </View>
                <View style={styles.boxContainer}>
                    <Box name='Veal Turkish Delight' category='Red Meats' imageuri='https://hamarat.org/images/Lokum-Bonfile-16.jpg' />
                    <Box name='Penne Arabiata' category='Pastas' imageuri='https://gastromanya.com/wp-content/uploads/2016/10/penne-arabiata-makarna-tarifi-lionkingx-nasil-yapilir-yemek.jpg' />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    header: {
        flexDirection: 'row',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    menuButton: {
        marginRight: 10,
    },
    headerText: {
        fontSize: 20,
        textAlign: 'center',
        flex: 1,
        justifyContent: 'center',
    },
    menuItems: {
        padding: 10,
        backgroundColor: '#f1f1f1',
        borderWidth: 1,
    },
    boxContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
    },
    box: {
        flex: 1,
        alignItems: 'center',
        height: 200,
        margin: 5,
        borderWidth: 1,
    },
    image: {
        resizeMode: 'cover',
        width: '100%',
        height: 154,
        borderRadius: 10,
    },
    menuItem: {
        fontSize: 16,
        paddingVertical: 5,
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

function Box(props) {
    return (
        <TouchableOpacity style={styles.boxContainer}>
            <View style={[styles.box, { borderRadius: 10 }]}>
                <Image source={{ uri: props.imageuri }} style={styles.image} />
                <Text style={{ fontWeight: '800', borderRadius: 10 }}>{props.name}</Text>
                <Text style={{ color: "gray" }}>{props.category}</Text>
                <Text>{props.description}</Text>
            </View>
        </TouchableOpacity>
    );
}

var props = {
    name: "Mixed Pizza",
    category: "Pizzas",
    imageuri: "https://images.deliveryhero.io/image/fd-tr/LH/t5vx-hero.jpg",
}

export default Home;
