(window.webpackJsonpShineoutDoc=window.webpackJsonpShineoutDoc||[]).push([[32],{1196:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),a=n(192),i=n(198),l=n(11),c=n(1197),s=n.n(c),u=n(1198),p=n.n(u),d=Object(l.b)(s.a,p.a),m=[{name:"1-base",title:Object(l.b)("基本用法 \n Popover 放置在一个组件内部弹出","Base \n The basic usage."),component:n(1199).default,rawText:n(1200)},{name:"2-position",title:Object(l.b)("弹出位置 \n 内置了十二个弹出的位置","Position \n Twelve pop-up positions are built in."),component:n(1201).default,rawText:n(1202)},{name:"3-click",title:Object(l.b)("点击触发 \n 默认是移入组件触发，设置 trigger 为 'click'，可以改为点击触发","Trigger \n Set the trigger property to change the trigger event to 'click'."),component:n(1203).default,rawText:n(1204)},{name:"4-func",title:Object(l.b)("关闭事件 \n content 属性可以为一个函数，会传递 close 函数，用来在弹出面板内部处理关闭事件","Close \n Set the content property to a function, you can handle the close event inside the popup panel."),component:n(1205).default,rawText:n(1206)},{name:"5-type",title:Object(l.b)("样式 \n 内置四种样式","Type \n Four styles are built in."),component:n(1207).default,rawText:n(1208)},{name:"6-type",title:Object(l.b)(" \n 如果内置样式不满足需求，可以通过 background 和 border 自定义样式"," \n Customize the style with background and border."),component:n(1209).default,rawText:n(1210)},{name:"7-old",title:Object(l.b)("旧API \n 旧接口使用 Popover 包在组件外使用，通过 content 传递内容，已不推荐","Old API \n Old API, is out of date."),component:n(1211).default,rawText:n(1212)},{name:"8-event",title:Object(l.b)("事件 \n 提供了onOpen 和 onClose 事件","Events \n provider onOpen and onClose event"),component:n(1213).default,rawText:n(1214)}];t.default=Object(a.a)(function(e){return r.a.createElement(i.b,Object.assign({},e,{codes:void 0,source:d,examples:m}))})},1197:function(e,t){e.exports="# Popover *气泡*\n\n<example />\n\n## API\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| background | string | '#fff' | 弹出层背景色（含箭头） |\n| border | string | '#dee2e6' | 弹出层边框颜色（含箭头） |\n| className | string | 无 | 扩展className |\n| children | ReactElement | 必填 | 弹出显示内容 |\n| onClose | function | 无 | Popover 关闭时回调时间 |\n| onOpen | function | 无 | Popover 弹出回调事件 |\n| position | string | 'top' | 弹出层位置，可选值为 \\['top-left', 'top', 'top-right', 'left-top', 'left', 'left-bottom', 'right-top', 'right', 'right-bottom', 'bottom-left', 'bottom', 'bottom-right'] |\n| style | object | 无 | 最外层扩展样式 |\n| trigger | string | 'hover' | 触发方式，可选值为 \\['click', 'hover'] |\n| type | string | 无 | 可选值为，\\['success', 'info', 'warning', 'danger'] |\n| * content | ReactElement \\| function | | 旧接口，如果content为空，父组件作为触发元素 | "},1198:function(e,t){e.exports="# Popover\n\n<example />\n\n## API\n\n| Property | Type | Default | Description |\n| --- | --- | --- | --- |\n| background | string | '#fff' | Pop-up background-color(with arrows) |\n| border | string | '#dee2e6' | The color of pop-up border(with arrows) |\n| className | string | - | Extend className |\n| children | ReactElement | required | Pop-up content. |\n| onClose | function | - | Callback event when close. |\n| onOpen | function | - | Callback event when open. |\n| position | string | 'top' | The position of pop-up layer, options:  \\['top-left', 'top', 'top-right', 'left-top', 'left', 'left-bottom', 'right-top', 'right', 'right-bottom', 'bottom-left', 'bottom', 'bottom-right'] |\n| style | object | - | The pop-up container style |\n| trigger | string | 'hover' | options: \\['click', 'hover'] |\n| type | string | none | Options: \\['success', 'info', 'warning', 'danger'] |\n| * content | ReactElement \\| function | | Old API, out of date. | "},1199:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),a=n(62),i=n(1375);t.default=function(){return r.a.createElement(a.a,null,r.a.createElement(i.a,{style:{width:200,padding:20}},"Some text"),"Hover")}},1200:function(e,t){e.exports="/**\n * cn - 基本用法\n *    -- Popover 放置在一个组件内部弹出\n * en - Base\n *    -- The basic usage.\n */\nimport React from 'react'\nimport { Button, Popover } from 'shineout'\n\nexport default function() {\n  return (\n    <Button>\n      <Popover style={{ width: 200, padding: 20 }}>Some text</Popover>\n      Hover\n    </Button>\n  )\n}\n"},1201:function(e,t,n){"use strict";n.r(t);var o=n(15),r=n(0),a=n.n(r),i=n(1375),l=[[null,"bottom-left","bottom","bottom-right",null],["right-top",null,null,null,"left-top"],["right",null,null,null,"left"],["right-bottom",null,null,null,"left-bottom"],[null,"top-left","top","top-right",null]],c={width:100,textAlign:"center",lineHeight:"30px",margin:4,display:"inline-block",border:"solid 1px #eee",cursor:"pointer"};t.default=function(){return l.map(function(e,t){return a.a.createElement("div",{key:t},e.map(function(e,t){return e?a.a.createElement("div",{key:t,style:c},a.a.createElement(i.a,{trigger:"click",position:e},a.a.createElement("div",{style:{width:240,padding:30}},"Some text")),e):a.a.createElement("div",{key:t,style:Object(o.a)({},c,{border:0})})}))})}},1202:function(e,t){e.exports="/**\n * cn - 弹出位置\n *    -- 内置了十二个弹出的位置\n * en - Position\n *    -- Twelve pop-up positions are built in.\n */\nimport React from 'react'\nimport { Popover } from 'shineout'\n\nconst positions = [\n  [null, 'bottom-left', 'bottom', 'bottom-right', null],\n  ['right-top', null, null, null, 'left-top'],\n  ['right', null, null, null, 'left'],\n  ['right-bottom', null, null, null, 'left-bottom'],\n  [null, 'top-left', 'top', 'top-right', null],\n]\n\nconst style = {\n  width: 100,\n  textAlign: 'center',\n  lineHeight: '30px',\n  margin: 4,\n  display: 'inline-block',\n  border: 'solid 1px #eee',\n  cursor: 'pointer',\n}\n\nexport default function() {\n  return positions.map((row, i) => (\n    <div key={i}>\n      {row.map((p, j) =>\n        p ? (\n          <div key={j} style={style}>\n            <Popover trigger=\"click\" position={p}>\n              <div style={{ width: 240, padding: 30 }}>Some text</div>\n            </Popover>\n            {p}\n          </div>\n        ) : (\n          <div key={j} style={{ ...style, border: 0 }} />\n        )\n      )}\n    </div>\n  ))\n}\n"},1203:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),a=n(62),i=n(1375),l=n(260);t.default=function(){return r.a.createElement(a.a,null,r.a.createElement(i.a,{trigger:"click",style:{marginRight:12}},r.a.createElement(l.a,{style:{width:300,border:0,background:"transparent"}},r.a.createElement(l.a.Header,null,"Header"),r.a.createElement(l.a.Body,{style:{height:80}},"Body"))),"Click me")}},1204:function(e,t){e.exports="/**\n * cn - 点击触发\n *    -- 默认是移入组件触发，设置 trigger 为 'click'，可以改为点击触发\n * en - Trigger\n *    -- Set the trigger property to change the trigger event to 'click'.\n */\nimport React from 'react'\nimport { Button, Popover, Card } from 'shineout'\n\nexport default function() {\n  return (\n    <Button>\n      <Popover trigger=\"click\" style={{ marginRight: 12 }}>\n        <Card style={{ width: 300, border: 0, background: 'transparent' }}>\n          <Card.Header>Header</Card.Header>\n          <Card.Body style={{ height: 80 }}>Body</Card.Body>\n        </Card>\n      </Popover>\n      Click me\n    </Button>\n  )\n}\n"},1205:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),a=n(62),i=n(1375),l=n(273);t.default=function(){return r.a.createElement(a.a,null,r.a.createElement(i.a,{trigger:"click"},function(e){return r.a.createElement("div",{style:{padding:20}},r.a.createElement("div",null,"Are you sure you want to close this panel?"),r.a.createElement("div",{style:{marginTop:30,textAlign:"right"}},r.a.createElement(a.a,{size:"small",onClick:function(){e(),l.a.success("Popover panel closed.")}},"close")))}),"Click me")}},1206:function(e,t){e.exports="/**\n * cn - 关闭事件\n *    -- content 属性可以为一个函数，会传递 close 函数，用来在弹出面板内部处理关闭事件\n * en - Close\n *    -- Set the content property to a function, you can handle the close event inside the popup panel.\n */\nimport React from 'react'\nimport { Button, Popover, Message } from 'shineout'\n\nexport default function() {\n  return (\n    <Button>\n      <Popover trigger=\"click\">\n        {close => (\n          <div style={{ padding: 20 }}>\n            <div>Are you sure you want to close this panel?</div>\n            <div style={{ marginTop: 30, textAlign: 'right' }}>\n              <Button\n                size=\"small\"\n                onClick={() => {\n                  close()\n                  Message.success('Popover panel closed.')\n                }}\n              >\n                close\n              </Button>\n            </div>\n          </div>\n        )}\n      </Popover>\n      Click me\n    </Button>\n  )\n}\n"},1207:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),a=n(1375),i=["success","info","warning","danger"],l={width:100,textAlign:"center",lineHeight:"30px",margin:4,display:"inline-block",border:"solid 1px #eee"};t.default=function(){return i.map(function(e,t){return r.a.createElement("div",{style:l,key:t},r.a.createElement(a.a,{type:e,style:{width:200,padding:20}},"Some text"),e)})}},1208:function(e,t){e.exports="/**\n * cn - 样式\n *    -- 内置四种样式\n * en - Type\n *    -- Four styles are built in.\n */\nimport React from 'react'\nimport { Popover } from 'shineout'\n\nconst types = ['success', 'info', 'warning', 'danger']\n\nconst style = {\n  width: 100,\n  textAlign: 'center',\n  lineHeight: '30px',\n  margin: 4,\n  display: 'inline-block',\n  border: 'solid 1px #eee',\n}\n\nexport default function() {\n  return types.map((t, i) => (\n    <div style={style} key={i}>\n      <Popover type={t} style={{ width: 200, padding: 20 }}>\n        Some text\n      </Popover>\n      {t}\n    </div>\n  ))\n}\n"},1209:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),a=n(62),i=n(1375);t.default=function(){return r.a.createElement(a.a,null,r.a.createElement(i.a,{background:"#555",border:"gold",style:{width:200,padding:20,color:"gold"}},"Some text"),"Hover")}},1210:function(e,t){e.exports="/**\n * cn -\n *    -- 如果内置样式不满足需求，可以通过 background 和 border 自定义样式\n * en -\n *    -- Customize the style with background and border.\n */\nimport React from 'react'\nimport { Button, Popover } from 'shineout'\n\nexport default function() {\n  return (\n    <Button>\n      <Popover background=\"#555\" border=\"gold\" style={{ width: 200, padding: 20, color: 'gold' }}>\n        Some text\n      </Popover>\n      Hover\n    </Button>\n  )\n}\n"},1211:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),a=n(1375),i=n(62);t.default=function(){var e=r.a.createElement("div",{style:{width:200,padding:20}},"Some text");return r.a.createElement(a.a,{content:e},r.a.createElement(i.a,null,"Hover"))}},1212:function(e,t){e.exports="/**\n * cn - 旧API\n *    -- 旧接口使用 Popover 包在组件外使用，通过 content 传递内容，已不推荐\n * en - Old API\n *    -- Old API, is out of date.\n */\nimport React from 'react'\nimport { Button, Popover } from 'shineout'\n\nexport default function() {\n  const content = <div style={{ width: 200, padding: 20 }}>Some text</div>\n  return (\n    <Popover content={content}>\n      <Button>Hover</Button>\n    </Popover>\n  )\n}\n"},1213:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),a=n(62),i=n(1375);t.default=function(){return r.a.createElement(a.a,null,r.a.createElement(i.a,{onOpen:function(){return console.log("popover open")},onClose:function(){return console.log("popover close")},trigger:"click",style:{width:200,padding:20}},"Some text"),"Click me.")}},1214:function(e,t){e.exports="/**\n * cn - 事件\n *    -- 提供了onOpen 和 onClose 事件\n * en - Events\n *    -- provider onOpen and onClose event\n */\nimport React from 'react'\nimport { Button, Popover } from 'shineout'\n\nexport default function() {\n  const open = () => console.log('popover open')\n  const close = () => console.log('popover close')\n  return (\n    <Button>\n      <Popover onOpen={open} onClose={close} trigger=\"click\" style={{ width: 200, padding: 20 }}>\n        Some text\n      </Popover>\n      Click me.\n    </Button>\n  )\n}\n"},241:function(e,t,n){"use strict";n.d(t,"a",function(){return l}),n.d(t,"b",function(){return c});var o=n(0),r=n.n(o),a=n(52),i=n.n(a)()(),l=i.Provider;var c=function(n){var o=1<arguments.length&&void 0!==arguments[1]?arguments[1]:[];return function(t){return r.a.createElement(i.Consumer,null,function(e){return r.a.createElement(n,Object.assign({},t,function(t,e){if(!t)return{};var n={};return e.forEach(function(e){n[e]=t[e]}),n}(e,o)))})}}},260:function(e,t,n){"use strict";var o=n(15),r=n(7),a=n(8),i=n(10),l=n(2),c=n(9),s=n(3),u=n(0),p=n.n(u),d=n(12),m=n.n(d),f=n(17),b=n(53),h=n(5),v=n(241),g=function(e){function n(e){var t;return Object(r.a)(this,n),(t=Object(i.a)(this,Object(l.a)(n).call(this,e))).state={collapsed:e.defaultCollapsed,formStatus:""},t.bindElement=t.bindElement.bind(Object(s.a)(Object(s.a)(t))),t.handleSubmit=t.handleSubmit.bind(Object(s.a)(Object(s.a)(t))),t.handleCollapse=t.handleCollapse.bind(Object(s.a)(Object(s.a)(t))),t.setFormStatus=t.setFormStatus.bind(Object(s.a)(Object(s.a)(t))),t}return Object(c.a)(n,e),Object(a.a)(n,[{key:"getCollapsed",value:function(){var e=this.props,t=e.collapsible,n=e.collapsed;if(t)return void 0!==n?n:this.state.collapsed}},{key:"setFormStatus",value:function(e){e!==this.state.formStatus&&this.setState({formStatus:e})}},{key:"bindElement",value:function(e){this.element=e}},{key:"handleCollapse",value:function(){var e=!this.getCollapsed();this.props.onCollapse?this.props.onCollapse(e):this.setState({collapsed:e})}},{key:"handleSubmit",value:function(){var e=this.element.querySelector("form");e?Object(b.b)(e,"submit"):console.error(new Error("No form found."))}},{key:"render",value:function(){var e=this.props.collapsible,t=this.getCollapsed(),n=!0===this.props.shadow?"shadow":this.props.shadow,o=m()(Object(h.d)("_",n,e&&"collapsible",t&&"collapsed"),this.props.className),r={onCollapse:this.handleCollapse,collapsible:e,collapsed:t,formStatus:this.state.formStatus,onSubmit:this.handleSubmit,setFormStatus:this.setFormStatus};return p.a.createElement("div",{className:o,ref:this.bindElement,style:this.props.style},p.a.createElement(v.a,{value:r},this.props.children))}}]),n}(u.PureComponent);g.defaultProps=Object(o.a)({},f.a,{defaultCollapsed:!0,collapsible:!1});var y=g,O=n(25),j=n(62),k=function(e){function n(e){var t;return Object(r.a)(this,n),(t=Object(i.a)(this,Object(l.a)(n).call(this,e))).handleClick=t.handleClick.bind(Object(s.a)(Object(s.a)(t))),t}return Object(c.a)(n,e),Object(a.a)(n,[{key:"handleClick",value:function(){var e=this;setTimeout(function(){e.props.onSubmit()},50)}},{key:"render",value:function(){var e=this.props,t=(e.onSubmit,e.loading),n=e.children,o=e.formStatus,r=Object(O.a)(e,["onSubmit","loading","children","formStatus"]);return p.a.createElement(j.a,Object.assign({type:"primary"},r,{disabled:"disabled"===o,loading:"pending"===o||t,onClick:this.handleClick}),n)}}]),n}(u.PureComponent),C=n(195),x=function(e){function t(){return Object(r.a)(this,t),Object(i.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(a.a)(t,[{key:"renderIndicator",value:function(){if(void 0!==this.props.collapsed){var e=Object(h.d)("indicator");return p.a.createElement("span",{className:e},C.a.AngleRight)}}},{key:"render",value:function(){var e=this.props,t=e.style,n=e.align,o=e.className,r=e.children,a=e.onCollapse,i=e.collapsed,l=m()(Object(h.d)("header",n),o),c="boolean"==typeof i?a:void 0;return p.a.createElement("div",{style:t,onClick:c,className:l},this.renderIndicator(),r)}}]),t}(u.PureComponent),P=n(55),w=Object(P.a)(["collapse"],"fast"),E=function(e){function t(){return Object(r.a)(this,t),Object(i.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(a.a)(t,[{key:"render",value:function(){var e=this.props,t=e.className,n=e.collapsed,o=e.collapsible,r=e.onCollapse,a=Object(O.a)(e,["className","collapsed","collapsible","onCollapse"]),i=m()(Object(h.d)("body"),t);if(!o)return p.a.createElement("div",Object.assign({},a,{className:i}));var l="boolean"==typeof n?r:void 0;return p.a.createElement(w,{show:!n},p.a.createElement("div",Object.assign({},a,{className:i}),a.children,"bottom"===o&&p.a.createElement("div",{className:Object(h.d)("foldup"),onClick:l},p.a.createElement("span",null))))}}]),t}(u.PureComponent),S=function(e){function t(){return Object(r.a)(this,t),Object(i.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(a.a)(t,[{key:"render",value:function(){var e=this.props,t=e.align,n=e.className,o=Object(O.a)(e,["align","className"]),r=m()(Object(h.d)("footer",t),n);return p.a.createElement("div",Object.assign({},o,{className:r}))}}]),t}(u.PureComponent),B=function(e){function n(e){var t;return Object(r.a)(this,n),(t=Object(i.a)(this,Object(l.a)(n).call(this,e))).state={active:e.active||e.defaultActive},t}return Object(c.a)(n,e),Object(a.a)(n,[{key:"getActive",value:function(){return void 0!==this.props.active?this.props.active:this.state.active}},{key:"handleActive",value:function(e){e===this.state.active&&(e=-1),this.setState({active:e}),this.props.onChange&&this.props.onChange(e)}},{key:"render",value:function(){var o=this,r=this.state.active;return u.Children.toArray(this.props.children).map(function(e,t){var n={collapsed:r!==t,collapsible:!0,className:m()("object"==typeof e&&e.className,Object(h.d)("accordion")),onCollapse:o.handleActive.bind(o,t)};return Object(u.cloneElement)(e,n)})}}]),n}(n(34).b);B.defaultProps={defaultActive:0};var A=B;y.Header=Object(v.b)(x,["collapsed","onCollapse"]),y.Body=Object(v.b)(E,["collapsed","collapsible","onCollapse"]),y.Footer=S,y.Submit=Object(v.b)(k,["onSubmit","formStatus"]),y.Accordion=A,y.Body.displayName="ShineoutCardBody",y.Header.displayName="ShineoutCardHeader",y.displayName="ShineoutCard";t.a=y}}]);