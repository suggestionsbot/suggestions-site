<template>
  <div class="error-500">
    <h1>An error has occured</h1>
    <p>Please contact a site administrator.</p>
    <p><strong>Error Message: </strong>{{ error.message }}</p>
  </div>
</template>

<script>
export default {
  name: 'Error500',
  props: {
    error: {
      type: Object,
      default: () => {}
    }
  }
};
</script>
