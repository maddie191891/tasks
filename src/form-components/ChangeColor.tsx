import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): React.JSX.Element {
    const colors = [
        "Red",
        "Green",
        "Blue",
        "Yellow",
        "Orange",
        "Purple",
        "Pink",
        "Teal",
    ];

    const [selectedColor, setSelectedColor] = useState(colors[0]);

    return (
        <div>
            <h3>Change Color</h3>
            <Form>
                {colors.map((color) => (
                    <Form.Check
                        key={color}
                        type="radio"
                        label={color}
                        name="colors"
                        value={color}
                        inline
                        onChange={() => {
                            setSelectedColor(color);
                        }}
                        checked={selectedColor === color}
                    />
                ))}
            </Form>
            <div
                data-testid="colored-box"
                style={{
                    backgroundColor: selectedColor.toLowerCase(),
                    padding: "10px",
                    marginTop: "20px",
                    color: "white",
                    textAlign: "center",
                }}
            >
                {selectedColor}
            </div>
        </div>
    );
}
