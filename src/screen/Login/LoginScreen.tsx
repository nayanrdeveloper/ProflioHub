import { View, Text, Image, StyleSheet, TextInput } from 'react-native';
import React from 'react';
import Input from '@/src/components/common/Input';
import CommonLayout from '@/src/components/layouts/CommonLayouts';
import CommonButton from '@/src/components/common/CommonButton';
import { Colors } from '@/src/constants/Colors';
import { useRouter } from 'expo-router';

export default function LoginScreen() {
    const onchangeEmail = () => {
        console.log('Hello');
    };

    const onHandleLogin = () => {};
    const router = useRouter();

    return (
        <CommonLayout>
            <View style={styles.container}>
                <View>
                    <Image
                        source={require('../../../assets/images/logo/logo_favicon.png')}
                        style={styles.logo_image}
                    />
                </View>
                <View>
                    <Input
                        label="Email"
                        placeholder="Enter your email"
                        onChangeText={onchangeEmail}
                        value="nayanrdeveloper@gmail.com"
                    />
                    <Input
                        label="Password"
                        secureTextEntry
                        placeholder="Enter your email"
                        onChangeText={onchangeEmail}
                        value="nayanrdeveloper@gmail.com"
                        isFocused={true}
                    />
                </View>

                <CommonButton title="Submit" onPress={onHandleLogin} />

                <View style={styles.sign_up_label}>
                    <Text style={{}}>
                        Don't have an account?
                        <Text
                            onPress={() => router.push('/registration')}
                            style={styles.sign_up_text}
                        >
                            {' '}
                            Sign Up
                        </Text>
                    </Text>
                </View>
            </View>
        </CommonLayout>
    );
}

const styles = StyleSheet.create({
    container: {
        // flexDirection: 'column',
        // columnGap: 20,
        // marginTop: 10,
    },
    sign_up_label: {
        textAlign: 'center',
        alignItems: 'center',
        marginTop: 5,
    },
    sign_up_text: {
        color: Colors.primary,
    },
    logo_image: {
        width: 100,
        height: 100,
    },
});
