import {/*useEffect,*/ useState} from 'react';
import {View, FlatList, Alert, Text} from 'react-native';
import ListItem from "./components/ListItem";
import AddItem from "./components/AddItem";
import useStyles from "./components/useStyles";
import ModalNative from "./components/ModalNative";
// import axios from "axios";

// const URL = "http://localhost:88";

const style = useStyles();

//Las interfaces pueden exportarse para asi no tener que definirla varias veces.
export interface Item {
    id: number;
    text: string;
    price: number;
}

const initialState: Item = {id: 1, text: "Milk", price: 10.99};

export default function App() {

    const [items, setItems] = useState<Item[]>([initialState]);
    const [actualItem, setActualItem] = useState<Item>(initialState);
    const [isModalVisible, setIsModalVisible] = useState(false);


    // const [videoGames, setVideoGames] = useState([]);
    //
    // useEffect(() => {
    //
    //     axios.get(`${URL}/api/v1/video-games`).then(response => {
    //
    //         console.log("Data", response.data);
    //
    //         setVideoGames(response.data);
    //     });
    //
    // }, []);

    const openModal = (actualItem: Item) => {

        setActualItem(actualItem);

        setIsModalVisible(true);
    };


    const deleteItem = (id: number) => {

        setItems(previousItem => {

            return previousItem.filter(item => item.id !== id);
        })
    };


    const addItem = (text: string) => {

        if (!text)
            Alert.alert("Error", "Please enter an item");

        else {

            setItems(previousItem => {

                return [{id: Math.random(), text, price: 0}, ...previousItem];
            });
        }
    };


    return (

        <View style={{flex: 1}}>

            <View style={style.header}>
                <Text style={style.text}>Shopping List</Text>
            </View>

            <AddItem addItem={addItem}/>

            <FlatList data={items} renderItem={({item}) => (
                <ListItem item={item} deleteItem={deleteItem} openModal={openModal}/>
            )}/>

            <ModalNative isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible}
                         actualItem={actualItem}  items={items} setItems={setItems}/>
        </View>
    );
}

