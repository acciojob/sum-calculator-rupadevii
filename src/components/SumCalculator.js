import React, { useEffect, useState } from 'react'

const SumCalculator = () => {
    const [sum, setSum] = useState(0)
    const [input, setInput] = useState(0)
    const [nums, setNums] = useState([0])

    function handleChange(e){
        setInput(e.target.value)
        let currValue = Number(e.target.value)
        if(currValue){
            setNums((prev) => [...prev, currValue])
        }
    }

    useEffect(() => {
        setSum(nums.reduce((acc, ele) => acc+ele), 0)
    }, [nums])

    return (
        <div>
        <h1>Sum Calculator</h1>
        <input 
            type="number"
            onChange={handleChange}
            value={input} />
        <p>Sum: {sum}</p>
        </div>
    )
}

export default SumCalculator
