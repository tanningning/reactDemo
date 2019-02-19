import { increment, decrement, reset } from "./actions/counter";
import store from "./store";

//打印初始状态
console.log(store.getState());

//每次state更新时，打印日志
//注意：subscribe（）返回一个函数用来注销监听器
let subscribe = store.subscribe(() => {
  console.log(store.getState());
});

//发起一些列action
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(reset());

//停止监听state更新
unsubscribe();
