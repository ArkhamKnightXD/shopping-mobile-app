import {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import useGeneralStyles from "./useGeneralStyles";
// @ts-ignore
import Entypo from "react-native-vector-icons/Entypo";

const style = useGeneralStyles();

interface AddItemProps {

    addItem: (text: string) => void;
}

const AddItem = ({addItem}: AddItemProps) => {

    const [text, setText] = useState('');


    const handleChangeText = (textValue: string) => {

        setText(textValue);
    };


    const handleAddItem = (text: string) => {

        addItem(text);
        setText("");
    };


    return (
        <View>

            <TextInput placeholder="Add Item..." style={style.input} onChangeText={handleChangeText} value={text}/>

            <TouchableOpacity style={style.btn} onPress={() => handleAddItem(text)}>

                <Text style={style.btnText}><Entypo name="plus" size={24} color="white"/> Add Item</Text>

            </TouchableOpacity>

        </View>
    );
};


export default AddItem;
