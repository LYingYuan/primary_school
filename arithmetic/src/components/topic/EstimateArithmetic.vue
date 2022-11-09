<template>
  <the-part :title_name=title></the-part>
</template>

<script>
import ThePart from "../layout/ThePart.vue"

export default {
  components: { ThePart },
  data() {
    return {
      title: "二、估算"
    }
  },
}

</script>