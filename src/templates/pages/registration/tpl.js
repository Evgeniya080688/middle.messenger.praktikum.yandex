const tpl = `
<div class="{{stl.form}}">
 <form action="">
  <h1>Регистрация</h1>
  <p><b>Почта:</b>
   <input class="{{stl.input}}" type="text" size="40">
  </p>
  <p><b>Логин:</b>
   <input class="{{stl.input}}" type="text" size="40">
  </p>
  <p><b>Имя:</b>
   <input class="{{stl.input}}" type="text" size="40">
  </p>
  <p><b>Фамилия:</b>
   <input class="{{stl.input}}" type="text" size="40">
  </p>
  <p><b>Телефон:</b>
   <input class="{{stl.input}}" type="text" size="40">
  </p>
  <p><b>Пароль:</b>
   <input class="{{stl.input}}" type="password" size="40">
  </p>
  <p><b>Пароль еще раз:</b>
   <input class="{{stl.input}}" type="password" size="40">
  </p>
  <p class="{{stl.link}}"><a  href="/registration">Нет аккаунта?</a></p>
 </form
</div>
`;


export default tpl;