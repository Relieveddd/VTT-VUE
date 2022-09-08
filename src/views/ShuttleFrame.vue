<template>
  <div class="box">
    <div class="leftBox">
      <div>
        <div>
          <input
            v-model="inputAllSelectedLeft.checked"
            type="checkbox"
            @click="selectAllLeft"
          />
          列表一({{ lengthCheckLeft }}/{{ inputText.leftArr.length }})
        </div>
        <!-- <div>{{ inputText.leftArr.length }}</div> -->
      </div>
      <div v-for="le in inputText.leftArr">
        <input type="checkbox" v-model="le.checked" :disabled="le.disabled" />
        {{ le.label }}
      </div>
    </div>
    <div class="midBox">
      <button class="leftBtn" @click="goLeft">向左</button>
      <button class="rightBtn" @click="goRight">向右</button>
    </div>
    <div class="rightBox">
      <div>
        <div>
          <input
            type="checkbox"
            v-model="inputAllSelectedRight.checked"
            @click="selectAllRight"
          />列表二({{ lengthCheckRight }}/{{ inputText.rightArr.length }})
        </div>
        <!-- <div>{{ inputText.rightArr.length }}</div> -->
      </div>
      <div v-for="ri in inputText.rightArr">
        <input type="checkbox" v-model="ri.checked" :disabled="ri.disabled" />
        {{ ri.label }}
      </div>
    </div>
  </div>
</template>
<script setup>
import { watch, ref, onMounted } from "vue";
// import { updated } from "vue-router";
// const InputLeftBtn = document.querySelector(".InputLeft");

let inputText = ref({
  leftArr: [
    { label: "选框1", checked: false, disabled: true },
    { label: "选框3", checked: false, disabled: false },
    { label: "选框4", checked: false, disabled: false },
    { label: "选框8", checked: false, disabled: false },
  ],
  rightArr: [
    { label: "选框2", checked: false, disabled: true },
    { label: "选框5", checked: false, disabled: false },
    { label: "选框6", checked: false, disabled: false },
    { label: "选框7", checked: false, disabled: false },
  ],
});
//判断当前列表是否被全选的变量（被动）
let inputAllSelectedLeft = ref({ checked: false }),
  inputAllSelectedRight = ref({ checked: false });

// 设置变量保存当前被选择的数量
let lengthCheckLeft = ref(0),
  lengthCheckRight = ref(0);

// 左边使用状态守卫判断是否被全选;watch加直接调用工具函数（状态守卫）被动判断被全选
watch(
  () => inputText.value.leftArr,
  (newArr, oldArr) => {
    //第一个参数是newArr，就是被监管是否变化的数据就是inputText.value.leftArr
    // 第二个参数是判断是否被全选的变量
    //第三个参数是判断当前被选中的数量的变量
    ifAllSelected(newArr, inputAllSelectedLeft, lengthCheckLeft);
  },
  { deep: true }
);
// 右边使用状态守卫判断是否被全选;watch加直接调用工具函数（状态守卫）被动判断被全选
watch(
  () => inputText.value.rightArr,
  (newArr, oldArr) => {
    //拿到数组
    ifAllSelected(newArr, inputAllSelectedRight, lengthCheckRight);
  },
  { deep: true }
);
//工具函数------被动判断被全选，判断被选中的长度
function ifAllSelected(_arr, _btn, _lengthArr) {
  _btn.value.checked = true;
  for (let i = 0; i < _arr.length; i++) {
    if (_arr[i].checked === false && _arr[i].disabled === false) {
      _btn.value.checked = false;
      break;
    }
  }
  const arr1 = [];
  for (let k = 0; k < _arr.length; k++) {
    if (_arr[k].checked == true && _arr[k].disabled == false) {
      arr1.push(_arr[k]);
    }
  }
  _lengthArr.value = arr1.length;
  if (_lengthArr.value == 0) {
    _btn.value.checked = false;
  }
}
//工具函数---穿梭框向左/右移动(第一个参数是将要进行操作的数组，第二个参数是目标数组)
function moveToOtherSide(_moveArr, _moveArrTo) {
  for (let i = 0; i < _moveArr.length; i++) {
    if (_moveArr[i].checked == true) {
      _moveArr[i].checked = false;
      _moveArrTo.push(_moveArr[i]);
      _moveArr.splice(i, 1);
      i--;
    }
  }
}
//向左移动
function goLeft() {
  moveToOtherSide(inputText.value.rightArr, inputText.value.leftArr);
}
//点击向右移动
function goRight() {
  moveToOtherSide(inputText.value.leftArr, inputText.value.rightArr);
}
// //工具函数-----判断是否是全选，
// function ifAllSelected(_selectAll, _allArray) {
//   for (let i = 0; i < _allArray.length; i++) {
//     if (_allArray[i] == false) {
//       _selectAll.checked = false;
//     }
//   }
// }
//工具函数---穿梭框列表主动全选(第一个参数是全选框，第二参数将要进行选择的数组)
function selecteAll(_selectAll, _allArray) {
  let IfAllSelectedArr = [];
  if (_allArray.length == IfAllSelectedArr.length) {
    _selectAll.value.checked = true;
  } else {
    for (let i = 0; i < _allArray.length; i++) {
      if (_selectAll.value.checked == false) {
        if (_allArray[i].checked == false && _allArray[i].disabled == false) {
          _allArray[i].checked = true;
        }
      } else {
        _allArray[i].checked = false;
      }
    }
  }
}

//左全选
function selectAllLeft() {
  selecteAll(inputAllSelectedLeft, inputText.value.leftArr);
}
//右全选
function selectAllRight() {
  selecteAll(inputAllSelectedRight, inputText.value.rightArr);
}
</script>
<style scoped>
.box {
  width: 618px;
  height: 373px;
  border: 3px solid #0000ff;
  display: flex;
  padding: 10px 10px;
  box-sizing: border-box;
}
.leftBox {
  width: 150px;
  height: 347px;
  background-color: #dddddd;
  border: 1px solid #525252;
}
.leftBox div {
  width: 100%;
  height: 35px;
  background-color: white;
  margin: 0 0 7px 0;
  line-height: 35px;
  padding: 0 5px 0 5px;
  box-sizing: border-box;
}
.midBox {
  width: 250px;
  height: 345px;
  margin: 0 18px;
  line-height: 345px;
}
.leftBtn {
  width: 100px;
}
.rightBtn {
  width: 100px;
  margin-left: 50px;
}
.rightBox {
  width: 150px;
  height: 347px;
  background-color: #dddddd;
  border: 1px solid #525252;
}
.rightBox div {
  width: 100%;
  height: 35px;
  background-color: white;
  margin: 0 0 7px 0;
  line-height: 35px;
  padding: 0 5px 0 5px;
  box-sizing: border-box;
}
</style>
