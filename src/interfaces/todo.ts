import { TaskStatusEnum } from "@/src/enum";

export interface ITodo {
  id: string;
  name: string;
  status: TaskStatusEnum;
  dueDate: Date;
}
