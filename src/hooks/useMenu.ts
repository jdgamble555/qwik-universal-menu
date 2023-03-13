import type { QRL, Signal } from '@builder.io/qwik';
import {
    useContext,
    useContextProvider,
    createContextId,
    $,
    useSignal
} from '@builder.io/qwik';
import { useClickOutside } from './useClickOutside';

export interface UseMenu {
    close: QRL<() => void>;
    open: QRL<() => void>;
    toggle: QRL<() => void>;
    isOpen: boolean;
    ref: Signal<HTMLElement | undefined>;
}

export const MenuContext = (name: string) =>
    createContextId<UseMenu>('io.builder.qwik.' + name);

export const useMenu = (name = ''): UseMenu => {

    const _menu = useContext(MenuContext(name), null);
    if (_menu) {
        return _menu;
    }

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

    useContextProvider(MenuContext(name), menuObj);

    return menuObj;
};

