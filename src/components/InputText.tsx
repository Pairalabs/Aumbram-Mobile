import { View, Text } from 'react-native'
import React, { FC } from 'react'

interface Props {
    label: string;
}

const InputText: FC<Props> = ({
    label
}) => {
    return (
        <View>

            <Text>{label}</Text>
        </View>
    )
}


export default InputText;