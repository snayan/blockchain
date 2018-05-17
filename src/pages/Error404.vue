<template>
  <div class="error">
    <p>there is your 404 content</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class App extends Vue {
  name: 'error'
}
</script>



