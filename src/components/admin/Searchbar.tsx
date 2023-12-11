import Image from "next/image";
import React, { useRef } from "react";
import useTextManipulation from "~/hooks/utils/useTextManipulation";
import { useState } from "react";
import filters from "~/data/filters";
import { twMerge } from "tailwind-merge";

const FilterInput = ({
    filter,
}: {
    filter: { name: string; style: string };
}) => {
    return (
        <div
            className={twMerge(
                "flex-item mt-1 flex w-full cursor-pointer rounded-md p-2 pl-3 hover:bg-gray-700",
                filter.style,
            )}
        >
            {filter.name}:
            <input type="text" />
        </div>
    );
};

const SearchBar = ({ onChange }: { onChange: (s: string) => void }) => {
    const textRef = useRef(null);
    const { insertSpan, replaceNodeWithTextNode } = useTextManipulation();
    const [isOpen, setIsOpen] = useState(false);
    const [filterInputs, setFilterInputs] = useState<
        { key: string; value: string }[]
    >([]);

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if ((e.key === "z" && e.ctrlKey) || e.key === "Enter") {
            e.preventDefault();
            return;
        }

        const index = window.getSelection()!.anchorOffset;
        console.log(index);
        const node = window.getSelection()!.anchorNode;
        if (!node) return;

        const target = e.currentTarget;

        if (e.key === "Backspace" && node.parentElement!.nodeName === "SPAN") {
            replaceNodeWithTextNode(node, target);
        }

        if (e.key === ":") {
            e.preventDefault();
            const text = window.getSelection()!.anchorNode!.textContent;
            if (!text) return;
            let found = false;

            Object.entries(filters).forEach(([key, value]) => {
                const lowerCaseText = text!.toLowerCase();
                if (lowerCaseText.includes(key.toLowerCase())) {
                    found = true;
                    const regex = new RegExp(key, "gi");
                    node.textContent = text.replace(regex, "");
                    insertSpan(e.currentTarget, node, index, value);
                }
            });

            if (!found) {
                target.insertAdjacentText("beforeend", ":");
            }
        }
    };

    const addFilter = (e: React.FormEvent<HTMLElement>, filterKey: string) => {
        e.preventDefault();
        if (!filters[filterKey]) return;
        // const regex = new RegExp(`\\b${filter.name}\\b`, "gi");
    };

    return (
        <div className="w-[50%]">
            <div className="flex h-full space-x-3 rounded-xl bg-black px-3 py-2 shadow-md">
                <div className="flex w-full items-center space-x-3">
                    <Image
                        src="/images/search.svg"
                        alt="search"
                        width={21}
                        height={21}
                    />
                    <div
                        className="placeholder-grey w-full flex-col bg-transparent text-sm text-white outline-none"
                        contentEditable
                        suppressContentEditableWarning
                        onKeyDown={(e) => handleKeyDown(e)}
                        // onInput={(e) => handleInput(e)}
                        onFocus={() => setIsOpen(true)}
                        onBlur={() => setIsOpen(false)}
                        ref={textRef}
                        onKeyUp={(e) => onChange(e.currentTarget.textContent!)}
                    />
                </div>
            </div>

            {isOpen && (
                <div className="mt-2 flex flex-col rounded-xl bg-black bg-opacity-80 p-3 shadow-md backdrop-blur">
                    {Object.entries(filters).map(([key, _]) => (
                        <div
                            onClick={(e) => addFilter(e, key)}
                            className="flex-item mt-1 flex w-full cursor-pointer rounded-md p-2 pl-3 hover:bg-gray-700"
                        >
                            {key}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SearchBar;
