import React from "react";
import { View, Text, Image, ImageBackground } from "react-native";

interface CircleImage {
  uri: string;
  size: number;
  top: number;
  left: number;
}

interface OnboardingContentProps {
  title: string;
  subtitle: string;
  circles: CircleImage[];
  backgroundUri: string;
}

export const OnboardingContent: React.FC<OnboardingContentProps> = ({
  title,
  subtitle,
  circles,
  backgroundUri,
}) => {
  return (
    <ImageBackground
      source={{ uri: backgroundUri }}
      className="flex-1 relative"
      blurRadius={20}
    >
      {/* Circle images */}
      {circles.map((circle, index) => (
        <View
          key={index}
          style={{
            width: circle.size,
            height: circle.size,
            top: circle.top,
            left: circle.left,
          }}
          className="absolute rounded-full overflow-hidden border border-white/20"
        >
          <Image
            source={{ uri: circle.uri }}
            className="w-full h-full"
            resizeMode="cover"
          />
        </View>
      ))}

      {/* Text at bottom left */}
      <View className="absolute bottom-16 left-6 right-6">
        <Text className="text-white text-2xl font-bold mb-2">
          {title}
        </Text>
        <Text className="text-gray-300 text-base leading-6">
          {subtitle}
        </Text>
      </View>
    </ImageBackground>
  );
};
