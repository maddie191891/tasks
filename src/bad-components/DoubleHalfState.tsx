import { useState } from "react";

export function useDoubleHalfState() {
    const [dhValue, setDhValue] = useState<number>(10); // Initial value set to 10
    return { dhValue, setDhValue };
}
