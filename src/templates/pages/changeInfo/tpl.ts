const tpl: string = `
    <form action="">
        <div class="{{stl.changeinput}}">        
            <div class="{{stl.avatar}}" onclick="document.getElementById('uploadava').click();">{{{image}}}</div>
            <input type="file" name="avatar" style="display:none;" id="uploadava" data-buttonText="Изменить изображение">
        </div>
        {{{email}}}
        {{{login}}}
        {{{first_name}}}
        {{{second_name}}}
        {{{display_name}}}
        {{{phone}}}
        <p>{{{submit}}}</p>
    </form>
`;

export default tpl;
