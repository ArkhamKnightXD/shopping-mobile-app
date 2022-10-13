// @ts-ignore
import Entypo from "react-native-vector-icons/Entypo";
import {View, TouchableOpacity, Text} from "react-native";
import useGeneralStyles from "./useGeneralStyles";
import {API_URL, Item} from "../App";
import axios from "axios";

const style = useGeneralStyles();

interface ListItemProps {

    item: Item;
    setItems: (value: Item[]) => void;
    openModal: (actualItem: Item) => void;
}

const ListItem = ({item, setItems, openModal}: ListItemProps) => {

    const deleteItem = (itemId: number) => {

        axios.delete(`${API_URL}/api/v1/video-games/${itemId}`).then(response => {

            setItems(response.data);
        });
    };


    return (

        <TouchableOpacity style={style.listItem}>

            <View style={style.listItemView}>

                <Text style={style.listItemText}>{item.name}</Text>
                <Text style={style.listItemText}>{item.sellPrice}</Text>

                <Entypo onPress={() => openModal(item)} name="plus" size={24} color="black"/>
                <Entypo onPress={() => deleteItem(item.id)} name="minus" size={24} color="black"/>

            </View>
        </TouchableOpacity>
    );
};

export default ListItem;
