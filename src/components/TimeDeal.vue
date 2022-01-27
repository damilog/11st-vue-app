<template>
  <section class="time-deal">
    <div
      ref="lazyLoadElement"
      class="inner">
      <h2>타임딜</h2>
      <div class="swiper-outer">
        <div
          ref="swiper"
          class="swiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img
                class=""
                src="//cdn.011st.com/11dims/resize/720x360/quality/90/11src/pd/21/0/5/4/1/9/6/YXNfd/SD3445054196.jpg"
                alt="Apple Pencil 애플 펜슬 (1세대 / 2세대)" />
              <div class="info">
                <div class="time-count">
                  01:42:06
                </div>
                <div class="time-flag">
                  타임딜
                </div>
                <div class="time-product-name">
                  <strong>Apple Pencil 애플 펜슬 (1세대 / 2세대)</strong>
                </div>
                <div class="time-product-price">
                  <dl
                    class="time-product-price__deal">
                    <dt class="title">
                      타임딜가
                    </dt>
                    <dd>
                      <span class="value">109,900</span>
                      <span class="unit">원~</span>
                      <span class="regular">119,900원</span>
                    </dd>
                  </dl>
                </div>
                
                <div
                  class="
                    time-product-option">
                  <span class="text">무료배송</span>
                  <span class="text">  107개 남음</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="prev"></div>
        <div class="next"></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
  },
  mounted () {
    this.$lazyLoad(this.$refs.lazyLoadElement)
  },
  methods: {
    
  },
}
</script>

<style scoped lang="scss">
  section {
    .swiper-slide{
      display: flex;
    }
    .inner {
      height: 612px; .swiper {
        margin: -30px -16px;
        padding: 30px 16px;
      }
      .swiper-outer {
        position: relative;
        .prev,
        .next {
          position: absolute;
          top: 50%;
          width: 50px;
          height: 50px;
          margin-top: -25px;
          border-radius: 50%;
          box-shadow: 0 4px 16px rgba(#000, .15);
          background-color: #fff;
          z-index: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          outline: none;
          &::after {
            content: "";
            width: 10px;
            height: 18px;
            background-image: url("https://trusting-williams-8cacfb.netlify.app/images/main_2x.png");
            background-size: 209px;
          }
        }
        .prev {
          left: -25px;
          &::after {
            background-position: -199px 0;
          }
        }
        .next {
          right: -25px;
          &::after {
            background-position: -199px -46px;
          }
        }
      }
    }
    .info{
      .time-count{
        height: 40px;
        margin-top: 50px;
        margin-bottom: 60px;
        font-size: 32px;
        font-weight: bold;
        color: #f43142;
        text-align: left;
      }
      .time-flag{
        padding: 0 4px;
        height: 22px;
        line-height: 22px;
        font-size: 12px;
        color: #6423ff;
        background-color: #FFF8F8;
        border: 1px solid #6423ff;
        position: absolute;
        top: 120px;
      }
      .time-product-name{
        font-size: 19px;
        line-height: 26px;
      }
      .time-product-price__deal{
        display: flex;
        .title{
          display: flex;
          align-items: center;
          margin-right: 8px;
          font-size: 20px;
          color: #f43142;
        }
        .value{
          font-size: 24px;
          color: #111;
          font-weight: bold;
          // line-height: 20px;
        }
        .unit{
          color: #666;
        }
        .regular{
          text-decoration: line-through;
          color: #999;
        }
      }
      .time-product-option{
        .text{
          font-size: 13px;
          color: #666;
        }
      }

    }
  }
</style>
