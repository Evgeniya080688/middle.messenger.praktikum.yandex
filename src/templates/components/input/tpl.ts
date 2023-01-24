const tpl: string = `
<p class="{{stl.label}}">
    <span>{{label}}:</span>
    <input name="{{name}}" class="{{stl.input}}" type="{{type}}"  value="{{value}}" 
               placeholder="{{placeholder}}" required="{{required}}" pattern="{{pattern}}">
    <span class="{{stl.error}}">{{error}}</span>
    <span class="{{stl.success}}">{{success}}</span>
</p>`;

export default tpl;

