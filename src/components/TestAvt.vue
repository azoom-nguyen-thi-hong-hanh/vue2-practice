<template>
    <div>
        <img src="" alt="">
    </div>
</template>
<script>
export default {
  name: "TestAvt",
  props: {
    base64URL: { type: String },
  },
  computed: {
    imgAvatar() {
      return this.base64URL;
    },
  },
};
</script>