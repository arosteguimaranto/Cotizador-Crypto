import styled from "@emotion/styled"

const Label = styled.label`
color: #FFF;
`

export const useSelectMonedas = (label) => {

    const SelectMonedas = () => (
        <>
            <Label>{label}</Label>
        </>


    )
    return [SelectMonedas]


}
