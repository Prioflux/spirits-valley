import transformImage from './transformImage.js'

const type = 'website'
const url = 'https://www.thespiritsvalley.com'
const title = 'The Spirits Valley'
const description =
  "Op de site van het Oud Pompgebouw (1860) verenigt 'The Spirits Valley' een aantal bedrijven. Je kan hier terecht voor groepsrondleidingen in het historisch pand en de gevestigde ambachtelijke stokerij"
const image = transformImage(
  'https://a.storyblok.com/f/120756/1172x512/ad1111158b/logo.png',
  'fit-in/1200x630/filters:fill(transparent):format(png)'
)

export default (meta) => {
  return [
    {
      hid: 'description',
      name: 'description',
      content: (meta && meta.description) || description,
    },
    {
      hid: 'og:type',
      property: 'og:type',
      content: (meta && meta.type) || type,
    },
    {
      hid: 'og:url',
      property: 'og:url',
      content: (meta && meta.url) || url,
    },
    {
      hid: 'og:title',
      property: 'og:title',
      content: (meta && meta.og_title) || title,
    },
    {
      hid: 'og:description',
      property: 'og:description',
      content: (meta && meta.og_description) || description,
    },
    {
      hid: 'og:image',
      property: 'og:image',
      content:
        (meta &&
          transformImage(
            meta.og_image,
            'fit-in/1200x630/filters:fill(transparent):format(png)'
          )) ||
        image,
    },
    {
      hid: 'twitter:card',
      name: 'twitter:card',
      content: 'summary_large_image',
    },
    {
      hid: 'twitter:url',
      name: 'twitter:url',
      content: (meta && meta.url) || url,
    },
    {
      hid: 'twitter:title',
      name: 'twitter:title',
      content: (meta && meta.twitter_title) || title,
    },
    {
      hid: 'twitter:description',
      name: 'twitter:description',
      content: (meta && meta.twitter_description) || description,
    },
    {
      hid: 'twitter:image',
      name: 'twitter:image',
      content:
        (meta &&
          transformImage(
            meta.twitter_image,
            'fit-in/1200x630/filters:fill(transparent):format(png)'
          )) ||
        image,
    },
  ]
}
