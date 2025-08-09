import { Pressable, PressableProps } from 'react-native';
import { ReactNode } from 'react';
import { combineClass } from '@utility/combineClasss';

interface ButtonProps extends PressableProps {
  onPress?: () => void;
  className?: string;
  children: ReactNode;
}

const Button = ({ onPress, className, children, ...props }: ButtonProps) => {
  return (
    <Pressable
      className={combineClass('rounded-full px-6 py-3', className)}
      onPress={onPress}
      android_ripple={{ color: 'rgba(255,255,255,0.3)' }}
      {...props}
    >
      {children}
    </Pressable>
  );
};

export default Button;
