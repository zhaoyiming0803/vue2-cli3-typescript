<template>
  <div>
    <h1>{{msg}}</h1>
  </div>
</template>

<script scoped lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';

  @Component
  export default class World extends Vue {
    @Prop() private msg!: string;
  }
</script>
