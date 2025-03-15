import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    const [value, setValue] = useState<QuestionType>("short_answer_question");

    return (
        <span>
            <Button
                onClick={() => {
                    setValue(
                        value === "short_answer_question"
                            ? "multiple_choice_question"
                            : "short_answer_question"
                    );
                }}
            >
                Change Type
            </Button>
            <br />
            {value === "short_answer_question"
                ? "Short Answer"
                : "Multiple Choice"}
        </span>
    );
}
