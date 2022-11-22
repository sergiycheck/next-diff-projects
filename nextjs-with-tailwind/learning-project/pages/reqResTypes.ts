export type ResposeType<T> = {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: T;
};

export type ResorceType = {
  id: number;
  name: string;
  year: number;
  color: string;
  pantone_value: string;
};

export type UserType = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatart: string;
};
