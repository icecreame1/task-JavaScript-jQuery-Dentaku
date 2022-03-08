let btn = document.querySelectorAll('.btn');
let result = document.getElementById('result');
let total = 0;
let state = 'start'
let mode = 'integerMode'

//1〜9のボタンを押した時　.number
let number = document.querySelectorAll('.number');
number.forEach((index) => {
  index.addEventListener('click', () => {
    //console.log(index.dataset.id);
    if(state === 'start') {
      total = index.dataset.id;
    } else if(state === 'calculation' || state === 'decimal') {
      total += index.dataset.id;
    } else if(state === 'finish') {
      reset();
      total = index.dataset.id;
    }
    result.textContent = total;
    state = 'calculation'
    })
})

//0のボタンを押した時 #zero
let zero = document.getElementById('zero');
zero.addEventListener('click', () => {
  //console.log(zero.dataset.id);
  if(state === 'start' || state === 'finish' || state === 'decimal') {
    if(result.textContent.slice(-1) === '0') {
      return;
    }
  }

    if(state === 'start') {
      total = zero.dataset.id;
    } else {
      total += zero.dataset.id;
    }
    result.textContent = total;
})

//.のボタンを押した時 #point
let point = document.getElementById('point');
point.addEventListener('click', () => {
  if(mode === 'decimalMode') {
    return;
  }

  if(total === 0) {
    total = 0 + point.dataset.id;
  } else {
    total += point.dataset.id;
  }
  result.textContent = total;
  state = 'calculation'
  mode = 'decimalMode'
})

//+ - ✕ ÷のボタンを押した時 .operator
let operator = document.querySelectorAll('.operator');
operator.forEach((index) => {
  index.addEventListener('click', () => {
    //console.log(index.dataset.id);
    if(state === 'start') {
      return;
    }
    if(state === 'calculation') {
      total += index.dataset.id;
    } else if (state === 'decimal') {
      total = total.slice(0,-1)
      total += index.dataset.id;
    }
    result.textContent = total;
    state = 'decimal'
    mode = 'integerMode'
  })
})

//=のボタンを押した時
let equal = document.getElementById('equal');
equal.addEventListener('click', () => {
  //console.log(eval(total));
  result.textContent = eval(total);
  state = 'finish'
  mode = 'integerMode'
  //console.log(state);
})

//ACボタンを押した時
let clear = document.getElementById('clear');
clear.addEventListener('click', () => {
  reset();
  result.textContent = total;
})

//リセット
function reset() {
  total = 0;
  mode = 'integer_mode'
  state = 'start'
  //console.log(result);
  //console.log('リセットできました');
}