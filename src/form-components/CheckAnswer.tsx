import React, { useState } from "react";

interface CheckAnswerProps {
    expectedAnswer: string;
}

export function CheckAnswer({ expectedAnswer }: CheckAnswerProps) {
    const [givenAnswer, setGivenAnswer] = useState("");

    const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (
        event,
    ) => {
        setGivenAnswer(event.target.value);
    };

    const checkAnswer = () => {
        return (
                givenAnswer.trim().toLowerCase() ===
                    expectedAnswer.trim().toLowerCase()
            ) ?
                "✔️"
            :   "❌";
    };

    return (
        <div>
            <input
                type="text"
                value={givenAnswer}
                onChange={handleInputChange}
                placeholder="Enter your answer"
            />
            <p>{checkAnswer()}</p>
        </div>
    );
}
