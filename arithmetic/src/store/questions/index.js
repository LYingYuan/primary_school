import actions from "./actions";
import getters from "./getters.js";
import mutations from "./mutations";

export default {
  namespace: true,
  state() {
    return {
      // 列竖式计算
      calculation: [],
      // 估算
      estimate: [],
      // 口算
      mental: [],
    };
  },
  actions,
  getters,
  mutations,
};
