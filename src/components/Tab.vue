<template>
  <li class="tab text-capitalize p-2" :class="{'selected': selected}" @click="onClick">
    {{name}}
  </li>
</template>

<script>
export default {
  name: 'TabComponent',
  props: {
    label: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    selected: {
      type: Boolean,
      default: false,
    }
  },
  methods: {
    onClick() {
      this.$parent.$emit('tab-click', this.name);
    }
  }
}
</script>

<style lang="scss" scoped>
.tab {
  width: 50%;
  font-size: 18px;
  background-color: white;
  cursor: pointer;
  &.selected {
    background-color: #212529;
    color: white;
    font-weight: bold;
    font-size: 18px;
  }
}
</style>
