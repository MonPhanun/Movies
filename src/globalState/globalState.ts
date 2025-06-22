import { createGlobalState } from "react-hooks-global-state";

const { useGlobalState } = createGlobalState({ search: true });

export { useGlobalState };
