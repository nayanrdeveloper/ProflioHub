import React from 'react';
import { View, StyleSheet } from 'react-native';

interface CommonLayoutProps {
    children: React.ReactNode;
}

const CommonLayout: React.FC<CommonLayoutProps> = ({ children }) => {
    return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20, // Fixed padding
        marginVertical: 10, // Optional: Fixed margin if needed
        justifyContent: 'center', // Center content vertically
        backgroundColor: '#ffffff', // Background color
    },
});

export default CommonLayout;
