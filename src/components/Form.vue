<template>
  <form v-if="!submitted" class="form" @submit="onSubmit" novalidate="true">
    <div class="form-group text-left">
      <label>{{inputName}}: </label>
      <input class="form-control" type="number" v-model="inputValue" min="0" :placeholder="`Enter ${inputName}`">
      <small class="form-text text-error" v-if="error">{{error}}</small>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
  <div v-else>
    <p class="form-submitted-msg">Your input is submitted</p>
  </div>
</template>

<script>
export default {
  name: "FormComponent",
  props: {
    value: {
      type: Number,
      default: 0,
    },
    inputName: {
      type: String,
      default: '',
    }
  },
  data() {
    return {
      inputValue: null,
      error: null,
      submitted: false,
    }
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      if (!this.validateForm()) return;

      this.$emit('input', parseInt(this.inputValue));
      this.$emit('submit')
      this.submitted = true
    },
    validateForm() {
      if (!this.inputValue) {
        this.error = `${this.inputName} is required`;
      } else if (this.inputValue <= 0) {
        this.error = `${this.inputName} should be greater than 0`;
      } else {
        this.error = null;
      }
      return this.error ? false : true;
    }
  }
}
</script>

<style scope>
.text-error {
  color: crimson;
}
</style>
