import { NameSpace } from '../const';
import { State } from '../state';

export const getActiveGenre = (state: Pick<State, NameSpace.Genre>): string => state[NameSpace.Genre].genre;
