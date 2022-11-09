import { createStore } from "vuex";

import questionModule from "./questions/index";

const store = createStore({
  modules: {
    questions: questionModule,
  },
});

export default store;
