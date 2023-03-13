import { component$ } from '@builder.io/qwik';
import { useMenu } from '~/hooks/useMenu';
import { Menu } from '~/tw-components/menu';
import { MenuItem } from '~/tw-components/menu-item';

export default component$(() => {
    const menu = useMenu('user-menu');
    return (
        <div>
            <Menu>
                <MenuItem>Your Profile</MenuItem>
                <MenuItem>Settings</MenuItem>
                <MenuItem>Logout</MenuItem>
                <MenuItem>
                    <button onClick$={() => menu.toggle()}>
                        Close
                    </button>
                </MenuItem>
            </Menu>
        </div>
    );
});