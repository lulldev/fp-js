import { Pair } from './pair';

interface UserResponse {
  username: string;
  email: string;
}

type ErrorCode = 0 | 1 | 2 | 200;

export interface UserResponseError extends Pair<ErrorCode, string> {
  0: ErrorCode; // error code
  1: string; // error message
}

export const getUserFromApi = (): UserResponse | UserResponseError => {
  if (Math.random() < 0.5) {
    return [0, 'Get user error'];
  }

  return {
    username: 'test',
    email: 'test@mail.ru'
  }
}