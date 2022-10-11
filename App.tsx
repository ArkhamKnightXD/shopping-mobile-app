import {StatusBar} from 'expo-status-bar';
import {useEffect, useState} from 'react';
import {View, FlatList, Alert} from 'react-native';
import Header from "./components/Header";
import ListItem from "./components/ListItem";
import AddItem from "./components/AddItem";
// import axios from "axios";

// const URL = "http://localhost:88";


export default function App() {

    const [items, setItems] = useState([{id: 1, text: "Milk"}]);
    // const [videoGames, setVideoGames] = useState([]);
    //
    useEffect(() => {

        // axios.get(`${URL}/api/v1/video-games`).then(response => {
        //
        //     console.log("Data", response.data);
        //
        //     setVideoGames(response.data);
        // });

    }, []);


    const deleteItem = (id: number) => {

        setItems(previousItem => {

            return previousItem.filter(item => item.id !== id);
        })
    };


    const addItem = (text: string) => {

        if (!text) {

            Alert.alert("Error", "Please enter an item");
        } else {

            setItems(previousItem => {

                return [{id: 5, text}, ...previousItem];
            });
        }
    };


    return (

        <View style={{flex: 1}}>

            <Header title={"Shopping List"}/>

            <AddItem addItem={addItem}/>

            <FlatList data={items} renderItem={({item}) => (
                <ListItem item={item} deleteItem={deleteItem}/>
            )}/>

            <StatusBar style="auto"/>

        </View>
    );
}

