<template>
  <LNB />
  <Header />
  <HeaderMenu />
  <Billboard />
  <MainDirect />
  <HotFocus />
  <TimeDeal />
</template>

<script>
import LNB from '~/components/LNB.vue'
import Header from '~/components/Header'
import HeaderMenu from '~/components/HeaderMenu'
import Billboard from '~/components/Billboard'
import MainDirect from '~/components/MainDirect'
import HotFocus from '~/components/HotFocus'
import TimeDeal from '~/components/TimeDeal'

export default {
  components: {
    LNB, //지역등록
    Header,
    HeaderMenu,
    Billboard,
    MainDirect,
    HotFocus,
    TimeDeal
  }
}
</script>

<style lang="scss">
@import "~/scss/main";
</style>
