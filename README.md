# reducer-form-exercise

<h2>常用到的 Hooks</h2>


1. useState
2. useEffect
3. useReducer
4. useContext


<h2>side-effect</h2>


在 React 中，只有呈現 UI 是最重要的，其他表面看不到的都算副作用！
主要作用：

1. Evaluate & render JSX
2. Manage state & props
3. React to user's events & inputs
4. Re-evaluate component upon state & props change

副作用則例如： 發送 http request、store data in browser



<h3>useEffect</h3>
useEffect(()=>{},[dependency])
舉例<br>
1. 配合瀏覽器內建的 localStorage 讓使用者登入後保持登入狀態，不因重新整理而消失<br>
2. 每當使用者輸入帳號、密碼，每敲鍵盤的時候就去判斷是否包含＠、以及密碼長度<br>

<h3>useReducer</h3>
const [data, dispatch] = useReducer( myReducerFunction, initialState) <br>
會另有 function myReducerFunction(state, action){依據不同action來return new state}
<ul>
  <li>reducer</li>  就是個 function, 接受 state & action, 並回傳一個新的 state<br>
  <li>action</li>   可說是一個obj, 被 dispatch 丟回 reducer function 並改變 state 的物件(子彈)<br>
   <li>dispatch</li> 一個被我們用 useReducer 回傳的 function, 他傳遞 action 物件給 reducer function (手槍)
  <li>useReducer</li> 一個 React 的 hook,用來處理 useState 做不到的較為複雜的狀態管理<br>
<ul>
<br/>  
  <a href='https://frontend.turing.edu/lessons/module-3/advanced-react-hooks.html'>參考資料 Advanced React - useContext and useReducer hooks</a>


