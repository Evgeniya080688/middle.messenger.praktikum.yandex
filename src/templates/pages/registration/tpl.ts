const tpl: string = `
<form action="">
    <h1>Регистрация</h1>
    {{{mail}}}
    {{{login}}}
    {{{name}}}
    {{{surname}}}
    {{{phone}}}
    {{{password}}}
    {{{passwordonemore}}}
    <p>{{{submit}}}</p>
    <p class="{{stl.link}}"><a  href="/autorization">Войти</a></p>
</form>
`;

export default tpl;

