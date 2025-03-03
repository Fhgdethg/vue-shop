<template>
  <p class="error" v-if="isError">Loading error</p>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    isError: {
      type: Boolean,
      required: true,
    },
  },
});
</script>

<style lang="scss">
.error {
  padding: 15px;
  font-size: 25px;
  background: rgba($darkRed, 0.4);
  border-radius: 18px;
  box-shadow: 0px 0px 10px rgba($black, 0.3);
  text-align: center;
  color: $white;
}
</style>
