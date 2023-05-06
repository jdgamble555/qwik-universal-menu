import { $, useSignal } from '@builder.io/qwik';
import { useClickOutside } from './useClickOutside';
import { useShared } from './useShared';

const _useMenu = () => {

    const menu = useSignal<boolean>(false);
    const menuRef = useSignal<HTMLElement>();

    useClickOutside(menuRef, $(() => {
        menu.value = false;
    }));

    const menuObj = {
        close: $(() => { menu.value = false }),
        open: $(() => { menu.value = true }),
        toggle: $(() => { menu.value = !menu.value }),
        isOpen: menu.value,
        ref: menuRef
    };

    return menuObj;
};

export const useMenu = () => useShared(_useMenu, 'menu');

