import {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import Entypo from "react-native-vector-icons/Entypo";
import useStyles from "./useStyles";
import PropTypes from "prop-types";

const style = useStyles();

const AddItem = ({addItem}) => {

    const [text, setText] = useState('');


    const handleChangeText = (textValue) => {

        setText(textValue);
    };


    return (
        <View>

            <TextInput
                placeholder="Add Item..."
                style={style.input}
                onChangeText={handleChangeText}
                value={text}
            />
            <TouchableOpacity
                style={style.btn}
                onPress={() => {
                    addItem(text);
                    setText('');
                }}>
                <Text style={style.btnText}>
                    <Entypo name="plus" size={24} color="black" /> Add Item
                </Text>
            </TouchableOpacity>
        </View>
    );
};

AddItem.propTypes = {

    addItem: PropTypes.func.isRequired
}

export default AddItem;
