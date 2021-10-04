# reducer-form-exercise

<h2>常用到的 Hooks</h2>


1. useState
2. useEffect
3. useReducer
4. useContext


<h2>side-effect</h2>

<h3>useEffect</h3>
useEffect(()=>{},[dependency])
在 React 中，只有呈現 UI 是最重要的，其他表面看不到的都算副作用！<br>
主要作用：
<ul>
<li>Evaluate & render JSX</li>
<li>Manage state & props</li>
<li>React to user's events & inputs</li>
<li>Re-evaluate component upon state & props change</li>
</ul>
副作用：
<ul>
<li>Data Fetching 獲取api資料</il>
<li>Setting up a subscription 事件監聽或訂閱</il>
<li>Changing the DOM 改變DDOM</il>
<li>Logging 輸出日誌(?)</il>
</ul>
舉例<br>
1. 配合瀏覽器內建的 localStorage 讓使用者登入後保持登入狀態，不因重新整理而消失<br>
2. 每當使用者輸入帳號、密碼，每敲鍵盤的時候就去判斷是否包含＠、以及密碼長度<br>
<a href='https://www.ruanyifeng.com/blog/2020/09/react-hooks-useeffect-tutorial.html'>轻松学会 React 钩子：以 useEffect() 为例</a>
<h3>useReducer</h3>
<p> Reducer is just a function responsible for managing changes to state. It decides how update state based on what kinds of actions are dispatched to it.</p><br>
const [data, dispatch] = useReducer( myReducerFunction, initialState) <br>
會另有 function myReducerFunction(state, action){依據不同action來return new state}
<ul>
  <li>reducer</li>  就是個 function, 接受 state & action, 並回傳一個新的 state<br>
  <li>action</li>   可說是一個obj, 被 dispatch 丟回 reducer function 並改變 state 的物件(子彈)<br>
   <li>dispatch</li> 一個被我們用 useReducer 回傳的 function, 他傳遞 action 物件給 reducer function (手槍)
  <li>useReducer</li> 一個 React 的 hook,用來處理 useState 做不到的較為複雜的狀態管理<br>
</ul>
<br/>
<a href='https://frontend.turing.edu/lessons/module-3/advanced-react-hooks.html'>參考資料 Advanced React - useContext and useReducer hooks</a>
  
<h3>useContext</h3><br>
省略prop，將資料一次傳遞給多個子層。但不適合用在密切改變狀態的情況！
  
<h3>useRef</h3><br>
  const userNameRef = useRef(null);<br>
  <br>
  useEffect(() => {
    userNameRef.current.focus();
  }, []); 使得畫面一開始渲染就focus在userName輸入欄位<br>
  並且將要return的輸入欄位component作為一個屬性如下: <br>
  < Input 
  type="text"
  name="username" 
  ref = {userNameRef}
  onKeyDown = {e =>handleKeyPress(e, "username")}
  />
  <br>
<ul>
  <li>管理 focus、選擇文字、或影音播放。</li>
  <li>觸發即時的動畫。</li>
  <li>與第三方 DOM 函式庫整合。</li>
</ul>  
  <a href="https://dev.to/sajithpradeep/understanding-the-use-of-useeffect-hook-forwardref-in-react-57jf"></a>  
  

