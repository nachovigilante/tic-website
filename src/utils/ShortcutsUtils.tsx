import { ShortcutType } from "./ShortcutsContext";

export const convertKeystrokes = (keystrokes: string[]) => {
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

export const canAddShortcuts = (
    currentShortcuts: ShortcutType[],
    shortcutsToAdd: ShortcutType[]
) => {
    /* ---- Check if keystrokes are already in use ---- */
    const shortcutsInUse = shortcutsToAdd.filter((shortcut) => {
        return keystrokeInUse(currentShortcuts, shortcut);
    });

    if (shortcutsInUse.length > 0) {
        console.error(
            `Keystroke already in use. Can't add shortcuts for: ${shortcutsInUse
                .map((shortcut) => shortcut.description)
                .join(", ")}`
        );
        return false;
    }

    /* ---- Check if shortcuts have all the required properties ---- */
    const shortcutsWithoutDescription = shortcutsToAdd.filter(
        (shortcut) => shortcut.description.length === 0
    );

    if (shortcutsWithoutDescription.length > 0) {
        console.error(
            `Description is empty. Can't add shortcuts for: ${shortcutsWithoutDescription
                .map((shortcut) => shortcut.keystrokes.join(", "))
                .join(", ")}`
        );
        return false;
    }

    const shortcutsWithoutAction = shortcutsToAdd.filter(
        (shortcut) => typeof shortcut.action !== "function"
    );

    if (shortcutsWithoutAction.length > 0) {
        console.error(
            `Action is not a function. Can't add shortcuts for: ${shortcutsWithoutAction
                .map((shortcut) => shortcut.keystrokes.join(", "))
                .join(", ")}`
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
                .join(", ")}`
        );
        return false;
    }

    /* ---- Check if shortcuts with the same description already exists ---- */
    const shortcutsWithDuplicateDescription = shortcutsToAdd.filter(
        (shortcut) => {
            return (
                shortcutsToAdd.filter(
                    (s) => s.description === shortcut.description
                ).length > 1
            );
        }
    );

    if (shortcutsWithDuplicateDescription.length > 0) {
        console.error(
            `Shortcuts with descriptions "${shortcutsWithDuplicateDescription
                .map((shortcut) => shortcut.description)
                .join(", ")}" already exists.`
        );
        return false;
    }

    /* All checks passed, so is valid */
    return true;
};
