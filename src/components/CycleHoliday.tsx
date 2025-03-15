import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): React.JSX.Element {
    /**
     * The CycleHoliday component is a little more complicated, but should be an opportunity to be creative. Think about your 5 favorite holidays, and then find 5 emojis that represent them. You will create two buttons that let you “cycle” through each holiday, one button alphabetically and the other button by time in the year. Ultimately, the holidays you pick are up to you, and we will not micromanage your choice of alphabetization or specific date chosen EXCEPT that the two orderings should not be the same (because that’s no fun).

You will need one state, either a string or an enumeration of 5 strings like QuestionType (perhaps named Holiday).
You will need to define two functions (or two Records) that can take in an existing holiday and produce the next holiday - one function should produce the next holiday alphabetically, and the other produces the next holiday in the year.
The view should render the current holiday with the text Holiday: followed by the emoji (e.g., Holiday: 🎃).
The first button should include the text Alphabet somewhere (e.g., Advance by Alphabet) and changes the current holiday to the next one alphabetically.
The second button should include the text Year somewhere (e.g., Advance by Year) and changes the current holiday to the next one in the year.
     */

    const holidays = [
        { name: "Christmas", emoji: "🎄", month: 12 },
        { name: "Halloween", emoji: "🎃", month: 10 },
        { name: "Diwali", emoji: "🪔", month: 11 },
        { name: "New Year's", emoji: "🎉", month: 1 },
        { name: "Independence Day", emoji: "🎆", month: 7 }
    ];

    const [currentHoliday, setCurrentHoliday] = useState(holidays[0]);

    const getNextHolidayAlphabetically = () => {
        const sortedHolidays = holidays.sort((a, b) =>
            a.name.localeCompare(b.name)
        );
        const currentIndex = sortedHolidays.findIndex(
            (holiday) => holiday.name === currentHoliday.name
        );
        const nextIndex = (currentIndex + 1) % sortedHolidays.length;
        setCurrentHoliday(sortedHolidays[nextIndex]);
    };

    const getNextHolidayByMonth = () => {
        const sortedHolidays = holidays.sort((a, b) => a.month - b.month);
        const currentIndex = sortedHolidays.findIndex(
            (holiday) => holiday.name === currentHoliday.name
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
