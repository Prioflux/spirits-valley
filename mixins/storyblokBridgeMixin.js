export default {
  mounted() {
    this.$storybridge(
      () => {
        const storyblokInstance = new StoryblokBridge({
          resolveRelations: ['globalReference.reference'],
        })

        // Listen to Storyblok's Visual Editor event
        storyblokInstance.on(['input', 'published', 'change'], (event) => {
          if (event.action === 'input') {
            if (event.story.id === this.story.id) {
              this.story.content = event.story.content
            }
          } else {
            this.$nuxt.$router.go({
              path: this.$nuxt.$router.currentRoute,
              force: true,
            })
          }
        })
      },
      (error) => {
        console.log(error)
      }
    )
  },
}
