import type { FetchMethodsType } from "./fetchMethods.type";

type Args = {
  apiUrl?: string;
  path: string;
  method: FetchMethodsType;
  body: unknown;
};

export const fetcherHelper = ({
  apiUrl = "http://localhost:9000/api",
  path,
  method,
  body,
}: Args): Promise<Response> => {
  return fetch(`${apiUrl}${path}`, {
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
    method,
    body: JSON.stringify(body),
  });
};
