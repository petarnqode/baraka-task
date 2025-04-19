import { TaskStatusEnum } from "@/src/enum";

export type Nullable<T> = T | null;

export type HttpMethod = "get" | "post" | "put" | "patch" | "delete";

export interface IRequestOptions {
  url: string;
  method: HttpMethod;
  body?: string;
  headers?: string;
}

export type FilterType = "ALL" | TaskStatusEnum;
