import { ImagesClient } from "./index.js";

const client = new ImagesClient({
  accessToken: "your-access-token",
  accountIdentifier: "your-account-identifier",
});

const images = await client.listImages({});

images.result.images.forEach((image) => {
  console.log(image.requireSignedURLs);
});
