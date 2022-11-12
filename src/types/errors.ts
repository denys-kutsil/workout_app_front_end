export interface IResponseHttpError {
  status: number;
  data: {
    message?: string;
    error?: string;
  };
}
