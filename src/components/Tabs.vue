<template>
  <div class="nav nav-tabs mb-3">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'TabsComponent',
  props: {
    value: {
      type: String,
      default: '',
    }
  },
  mounted() {
    this.$on('tab-click', this.onTabChange);
  },
  methods: {
    onTabChange(label) {
      if (this.value !== label) {
        this.$emit('input', label)
      }
    }
  }
}
</script>

<style scoped>
.nav-tabs {
  border: 1px solid #212529;
  border-radius: 2px;
}
</style>
