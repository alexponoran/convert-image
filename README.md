# Package Name

Convert-Image is a lightweight npm library that allows you to convert and download images in various formats, directly in the browser. It simplifies the process of converting images and provides an easy-to-use API for developers to integrate into their projects. The library is built using the browser's built-in APIs, so it does not require any external dependencies.

# Installation

    npm install convert-image

# Usage

To convert and download an image, use the convertImage function.

    import convertImage from 'convert-image';

    convertImage(imageSource, fileName, format)

The function takes three parameters: the **image source**, the desired **file name**, and the desired **format**.

The image source can be a **URL or a file input**.

The file name is the name of the file that will be downloaded. It should **not include the file extension**.

The format is the desired image format (**jpg, png, webp, avif**).

Below are some **examples**:

## For images from a URL

    import convertImage from 'convert-image';

    const imageSource = 'https://picsum.photos/200/300';
    const fileName = 'my-image';
    const format = 'webp';

    convertImage(imageSource, fileName, format)

## For images from a file input

    import convertImage from "convert-image";

    const fileInput = document.querySelector(".image-input");
    const format = "webp";
    fileInput.addEventListener("change", (event) => {
    const target = event.target;
    const file = target.files[0];
    const fileName = file.name;
    convertImage(file, fileName, format);
    });

    <!-- HTML -->
    <input class="image-input" type="file"/>

# Supported Formats

The convert-image library supports the following image formats: **jpg, png, webp, avif**.

# Troubleshooting

If you encounter any issues while using the convert-image library, consider the following troubleshooting tips:

**For SSR (Server-Side Rendering) applications:**
Because convert-image uses the browser's built-in APIs, it cannot be used server-side. Ensure that the library is only used in the browser. You can use the following code to prevent the library from being used on the server:

    if (typeof window !== 'undefined') {
        convertImage(imageSource, fileName, format)
    }

Ensure that the image source is valid and accessible.
Check that the specified format is supported by the library.
Make sure you have proper permissions for downloading files from the browser.
If you receive CORS (Cross-Origin Resource Sharing) errors, ensure that the server hosting the image allows requests from your domain.
If you encounter any bugs or have feature requests, please report them on this GitHub repository.

# Contributing

If you would like to contribute to the development of this library, please open up an issue and/or submit a pull request.

# License

This project is licensed under the MIT License - see the LICENSE file in this repository for details.

# Changelog

1.1.2 - 7 June 2023 - Initial release
