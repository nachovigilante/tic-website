import { createContext, useCallback, useEffect, useReducer } from "react";
import { canAddShortcuts, convertKeystrokes } from "./ShortcutsUtils";

/* --------------- Types --------------- */

export type ShortcutType = {
    keystrokes: string[];
    description: string;
    action: () => void;
};

type ActionType = {
    type: "single" | "multiple";
    payload: ShortcutType | ShortcutType[];
};

type ShortcutsContextType = {
    shortcuts: ShortcutType[];
    addShortcut: (shortcut: ShortcutType) => void;
    addShortcuts: (shortcuts: ShortcutType[]) => void;
};

/* --------------- Shortcuts context --------------- */

const ShortcutsContext = createContext({
    shortcuts: [] as ShortcutType[],
} as ShortcutsContextType);

/* --------------- Shortcuts provider --------------- */

export const ShortcutsProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const debug = true;

    /* --------------- Shortcuts state --------------- */

    const [shortcuts, dispatch] = useReducer(
        (state: ShortcutType[], action: ActionType) => {
            switch (action.type) {
                case "single":
                    const shortcut = action.payload as ShortcutType;
                    if (!canAddShortcuts(state, [shortcut])) return state;
                    return [...state, shortcut];
                case "multiple":
                    const shortcuts = action.payload as ShortcutType[];
                    if (!canAddShortcuts(state, shortcuts)) return state;
                    return [...state, ...shortcuts];
                default:
                    return state;
            }
        },
        [] as ShortcutType[],
    );

    /* --------------- Shortcuts mutators --------------- */

    const addShortcut = (shortcut: ShortcutType) => {
        dispatch({
            type: "single",
            payload: shortcut,
        });
    };

    const addShortcuts = (shortcuts: ShortcutType[]) => {
        dispatch({
            type: "multiple",
            payload: shortcuts,
        });
    };

    /* --------------- Handle shortcuts --------------- */

    const handleShortcuts = useCallback(
        (e: KeyboardEvent) => {
            if (!e.key) return;

            const key = e.key.toLowerCase();
            const ctrl = e.ctrlKey;
            const alt = e.altKey;
            const shift = e.shiftKey;

            const convertedShortcuts = shortcuts.map((shortcut) => {
                return {
                    ...shortcut,
                    keystrokes: convertKeystrokes(shortcut.keystrokes),
                };
            });

            const shortcut = convertedShortcuts.find((shortcut) => {
                return shortcut.keystrokes.some((keystroke) => {
                    return (
                        keystroke.key === key &&
                        keystroke.ctrl === ctrl &&
                        keystroke.alt === alt &&
                        keystroke.shift === shift
                    );
                });
            });

            if (shortcut) {
                e.preventDefault();
                if (debug)
                    console.log(
                        `Shortcut action launched: ${shortcut.description}`,
                    );
                shortcut.action();
            } else {
                if (debug) console.log("No shortcut found");
            }
        },
        [shortcuts, debug],
    );

    /* --------------- Add event listener --------------- */

    useEffect(() => {
        document.addEventListener("keydown", handleShortcuts);
        return () => {
            document.removeEventListener("keydown", handleShortcuts);
        };
    }, [shortcuts, handleShortcuts]);

    useEffect(() => {
        if (debug) console.log(shortcuts);
    }, [shortcuts, debug]);

    return (
        <ShortcutsContext.Provider
            value={
                {
                    shortcuts,
                    addShortcut,
                    addShortcuts,
                } as ShortcutsContextType
            }
        >
            {children}
        </ShortcutsContext.Provider>
    );
};

export default ShortcutsContext;
