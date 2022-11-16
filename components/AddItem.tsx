// @ts-ignore
import Entypo from "react-native-vector-icons/Entypo";
import {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import useGeneralStyles from "./useGeneralStyles";
import {API_URL, Item} from "../App";
import axios from "axios";

const style = useGeneralStyles();

interface AddItemProps {

    setItems: (value: Item[]) => void;
}

const AddItem = ({setItems}: AddItemProps) => {

    const [text, setText] = useState("");


    const handleChangeText = (textValue: string) => {

        setText(textValue);
    };


    const handleAddItem = () => {

        const itemToSave = {name: text, sellPrice: 0};

        axios.post(`${API_URL}/api/v1/games/`, itemToSave).then(response => {

            setItems(response.data);
        });

        setText("");
    };


    return (

        <View>

            <TextInput placeholder="Add Item..." style={style.input} onChangeText={handleChangeText} value={text}/>

            <TouchableOpacity style={style.btn} onPress={() => handleAddItem()}>

                <Text style={style.btnText}><Entypo name="plus" size={24} color="white"/>Add Item</Text>

            </TouchableOpacity>

        </View>
    );
};


export default AddItem;
