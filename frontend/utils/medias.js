export function getStrapiMedia(url) {
  // Check if URL is a local path
  if (url.startsWith('/')) {
    // Prepend Strapi address
    return `${process.env.strapiBaseUri}${url}`
  }
  // Otherwise return full URL
  return url
}

export function backgroundImage(image) {
  return {
    // any other styles you might need to add on as an example
    'background-image': `url(${getStrapiMedia(image.formats.medium.url)})`,
    'aria-label': getStrapiMedia(image.alternativeText),
  }
}

export function hexRgb(hexcolor) {
  const hex = hexcolor
  let c
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split('')
    if (c.length === 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]]
    }
    c = '0x' + c.join('')
    const rgbcolor = [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',')
    return rgbcolor
  }
  throw new Error('Bad Hex')
}
