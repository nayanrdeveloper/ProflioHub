import LoginScreen from '@/src/screen/Login/LoginScreen';
import { Text, View } from 'react-native';

export default function index() {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
            }}
        >
            <LoginScreen />
        </View>
    );
}
