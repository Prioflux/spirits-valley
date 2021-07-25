export default (image, option) => {
  if (!image) return ''
  if (!option) return ''

  const imageService = '//img2.storyblok.com/' + option
  const path = image.replace('//a.storyblok.com', imageService)
  return path
}
