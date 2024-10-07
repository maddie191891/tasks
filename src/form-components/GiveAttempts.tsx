import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [requestedAttempts, setRequestedAttempts] = useState<number>(0);
    const [attempts, setAttempts] = useState<number>(3);

    function useAttempts() {
        if (attempts > 0) {
            setAttempts(attempts - 1);
        }
    }

    function gainAttempts() {
        const validAttempts =
            Number.isInteger(requestedAttempts) && requestedAttempts > 0;
        if (validAttempts) {
            setAttempts(attempts + requestedAttempts);
        }
    }

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        const value = parseInt(event.target.value, 10);
        if (!isNaN(value)) {
            setRequestedAttempts(value);
        } else {
            setRequestedAttempts(0);
        }
    }

    return (
        <div>
            <div>Attempts left: {attempts}</div>
            <Form.Group>
                <Form.Label>Request more attempts:</Form.Label>
                <Form.Control
                    type="number"
                    value={requestedAttempts}
                    onChange={handleInputChange}
                    placeholder="Enter number of attempts"
                />
            </Form.Group>
            <Button onClick={useAttempts} disabled={attempts <= 0}>
                Use
            </Button>
            <Button onClick={gainAttempts}>Gain</Button>
        </div>
    );
}
