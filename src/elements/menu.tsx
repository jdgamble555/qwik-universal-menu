import type { JSXOutput } from "@builder.io/qwik";

export const Menu= (props: { children: JSXOutput | JSXOutput[] }) => {

    return (
        <div class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex={-1}>
            {props.children}
        </div>
    );
};