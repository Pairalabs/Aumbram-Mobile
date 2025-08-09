import React, { useState, useRef } from 'react';
import { View, TextInput, NativeSyntheticEvent } from 'react-native';

const OtpInput = () => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const inputsRef = useRef<Array<TextInput | null>>([]);

  const handleOtpChange = (value: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move focus to next input if value entered
    if (value && index < newOtp.length - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (e: NativeSyntheticEvent<{ key: string }>, index: number) => {
    if (e.nativeEvent.key === 'Backspace' && otp[index] === '' && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  return (
    <View className="flex-row justify-center mt-12">
      {otp.map((digit, index) => (
        <TextInput
          key={index}
          className="w-12 h-12 border text-white border-gray-300 mx-1 text-center text-lg rounded"
          maxLength={1}
          keyboardType="numeric"
          onChangeText={value => handleOtpChange(value, index)}
          onKeyPress={e => handleKeyPress(e, index)}
          value={digit}
          ref={el => {
            inputsRef.current[index] = el;
          }}
        />
      ))}
    </View>
  );
};

export default OtpInput;
