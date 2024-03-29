import React, {useState} from "react"
import {View, Text, TextInput, Button} from "react-native"
import ResultImc from "./ResultImc/";

export default function Form(){

const [height, setHeight] = useState(null)
const [weight, setWeight] = useState(null)
const [messageImc, setMassageImc] = useState("preencha o peso e altura")
const [imc, setImc] = useState(null)
const [textButton, setTextButton] = useState(null)

function imcCalculator(){
    return setImc((height/(height * height)).toFixed(2))
}

function validationImc(){
    if(weight != null && height != null){
        imcCalculator()
        setHeight(null)
        setWeight(null)
        setMassageImc("Seu imc é igual: ")
        setTextButton("Calcular Novamente")
        return 
    }
    setImc(null)
    setTextButton("Calcular")
    setMassageImc("preencha o peso e altura")

}

    return(
        <View>
            <View>
                <Text>Altura</Text>
                <TextInput
                    onChangeText={setHeight}
                    value={height}
                    placeholder="Ex. 1.75"
                    keyboardType="numeric"
                />
                
                <Text>Peso</Text>
                <TextInput
                    onChangeText={setWeight}
                    value={weight}
                    placeholder="Ex. 75.45"
                    keyboardType="numeric"
                />

                <Button
                    onPress={() => validationImc()} 
                    title={textButton}
                />

                <ResultImc messageResultImc={messageImc} resultImc={imc}/>

            </View>
        </View>
    );
}