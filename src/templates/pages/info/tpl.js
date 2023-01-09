const tpl = `
<div class="{{stl.info}}">  
  <div class="{{stl.avatar}}" >{{{image}}}</div>  
  <h1>{{name}}</h1>
  <table>
    <tr>
        <td>Почта</td>
        <td class="{{stl.tdright}}">{{email}}</td>
    </tr>
    <tr>
        <td>Логин</td>
        <td class="{{stl.tdright}}">{{login}}</td>
    </tr>
    <tr>
        <td>Имя</td>
        <td class="{{stl.tdright}}">{{name}}</td>
    </tr>
    <tr>
        <td>Фамилия</td>
        <td class="{{stl.tdright}}">{{surname}}</td>
    </tr>
    <tr>
        <td>Имя в чате</td>
        <td class="{{stl.tdright}}">{{nikname}}</td>
    </tr>
    <tr>
        <td>Телефон</td>
        <td class="{{stl.tdright}}">{{phone}}</td>
    </tr>
    <tr>
        <td colspan="2"><a href="/changeinfo">Изменить данные</a></td>        
    </tr>
    <tr>
        <td colspan="2"><a href="/changepassword">Изменить пароль</a></td>        
    </tr>
    <tr>
        <td colspan="2"><a href="/singout">Выйти</a></td>        
    </tr>
  </table>
</div>
`;

export default tpl;