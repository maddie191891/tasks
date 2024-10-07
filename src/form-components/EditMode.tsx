import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [isEditMode, setIsEditMode] = useState<boolean>(false);
    const [userName, setUserName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    const handleEditModeChange = () => {
        setIsEditMode((prev) => !prev);
    };

    const handleNameChange: React.ChangeEventHandler<HTMLInputElement> = (
        event,
    ) => {
        setUserName(event.target.value);
    };

    const handleStudentChange: React.ChangeEventHandler<HTMLInputElement> = (
        event,
    ) => {
        setIsStudent(event.target.checked);
    };

    return (
        <div>
            <Form.Switch
                id="editModeSwitch"
                label="Edit Mode"
                checked={isEditMode}
                onChange={handleEditModeChange}
            />
            {isEditMode ?
                <div>
                    <Form.Group controlId="formUserName">
                        <Form.Label>Name:</Form.Label>
                        <Form.Control
                            type="text"
                            value={userName}
                            onChange={handleNameChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="formIsStudent">
                        <Form.Check
                            type="checkbox"
                            label="Are you a student?"
                            checked={isStudent}
                            onChange={handleStudentChange}
                        />
                    </Form.Group>
                </div>
            :   <p>
                    {userName} is {isStudent ? "a student" : "not a student"}.
                </p>
            }
        </div>
    );
}
