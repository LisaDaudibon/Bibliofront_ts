import { userTokenAtom } from './userTokenAtom';
import { atom } from 'jotai';

export const loggedInAtom = atom((get) => get(userTokenAtom) !== null);