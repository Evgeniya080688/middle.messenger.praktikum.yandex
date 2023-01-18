const tpl: string = `
<div class="{{stl.info}}">  
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
</div>
`;

export default tpl;
