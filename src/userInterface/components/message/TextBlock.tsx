import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TextBlock = ({ text }: { text: string }) => {
    console.log("Textxttxtx", text)
    return (
        <View style={[styles.container, styles.assistantContainer]}>
            <View style={[styles.bubble, styles.assistantBubble]}>
                    <Text style={styles.text}>
                        {text}
                    </Text>
            </View>
        </View>
    );

};

const styles = StyleSheet.create({
    container: {
        marginVertical: 6,
        paddingHorizontal: 8,
    },
    userContainer: {
        alignItems: 'flex-end',
    },
    assistantContainer: {
        alignItems: 'flex-start',
    },
    bubble: {
        borderRadius: 18,
        padding: 14,
        maxWidth: '90%',
        alignSelf: 'flex-start',
        overflow: 'visible',
    },
    userBubble: {
        backgroundColor: '#0A84FF',
    },
    assistantBubble: {
        backgroundColor: '#1f1f1f',
    },
    text: {
        color: 'white',
        fontSize: 17,
        lineHeight: 24,
        flexShrink: 1,
        flexWrap: 'wrap',
    },
});

export default TextBlock;