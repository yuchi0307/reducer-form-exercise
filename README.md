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
舉例
1. 配合瀏覽器內建的 localStorage 讓使用者登入後保持登入狀態，不因重新整理而消失
2. 每當使用者輸入帳號、密碼，每敲鍵盤的時候就去判斷是否包含＠、以及密碼長度


