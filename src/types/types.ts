export interface IProject {
    id?: number;
    date?: string;
    title?: string;
    status?: string;
    priority?: string;
    lead?: string;
    labels?: string;
    description?: string;
    del?: boolean;
}

export type IProjectPayload = Omit<IProject, 'onlineStatus'>;
