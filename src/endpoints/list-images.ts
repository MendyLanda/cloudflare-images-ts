import {
  baseUrl,
  createFetch,
  Credentials,
  httpMethods,
  Message,
} from "../fetch.js";
import { Image } from "../types.js";

/** Represents the result of the list images operation */
export interface ListImagesResult {
  /** Token to fetch the next page */
  continuation_token: string;
  /** Array of images */
  images: Image[];
}

/** Represents the response of the list images operation */
export interface ListImagesResponse {
  /** Indicates whether the API call was successful */
  success: boolean;
  /** Array of error messages */
  errors: Message[];
  /** Array of messages */
  messages: Message[];
  /** Result of the list images operation */
  result: ListImagesResult;
}

/** Represents the request parameters for the list images operation */
export interface ListImagesRequest {
  /** Continuation token for the next page */
  continuation_token?: string;
  /** Number of items per page, default is 1000, minimum is 10, maximum is 10000 */
  per_page?: number;
  /** Sorting order by upload time, default is 'desc', can be 'asc' or 'desc' */
  sort_order?: "asc" | "desc";
}

const listImagesFetch = createFetch(
  ({
    credentials,
    ...params
  }: ListImagesRequest & { credentials: Credentials }) => ({
    method: httpMethods.GET,
    url: `${baseUrl}/accounts/${credentials.accountIdentifier}/images/v2`,
    searchParams: params,
    credentials,
  }),
);

export function listImages(
  credentials: Credentials,
  params?: ListImagesRequest,
): Promise<ListImagesResponse> {
  return listImagesFetch.response<ListImagesResponse>()({
    credentials,
    ...params,
  });
}
