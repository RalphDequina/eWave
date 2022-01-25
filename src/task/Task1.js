/* Task 1:
Create an array of colors (as strings). Create a createColorManager function that produces colorManager. colorManager should only have methods (and no properties):
 
● get - return the currently selected color
● next - switch to the next color
● prev - switch to the previous color
● reset - switch to original color

The default color can be passed to the createColorManager function. Each colorManager should
have its own independent color. */

import { useState } from "react";


export default function CreateColorManager() {

    const colorArr = ["blue", "red", "orange", "green", "violet", "yellow", "pink", "black", "white"];

    const [color, setColor] = useState(colorArr[0]);
    const [index, setIndex] = useState(1);

    function Get() {
        setIndex(0);
        return (setColor(colorArr[0]))
    }

    function Next() {
        if (index >= colorArr.length) {
            setIndex(colorArr.length-1)
            return (setColor(colorArr[colorArr.length-1]))
        } 
        else {
            setIndex(index+1)
            return (setColor(colorArr[index]))
        }
    }
    
    function Prev() {
        if (index == 0) {
            setIndex(0)
            return (setColor(colorArr[0]));
        } 
        else if (index >= colorArr.length) {
            setIndex(colorArr.length-1)
            return (setColor(colorArr[index]))
        }
        else {
            setIndex(index-1)
            return (setColor(colorArr[index]))
        }
    }
    


    return (
        <div className="container">
            <h2>Task 1</h2>
            <span>Color Array: {colorArr.map((colors) => (<span key={colors}> {colors} </span>))}</span>
            <h2>{color}</h2>
            <button onClick={() => Get()}>Get</button>{' '}
            <button onClick={() => Next()}>Next</button>{' '}
            <button onClick={() => Prev()}>Previous</button>
        </div>
    )
}
