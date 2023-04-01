import { useContext } from "react";
import ShortcutsContext from "../../contexts/ShortcutsContext";

const useShortcuts = () => {
    const context = useContext(ShortcutsContext);

    if (!context) {
        throw new Error("useShortcuts must be used within a ShortcutsProvider");
    }

    const { shortcuts, addShortcut, addShortcuts } = context;

    return { shortcuts, addShortcut, addShortcuts };
};

export default useShortcuts;
