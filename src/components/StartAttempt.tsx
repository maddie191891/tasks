import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [progress, setProgress] = useState<boolean>(false);
    const [attempts, setAttempts] = useState<number>(4);
    function startQuiz() {
        setProgress(true);
        setAttempts(attempts - 1);
    }
    function stopQuiz() {
        setProgress(false);
    }
    function addAttempt() {
        setAttempts(attempts + 1);
    }
    return (
        <div>
            <div>Attempts left: {attempts}</div>
            <Button onClick={startQuiz} disabled={progress || attempts === 0}>
                Start Quiz
            </Button>
            <Button onClick={stopQuiz} disabled={!progress}>
                Stop Quiz
            </Button>
            <Button onClick={addAttempt} disabled={progress}>
                Mulligan
            </Button>
        </div>
    );
}
