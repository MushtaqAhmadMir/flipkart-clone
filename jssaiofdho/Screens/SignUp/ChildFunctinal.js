import React from 'react';
import {View,Text,Modal} from 'react-native'


export default function Test({children,isVisible=false}){

    return(
        <Modal visible={isVisible}>
            {children}
            
        </Modal>
    )
}