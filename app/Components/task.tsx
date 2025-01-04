import React from "react";
import {View, Text, StyleSheet} from "react-native";

const Task = (props) => {

    return(
        <View style={styles.task}>
            <View style = {styles.rectangle}></View>
            <Text style={styles.taskText}>{props.text}</Text>
        </View>
    )
}

export default Task;

const styles = StyleSheet.create({
    task:{
        backgroundColor: '#FFF',
        width: "90%",
        padding: 12,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        marginBottom: 15,
    },
    rectangle:{
        backgroundColor: "#3d85c6",
        width: 15,
        height: 15,
        marginRight: 8,
        marginLeft: 2,
    },
    taskText:{
        fontSize: 18,
        marginLeft: 12,
    }
});