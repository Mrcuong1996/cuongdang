import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

// Tạo 1 dự án react

// c' Tạo 1 state chứa data khởi đầu như sau:
// [
// {ten: 'kien'' tuoi: 22}'
// {ten: 'huy'' tuoi: 25}'
// ]
//  hãy liệt kê data lên giao diện

// d' hãy tạo 2 ô input để nhập tên' tuổi và 1 button add
// Khi click add thì nội dung trong 2 input sẽ được thêm vào data và render lại

// e'
// mỗi phần tử trên giao diện có thêm 1 button xóa
// khi click button xóa thì data đó bị xóa khỏi giao diện

// f' mỗi phần tử data trên giao diện sẽ có 2 button pass và fail
// khi click button fail thì data đó bị bôi background : red
// khi click button pass thì data đó bị bôi background : green
// data được sắp xếp lại theo tên những ai pass thì xếp lên đầu' fail thì xếp xuống cuối

function App() {
  // a
  const [count, setCount] = useState(0);
  function clickA() {
    setCount(count + 1);
    document.querySelector(".button-a").innerHTML = count;
  }

  //b
  function change() {
    var a = document.querySelector(".input-b").value;
    document.querySelector(".input-b-p").innerHTML = a;
  }

  // c
  const [data, setDate] = useState([
    { ten: "kien", tuoi: 22 },
    { ten: "huy", tuoi: 25 },
  ]);

  function sate(arrData) {
    return arrData.map(function (value) {
      return (
        <div>
          <span className="spanA">ten: {value.ten}</span>

          <span className="spanB">
            , tuoi: {value.tuoi}
            <i onClick={dell} class="fa-solid fa-trash-can box delete"></i>
          </span>
        </div>
      );
    });
  }

  // d

  function add() {
    var A = document.querySelector(".inputA").value;
    var B = document.querySelector(".inputB").value;

    setDate([...data, { ten: A, tuoi: B }]);
  }

  // e

  function dell() {
    setDate([...data.splice(1)]);
    console.log(data);
  }

  // f
  function pass() {
    document
      .querySelector(".baitap-d")
      .setAttribute("style", "background:red; color:white");
  }

  function fail() {
    document
      .querySelector(".baitap-d")
      .setAttribute("style", "background:black; color:white");
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          a: tạo 1 button count đếm số lần click vào button đó và hiển thị số
          lần click lên giao diện
        </p>

        <button className="button-a" onClick={clickA}>
          button count
        </button>
        <p>
          b: Tạo 1 input khi nhập vào input thì nội dung nhập hiển thị lên giao
          diện
        </p>
        <input className="input-b" type="text" onChange={change} />
        <p className="input-b-p"></p>

        <p>c: Tạo 1 state chứa data khởi đầu:</p>
        {sate(data)}

        <p>d: hãy tạo 2 ô input để nhập tên' tuổi và 1 button add</p>
        <input className="inputA" type="text" />
        <input className="inputB" type="text" />
        <button onClick={add}>ADD</button>

        <div className="baitap-d">
          <p>f: mỗi phần tử data trên giao diện sẽ có 2 button pass và fail</p>
        </div>
        <button className="pass" onClick={pass}>
          Pass
        </button>

        <button className="fail" onClick={fail}>
          Fail
        </button>
      </header>
    </div>
  );
}

export default App;
