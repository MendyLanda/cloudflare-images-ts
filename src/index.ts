import { deleteImage } from "./endpoints/delete-image.js";
import { createDirectUploadUrl } from "./endpoints/direct-upload.js";
import { listImages } from "./endpoints/list-images.js";
import { updateImage } from "./endpoints/update-image.js";
import { Credentials } from "./fetch.js";

export class ImagesClient {
  private credentials: Credentials;

  constructor(credentials: Credentials) {
    this.credentials = credentials;
  }

  listImages = (params: EndpointParams<typeof listImages>) =>
    listImages(this.credentials, params);

  createDirectUploadUrl = (
    params: EndpointParams<typeof createDirectUploadUrl>,
  ) => createDirectUploadUrl(this.credentials, params);

  updateImage = (params: EndpointParams<typeof updateImage>) =>
    updateImage(this.credentials, params);

  deleteImage = (params: EndpointParams<typeof deleteImage>) =>
    deleteImage(this.credentials, params);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type EndpointParams<T extends (...args: any[]) => any> = Parameters<T>[1];
