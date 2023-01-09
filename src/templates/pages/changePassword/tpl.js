const tpl = `
<div class="{{stl.info}}">  
    <div class="{{stl.avatar}}" >{{{image}}}</div> 
    <form action="">
        {{{oldPassword}}}
        {{{newPassword}}}
        {{{newPasswordOneMore}}}
        <p>{{{submit}}}</p>
    </form>
</div>
`;

export default tpl;