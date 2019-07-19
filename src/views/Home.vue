<template>
  <div class="home" v-if="isShowPage">
    <img alt="Vue logo" src="../assets/logo.png">
    <Hello msg="Hello"/>
    <World msg="World"></World>
  </div>
</template>

<script scoped lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import Hello from '@/components/Hello.vue';
  import World from '@/components/World.vue';

  @Component({
    components: {
      Hello,
      World,
    },
  })
  export default class Home extends Vue {
    private isShowPage: boolean = true;

    private created() {
      this.showPage();
    }

    private showPage() {
      setTimeout(() => {
        this.isShowPage = true;
      }, 2000);
    }
  }
</script>
