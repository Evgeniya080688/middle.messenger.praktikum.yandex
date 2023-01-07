const tpl = `
<div class="{{stl.form}}">
 <form action="">
  <h1>Вход</h1>
   {{{login}}}
   {{{password}}}
  <p>{{{submit}}}</p>  
  <p class="{{stl.link}}"><a  href="/registration">Нет аккаунта?</a></p>
 </form
</div>
`;


export default tpl;