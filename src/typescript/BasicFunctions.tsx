export const BasicFunctions = () => {
    const addTwoNumbers = (a: number, b: number): number => {
        return a + b;
    }


    return (
        <>
            <h3>Funciones</h3>
            <span>Elresultado de sumar: { addTwoNumbers(2, 3) }</span>
        </>
    )
}