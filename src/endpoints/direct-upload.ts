import {
  baseUrl,
  createFetch,
  Credentials,
  httpMethods,
  Message,
} from "../fetch.js";

/** Represents the result of the create direct upload URL operation */
export interface CreateDirectUploadUrlResult {
  /** Unique identifier for the image */
  id: string;
  /** The URL the unauthenticated upload can be performed to */
  uploadURL: string;
}

/** Represents the response of the create direct upload URL operation */
export interface CreateDirectUploadUrlResponse {
  /** Indicates whether the API call was successful */
  success: boolean;
  /** Array of error messages */
  errors: Message[];
  /** Array of messages */
  messages: Message[];
  /** Result of the create direct upload URL operation */
  result: CreateDirectUploadUrlResult;
}

/** Represents the request parameters for the create direct upload URL operation */
export interface CreateDirectUploadUrlRequest {
  /**
   * The date after which the upload will not be accepted.
   * Format: date-time
   * Default: Now + 30 minutes
   * Range: Minimum: Now + 2 minutes, Maximum: Now + 6 hours
   * Example: 2021-01-02T02:20:00Z
   */
  expiry?: string;
  /**
   * User modifiable key-value store.
   * Can be used for keeping references to another system of record, for managing images.
   */
  metadata?: Record<string, unknown>;
  /**
   * Indicates whether the image requires a signature token to be accessed.
   * Default: false
   * Example: true
   */
  requireSignedURLs?: boolean;
}

const createDirectUploadUrlFetch = createFetch(
  ({
    credentials,
    ...params
  }: CreateDirectUploadUrlRequest & { credentials: Credentials }) => ({
    method: httpMethods.POST,
    url: `${baseUrl}/accounts/${credentials.accountIdentifier}/images/v2/direct_upload`,
    body: JSON.stringify(params),
    credentials,
  }),
);

/**
 * Creates a direct upload URL
 */
export function createDirectUploadUrl(
  credentials: Credentials,
  params?: CreateDirectUploadUrlRequest,
): Promise<CreateDirectUploadUrlResponse> {
  return createDirectUploadUrlFetch.response<CreateDirectUploadUrlResponse>()({
    credentials,
    ...params,
  });
}
