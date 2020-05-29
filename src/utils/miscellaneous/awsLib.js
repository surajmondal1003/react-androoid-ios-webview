// import AWS from 'aws-sdk';
import S3FileUpload from 'react-s3';

// const s3 = new AWS.S3({
//   accessKeyId: 'AKIAZ6HUSXMN63X67RFD',
//   secretAccessKey: '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'
// });
const FileTypeObj = {
  pdf: 'application/pdf',
  jpeg: 'application/jpeg',
  jpg: 'application/jpg',
  png: 'application/png'
}
const S3BUCKET_CONFIG = {
  bucketName: 'ndhbucket',
  dirName: 'asset/image', /* optional */
  region: 'ap-south-1',
  accessKeyId: 'AKIAZ6HUSXMN63X67RFD',
  secretAccessKey: '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',
}
export async function uploadToS3(imgSrc, imageName, path) {
  S3BUCKET_CONFIG.dirName = path ? `asset/${path}` : S3BUCKET_CONFIG.dirName;
  const data = await S3FileUpload
    .uploadFile(imgSrc, S3BUCKET_CONFIG)
  if (data.location)
    return data.location;
  else
    return null;
  // new Promise((resolve, reject) => {
  //   s3.upload({
  //     Bucket: 'ndhbucket', // pass your bucket name
  //     dirName: 'asset/image',
  //     Key: `asset/image/${imageName}.jpeg`, // file will be saved as testBucket/contacts.csv
  //     Body: imgSrc,
  //     // ContentType: 'image/jpeg',
  //   }, (err, data) => {
  //     if (err)
  //       console.log(err);
  //     else
  //       resolve(data);

  //     console.log(`File uploaded successfully at ${data.Location}`)
  //     // this.templeteName.current.value = ''
  //   });
  // });
}
// export async function replaceInS3(imgSrc, imageName) {
//   s3.putObject({
//     Bucket: 'ndhbucket', // pass your bucket name
//     Key: `asset/size-chart/${imageName}.jpeg`, // file will be saved as testBucket/contacts.csv
//     Body: imgSrc,
//     ContentType: 'image/jpeg',
//   }, (err, data) => {
//     if (err) {
//       console.log('error', err)
//       return alert('Error while uploading HTML')
//     }
//     console.log(`File uploaded successfully at ${JSON.stringify(data)}`)
//   });
// }
export async function getFileFromUrl(src) {
  console.log('src', src)
  let file = src.split('/').pop();
  let fileSplit = file.split('.');
  let fileType = FileTypeObj[fileSplit[1]];
  const res = await fetch(src).then(res => res.blob());
  let fileObj = new File([res], fileSplit[0], { type: fileType })
  console.log('file_func', fileObj)
  return fileObj;

}
