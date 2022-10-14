import {Image, View, Text} from "react-native";

const ItemCard = () => {

    return (

        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>

            <View style={{ backgroundColor: "#eee", borderRadius: 10, overflow: "hidden" }}>
                <View>
                    <Image
                        source={require("../assets/owl.jpeg")}
                        style={{height: 150, width: 170}}
                    />
                </View>

                <View style={{ padding: 10, width: 155 }}>

                    <Text>How to draw an owl</Text>

                    <Text style={{ color: "#777", paddingTop: 5 }}>
                        This is how you draw an owl
                    </Text>
                </View>
            </View>
        </View>
    );
};

export default ItemCard;
