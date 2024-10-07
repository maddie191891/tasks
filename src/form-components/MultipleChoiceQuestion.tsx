import React, { useState } from "react";
import { Form } from "react-bootstrap";

interface MultipleChoiceQuestionProps {
    expectedAnswer: string;
    options: string[];
}

export function MultipleChoiceQuestion({
    expectedAnswer,
    options,
}: MultipleChoiceQuestionProps): React.JSX.Element {
    const [selectedChoice, setSelectedChoice] = useState<string>(options[0]);

    const handleSelectChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedChoice(event.target.value);
    };

    const checkAnswer = (): string => {
        return selectedChoice === expectedAnswer ? "✔️" : "❌";
    };

    return (
        <div>
            <Form.Group controlId="formMultipleChoice">
                <Form.Label>Select your answer:</Form.Label>
                <Form.Control
                    as="select"
                    value={selectedChoice}
                    onChange={handleSelectChange}
                >
                    {options.map((option, index) => (
                        <option key={index} value={option}>
                            {option}
                        </option>
                    ))}
                </Form.Control>
            </Form.Group>
            <div>{checkAnswer()}</div>
        </div>
    );
}
