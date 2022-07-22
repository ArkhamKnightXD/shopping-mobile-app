import {Text, View} from "react-native";
import PropTypes from "prop-types";
import useStyles from "./useStyles";

const style = useStyles();

const Header = ({title}) => {
    return (
        <View style={style.header}>
            <Text style={style.text}>{title}</Text>
        </View>
    );
};


Header.propTypes = {

    title: PropTypes.string.isRequired,
}

export default Header;
