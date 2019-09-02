<template>
  <div class="about">
    <h1>This is an about page !</h1>
    <van-button type="primary" @click="openModal">打开Modal</van-button>
    <modal v-model="isShowModal"></modal>
    <van-button type="info" @click="onSuccess">成功提示</van-button>
  </div>
</template>

<script lang="ts">
  import { Component, Vue, Provide } from 'vue-property-decorator';
  
  import Modal from '../components/Modal.vue';
  import { Button, Switch } from 'vant';

  @Component({
    components: {
      Modal,
      [Button.name]: Button,
      [Switch.name]: Switch
    }
  })
  export default class About extends Vue {
    private isShowModal: boolean = false;
    private checked: boolean = false;

    @Provide() foo = 'foo-about';

    private created () {
      console.log(this.$route);
    }

    private openModal () {
      this.isShowModal = true;
    }

    private onSuccess () {
      this.$toast.success('成功提示');
    }
  }
</script>

<style lang="less" scoped>

</style>