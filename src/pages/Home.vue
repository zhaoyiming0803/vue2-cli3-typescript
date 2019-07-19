<template>
  <div class="home" v-if="isShowPage">
    <img alt="Vue logo" src="../../static/images/logo.png">
    <Hello msg="Hello"/>
    <World :goodsList="goodsList"></World>
  </div>
</template>

<script scoped lang="ts">
  import { Component, Vue, Provide } from 'vue-property-decorator';
  import Hello from '@/components/Hello.vue';
  import World from '@/components/World.vue';

  @Component({
    components: {
      Hello,
      World,
    },
  })
  export default class Home extends Vue {
    private isShowPage: boolean = false;
    private goodsList: object[] = [{
      name: '商品一',
      price: 1
    }, {
      name: '商品二',
      price: 2
    }];

    @Provide() private foo = 'foo';

    private created() {
      this.isShowPage = true;
    }

    private toAbout() {
      this.$router.push({
        path: 'about',
        query: {
          a: '1'
        }
      });
    }
  }
</script>
