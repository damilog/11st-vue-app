<template>
  <header>
    <div class="inner">
      <div
        class="open-nav-drawer"
        @click="onNav">
      </div>
      <a
        href="
      /"
        class="logo"></a>
      <div class="search">
        <input
          v-model="searchText"
          placeholder="찾고 싶은 상품을 검색해 보세요!"
          @keypress.enter="search" />
        <div
          class="search__icon"
          @click="search">
        </div>
      </div>
      <div class="ranking">
        <div
          ref="swiper"
          class="swiper">
          <div class="swiper-wrapper">
            <div 
              v-for="(rank, index) in rankings.rankings"
              :key="rank.name"
              class="swiper-slide">
              <a :href="rank.href">
                <span class="index">
                  {{ index + 1 }}             
                </span>
                <span class="name">
                  {{ rank.name }}             
                </span>
              </a>
            </div>
          </div>
        </div>
        <div
          class="open-more"
          @click="toggleRankingWrap"></div>
      </div>
      <div class="user-menu">
      </div>
    </div>
  </header>
</template>

<script>
import Swiper from 'swiper/bundle'
import 'swiper/css/bundle'

export default {
  data(){
    return{
      searchText: '',
      rankings: {}
    }
  },
  mounted(){
    this.init()
  },
  methods:{
    async init(){
      this.rankings = await this.$fetch({
        requestName: 'rankings'
      })
      console.log(this.rankings)
      //new Swiper(요소,옵션)

      await this.$nextTick() //화면 바뀔 때까지 기다리고 스와이프 라이브러리 동작시켜라

      new Swiper(this.$refs.swiper, {
         direction: 'vertical',
         speed: 1000,
         autoplay: {
           delay: 3000
         },
         loop: true
      })
    },
    onNav(){
      this.$store.dispatch('navigation/onNav')
    },
    search(){
    },
    toggleRankingWrap(){
    }
  }
}
</script>

<style lang="scss" scoped> 
header {
  background-color: #fff;
&.fixed {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 97;
  box-shadow: 0 2px 8px rgba(#000, .07);
  .inner {
    height: 80px;
  }
}
.inner {
  height: 120px;
  display: flex;
  align-items: center;
}
  .open-nav-drawer {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    cursor: pointer;
    box-shadow:
      0 2px 6px rgba(#000,.06),
      0 0 1px rgba(#000,.4);
  &::after {
    content: "";
    display: block;
    width: 36px;
    height: 36px;
    background-image: url("https://trusting-williams-8cacfb.netlify.app/images/globals_2x.png");
    background-position: -302px -203px;
    background-size: 363px;
  }
}.logo {
  width: 94px;
  height: 40px;
  margin: 0 24px;
  background-image: url("https://trusting-williams-8cacfb.netlify.app/images/globals_2x.png");
  background-position: -162px 0;
  background-size: 363px;
  cursor: pointer;
}
.search {
  position: relative;
  input {
    width: 500px;
    height: 50px;
    padding: 0 27px;
    border: 1px solid #ddd;
    border-radius: 25px;
    box-sizing: border-box;
    background-color: #fafafa;
    outline: none;
    font-size: 18px;
    font-family: 'Noto Sans KR', sans-serif;
    &::placeholder {
      color: #bbb;
    }
  }
  &__icon {
    width: 50px;
    height: 50px;
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
    background-image: url("https://trusting-williams-8cacfb.netlify.app/images/globals_2x.png");
    background-position: -162px -45px;
    background-size: 363px;
  }
}
  .ranking{
     width: 210px;
     position: relative;
     margin: 0 30px;
     .swiper {
       width: 182px;
       height: 28px;
       margin: 0;
       .swiper-slide {
         transition: .4s;
         opacity: 0;
         a {
          display: block;
          height: 28px;
          line-height: 28px;
          text-decoration: none;
          font-size: 15px;
          color: #333;
          font-weight: 700;
          .index {
            margin-right: 10px;
            color: #f43142;
            font-style: italic;
          }
          &:hover .name {
            color: #f43142;
          }
        }
        &.swiper-slide-active {
          opacity: 1;
        }
      }
    }
  }
   .open-more {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1; // Required! Cause Swiper.
    cursor: pointer;
    user-select: none; // 실시간 쇼핑 검색어가 자동으로 선택(Selection)되는 것을 방지.
    &:hover {
      background-color: #ececec;
    }
    &::after {
      content: "";
      display: block;
      width: 7px;
      height: 7px;
      margin-top: -3px;
      border: solid #999;
      border-width: 0 1px 1px 0;
      box-sizing: border-box;
      transform: rotate(45deg);
    }
   }
}
</style>
