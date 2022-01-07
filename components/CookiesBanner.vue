<template>
  <CookieControl :locale="$i18n.locale" />
</template>

<script>
import { onAnalyticsReady } from 'vue-analytics';

export default {
  name: 'CookiesBanner',
  mounted() {
    onAnalyticsReady().then(() => {
      this.$ga.enable();
      this.$ga.page(this.$route.path);

      const hasConsent = this.$cookies.isEnabled('ga');
      if (!hasConsent) {
        this.$cookies.remove('_ga');
        this.$cookies.remove('_gat');
        this.$cookies.remove('_gid');
      }
    });
  },
};
</script>

<style>
.cookie-consent-container .cookie-consent {
  margin-top: 0;
}
</style>
