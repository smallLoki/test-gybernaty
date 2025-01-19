import {
    createEvent,
    createStore,
} from 'effector';

import { IProject } from '../../types/types.ts';


let index = 1;
export const $projects = createStore<IProject[]>([]);

export const update = createEvent<IProject>();


const updateStore = (state: IProject[], data: IProject) => {
    const userIndex = state.findIndex((user) => user.id === data.id);
    if (data.del) {
        state.splice(userIndex, 1);
    } else {
        if (userIndex > -1) {
            state.splice(userIndex,  1, data);
        } else {
            state.push({
                ...data,
                id: index++,
            });
        }
    }
    return [...state];
};

$projects
    .on(update, updateStore);
