const tpl = `
<div class="{{stl.form}}">
        <form action="">
        <h1>Регистрация</h1>
        {{{mail}}}
        {{{login}}}
        {{{name}}}
        {{{surname}}}
        {{{phone}}}
        {{{password}}}
        {{{passwordonemore}}}
        {{{submit}}}
        <p class="{{stl.link}}"><a  href="/autorization">Войти</a></p>
    </form>
</div>
`;

export default tpl;
