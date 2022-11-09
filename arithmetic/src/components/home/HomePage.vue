<template>
  <div class="container">
    <the-header></the-header>
    <mental-arithmetic></mental-arithmetic>
    <estimate-arithmetic></estimate-arithmetic>
    <calculation-arithmetic></calculation-arithmetic>
    <the-footer></the-footer>
  </div>
</template>

<script>
import CalculationArithmetic from "../topic/CalculationArithmetic.vue";
import EstimateArithmetic from "../topic/EstimateArithmetic";
import MentalArithmetic from "../topic/MentalArithmetic";
import TheHeader from "../layout/TheHeader.vue";
import TheFooter from "../layout/TheFooter.vue";

export default {
  components: {
    CalculationArithmetic,
    EstimateArithmetic,
    MentalArithmetic,
    TheHeader,
    TheFooter
  },
};
</script>
