export function replaceUrl(imgUrl, type, heightParam) {
  console.log(heightParam)
  const placeHolder = type === 'store' ? 'https://nextdoorhub.imgix.net/apa/assets/store-placeholder.jpg?h=80' : 'https://nextdoorhub.imgix.net//apa/assets/product-placeholder.jpg?h=55';
  let img = placeHolder;
  let height = heightParam ? heightParam : 82;
  console.log(height)

  switch (type) {
    case 'store':
      height = 80;
      break;
    case 'store_profile':
      height = 110;
      break;
    case 'cover_image':
      height = 230;
      break;
  }
  if (imgUrl) {
    let x = imgUrl.split('/');
    if (x[2].includes('ndhbucket'))
      x[2] = 'nextdoorhub.imgix.net';
    img = x.join('/');
    img = type == 'store' ? `${img}?h=${height}` : `${img}?h=${height}`
  }
  return img;
}