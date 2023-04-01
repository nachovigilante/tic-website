import { createContext, useEffect, useReducer } from "react";

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

const ShortcutsContext = createContext({
    shortcuts: [] as ShortcutType[],
} as ShortcutsContextType);

const convertKeystrokes = (keystrokes: string[]) => {
    return keystrokes.map((keystroke) => {
        const keystrokeParts = keystroke.split("+");
        const keystrokeKey = keystrokeParts[keystrokeParts.length - 1];
        const keystrokeModifiers = keystrokeParts.slice(0, -1);

        return {
            key: keystrokeKey,
            ctrl: keystrokeModifiers.includes("ctrl"),
            alt: keystrokeModifiers.includes("alt"),
            shift: keystrokeModifiers.includes("shift"),
        };
    });
};

const keystrokeInUse = (shortcuts: ShortcutType[], shortcut: ShortcutType) => {
    return shortcuts.find((existingShortcut) => {
        return (
            existingShortcut.keystrokes.some((ks) => {
                return ks === ks;
            }) && existingShortcut.description !== shortcut.description
        );
    });
};

const canAddShortcuts = (
    currentShortcuts: ShortcutType[],
    shortcutsToAdd: ShortcutType[],
) => {
    /* ---- Check if keystrokes are already in use ---- */

    const shortcutsInUse = shortcutsToAdd.filter((shortcut) => {
        return keystrokeInUse(currentShortcuts, shortcut);
    });

    if (shortcutsInUse.length > 0) {
        console.error(
            `Keystroke already in use. Can't add shortcuts for: ${shortcutsInUse
                .map((shortcut) => shortcut.description)
                .join(", ")}`,
        );
        return false;
    }

    /* ---- Check if shortcuts have all the required properties ---- */

    const shortcutsWithoutDescription = shortcutsToAdd.filter(
        (shortcut) => shortcut.description.length === 0,
    );

    if (shortcutsWithoutDescription.length > 0) {
        console.error(
            `Description is empty. Can't add shortcuts for: ${shortcutsWithoutDescription
                .map((shortcut) => shortcut.keystrokes.join(", "))
                .join(", ")}`,
        );
        return false;
    }

    const shortcutsWithoutAction = shortcutsToAdd.filter(
        (shortcut) => typeof shortcut.action !== "function",
    );

    if (shortcutsWithoutAction.length > 0) {
        console.error(
            `Action is not a function. Can't add shortcuts for: ${shortcutsWithoutAction
                .map((shortcut) => shortcut.keystrokes.join(", "))
                .join(", ")}`,
        );
        return false;
    }

    const shortcutsWithEmptyKeystroke = shortcutsToAdd.filter((shortcut) => {
        return shortcut.keystrokes.some((keystroke) => keystroke.length === 0);
    });

    if (shortcutsWithEmptyKeystroke.length > 0) {
        console.error(
            `Keystroke is empty. Can't add shortcuts for: ${shortcutsWithEmptyKeystroke
                .map((shortcut) => shortcut.keystrokes.join(", "))
                .join(", ")}`,
        );
        return false;
    }

    /* ---- Check if shortcuts with the same description already exists ---- */

    const shortcutsWithDuplicateDescription = shortcutsToAdd.filter(
        (shortcut) => {
            return (
                shortcutsToAdd.filter(
                    (s) => s.description === shortcut.description,
                ).length > 1
            );
        },
    );

    if (shortcutsWithDuplicateDescription.length > 0) {
        console.error(
            `Shortcuts with descriptions "${shortcutsWithDuplicateDescription
                .map((shortcut) => shortcut.description)
                .join(", ")}" already exists.`,
        );
        return false;
    }

    /* All checks passed, so is valid */

    return true;
};

export const ShortcutsProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
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
    const debug = true;

    useEffect(() => {
        if (debug) console.log(shortcuts);
    }, [shortcuts]);

    useEffect(() => {
        document.addEventListener("keydown", handleShortcuts);
        return () => {
            document.removeEventListener("keydown", handleShortcuts);
        };
    }, [shortcuts]);

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

    const handleShortcuts = (e: KeyboardEvent) => {
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
            console.log("No shortcut found");
        }
    };

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
