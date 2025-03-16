import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): React.JSX.Element {
    const holidays = [
        { name: "Christmas", emoji: "🎄", month: 12 },
        { name: "Halloween", emoji: "🎃", month: 10 },
        { name: "Diwali", emoji: "🪔", month: 11 },
        { name: "New Year's", emoji: "🎉", month: 1 },
        { name: "Independence Day", emoji: "🎆", month: 7 },
    ];

    const [currentHoliday, setCurrentHoliday] = useState(holidays[0]);

    const getNextHolidayAlphabetically = () => {
        const sortedHolidays = holidays.sort((a, b) =>
            a.name.localeCompare(b.name),
        );
        const currentIndex = sortedHolidays.findIndex(
            (holiday) => holiday.name === currentHoliday.name,
        );
        const nextIndex = (currentIndex + 1) % sortedHolidays.length;
        setCurrentHoliday(sortedHolidays[nextIndex]);
    };

    const getNextHolidayByMonth = () => {
        const sortedHolidays = holidays.sort((a, b) => a.month - b.month);
        const currentIndex = sortedHolidays.findIndex(
            (holiday) => holiday.name === currentHoliday.name,
        );
        const nextIndex = (currentIndex + 1) % sortedHolidays.length;
        setCurrentHoliday(sortedHolidays[nextIndex]);
    };

    return (
        <span>
            <span>Holiday: {currentHoliday.emoji}</span>
            <br />
            <Button onClick={getNextHolidayAlphabetically}>
                Advance by Alphabet
            </Button>
            <Button onClick={getNextHolidayByMonth}>Advance by Year</Button>
        </span>
    );
}
