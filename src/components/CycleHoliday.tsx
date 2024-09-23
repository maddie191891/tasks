import React, { useState } from "react";
import { Button } from "react-bootstrap";

const holidays = [
    "Halloween",
    "Christmas",
    "New Year's",
    "Thanksgiving",
    "Easter",
];
const holidayEmojis = ["🎃", "🎄", "🎆", "🦃", "🐰"];

const alphabeticalOrder = [
    "Christmas",
    "Easter",
    "Halloween",
    "New Year's",
    "Thanksgiving",
];

const yearOrder = [
    "New Year's",
    "Easter",
    "Halloween",
    "Thanksgiving",
    "Christmas",
];

const findHolidayIndex = (holiday: string) => holidays.indexOf(holiday);

export function CycleHoliday(): React.JSX.Element {
    const [currentHoliday, setCurrentHoliday] = useState<string>("Halloween");
    const advanceAlphabetically = () => {
        const currentIndex = alphabeticalOrder.indexOf(currentHoliday);
        const nextIndex = (currentIndex + 1) % alphabeticalOrder.length;
        setCurrentHoliday(alphabeticalOrder[nextIndex]);
    };

    const advanceByYear = () => {
        const currentIndex = yearOrder.indexOf(currentHoliday);
        const nextIndex = (currentIndex + 1) % yearOrder.length;
        setCurrentHoliday(yearOrder[nextIndex]);
    };

    const currentHolidayIndex = findHolidayIndex(currentHoliday);
    const currentHolidayEmoji = holidayEmojis[currentHolidayIndex];

    return (
        <div>
            <h1>Holiday: {currentHolidayEmoji}</h1>
            <div>
                <Button onClick={advanceAlphabetically}>
                    Advance by Alphabet
                </Button>
                <Button onClick={advanceByYear}>Advance by Year</Button>
            </div>
        </div>
    );
}
