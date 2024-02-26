import { component$ } from '@builder.io/qwik';
import { useMobileMenu } from '~/hooks/useMenu';
import { Menu } from '~/elements/menu';
import { MenuItem } from '~/elements/menu-item';

export default component$(() => {

    const menu = useMobileMenu();
    return (
        <Menu>
            <MenuItem>Your Profile</MenuItem>
            <MenuItem>Settings</MenuItem>
            <MenuItem>Logout</MenuItem>
            <MenuItem>
                <button type="button" class="w-full text-left" onClick$={() => menu.toggle()}>
                    Close
                </button>
            </MenuItem>
        </Menu>
    );
});