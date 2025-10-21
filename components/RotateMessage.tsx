import { StyleSheet, Text, View } from 'react-native';

export default function RotateMessage () {
    return <View style={RotateStyles.main}><Text>Rotate device to landscape</Text></View>
}

const RotateStyles = StyleSheet.create({
    main: {
        display: "flex",
        alignItems: "center",
        top: 200,
    }
})