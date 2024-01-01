/** Represents an image */
export interface Image {
  /** Unique identifier for the image */
  id: string;
  /** Filename of the image */
  filename: string;
  /** Upload time of the image */
  uploaded: string;
  /** Indicates whether the image can be accessed only using its UID */
  requireSignedURLs: boolean;
  /** User modifiable key-value store */
  meta: Record<string, unknown>;
  /** URIs to different variants of the image */
  variants: string[];
}
