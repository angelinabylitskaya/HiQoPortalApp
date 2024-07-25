import * as React from 'react';
import { StyleSheet, Image, View, Text, Pressable } from 'react-native';
import Animated, { useSharedValue, withSequence, withSpring, withTiming } from 'react-native-reanimated';
import { Dimensions } from 'react-native';
import { useColorScheme } from '@/core/hooks/useColorScheme';
import Colors, { useColors } from '@/core/constants/colors';
import { Link, useNavigation } from 'expo-router';

const logo = require('@/assets/logo.png');
const buttonDelay = 1000;

export default function AuthPage() {
  const size = useSharedValue(100);
  const buttonWidth = useSharedValue(0);
  const buttonHeight = useSharedValue(0);
  const buttonBorderWidth = useSharedValue(0);
  const width = (Dimensions.get('window').width / 3) * 2;
  const colorScheme = useColorScheme();
  const colors = useColors(colorScheme);
  const navigation = useNavigation();

  React.useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  React.useEffect(() => {
    size.value = withSpring(width);
    buttonWidth.value = withSequence(withTiming(0, { duration: buttonDelay }), withTiming(width, { duration: 300 }));
    buttonHeight.value = withSequence(withTiming(0, { duration: buttonDelay }), withTiming(68, { duration: 300 }));
    buttonBorderWidth.value = withSequence(withTiming(0, { duration: buttonDelay }), withTiming(2, { duration: 300 }));
  }, [width]);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Animated.View style={{ width: size, height: size }}>
        <Image
          style={{
            objectFit: 'cover',
            width: '100%',
            height: '75%',
          }}
          source={logo}
        />
      </Animated.View>
      <Animated.View
        style={[
          styles.buttonContainer,
          {
            width: buttonWidth,
            height: buttonHeight,
            borderWidth: buttonBorderWidth,
          },
        ]}
      >
        <Link href="LoginForm" asChild>
          <Pressable style={[styles.button, { backgroundColor: colors.background }]}>
            <Text style={[styles.buttonLabel, { color: Colors.common.primary }]}>Login</Text>
          </Pressable>
        </Link>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 0,
    height: 0,
    borderWidth: 0,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
    borderColor: Colors.common.primary,
    borderRadius: 18,
  },
  button: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    color: '#fff',
    fontSize: 16,
  },
});
