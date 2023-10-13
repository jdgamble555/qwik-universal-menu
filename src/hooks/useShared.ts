import {
    createContextId,
    useContext,
    useContextProvider
} from "@builder.io/qwik";

const useSharedContext = <T>(name: string) =>
    createContextId<T>('io.builder.qwik.' + name);

const useGetShared = <T extends object>(name: string) =>
    useContext<T, null>(useSharedContext(name), null);

const useCreateShared = <T extends object>(name: string, content: T) =>
    useContextProvider<T>(useSharedContext(name), content);


export const useShared = <T extends object>(
    hook: () => T,
    name: string
) => {

    // get context if exists
    const shared = useGetShared<T>(name);
    if (shared) {
        return shared;
    }

    // return new shared context
    const _shared = hook();
    useCreateShared(name, _shared);
    return _shared;
};