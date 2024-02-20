const square = (a: number) => a * a;
const twoSquared = square(2);
console.log(twoSquared);
const plusOne = (a: number) => a + 1;
const threePlusOne = plusOne(3);
console.log(threePlusOne);


function FunctionParenthesisAndParameters() {
    return (
        <>
            <h3>Parenthesis and parameters</h3>
            twoSquared = {twoSquared}<br/>
            square(2) = {square(2)}<br/>
            threePlusOne = {plusOne(3)}<br/>
            plusOne(3) = {plusOne(3)}<br/>
        </>
    );
}
export default FunctionParenthesisAndParameters