import { View, StyleSheet, Text } from "react-native";

export default function() {
    return(
        <View style={styles.container}> 
            <Text>Móviles</Text>
            <Text>Dana Carolina Moreno Jiménez</Text>
            <Text>21470089@campeche.tecnm.mx</Text>
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