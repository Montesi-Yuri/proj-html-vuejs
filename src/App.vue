<script>
import HeaderComponent from './components/HeaderComponent.vue';
import MainComponent from './components/MainComponent.vue';
import FooterComponent from './components/FooterComponent.vue';

export default {
  data() {
    return {
    }
  },
  components:{
    HeaderComponent,
    MainComponent,
    FooterComponent,
  }
}

</script>

<template>

  <HeaderComponent>
  </HeaderComponent>

  <MainComponent>
  </MainComponent>

  <FooterComponent>
  </FooterComponent>

</template>

<style lang="scss">
@use './assets/scss/main.scss';

</style>
