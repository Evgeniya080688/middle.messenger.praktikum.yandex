const tpl: string = `
<aside class="{{stl.list}}">
    <p><a href="/info">В профиль</a></p>
    <form action="/search/search_do/" class="{{stl.search}}" method="get" autocomplete="on" required="">
        <input type="text" class="" autocomplete="off" placeholder="поиск..." name="search" value="">
        {{{submit1}}}
    </form>
    <ul class="{{stl.contacts}}">
        {{{listitem1}}}
        {{{listitem2}}}
        {{{listitem3}}}
        {{{listitem4}}}
        {{{listitem5}}}
        {{{listitem6}}}
    </ul>
</aside>
<section class="{{stl.field}}">
    <div class="{{stl.info}}">
        <div class="{{stl.ava}}">
            {{{image}}}                
        </div>
       <div class="{{stl.name}}">
            <h1>Андрей</h1>
       </div>
        <div class="{{stl.menu}}">
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
    <div class="{{stl.text}}">            
        <p>12 января</p>
        <div class="{{stl.from}}">Привет!</div>
        <div class="{{stl.to}}">Привет!</div>
        <div class="{{stl.to}}">Как дела?</div>
        <div class="{{stl.to}}">Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. 
        Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. 
        В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, 
        используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил 
        без заметных изменений пять веков, но и перешагнул в электронный дизайн. 
        Его популяризации в новое время послужили публикация листов Letraset с образцами L
        orem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, 
        в шаблонах которых используется Lorem Ipsum.</div>
        <p>13 января</p>
        <div class="{{stl.from}}">Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. 
        Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. 
        В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, 
        используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил 
        без заметных изменений пять веков, но и перешагнул в электронный дизайн. 
        Его популяризации в новое время послужили публикация листов Letraset с образцами L
        orem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, 
        в шаблонах которых используется Lorem Ipsum.</div>
        <div class="{{stl.to}}">Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. 
        Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. 
        В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, 
        используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил 
        без заметных изменений пять веков, но и перешагнул в электронный дизайн. 
        Его популяризации в новое время послужили публикация листов Letraset с образцами L
        orem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, 
        в шаблонах которых используется Lorem Ipsum.</div>
         <div class="{{stl.to}}"><img src="https://avatars.mds.yandex.net/i?id=aa6055cad2d543e1f55d4169aad03e23e9a799ce-7452211-images-thumbs&n=13" alt="simple" title="simole"></div>
        
    </div>
    <form action="" class="{{stl.inputblock}}">
        <div class="{{stl.file}}" onclick="document.getElementById('attachfile').click();">&#128206;</div>
        <input type="file" name="attach" id="attachfile" data-buttonText="Добавить файл">
        <input class="{{stl.input}}" name="message" type="text" size="40" placeholder="Введите сообщение" value="">
        {{{submit2}}}
    </form>
</section>
`;

export default tpl;
