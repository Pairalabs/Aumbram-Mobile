import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import Video from 'react-native-video';
import { BlurView } from '@react-native-community/blur';
import { NavigationButton } from '@components/OnBoarding/NavigationButton';
import { OnboardingHeader } from '@components/OnBoarding/OnBoardingHeader';
import { PaginationDots } from '@components/OnBoarding/PaginationDots';
import ImagePaths from '@constants/ImagePaths';

export const Onboarding1: React.FC = () => {
    const handleSkip = () => console.log('Skip pressed');
    const handleNext = () => console.log('Next pressed');

    const circles = [
        { uri: ImagePaths.onboardingimg1, size: 80, top: 80, left: 40 },
    ];

    return (
        <View className="flex-1 bg-black">
            {/* Video Background */}
            <Video
                source={ImagePaths.onboardingmedia1} // require or import your mp4
                style={StyleSheet.absoluteFill}
                resizeMode="cover"
                repeat
                muted
                rate={1.0}
                ignoreSilentSwitch="obey"
            />

            {/* Blur Overlay */}
            <BlurView
                style={StyleSheet.absoluteFill}
                blurType="light"
                blurAmount={20}
                overlayColor="rgba(255,255,255,0)"
            />

            {/* Onboarding Content */}
            <View className="absolute inset-0" pointerEvents="box-none">
                <OnboardingHeader onSkip={handleSkip} />

                {/* Circle images */}
                <View className="flex-1 relative">
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
                                source={circle.uri}
                                className="w-full h-full"
                                resizeMode="cover"
                            />
                        </View>
                    ))}

                    {/* Text section at bottom-left */}
                    <View className="absolute bottom-24 left-6 right-6 flex flex-col justify-end items-start gap-3 flex-1 self-stretch">
                        <Text className="text-white font-satoshi font-bold text-[28px]">
                            Empowering India’s Entrepreneurs
                        </Text>
                        <Text className="text-[#E0E0E0] font-inter text-[16px]">
                            Discover unique products, experiences, and skills — all in one place.
                        </Text>
                    </View>
                </View>

                {/* Pagination & Navigation */}
                <View className="pb-8 px-6">
                    <View className="flex-row justify-between items-center">
                        <PaginationDots total={4} current={0} />
                        <NavigationButton onPress={handleNext} />
                    </View>
                </View>
            </View>
        </View>
    );
};

export default Onboarding1;
