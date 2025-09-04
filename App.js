import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity ,Button, Image ,ImageBackground, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    // Deixa seu app preparado para respeitar áreas seguras da tela (tipo o lugar da câmera e bateria)
    <SafeAreaProvider>
      // Área segura para o conteúdo não ficar atrás do notch, barra de status ou botões do celular
      <SafeAreaView style={styles.container}  edges={['top', 'bottom', 'left', 'right']}>
        <ImageBackground
          source={require('./assets/background.jpg')} 
          style={styles.ImageBackground}
          resizeMode='cover'
        >

        <Image
          source={require('./assets/cafe.png')} 
          style={styles.cafeImage}
        />

        <Text style={styles.title}>
          Coffee is the{'\n'}{/* Quebra de linha no Native */}
          Best thing in{'\n'}
          The world
        </Text>

        <TouchableOpacity style={styles.botao} onPress={() => alert('Botão pressionado')}>
          <Text style={styles.textoBotao}>Faça seu pedido</Text>
        </TouchableOpacity>

        <StatusBar style="dark"/>

        </ImageBackground>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  ImageBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
    cafeImage: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
    title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
    botao: {
    width: 170,
    height: 50,
    justifyContent: 'center', // alinha o texto verticalmente
    alignItems: 'center',     // alinha o texto horizontalmente
    backgroundColor: '#2ECC71',
    borderRadius: 25,
    marginTop: 20,
  },
    textoBotao: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
