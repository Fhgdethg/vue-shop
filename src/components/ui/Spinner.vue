<template>
  <div :class="classes">
    <div class="lds_ring" :style="`width: ${size}px; height: ${size}px;`">
      <div
        v-for="(_, i) in 4"
        :style="`width: ${size}px; height: ${size}px; border-width: ${size / 10}px;`"
        :key="i"
      ></div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  data: ({ isCover, isFixed, isOverlayWhite, className }) => ({
    classes: `spinner_overlay ${className} ${
      isCover ? 'cover' : ''
    } ${isFixed ? 'fixed' : ''} ${isOverlayWhite ? 'white' : ''}`,
  }),
  props: {
    size: {
      type: Number,
      required: false,
      default: 38,
    },
    isCover: {
      type: Boolean,
      required: false,
      default: false,
    },
    isFixed: {
      type: Boolean,
      required: false,
      default: false,
    },
    isOverlayWhite: {
      type: Boolean,
      required: false,
      default: false,
    },
    className: {
      type: String,
      required: false,
      default: '',
    },
  },
});
</script>

<style lang="scss" scoped>
.spinner_overlay {
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(1px);
  z-index: 110;

  &.cover {
    position: absolute;
  }

  &.fixed {
    position: fixed;
  }

  &.white {
    background-color: $white;
    border-radius: 10px;
  }
}

.lds_ring {
  display: block;
  position: relative;
}

.lds_ring div {
  position: absolute;
  display: block;
  border: solid;
  border-radius: 50%;
  animation: lds_ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: $darkBlue transparent transparent transparent;
}

.lds_ring div:nth-child(1) {
  animation-delay: -0.45s;
}

.lds_ring div:nth-child(2) {
  animation-delay: -0.3s;
}

.lds_ring div:nth-child(3) {
  animation-delay: -0.15s;
}

@keyframes lds_ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
