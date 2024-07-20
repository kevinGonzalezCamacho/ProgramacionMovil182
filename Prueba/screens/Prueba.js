import React, { useState } from 'react'; 
import { View, Text, Modal, Dimensions, TouchableOpacity } from 'react-native';

import BottomSheet,{
    BottomSheetModal,
    BottomSheetModalProvider,
} from "@gorhom/bottom-sheet"
import bottomSheet from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheet';

const { width, height } = Dimensions.get('window');

export default function Prueba () {
    const [modal, setModal] = useState(false);
    const [bottomSheetRef, setBottomSheetRef] = useState(null);
    const [snapPoints] = ( width * 0.3, height * 0.5, height * 0.9);


    const hey = {} 
    return (
        <BottomSheetModalProvider>
        <BottomSheetModal/>
        <View
        style={{
            backgroundColor: 'rgba(0,0,0,0.8)',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }}
        >
        
        <TouchableOpacity>
            <Text>HOLA</Text>
        </TouchableOpacity>
        </View>

       
        </BottomSheetModalProvider>
    );
}



        /*name='Sheetmodal'
        ref={bottomSheet}
        snapPoints={[height * 0.4, height * 0.5, height * 0.9]}
        />
        <Text> Hola</Text>
        */

/*
<View
style={{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
}}
>
<Modal visible={modal} animationType='slide'>
    <View
        style={{
            backgroundColor: 'rgba(0,0,0,0.8)',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }}
    >
        <TouchableOpacity onPress={() => setModal(false)}>
            <Text 
            style={{ color: '#fff', 
            fontSize: width * 0.04 }}
              >Cerrar Modal</Text>
        onPress={()=> hey()}
        </TouchableOpacity>
    </View>
</Modal>
<TouchableOpacity 
    onPress={() => setModal(true)}
    style={{
        width: width * 0.5,
        height: height * 0.1,
        backgroundColor: '#0088F0',
        borderRadius: width * 0.1,
        justifyContent: 'center',
        alignItems: 'center',
    }}
>
    <Text
        style={{
            color: '#fff',
            fontSize: width * 0.04,
            fontWeight: '500'
        }}
    >
        Abrir Modal
    </Text>
</TouchableOpacity>
</View>
*/