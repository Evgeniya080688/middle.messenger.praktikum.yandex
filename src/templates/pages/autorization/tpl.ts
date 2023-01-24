const tpl: string = `

    <form action="">
        <h1>Вход</h1>
        {{{login}}}
        <span class="{{stl.error}}">Логин должен быть от 3 до 20 символов, латиница, может содержать цифры, но не состоять из них,
        без пробелов и без спецсимволов (допустимы дефис и нижнее подчеркивание)</span>
        <span class="{{stl.success}}">Логин введен успешно!</span>
        {{{password}}}
        <span class="{{stl.error}}">Пароль должен содержать от 8 до 20 символов, обязательно хотя бы одна заглавная буква и цифра</span>
        <span class="{{stl.success}}">Пароль введен успешно!</span>
        <p>{{{submit}}}</p>  
        
        <p class="{{stl.link}}"><a  href="/registration">Нет аккаунта?</a></p>
    </form>

`;
export default tpl;
