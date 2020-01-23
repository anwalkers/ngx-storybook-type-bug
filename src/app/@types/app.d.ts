export enum TaskType {
    new = 1,
    old
}

export interface TaskItem {
    id: string;
    title: string;
    state: string;
    updatedAt: Date;
    type: TaskType;
  }