import { atomWithStorage } from "jotai/utils";

export const userTokenAtom = atomWithStorage('token', null);