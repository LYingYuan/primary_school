export default {
  // 列竖式计算
  getCalculationQuestions(state){


    return state.calculation;
  },
  // 估算
  getEstimateQuestions(state){


    return state.estimate;
  },
  // 口算
  getMentalQuestions(state){


    return state.mental;
  },
};




// 功能：产生随机数
function createRandomNum(digit) {
  // 向下取整配合随机数生成函数返回想要的（digit）位数
  return Math.floor(Math.random() * Math.pow(10, digit));
}

// 功能：运行字符串
function myEval(str) {
  return new Function("return " + str)();
}
