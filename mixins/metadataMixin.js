import getMetaData from '@/utils/metadata';

export default {
  head() {
    return {
      title: this.story.content.meta.title,
      meta: [...this.meta],
    };
  },
  computed: {
    // Set the metadata from the API
    meta() {
      const metaData = {
        title: this.story.content.meta.title,
        description: this.story.content.meta.description,
        url: this.$config.baseURL,
        og_title:
          this.story.content.meta.og_title ||
          this.story.content.meta.title,
        og_description:
          this.story.content.meta.og_description ||
          this.story.content.meta.description,
        og_image: this.story.content.meta.og_image,
        twitter_title:
          this.story.content.meta.twitter_title ||
          this.story.content.meta.title,
        twitter_description:
          this.story.content.meta.twitter_description ||
          this.story.content.meta.description,
        twitter_image: this.story.content.meta.twitter_image,
      };
      return getMetaData(metaData);
    },
  },
};
