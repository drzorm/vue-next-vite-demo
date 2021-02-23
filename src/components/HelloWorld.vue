<template>
  <h1>{{ msg }}</h1>

  <button @click="increase">count is: {{ count }}</button>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
  setup: () => {
    const count = ref(0);

    function increase() {
      return count.value++;
    }

    return { count, increase };
  },
});
</script>

<style lang="less" scoped>
@fs: 20px;

h1 {
  color: #42b983;
  font-size: @fs;
}
</style>
