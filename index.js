import saveImage from 'smart-image-saver';

await saveImage({
  url: 'http://someurl.com/path/to/dest/image.jpg',
  path: '/path/to/dest/image.jpg',
  name: 'example',
});
