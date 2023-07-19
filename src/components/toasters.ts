import { BaseError, BaseResponse } from "@utils/interfaces";
import { AxiosError } from "axios";
import { toast } from "react-toastify";

export const errorToaster = (error: AxiosError) => {
  if (error.response === undefined) {
    toast.error(error.code);
    return;
  }

  if (error.response.data === undefined) {
    toast.error("Unexpected error occurred");
    return;
  }

  const response = error.response.data as BaseResponse<any>;

  const messages: string[] = response.errors.map(
    (obj: BaseError) => obj.message
  );

  const message: string = messages.join("\n");

  toast.error(message);
};
