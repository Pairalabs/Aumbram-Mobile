import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import ImagePaths from '@constants/ImagePaths';

interface OnboardingHeaderProps {
  onSkip?: () => void;
}

export const OnboardingHeader: React.FC<OnboardingHeaderProps> = ({ onSkip }) => {
  return (
    <View className="absolute top-0 left-0 right-0 px-6 pt-4">
      {/* Row: Logo + Skip */}
      <View className="flex-row justify-between items-center">
        {/* Logo */}
        <Image
          source={ImagePaths.tittle} // Your AUMBRAM logo
          className="w-28 h-8"
          resizeMode="contain"
        />

        {/* Skip button */}
        <TouchableOpacity
          onPress={onSkip}
          className="flex-row items-center px-3 py-1.5 rounded-full bg-white/10"
        >
          {/* <Image
            source={ImagePaths.skipIcon} // Replace with your skip icon asset
            className="w-3.5 h-3.5 mr-1"
            resizeMode="contain"
          /> */}
          <Text className="text-white text-sm font-medium">Skip</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
