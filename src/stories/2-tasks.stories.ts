import { storiesOf, moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';

import { TaskComponent } from '../app/components/task/task.component';

import { TaskItem, TaskType } from 'src/app/@types/app';

export const task: TaskItem = {
  id: '1',
  title: 'Test Task',
  state: 'TASK_INBOX',
  updatedAt: new Date(2018, 0, 1, 9, 0),
  type: TaskType.new
};

export const actions = {
  onPinTask: action('onPinTask'),
  onArchiveTask: action('onArchiveTask'),
};

storiesOf('Task', module)
  .addDecorator(
    moduleMetadata({
      declarations: [TaskComponent],
    })
  )
  .add('default', () => {
    return {
      template: `<task-item [task]="task" (onPinTask)="onPinTask($event)" (onArchiveTask)="onArchiveTask($event)" ></task-item>`,
      props: {
        task,
        onPinTask: actions.onPinTask,
        onArchiveTask: actions.onArchiveTask,
      },
    };
  });