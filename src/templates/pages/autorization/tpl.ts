const tpl: string = `

    <form action="">
        <h1>Вход</h1>
        {{{login}}}
        <span class="{{stl.error}}">Логин должен быть от 3 до 20 символов, латиница, может содержать цифры, но не состоять из них,
        без пробелов и без спецсимволов (допустимы дефис и нижнее подчеркивание)</span>
        {{{password}}}
        <p>{{{submit}}}</p>  
        <p class="{{stl.link}}"><a  href="/registration">Нет аккаунта?</a></p>
    </form>

`;
export default tpl;
