import { StyleSheet } from "react-native";
import { COLORS } from "../../assets/constants";

export const styles = StyleSheet.create({
    image: {
        width: "100%",
        resizeMode: "cover",
        aspectRatio: 5/3
    },

    //bloc1
    title: {
        color: "white",
        fontSize: 35,
        marginTop: 10,
        paddingLeft: 5
    },
    age: {
        backgroundColor: "orange",
        padding: 3,
        borderRadius: 3
    },
    txtGray: {
        color: COLORS.gray,
        paddingHorizontal: 10
    },
    match: {
        color: "#398351",
        fontWeight: "bold",
        marginLeft: 10
    },

    //btn
    playBtn: {
        backgroundColor: "white",
        padding: 9,
        margin: 10,
        borderRadius: 5,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "baseline"
    },
    dlBtn: {
        backgroundColor: COLORS.gray,
        padding: 9,
        marginHorizontal: 10,
        borderRadius: 5,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "baseline"
    },


    //bloc icon
    blocIcons: {
        padding: 20,
        margin: 10,
        alignItems: "center"
    },
    picker: {
        color: "white",
        margin: 5,
        marginLeft: 15,
        width: 130
    }
})