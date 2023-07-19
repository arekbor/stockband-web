export interface LoginUserQuery {
  email: string;
  password: string;
}

export interface LoginUserQueryViewModel {
  token: string;
}

export interface BaseError {
  message: string;
  code: number;
}

export interface BaseResponse<T> {
  success: boolean;
  errors: BaseError[];
  result: T;
}
