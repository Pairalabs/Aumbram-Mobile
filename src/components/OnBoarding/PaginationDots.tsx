import React from 'react';
import { View } from 'react-native';

interface PaginationDotsProps {
  total: number;
  current: number;
}

export const PaginationDots: React.FC<PaginationDotsProps> = ({ total, current }) => {
  return (
    <View className="flex-row items-center gap-2 flex-1">
      {Array.from({ length: total }, (_, index) => (
        <View
          key={index}
          className={`h-2 rounded-full ${
            index === current ? 'w-5 bg-white' : 'w-2 bg-neutral-400'
          }`}
        />
      ))}
    </View>
  );
};