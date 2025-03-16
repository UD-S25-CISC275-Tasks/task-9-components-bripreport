import React, { useState } from "react";
import { Button } from "react-bootstrap";

interface DoublerProps {
    dhValue: number;
    setDhValue: (value: number) => void;
}

function Doubler({ dhValue, setDhValue }: DoublerProps): React.JSX.Element {
    return (
        <Button
            onClick={() => {
                setDhValue(2 * dhValue);
            }}
        >
            Double
        </Button>
    );
}

interface HalverProps {
    dhValue: number;
    setDhValue: (value: number) => void;
}

export function Halver({
    dhValue,
    setDhValue,
}: HalverProps): React.JSX.Element {
    return (
        <Button
            onClick={() => {
                setDhValue(0.5 * dhValue);
            }}
        >
            Halve
        </Button>
    );
}

export function DoubleHalf(): React.JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10);
    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Doubler dhValue={dhValue} setDhValue={setDhValue}></Doubler>
            <Halver dhValue={dhValue} setDhValue={setDhValue}></Halver>
        </div>
    );
}
