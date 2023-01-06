const tpl = `
<div class="{{stl.form}}">
 <form action="">
  <h1>Вход</h1>
  <p><b>Логин:</b>
   <input class="{{stl.input}}" type="text" size="40">
  </p>
  <p><b>Пароль:</b>
   <input class="{{stl.input}}" type="password" size="40">
  </p>
  <p>{{{submit}}}</p>  
  <p class="{{stl.link}}"><a  href="/registration/index.js">Нет аккаунта?</a></p>
 </form
</div>
`;


export default tpl;