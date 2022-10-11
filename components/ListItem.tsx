import {View, TouchableOpacity, Text} from "react-native";
// @ts-ignore
import Entypo from "react-native-vector-icons/Entypo";
import useStyles from "./useStyles";

const style = useStyles();

interface Item {
    id: number;
    text: string;
}

interface ListItemProps {
    item: Item;
    deleteItem: (id: number) => void;
}

const ListItem = ({item, deleteItem}: ListItemProps) => {

    return (

        <TouchableOpacity style={style.listItem}>

            <View style={style.listItemView}>
                <Text style={style.listItemText}>{item.text}</Text>

                <Entypo onPress={() => deleteItem(item.id)} name="minus" size={24} color="black" />

            </View>
        </TouchableOpacity>
    );
};

export default ListItem;
