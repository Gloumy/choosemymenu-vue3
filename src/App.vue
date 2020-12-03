<template>
  <div>
    <header>
      <div class="grid-container grid-container-padded">
        <ul class="grid-x grid-margin-x">
          <li class="small-4 cell">
            <h1>
              <a class="no_css h1_hidden" href="#body"
                >Choose my menu <img src="./assets/img/logo.png" alt="Logo"
              /></a>
            </h1>
          </li>
          <li class="small-8 cell intro_app">
            <p>
              Laisse l'application te proposer des plats originaux et verrouille
              chaque jour qui te plait. Ensuite, partage à tes proches, ces
              délicieuses recettes !
            </p>
          </li>
        </ul>
      </div>
    </header>
    <main id="main">
      <section>
        <div class="grid-container grid-container-padded">
          <div class="grid-x grid-margin-x">
            <div class="cell small-12">
              <meal-card v-for="day in days" :key="day" :day="day"></meal-card>
            </div>
          </div>
        </div>
      </section>
      <div class="mobile-app-icon-bar">
        <button><img src="./assets/img/picto-list.svg" alt="Picto" /></button>
        <button>
          <img
            class="choose"
            src="./assets/img/picto-melange.svg"
            alt="Picto"
          />
        </button>
        <button class="active">
          <img src="./assets/img/picto-share.svg" alt="Picto" />
        </button>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import MealCard from "./components/Meals/MealCard.vue";
import MealApi from "@/api/MealsApi";
import { Meal } from "@/models/Meal";

@Options({
  components: {
    MealCard,
  },
})
export default class App extends Vue {
  private days: string[] = [
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
    "Dimanche",
  ];

  private meals: Meal[] = [];

  mounted() {
    MealApi.getMeals().then((resp) => {
      this.meals = resp;
      console.log(this.meals);
    });
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/app";
</style>
