const tpl: string = `

    <aside class="{{stl.list}}">
        <p><a href="/info">В профиль</a></p>
        <form action="/search/search_do/" class="{{stl.search}}" method="get" autocomplete="on" required="">
            <input type="text" class="" autocomplete="off" placeholder="поиск..." name="search_string" value="">
            {{{submit}}}
        </form>
        <ul class="{{stl.contacts}}">
            {{{listitem1}}}
            {{{listitem2}}}
            {{{listitem3}}}
        </ul>
    </aside>
    <section class="{{stl.field}}">
        <p>Чтобы начать общение, выберите чат!</p>
    </section>

`;

export default tpl;
