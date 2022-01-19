<template>
  <page
    v-if="story.content.component"
    :key="story.content._uid"
    :blok="story.content"
  />
</template>

<script>
import metadataMixin from '@/mixins/metadataMixin';
import storyblokBridgeMixin from '@/mixins/storyblokBridgeMixin';

export default {
  name: 'Index',
  mixins: [metadataMixin, storyblokBridgeMixin],

  asyncData(context) {
    const version =
      context.query._storyblok || context.isDev
        ? 'draft'
        : 'published';
    const locale =
      context.app.i18n.locale === 'nl' ? '' : context.app.i18n.locale;
    return context.app.$storyapi
      .get('cdn/stories/home', {
        version,
        language: locale,
        resolve_relations: 'globalReference.reference',
      })
      .then((res) => {
        return res.data;
      })
      .catch((res) => {
        if (!res.response) {
          return {
            statusCode: 404,
            message: 'Failed to receive content from api',
          };
        } else {
          return {
            statusCode: res.response.status,
            message: res.response.data,
          };
        }
      });
  },
  data() {
    return {
      story: { content: {} },
    };
  },
  mounted() {
    console.log(this.story.content);
  },
};
</script>
