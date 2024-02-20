var functionScoped = 2;
let blockScoped = 5;
const constant1 = functionScoped - blockScoped;
let numberArray1 = [1, 2, 3, 4, 5];
let stringArray1 = ['string1', 'string2'];

let variableArray1 = [
    functionScoped,   blockScoped,
    constant1,        numberArray1,   stringArray1
];
const formattedVariableArray1 = `${functionScoped}${blockScoped}${constant1}${numberArray1.join('')}${stringArray1.join('')}`;


function WorkingWithArrays() {
    return (
        <>
            <h3>Working with Arrays</h3>
            numberArray1 = {numberArray1.join('')}<br/>
            stringArray1 = {stringArray1.join('')}<br/>
            variableArray1 = {formattedVariableArray1}<br/>
        </>
    );
}
export default WorkingWithArrays