<template>
  <LNB />
  <TheHeader />
</template>

<script>
import LNB from '~/components/LNB.vue'
import TheHeader from '~/components/TheHeader'

export default {
  components: {
    LNB, //지역등록
    TheHeader
  }
}
</script>

<style lang="scss" scoped>
@import "~/scss/main";
</style>
