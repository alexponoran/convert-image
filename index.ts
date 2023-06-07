type Format = "jpg" | "png" | "webp" | "avif";

export default async function convertImage(
 imageSource: string | File,
 fileName: string,
 format: Format
): Promise<void> {
 try {
  let imageBlob: Blob;
  if (typeof imageSource === "string") {
   const response = await fetch(imageSource);
   imageBlob = await response.blob();
  } else if (imageSource instanceof File) {
   imageBlob = imageSource;
  } else {
   throw new Error("Invalid image source provided.");
  }

  const convertedImageBlob = await convert(imageBlob, format);
  const imageURL = URL.createObjectURL(convertedImageBlob);

  download(imageURL, fileName, format);

  URL.revokeObjectURL(imageURL);
 } catch (error) {
  console.error("An error occurred during image download:", error);
 }
}

function download(url: string, fileName: string, format: Format): void {
 const downloadLink = document.createElement("a");
 downloadLink.href = url;
 downloadLink.download = fileName + `.${format}`;
 document.body.appendChild(downloadLink);
 downloadLink.click();
 document.body.removeChild(downloadLink);
}

async function convert(imageBlob: Blob, format: Format): Promise<Blob> {
 return new Promise((resolve, reject) => {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

  const img = new Image();
  img.onload = () => {
   canvas.width = img.width;
   canvas.height = img.height;
   ctx.drawImage(img, 0, 0);

   canvas.toBlob((blob) => {
    if (blob) {
     resolve(blob);
    } else {
     reject(new Error(`Failed to convert image to ${format}.`));
    }
    canvas.remove();
   }, `image/${format}`);
  };

  img.onerror = () => {
   reject(new Error("Failed to load image."));
   canvas.remove();
  };

  img.src = URL.createObjectURL(imageBlob);
 });
}
