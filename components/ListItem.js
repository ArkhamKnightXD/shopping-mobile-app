import {View, TouchableOpacity, Text} from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import useStyles from "./useStyles";
import PropTypes from "prop-types";

const style = useStyles();

const ListItem = ({item, deleteItem}) => {

    return (

        <TouchableOpacity style={style.listItem}>

            <View style={style.listItemView}>
                <Text style={style.listItemText}>{item.text}</Text>

                <Entypo onPress={() => deleteItem(item.id)} name="minus" size={24} color="black" />

            </View>
        </TouchableOpacity>
    );
};

ListItem.propTypes = {

    item: PropTypes.object.isRequired,
    deleteItem: PropTypes.func.isRequired
}

export default ListItem;
