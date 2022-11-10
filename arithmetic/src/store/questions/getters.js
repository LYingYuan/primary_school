export default {
  // 列竖式计算
  getCalculationQuestions(state) {
    // 题目数量
    const num = 15;
    const questions = state.calculation;

    for (let i = 0; i < num; i++) {
      const question = {
        question: "",
        answer: 0,
      };
      
    }

    return questions;
  },
  // 估算
  getEstimateQuestions(state) {
    // 题目数量
    const num = 5;
    const questions = state.estimate;

    for (let i = 0; i < num; i++) {}

    return questions;
  },
  // 口算
  getMentalQuestions(state) {
    // 题目数量
    const num = 20;
    const questions = state.mental;

    for (let i = 0; i < num; i++) {}

    return questions;
  },
};

// 功能：创造式子
function createCalculationQuestion(type) {
  const op = "*";
  const num_2 = [getRandomNum(2), getRandomNum(2), getRandomNum(2)];
  const num_3 = [getRandomNum(3), getRandomNum(3), getRandomNum(3)];
}

// 功能：产生随机数
function getRandomNum(digit) {
  return Math.floor(Math.random() * Math.pow(10, digit));
}

// 功能：产生随机数
function createRandomNum(digit) {
  // 向下取整配合随机数生成函数返回想要的（digit）位数
  return Math.floor(Math.random() * Math.pow(10, digit));
}

// 功能：运行字符串
function myEval(str) {
  return new Function("return " + str)();
}
