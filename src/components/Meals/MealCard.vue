<template>
  <div class="small-12 cell list_item">
    <div class="grid-x grid-margin-x align-middle">
      <div class="cell small-2">
        <img src="../../assets/img/cadenas-open.svg" alt="cadenas" />
      </div>
      <div class="cell small-3 jour">{{ day }}</div>
      <div class="cell small-5 titre_recette">Oeufs à la tomate et chorizo</div>
      <div
        class="cell small-2 photo_recette"
        style="background-image: url(./assets/img/pizza.jpg)"
      ></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    day: {
      type: String,
      required: true,
    },
  },

  setup(props) {
    console.log(props.day);
  },
});
</script>

<style>
</style>