import api from "@lib/api";
import common from "@utils/common";
import {
  BaseResponse,
  LoginUserQuery,
  LoginUserQueryViewModel,
} from "@utils/interfaces";
import { AxiosError } from "axios";
import { UseMutationResult, useMutation } from "react-query";

export const useUserLogin = (): UseMutationResult<
  BaseResponse<LoginUserQueryViewModel>,
  AxiosError,
  LoginUserQuery
> => {
  const mutation = useMutation<
    BaseResponse<LoginUserQueryViewModel>,
    AxiosError,
    LoginUserQuery
  >({
    mutationKey: ["userLogin"],
    mutationFn: async (data: LoginUserQuery | undefined) => {
      const response = await api({
        method: "post",
        url: common.ApiUrls.LoginUrl,
        data: data,
      });
      if (response && response.status === 200) {
        return response.data;
      }
      throw new Error("Failed to fetch data");
    },
  });
  return mutation;
};
