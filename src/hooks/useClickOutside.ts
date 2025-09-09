import { type RefObject, useEffect, useRef } from "react";

export function useClickOutside<T extends HTMLElement = HTMLElement>(
    handler: (event: MouseEvent | TouchEvent) => void,
    enabled: boolean = true,
): RefObject<T | null> {
    const ref = useRef<T>(null);

    useEffect(() => {
        if (!enabled) {
            return;
        }

        const handleClick = (event: MouseEvent | TouchEvent) => {
            if (!ref.current?.contains(event.target as Node)) {
                handler(event);
            }
        };

        document.addEventListener("mousedown", handleClick);
        document.addEventListener("touchstart", handleClick);

        return () => {
            document.removeEventListener("mousedown", handleClick);
            document.removeEventListener("touchstart", handleClick);
        };
    }, [handler, enabled]);

    return ref;
}
