const useTextManipulation = () => {
    const setCaret = (node: Node, index: number) => {
        const range = document.createRange();
        const sel = window.getSelection();
        if (!node) return;

        range.setStart(node, index);

        range.collapse(false);

        sel!.removeAllRanges();
        sel!.addRange(range);
    };

    const insertSpan = (target: Element, node: Node, index: number) => {
        const nodeIndex = [...target.childNodes].indexOf(node as ChildNode);

        if (!target.childNodes[nodeIndex]) return;

        if (target.childNodes[nodeIndex]!.nodeName !== "SPAN") {
            // Create a span element
            const span = document.createElement("span");
            span.textContent = "P1";
            span.className = "bg-blue-500 text-white rounded-md px-1";

            const nodesBefore = [...target.childNodes].slice(0, nodeIndex);
            const nodesAfter = [...target.childNodes].slice(nodeIndex + 1);

            const text = target.childNodes[nodeIndex]!.textContent;

            const textBefore = text!.slice(0, index) + " ";
            const textAfter = "\u00A0" + text!.slice(index + 2);

            nodesBefore.push(document.createTextNode(textBefore));

            const textNode = document.createTextNode(textAfter);

            nodesAfter.unshift(textNode);

            target.innerHTML = "";

            // Replace the text with the text nodes and the span
            nodesBefore.forEach((node) => {
                target.appendChild(node);
            });

            target.appendChild(span);

            nodesAfter.forEach((node) => {
                target.appendChild(node);
            });

            setCaret(textNode, 1);
        }
    };

    const replageNodeWithTextNode = (
        node: Node,
        target: EventTarget & HTMLElement,
    ) => {
        const newTextNode = document.createTextNode(
            (node as HTMLSpanElement).textContent!,
        );
        const offset = window.getSelection()!.anchorOffset;
        target.replaceChild(newTextNode, node.parentElement!);
        setCaret(newTextNode, offset);
    };

    return { insertSpan, replageNodeWithTextNode };
};

export default useTextManipulation;
