import { View, StyleSheet, Text, Button } from "react-native";

export default function Home({navigation}) {
    return(
        <View style={styles.container}>
            <Text>Demostración de uso de la navegación de pila (Stack)</Text>
            <Button
            title="Acerca de..."
            onPress= {() => {
                navigation.navigate("About")
            }} />
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f5f5f5',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 20
    },
  });