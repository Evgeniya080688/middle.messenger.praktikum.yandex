const tpl = `
<li class="{{stl.li}}">
    <div class="{{stl.itemava}}">
        <img title="{{title}}" alt="{{alt}}" src="{{image}}">
    </div>
    <div class="{{stl.iteminfo}}">
        <h2>{{name}}</h2>
        <p>{{message}}</p>
    </div>
    <div class="{{stl.iteminfomess}}">
        <div class="{{stl.infotime}}">{{time}}</div>
        <div class="{{stl.infocounter}}">{{unreadCount}}</div>
    </div>
</li>
`;

export default tpl;

