const tpl = `
<div class="{{stl.chat}}">
    <aside class="{{stl.list}}">
        <p><a href="/info">В профиль ></a></p>
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
        <div>
            {{{image}}}
            Андрей
        </div>
        <div>
        
        </div>
        <div><input placeholder="Введите сообщение"></div>
    </section>
</div>
`;

export default tpl;
