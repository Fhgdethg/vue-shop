<template>
  <header class="header">
    <div class="headerContainer">
      <Logo />
      <nav class="nav">
        <Link :to="routes.catalog"> Catalog </Link>
        <BasketLink />
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import Logo from '@/components/ui/Logo.vue';
import Link from '@/components/Link.vue';
import BasketLink from '@/components/BasketLink.vue';

import { routes } from '@/router/routes.ts';
</script>

<style scoped lang="scss">
.header {
  background: $darkBlue;
  padding: 10px;
  box-shadow: 0px 1px 10px rgba($black, 0.5);

  &Container {
    display: flex;
    justify-content: space-between;
    max-width: 1700px;
    margin: 0 auto;
  }
}

.nav {
  display: flex;
  gap: 20px;
  align-items: center;
}
</style>
