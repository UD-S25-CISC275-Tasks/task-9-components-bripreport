import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    /**
     * The RevealAnswer component simulates a quiz application that provides a way to “reveal the answer” to a user by clicking a button. The answer will be 42 for our purposes.

You will need a state to handle whether the text is visible.
There is a button labelled Reveal Answer that inverts the state.
The text 42 is not initially visible.
When the button is clicked, the text 42 should be visible.
     */
    const [visible, setVisible] = useState(false);

    return (
        <div>
            <Button
                onClick={() => {
                    setVisible(!visible);
                }}
            >
                Reveal Answer
            </Button>
            <br />
            {visible && "42"}
        </div>
    );
}
