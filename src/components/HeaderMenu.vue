<template>
  <div
    :class="{ fixed: isFixed }"
    class="utils">
    <div class="inner">
      <ul>
        <li>
          <a href="javascript:void(0)">베스트</a>
        </li>
        <li>
          <a href="javascript:void(0)">쿠폰/혜택</a>
        </li>
        <li>
          <a href="javascript:void(0)">기획전</a>
        </li>
        <li>
          <a href="javascript:void(0)">오늘장보기</a>
        </li>
        <li>
          <a href="javascript:void(0)">T공식대리점</a>
        </li>
        <li>
          <a
            class="shocking-deal"
            href="javascript:void(0)"></a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .utils {
    border-top: 1px solid #f1f1f1;
    &.fixed {
      padding-top: 120px;
    }
    .inner {
      width: 1240px;
      margin: 0 auto;
    }
    ul {
      display: flex;
      li {
        margin-right: 25px;
        &:last-child {
          margin-right: 0;
        }
        a {
          display: flex;
          align-items: center;
          height: 66px;
          font-size: 17px;
          position: relative;
          &::after {
            content: "";
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 2px;
            background-color: #f43142;
            opacity: 0;
          }
          &:hover::after {
            opacity: 1;
          }
          &.shocking-deal {
            width: 63px;
            background-image: url("https://trusting-williams-8cacfb.netlify.app/images/globals_2x.png");
            background-position: -94px 0;
            background-size: 363px;
          }
        }
      }
    }
  }
</style>
