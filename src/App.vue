<template>
  <div>
    <v-app>
      <router-view></router-view>
      <footer-component></footer-component>
    </v-app>
  </div>
</template>
<script>
import FooterComponent from './components/Footer';
export default {
  components: {
    FooterComponent
  }
  
}
</script>