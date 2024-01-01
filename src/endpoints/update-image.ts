import {
  baseUrl,
  createFetch,
  Credentials,
  httpMethods,
  Message,
} from "../fetch.js";
import { Image } from "../types.js";

/** Represents the result of the update image operation */
export interface UpdateImageResult extends Image {}

/** Represents the response of the update image operation */
export interface UpdateImageResponse {
  /** Indicates whether the API call was successful */
  success: boolean;
  /** Array of error messages */
  errors: Message[];
  /** Array of messages */
  messages: Message[];
  /** Result of the update image operation */
  result: UpdateImageResult;
}

/** Represents the request parameters for the update image operation */
export interface UpdateImageRequest {
  /** Image unique identifier */
  identifier: string;
  /**
   * User modifiable key-value store.
   * Can be used for keeping references to another system of record, for managing images.
   * No change if not specified.
   */
  metadata?: Record<string, unknown>;
  /**
   * Indicates whether the image can be accessed using only its UID.
   * If set to true, a signed token needs to be generated with a signing key to view the image.
   * Returns a new UID on a change. No change if not specified.
   */
  requireSignedURLs?: boolean;
}

const updateImageFetch = createFetch(
  ({
    credentials,
    identifier,
    ...params
  }: UpdateImageRequest & { credentials: Credentials }) => ({
    method: httpMethods.PATCH,
    url: `${baseUrl}/accounts/${credentials.accountIdentifier}/images/v1/${identifier}`,
    body: JSON.stringify(params),
    credentials,
  }),
);

/**
 * Updates an image
 */
export function updateImage(
  credentials: Credentials,
  params: UpdateImageRequest,
): Promise<UpdateImageResponse> {
  return updateImageFetch.response<UpdateImageResponse>()({
    credentials,
    ...params,
  });
}
