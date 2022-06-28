import { useState } from "react"

export const AddCategory = ({ addCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = (e) => {

        setInputValue(e.target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault(); //Evita el reload por el enter en el form
        const newValue = inputValue.trim()
        if (newValue) {
            setInputValue('')
            addCategory(newValue)
        }
    }

    return (
        <form onSubmit={(event) => onSubmit(event)}>
            <input
                type="text"
                placeholder="Buscar Gifs"
                value={inputValue}
                onChange={(event) => onInputChange(event)}
            />
        </form>
    )
}
