import React from 'react';
import { TouchableOpacity, Image } from 'react-native';

interface NavigationButtonProps {
  onPress?: () => void;
  disabled?: boolean;
}

export const NavigationButton: React.FC<NavigationButtonProps> = ({
  onPress,
  disabled = false
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      className={`w-12 h-12 rounded-full items-center justify-center gap-0 p-3
        ${disabled ? 'bg-white/10' : 'bg-white/10'} 
        backdrop-blur-sm`}
    >
      <Image
        source={{
          uri: "https://api.builder.io/api/v1/image/assets/TEMP/1f6bf801e4f5205a85aed8d41cef16a3fe49a33e?placeholderIfAbsent=true&apiKey=2aecceabfaec47a29eaffb0f4bde86a3",
        }}
        className="w-6 h-6"
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
};