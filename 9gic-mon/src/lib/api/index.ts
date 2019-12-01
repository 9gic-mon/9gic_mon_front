import axios from "axios";

import { CoUserData, SignInCoUser, SearchCreteria } from "./payload";
import { SearchedListItem } from "./response";

const instanceAxios = axios.create({
  baseURL: "http://10.156.145.140:8080",
  headers: { "Content-Type": "application/json" }
});

export const postCoUserData = async (body: CoUserData) => {
  const response = await instanceAxios.post("/9gic/Co_users/signup", body);
  return response.data;
};

export const postCoUserSignIn = async (body: SignInCoUser) => {
  const response = await instanceAxios.post<{
    token: string;
  }>("/9gic/users/signin", body);
  return response.data;
};

export const getSearchedResult = async () => {
  const response = await instanceAxios.get<SearchedListItem[]>(
    "/9gic/users/post/get"
  );

  return response.data;
};

export const getFilteredList = async (body: SearchCreteria) => {
  const response = await instanceAxios.get<SearchedListItem[]>(
    "/9gic/users/post/filter",
    {
      params: {
        filtering: body.filtering,
        grade: body.grade,
        region: body.region,
        subject: body.subject
      }
    }
  );

  return response.data;
};
