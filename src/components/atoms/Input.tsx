import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { Text, TextInput } from 'react-native';

export default function Input(props) {
  const { value, label, hint, clear, prefixIcon, postfixIcon, onPostfixPress, onClear, ...restProps } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        {prefixIcon && <Ionicons name={prefixIcon} size={24} color="#8C8C8C" />}
        <TextInput value={value} style={styles.input} placeholderTextColor="#A3A3A3" {...restProps} />
        {clear && <Ionicons name="close" size={24} color="#8C8C8C" onPress={onClear} />}
        {postfixIcon && <Ionicons name={postfixIcon} size={24} color="#8C8C8C" onPress={onPostfixPress} />}
      </View>
      <Text style={styles.label}>{hint}</Text>
    </View>
  );
}

export function EmailInput(props) {
  return <Input prefixIcon="mail" clear {...props} />;
}

export function PasswordInput(props) {
  const [visible, setVisible] = useState<boolean>(false);
  return (
    <Input
      clear
      prefixIcon="key"
      postfixIcon={visible ? 'eye' : 'eye-off'}
      secureTextEntry={!visible}
      onPostfixPress={() => setVisible(!visible)}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 4,
  },
  inputContainer: {
    padding: 8,
    gap: 8,
    flexDirection: 'row',
    height: 40,
    borderWidth: 1,
    borderColor: '#CACACA',
    borderRadius: 4,
  },
  input: {
    flex: 1,
    fontSize: 15,
    fontFamily: 'EtelkaText',
    lineHeight: 20,
  },
  label: {
    fontSize: 13,
    lineHeight: 16,
    fontFamily: 'EtelkaText',
    color: '#636363',
  },
});
