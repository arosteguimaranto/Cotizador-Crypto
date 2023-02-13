import React from 'react'
import styled from '@emotion/styled'
import { useSelectMonedas } from '../hooks/useSelectMonedas'

const InputSubmit = styled.input`
background-color: #9497ff;
border: none;
width: 100%;
padding: 10px;
color: #FFF;
font-weight: 700;
text-transform: uppercase;
font-size: 20px;
border-radius: 5px;
transition:  background-color .3s ease;

&:hover {
    background-color: #7A7DFE;
    cursor: pointer;
}

`


export const Formulario = () => {
    const monedas = [
        {id: 'USD', nombre:'Dolar de Estados Unidos'},
        {id: 'MXN', nombre:'Peso Mexicano'},
        {id: 'EUR', nombre:'Euro'},
        {id: 'GBP', nombre:'Libre Esterlina'}
    ]

    const [SelectMonedas] = useSelectMonedas('Elige tu Moneda', monedas)
    //const [SelectCriptomonedas] = useSelectMonedas('Elige tu Criptomoneda')
    return (
        <form>
            <SelectMonedas />
            

            <InputSubmit
                type="submit"
                value="Cotizar"
            />
        </form>
    )
}
