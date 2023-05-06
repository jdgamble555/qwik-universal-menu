import type { JSXNode } from "@builder.io/qwik";

export const MenuItem = (props: { children: JSXNode | JSXNode[] | string }) => {
    return (
        <span class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-800" role="menuitem" tabIndex={-1}>{props.children}</span>
    );
};
