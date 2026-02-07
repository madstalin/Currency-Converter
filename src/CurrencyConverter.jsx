import './CurrencyConverter.css'

import { useState } from 'react'

const CurrencyConverter = (props) => {
    const { fromCurrency, toCurrency } = props
    const [fromAmount, setFromAmount] = useState(1)
    const [toAmount, setToAmount] = useState(2)
    return (
        <div className="container">
            <input
                value={fromAmount}
                placeholder="Enter amount"
                className="converter-input"
                onChange={(event) => {
                    setFromAmount(event.target.value)
                    setToAmount(2 * event.target.value)
                }}
            />
            <p>{fromCurrency}</p>
            <p>=</p>
            <p>{toAmount}</p>
            <p>{toCurrency}</p>
        </div>
    )
}

export default CurrencyConverter
