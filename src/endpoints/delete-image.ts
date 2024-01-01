import {
  baseUrl,
  createFetch,
  Credentials,
  httpMethods,
  Message,
} from "../fetch.js";

/** Represents the response of the delete image operation */
export interface DeleteImageResponse {
  /** Indicates whether the API call was successful */
  success: boolean;
  /** Array of error messages */
  errors: Message[];
  /** Array of messages */
  messages: Message[];
  /** Result of the delete image operation */
  result: Record<string, unknown>;
}

/** Represents the request parameters for the delete image operation */
export interface DeleteImageRequest {
  /** Image unique identifier */
  identifier: string;
}

const deleteImageFetch = createFetch(
  ({
    credentials,
    identifier,
  }: DeleteImageRequest & { credentials: Credentials }) => ({
    method: httpMethods.DELETE,
    url: `${baseUrl}/accounts/${credentials.accountIdentifier}/images/v1/${identifier}`,
    credentials,
  })
);

/**
 * Deletes an image
 */
export function deleteImage(
  credentials: Credentials,
  params: DeleteImageRequest
): Promise<DeleteImageResponse> {
  return deleteImageFetch.response<DeleteImageResponse>()({
    credentials,
    ...params,
  });
}
