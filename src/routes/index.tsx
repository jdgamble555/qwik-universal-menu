import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import UserMenu from '~/components/user-menu';

import { useMobileMenu } from '~/hooks/useMenu';

export default component$(() => {

  const menu = useMobileMenu();

  return (
    <div class="flex justify-center mt-5">
      <div class="relative ml-3" ref={menu.ref}>
        <div>
          <button type="button" class="border p-2" onClick$={() => menu.toggle()}>
            <span>Open user menu</span>
          </button>
        </div>
        {menu.isOpen && <UserMenu />}
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Qwik Universal Menu',
  meta: [
    {
      name: 'description',
      content: 'Qwik Universal Menu',
    },
  ],
};
