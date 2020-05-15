import React, { useEffect, useState } from 'react';

import {View, Text} from 'native-base'



const MainDateComponent = ({}) => {
    const [seconds, setSeconds] = useEffect(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(seconds => seconds + 1);
        }, 100);
        return () => clearInterval(interval);
    }, [])


    return(

        <View>
                <Text>
                    {seconds}
                </Text>
        </View>
    )
} 



export default MainDateComponent;



