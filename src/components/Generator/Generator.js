import React from 'react'



export function Generator() {

  return(
    <div>
      <h1 style={{textAlign:'center',lineHeight:'100px'}}>Generator函数</h1>
    </div>
  )
}
/*--------------------------------yield表达式--------------------------------*/
/*function* todo() {
  yield "第一个";
  yield "第二个";
  yield "第三个";
  yield "第四个";
  return '结束'
}*/

/*此时不执行，只有调用它的next方法才会执行*/
/*const y = todo();*/

/*console.log(todo);*/
/*console.log(y);*/

/*当前返回第一个yield
* */
/*console.log(y.next());*/

/*当前返回第二个yield*/
/*console.log(y.next());*/

/*使用...运算符遍历生成器函数返回的遍历器对象
* 返回剩余未执行的yield(不包括return)
* -----遍历后调用的yield返回的value都为undefined-----*/
/*console.log([...y]);*/

/*此时返回value为undefined*/
/*console.log(y.next());*/

/*生成器函数todo调用后返回一个遍历器对象
* 这个对象的【Symbol.iterator】属性也是一个生成器函数
* 调用返回他自己本身*/
/*console.log(todo()[Symbol.iterator]());*/

/*-------------------------next方法的参数-----------------------------------------*/
/*function* f(x) {
  let y = 2 * (yield (x + 1));
  let z = yield (y / 3);
  return (x + y + z)
}
const a = f(5);

/!*第一次传递参数无效*!/
console.log(a.next());

/!*此时传入的参数将作为上一个yield表达式的值、即yield (x + 1)的值为12*!/
console.log(a.next(12));

/!*此时 z:13,y:12 * 2,x:5 *!/
console.log(a.next(13));*/



/*function* dataConsumer() {
  console.log(`started`);
  console.log(`1.${yield }`);
  console.log(`2.${yield}`);
  return 'result'
}
const genObj = dataConsumer();

/!*通过next方法向Generator函数传入值并打印出来*!/
genObj.next();
genObj.next("aaaaaa");
genObj.next("bbbbbb");*/


/*传入一个Generator函数，调用它的一次next方法并返回*/
function wrapper(generatorFunction) {
  return function (...args) {
    let generatorObject = generatorFunction(...args);
    generatorObject.next();
    return generatorObject;
  };
}

let wrapped = wrapper(function* () {
  yield console.log(`First input: 1`);
  yield console.log(`First input: 2`);
  return 'DONE';
});
/*此时第一次调用的next方法即可将参数传入Generator函数*/



