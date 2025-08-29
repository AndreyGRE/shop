import React from "react";

const QuantityInput = ({ quantity, onChange }) => {

    const [isEditing, setIsEditing] = React.useState(false);
    const [inputValue, setInputValue] = React.useState(quantity.toString());

    React.useEffect(() => {
        setInputValue(quantity.toString());
    }, [quantity]);

   const handleBlurOrEnter = () => {
        let parsed = parseInt(inputValue, 10);

        // Ограничения
        if (isNaN(parsed) || parsed <= 0) parsed = 1;
        if (parsed > 20) parsed = 20;

        onChange(parsed);
        setIsEditing(false);
    };

    return isEditing ? (
        <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onBlur={handleBlurOrEnter}
            onKeyDown={(e) => {
                if (e.key === "Enter") {
                    handleBlurOrEnter();
                }
            }}
            autoFocus
            className="w-12 text-center border border-teal-500 rounded outline-none bg-teal-600 text-md font-medium "
        />
    ) : (
        <span
            onClick={() => setIsEditing(true)}
            className="cursor-pointer select-none bg-teal-600 text-white  md:text-md font-medium w-full text-center mx-2 py-1 px-2 rounded "
        >
            {quantity}&nbsp;шт.
        </span>
    );
};

export default QuantityInput;
