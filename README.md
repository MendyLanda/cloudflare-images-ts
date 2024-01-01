# Cloudflare Images API TypeScript Client

This library is a lightweight TypeScript client for Cloudflare Images API. It aims to provide a simple and efficient way to interact with the API.

## Endpoints Status

| Endpoint | Method | Status |
| --- | --- | --- |
| List images V2 | GET | Implemented |
| Create Direct Upload URL | POST | Implemented |
| Update Image | PATCH | Implemented |
| Delete Image | DELETE | Implemented |
| List images | GET | Not planned (deprecated) |
| Upload an image | POST | TBD |
| Images usage statistics | GET | TBD |
| Base image | GET | TBD |
| Image Details | GET | TBD |

## Installation

  ```bash
  npm install cloudflare-images-ts
  ```
  
  ```bash
  yarn add cloudflare-images-ts
  ```

  ```bash
  pnpm add cloudflare-images-ts
  ```
  
  ```bash
  bun install cloudflare-images-ts
  ```

## Usage

First import the `ImagesClient` from the library:

```typescript
import { ImagesClient } from "cloudflare-images-api-ts-client";
```

Then, create a new instance of the client with your Cloudflare credentials:
  
  ```typescript
  const client = new ImagesClient({
  accessToken: "your-access-token",
  accountIdentifier: "your-account-identifier",
});
  ```

### List Images (V2)

To list images, use the listImages method:

```typescript
const images = await client.listImages({});
images.result.images.forEach((image) => {
  console.log(image.requireSignedURLs);
});
```

### Create Direct Upload URL

```typescript
const uploadUrl = await client.createDirectUploadUrl({
  expiry: "2022-01-02T02:20:00Z",
  requireSignedURLs: true,
});
console.log(uploadUrl.result.uploadURL);
```

### Update Image

To update an image, use the updateImage method:

```typescript
const updatedImage = await client.updateImage({
  identifier: "image-identifier",
  requireSignedURLs: true,
});
console.log(updatedImage.result.requireSignedURLs);
```

### Delete Image

To delete an image, use the deleteImage method:

```typescript
await client.deleteImage({
  identifier: "image-identifier",
});
```

---

Please note that the other endpoints are not yet implemented in this library. Contributions are welcome!
