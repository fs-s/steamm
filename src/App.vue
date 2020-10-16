<template>
  <primary-nav />
  <div class="grid grid-cols-main px-32 mt-8 gap-4">
    <div>
      <secondary-nav />
    </div>
    <div>
      <links />
    </div>
  </div>
</template>
<script>
import PrimaryNav from "./components/PrimaryNav.vue";
import SecondaryNav from "./components/SecondaryNav.vue";
import links from "./components/links.vue";
export default {
  name: "App",
  components: {
    PrimaryNav,
    SecondaryNav,
    links,
  },
};
</script>ˇ
<style src="./assets/tailwind.css" />
