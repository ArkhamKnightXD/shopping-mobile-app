import {useEffect, useState} from 'react';
import {View, FlatList, Text} from 'react-native';
import ListItem from "./components/ListItem";
import AddItem from "./components/AddItem";
import useGeneralStyles from "./components/useGeneralStyles";
import ModalNative from "./components/ModalNative";
import axios from "axios";

export const API_URL = "http://localhost:88";

const style = useGeneralStyles();

//Las interfaces pueden exportarse para asi no tener que definirla varias veces.
export interface Item {

    id: number;
    name: string;
    sellPrice: number;
}

const initialState: Item = {id: 1, name: "Milk", sellPrice: 10.99};

export default function App() {

    const [items, setItems] = useState<Item[]>([initialState]);
    const [actualItem, setActualItem] = useState<Item>(initialState);
    const [isModalVisible, setIsModalVisible] = useState(false);


    useEffect(() => {

        axios.get(`${API_URL}/api/v1/video-games`).then(response => {

            setItems(response.data);
        });

    }, []);


    const openModal = (actualItem: Item) => {

        setActualItem(actualItem);

        setIsModalVisible(true);
    };


    return (

        <View style={{flex: 1}}>

            <View style={style.header}>
                <Text style={style.text}>List</Text>
            </View>

            <AddItem setItems={setItems}/>

            <FlatList data={items} renderItem={({item}) => (
                <ListItem item={item} setItems={setItems} openModal={openModal}/>
            )}/>

            <ModalNative isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible}
                         actualItem={actualItem} setItems={setItems}/>
        </View>
    );
}

