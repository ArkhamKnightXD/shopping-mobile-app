import {View, TouchableOpacity, Text} from "react-native";
// @ts-ignore
import Entypo from "react-native-vector-icons/Entypo";
import useGeneralStyles from "./useGeneralStyles";
import {Item} from "../App";

const style = useGeneralStyles();

interface ListItemProps {
    item: Item;
    deleteItem: (id: number) => void;
    openModal: (actualItem: Item) => void;
}

const ListItem = ({item, deleteItem, openModal}: ListItemProps) => {

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
