<template>
  <RouterLink :to="to" class="link">
    <slot />
  </RouterLink>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  props: {
    to: {
      type: String,
      required: true,
    },
  },
});
</script>

<style lang="scss">
.link {
  color: $white;
  font-size: 16px;

  &:hover {
    border-bottom: 1px dashed $white;
  }
}

.linkActive {
  transform: scale(1.2);
}
</style>
