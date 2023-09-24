import Image from "next/image";
import React, { useRef } from "react";
import useTextManipulation from "~/hooks/utils/useTextManipulation";
import filters from "~/data/filters";

const FilterButton = ({ children }: { children: React.ReactNode }) => {
    return (
        <button className="bg-button-grey border-white border-[1.35px] flex items-center justify-center rounded-md p-1">
            {children}
        </button>
    );
};

const FilterInput = ({ onChange }: { onChange: (s: string) => void }) => {
    const textRef = useRef(null);
    const { insertSpan, replageNodeWithTextNode } = useTextManipulation();

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if ((e.key === "z" && e.ctrlKey) || e.key === "Enter") {
            e.preventDefault();
            return;
        }

        const node = window.getSelection()!.anchorNode;
        if (!node) return;

        const target = e.currentTarget;

        if (e.key === "Backspace" && node.parentElement!.nodeName === "SPAN") {
            replageNodeWithTextNode(node, target);
        }
    };

    const handleInput = (e: React.FormEvent<HTMLElement>) => {
        const node = window.getSelection()!.anchorNode;
        if (!node) return;

        const target = e.currentTarget;

        if (node.parentElement!.nodeName === "SPAN") {
            replageNodeWithTextNode(node, target);
        } else if (node.nodeName === "#text") {
            const text = window.getSelection()!.anchorNode!.textContent;
            if (!text) return;
 
            filters.forEach((filter) => {
                const regex = new RegExp(`\\b${filter.name}\\b`, "gi");
                const match = text.search(regex);
                if (match === -1) return;
                insertSpan(e.currentTarget, node, match, filter);
            });
        }
    };

    return (
        <div
            className="text-sm bg-transparent placeholder-grey outline-none text-white w-full"
            contentEditable
            suppressContentEditableWarning
            onKeyDown={(e) => handleKeyDown(e)}
            onInput={(e) => handleInput(e)}
            ref={textRef}
            onKeyUp={(e) => onChange(e.currentTarget.textContent!)}
        />
    );
};

const SearchBar = ({ onChange }: { onChange: (s: string) => void }) => {
    return (
        <div className="flex bg-black rounded-xl w-1/2 px-3 py-2 space-x-3 shadow-md fixed">
            <div className="space-x-3 flex w-full items-center">
                <Image
                    src="/images/search.svg"
                    alt="search"
                    width={21}
                    height={21}
                />
                <FilterInput onChange={onChange} />
            </div>
            <div>
                <FilterButton>
                    <Image
                        src="/images/role.svg"
                        alt="role"
                        width={21}
                        height={21}
                    />
                </FilterButton>
            </div>
        </div>
    );
};

export default SearchBar;
