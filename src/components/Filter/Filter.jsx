import React from "react";

export const Filter = ({value, onChange}) => {
    return (
        <label>
          Find contacts by name
        <input
            type="text"
            name="filter"
            title="Fiter"
            required
            onChange={onChange}
            value={value}
        />
        </label>
        )
}
