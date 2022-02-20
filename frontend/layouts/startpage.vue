<template>
  <div id="app"> 
    <main>
      <div class="actions">
        <div class="actions-left">
          <Logo />
        </div>
        <div class="actions-right" id="actions-right-js">
          <Navigation
            :link="'/about'"
          >
            About
          </Navigation>
           <div class="sections-menu">
            <span
              class="menu-point"
              v-bind:class="{active: activeSection == index}"
              v-on:click="scrollToSection(index)"
              v-for="(offset, index) in offsets"
              v-bind:key="index">
            </span>
          </div>
        </div>
      </div> 
      <Nuxt class="slot" />
    </main>
    <div class="fullpage">
      <StartpageFooter />
      <observer @on-change="onChange" @threshold="0.9">
        <Footer/>
      </observer>
    </div>
  </div>
</template>

<script>
import { calculateSectionOffsets, scrollToSection, handleMouseWheel, moveDown, moveUp, touchStart, touchMove } from "~/utils/fullpage"
import Observer from 'vue-intersection-observer'

export default {
  data() {
    return {
      inMove: false,
      activeSection: 0,
      offsets: [],
      touchStartY: 0,
      navItem: null,
    }
  },
  methods: {
    calculateSectionOffsets, 
    scrollToSection, 
    handleMouseWheel: handleMouseWheel, 
    moveDown, 
    moveUp,
    touchStart, 
    touchMove,
    onChange(entry, unobserve) {
      // After loading Cancel monitoring, optimise performance
      if (entry.isIntersecting) {
        this.navItem.classList.add('isFooterBackground');
      } else {
        this.navItem.classList.remove('isFooterBackground'); 
      }
    },
  },
  mounted() {
    this.calculateSectionOffsets();
    window.addEventListener('DOMMouseScroll', this.handleMouseWheelDOM); // Mozilla Firefox
    window.addEventListener('mousewheel', this.handleMouseWheel, {
        passive: false
    }); // Other browsers
    // window.addEventListener('touchstart', this.touchStart, {
    //     passive: false
    // }); // mobile devices
    // window.addEventListener('touchmove', this.touchMove, {
    //     passive: false
    // }); // mobile devices
    this.navItem = document.getElementById('actions-right-js');
  },
  destroyed() {
    window.removeEventListener('mousewheel', this.handleMouseWheel, {
        passive: false
    }); // Other browsers
    window.removeEventListener('DOMMouseScroll', this.handleMouseWheelDOM); // Mozilla Firefox
    // window.removeEventListener('touchstart', this.touchStart); // mobile devices
    // window.removeEventListener('touchmove', this.touchMove); // mobile devices
  },
  components: {
    Observer
  },
}
</script>

<style lang="scss" scoped>
.slot {
  position: relative;
  z-index: 1000;
  height: 100%;
  width: 100%;
}
.actions-left {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1001;
  padding: 2.125rem 3.375rem;
  @media screen and (max-width: $max_width_s) {
    padding: 2rem;
  }
}
.actions-right {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1001;
  padding: 2.125rem 3.375rem;
  align-items: flex-end;
  @media screen and (max-width: $max_width_s) {
    padding: 2rem;
    height: auto;
  }
  &.isFooterBackground {
    color: $color-nearlywhite;
    a {
      color: inherit;
    }
    .sections-menu .menu-point {
      z-index: 1001;
      background-color: $color-nearlywhite;
    }
  }
}

.sections-menu {
  position: fixed;
  right: 3.375rem;
  top: 50%;
  transform: translateY(-50%);
  width: 0.9rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: $max_width_s) {
    display: none;
  }
}
.sections-menu .menu-point {
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  margin: 0.5rem 0;
  background-color: $color-darkgray;
  display: block;
  opacity: .6;
  transition: .4s ease all;
  cursor: pointer;
}
.sections-menu .menu-point.active {
  opacity: 1;
  transform: scale(1.5);
}
main {
  width: calc(100vw - 20rem);
  height: 100%;
  margin: 0 auto;
  @media screen and (min-width: $max_width) {
    width: calc(90rem - 20rem);
  }
  @media screen and (max-width: $max_width_s) {
    width: calc(100vw - 4rem);
  }
}
</style>
