(window.webpackJsonpShineoutDoc=window.webpackJsonpShineoutDoc||[]).push([[34],{118:function(e,t,n){"use strict";var a=n(24),r=n(5),o=n(6),c=n(8),i=n(2),l=n(7),s=n(3),u=n(0),d=n.n(u),m=n(155),h=n(39),f=n(17);t.a=function(t){return function(e){function n(e){var t;return Object(r.a)(this,n),(t=Object(c.a)(this,Object(i.a)(n).call(this,e))).state={active:"",headings:[]},t.setHeading=t.setHeading.bind(Object(s.a)(Object(s.a)(t))),t.handleScroll=t.handleScroll.bind(Object(s.a)(Object(s.a)(t))),t}return Object(l.a)(n,e),Object(o.a)(n,[{key:"componentDidMount",value:function(){this.bindScroll(),this.handleScroll()}},{key:"componentWillUnmount",value:function(){this.$willUnmount=!0,this.unbindScroll()}},{key:"setHeading",value:function(e){this.setState({headings:[].concat(Object(a.a)(this.state.headings),Object(a.a)(e))})}},{key:"bindScroll",value:function(){document.addEventListener("scroll",this.handleScroll)}},{key:"unbindScroll",value:function(){document.removeEventListener("scroll",this.handleScroll)}},{key:"handleScroll",value:function(){var n=document.documentElement.scrollTop,e=this.state.headings.filter(function(e){return 3===e.level&&e.children[0]});if(0!==e.length){var a=e[0].id;e.forEach(function(e){var t=document.querySelector("#".concat(e.id));t&&t.offsetTop<=n&&(a=e.id)}),this.$willUnmount||this.setState({active:a})}}},{key:"renderNav",value:function(){var a=this,e=this.state,r=e.active,t=e.headings;return d.a.createElement(m.a,{className:Object(f.f)("sticky"),top:50},d.a.createElement("div",{className:Object(f.f)("nav")},t.map(function(e,t){var n=e.children.filter(function(e){return"string"==typeof e});return d.a.createElement("a",{key:t,className:Object(f.f)("level-".concat(e.level),r===e.id&&"active"),onClick:function(e){if(0===h.a.location.search.indexOf("?example="))h.a.push("".concat(h.a.location.pathname,"?example=").concat(e.replace("heading-","")));else{var t=document.getElementById(e);t&&t.scrollIntoView()}}.bind(a,e.id)},n)})))}},{key:"render",value:function(){return d.a.createElement("div",{className:Object(f.f)("_")},d.a.createElement(t,{onHeadingSetted:this.setHeading}),this.renderNav())}}]),n}(d.a.Component)}},124:function(e,t,n){"use strict";var h=n(0),f=n.n(h),c=n(21),a=n(24),r=n(5),o=n(6),i=n(8),l=n(2),s=n(7),u=n(3),d=n(157),m=n.n(d),p=n(35),v=n(17),b=n(25),g=n(158),y=n.n(g),j=(n(159),n(160),function(e){var t=e.language,n=void 0===t?"lang-jsx":t,a=e.onHighLight,r=e.value,o=Object(h.useRef)(null);return Object(h.useEffect)(function(){var e=o.current;y.a.highlightElement(e,!1,function(){a&&a(e.offsetHeight)})},[]),f.a.createElement("pre",{ref:o,className:n||"lang-jsx"},f.a.createElement("code",null,r))}),O=n(144),x=n(32),E=n(27),k=n(131),R=function(e){function n(e){var t;return Object(r.a)(this,n),(t=Object(i.a)(this,Object(l.a)(n).call(this,e))).state={ready:!1},t.placeholderRef=function(e){t.placeholder=e},t}return Object(s.a)(n,e),Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.lazyId=Object(k.a)({element:this.placeholder,render:function(){return e.setState({ready:!0})}})}},{key:"componentWillUnmount",value:function(){Object(k.b)(this.lazyId)}},{key:"render",value:function(){var e=this.state.ready,t=this.props,n=t.children,a=t.placeholder;return e?n:f.a.createElement("span",{ref:this.placeholderRef},a)}}]),n}(E.b),w=n(46),S=n(39),H=f.a.createElement("div",{className:Object(v.a)("placeholder")},f.a.createElement(x.a,null)),C=function(e){function n(e){var t;return Object(r.a)(this,n),(t=Object(i.a)(this,Object(l.a)(n).call(this,e))).setCodeBlockHeight=function(e){t.codeHeight=e},t.bindCodeBlock=function(e){t.codeblock=e},t.state={showcode:!1},t}return Object(s.a)(n,e),Object(o.a)(n,[{key:"collapse",value:function(e,t,n){var a=this;this.codeblock.style.height="".concat(e*(t-1),"px"),1<t&&setTimeout(function(){a.collapse(e,t-1,n)},16),n&&(document.documentElement.scrollTop-=e)}},{key:"toggleCode",value:function(t){var n=this,a=!this.state.showcode;this.setState({showcode:a},function(){if(a)n.codeblock.style.height="".concat(n.codeHeight,"px");else{var e=n.codeHeight%15;0<e&&n.collapse(e,1,t),n.collapse((n.codeHeight-e)/15,15,t)}})}},{key:"renderCodeHandle",value:function(e){var t=this.state.showcode;return f.a.createElement("a",{href:"javascript:;",className:Object(v.a)("toggle"),onClick:this.toggleCode.bind(this,e)},f.a.createElement(w.a,{name:t?"code-close":"code"}))}},{key:"render",value:function(){var e=this.props,t=e.component,n=e.id,a=e.name,r=e.rawText,o=this.state.showcode,c=r.replace(/(^|\n|\r)\s*\/\*[\s\S]*?\*\/\s*(?:\r|\n|$)/,"").trim(),i=S.a.location.search,l="?example=";if(0===i.indexOf(l)&&(i=i.replace(l,""),a.indexOf(i)<0))return null;var s=this.props.title.split("\n"),u=Object(O.a)(s),d=u[0],m=u.slice(1);return d&&(d=d.trim()),f.a.createElement(h.Fragment,null,d&&f.a.createElement("h3",{key:"0",id:n},d),f.a.createElement(R,{placeholder:H},f.a.createElement("div",{className:Object(v.a)("_",o&&"showcode")},f.a.createElement("div",{className:Object(v.a)("body")},Object(h.createElement)(t)),0<this.props.title.length&&f.a.createElement("div",{className:Object(v.a)("desc")},m.map(function(e,t){return f.a.createElement("div",{key:t,dangerouslySetInnerHTML:{__html:e}})}),this.renderCodeHandle(!1)),f.a.createElement("div",{ref:this.bindCodeBlock,className:Object(v.a)("code")},f.a.createElement(j,{onHighLight:this.setCodeBlockHeight,onClose:this.toggleCode,value:c}),this.renderCodeHandle(!0)))))}}]),n}(h.Component);C.defaultProps={rawText:""};var T=function(e){function n(e){var t;return Object(r.a)(this,n),(t=Object(i.a)(this,Object(l.a)(n).call(this,e))).toggle=function(){t.setState({expanded:!t.state.expanded})},t.state={expanded:!1},t}return Object(s.a)(n,e),Object(o.a)(n,[{key:"render",value:function(){var e=this.props.children,t=this.state.expanded,n=e.map(function(e){return e.replace(/"fn#fn/g,"").replace(/fn#fn"/g,"").replace(/\\n/g,"\n")}),a=t?"pre":"div";return f.a.createElement("div",{onClick:this.toggle,className:Object(v.e)("console")},f.a.createElement(a,null,n))}}]),n}(h.PureComponent);T.defaultProps={children:[]};var I=T,F=/^<code name="([\w|-]+)" /,A=/^<example name="([\w|-]+)"/,z=function(e){function t(e){var c;return Object(r.a)(this,t),(c=Object(i.a)(this,Object(l.a)(t).call(this,e))).renderHeading=function(e){var t=e.level,n=e.children,a="".concat(t,"-").concat(n[0]),r="h".concat(t);if("object"==typeof n[0])return f.a.createElement(r,null,n);if(!c.cache[a]){var o="heading-".concat(Object(p.b)());2!==t&&3!==t||c.appendHeading({id:o,level:t,children:n}),c.cache[a]=f.a.createElement(r,{id:o},n)}return c.cache[a]},c.headings=[],c.appendHeading=c.appendHeading.bind(Object(u.a)(Object(u.a)(c))),c.cache={},c}return Object(s.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.props.onHeadingSetted&&this.props.onHeadingSetted(this.headings)}},{key:"appendHeading",value:function(e){this.headings.push(e)}},{key:"renderCode",value:function(e){var t=this.props.codes[e];return t?[f.a.createElement(j,{key:"cb",value:t.text})].concat(Object(a.a)(t.log.map(function(e,t){return f.a.createElement(I,{key:t},e)}))):(console.error("Code ".concat(e," not existed")),null)}},{key:"renderExamples",value:function(){var o=this;if(this.cache.examples)return this.cache.examples;var e=this.props.examples;if(!e)return f.a.createElement("div",null);var t=Object(b.a)("示例","Example"),n="heading-".concat(Object(p.b)());return this.appendHeading({id:n,level:2,children:[t]}),this.cache.examples=[f.a.createElement("h2",{key:"h",id:n},t)].concat(Object(a.a)(e.map(function(e,t){if(/\d+-/.test(e.name)){var n="heading-".concat(e.name),a=e.title.split("\n"),r=Object(c.a)(a,1)[0];return o.appendHeading({id:n,level:3,children:[r]}),f.a.createElement(C,Object.assign({key:t,id:n},e,{lazy:2<t}))}}))),this.cache.examples}},{key:"renderExample",value:function(t){var e="example-".concat(t);if(!this.cache[e]){var n=(this.props.examples||[]).find(function(e){return e.name===t});this.cache[e]=n?f.a.createElement(C,n):null}return this.cache[e]}},{key:"render",value:function(){var r=this,e=this.props.source;return this.headings=[],f.a.createElement(m.a,{className:Object(v.e)("_"),source:e,renderers:{code:j,heading:this.renderHeading,html:function(e){var t=e.value;if("<example />"===t)return r.renderExamples();var n=t.match(A);if(n)return r.renderExample(n[1],0<=t.indexOf("noExpand"));if("<br>"===t||"<br />"===t)return f.a.createElement("br",null);var a=t.match(F);return a?r.renderCode(a[1]):null},link:function(e){var t=e.href,n=e.children,a=t.indexOf(!1)?"_blank":void 0;return f.a.createElement("a",{href:t,target:a},n)}}})}}]),t}(h.PureComponent);z.defaultProps={children:null,examples:null,onHeadingSetted:void 0};var N=n(45),B=n(118);n.d(t,"a",function(){return P});var V,D=((V=function(e){function n(e){var t;return Object(r.a)(this,n),(t=Object(i.a)(this,Object(l.a)(n).call(this,e))).state={source:t.props.source},t}return Object(s.a)(n,e),Object(o.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.props.loader&&this.props.loader().then(function(e){t.setState({source:e.default})})}},{key:"render",value:function(){var e=this.state.source;return e?f.a.createElement(z,Object.assign({},this.props,{source:e})):f.a.createElement(N.a,{style:{minHeight:200}})}}]),n}(h.PureComponent)).defaultProps={loader:void 0,source:void 0},V);t.b=D;function P(t){return Object(B.a)(function(e){return f.a.createElement(D,Object.assign({},e,{loader:t}))})}},1263:function(e,t,n){"use strict";var a=n(0),l=n.n(a),r=n(13),o=n(5),c=n(6),i=n(8),s=n(2),u=n(7),d=n(11),m=n.n(d),h=n(27),f=n(41),p=n(15),v=n(9),b=function(e){function n(e){var t;return Object(o.a)(this,n),(t=Object(i.a)(this,Object(s.a)(n).call(this,e))).state={hover:0,highlight:-1},t}return Object(u.a)(n,e),Object(c.a)(n,[{key:"getValue",value:function(){var e=this.state.hover;return 0===e?this.props.value:e}},{key:"getStyle",value:function(){var e=this.props.size;if(e)return{width:e,fontSize:e}}},{key:"getIcon",value:function(e,t,n){var a,r=this.props.repeat,o=this.getValue(),c=o-t;if(Array.isArray(e)?(a=e[r?o-1:t])||(a=e[e.length-1]):a=e,c<=0||1<=c||n)return a;var i={width:"".concat(100*c,"%"),display:"block",overflow:"hidden"};return l.a.createElement("span",{style:i},a)}},{key:"handleClick",value:function(e){var t=this;this.props.onChange(e),this.setState({highlight:e}),this.highlightTimer&&clearTimeout(this.highlightTimer),this.highlightTimer=setTimeout(function(){t.setState({highlight:-1})},300)}},{key:"handleHover",value:function(e){this.setState({hover:e})}},{key:"renderBackground",value:function(){var t=this,e=this.props,n=e.background,a=e.max,r=e.disabled,o=this.getStyle(),c=this.getValue();return l.a.createElement("div",{className:Object(v.v)("background")},Object(f.a)(a).map(function(e){return l.a.createElement("span",{key:e,style:Object.assign({visibility:!r&&e<c?"hidden":"visible"},o)},t.getIcon(n,e,!0))}))}},{key:"renderRate",value:function(){var t=this,e=this.props,n=e.front,a=e.max,r=e.text,o=this.state.highlight,c=this.getValue(),i=this.getStyle();return l.a.createElement("div",{className:Object(v.v)("front")},Object(f.a)(a).map(function(e){return l.a.createElement("span",{key:e,onClick:t.handleClick.bind(t,e+1),onMouseEnter:t.handleHover.bind(t,e+1),onMouseLeave:t.handleHover.bind(t,0),style:i},e<c?t.getIcon(n,e):l.a.createElement("span",null," "),o===e+1&&l.a.createElement("i",{className:Object(v.v)("highlight")},t.getIcon(n,e)))}),l.a.createElement("span",{className:Object(v.v)("text")},r[Math.ceil(c)-1]))}},{key:"renderStatic",value:function(){var t=this,e=this.props,n=e.front,a=e.value,r=e.max,o=e.text,c=this.getStyle();return l.a.createElement("div",{className:Object(v.v)("static")},Object(f.a)(r).map(function(e){return l.a.createElement("span",{key:e,style:c},e<a&&t.getIcon(n,e))}),l.a.createElement("span",{className:Object(v.v)("text")},o[Math.ceil(a)-1]))}},{key:"render",value:function(){var e=m()(Object(v.v)("_"),this.props.className);return l.a.createElement("div",{className:e},this.renderBackground(),this.props.disabled?this.renderStatic():this.renderRate())}}]),n}(h.b);b.defaultProps=Object(r.a)({},p.a,{repeat:!0,max:5,size:20,text:[],value:0});var g=b,y=n(123);t.a=function(t,n){var a=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},e=Object(y.a)(function(e){return l.a.createElement(g,Object.assign({},a,e,{background:t,front:n||t}))});return e.displayName="ShineoutRate",e}},127:function(e,t,n){"use strict";var a=n(114);t.a=Object(a.a)("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css","FontAwesome","fa")},131:function(e,t,n){"use strict";n.d(t,"a",function(){return s}),n.d(t,"b",function(){return u});var a=n(142),r=n(35),o={},c=null,i=!1,l=window.innerHeight||document.documentElement.clientHeight;function s(e){var t=e.element.getBoundingClientRect();if(t.bottom<0||t.top>l){var n=Object(r.b)();return o[n]=e,n}return e.render(),null}function u(e){e&&delete o[e]}document.addEventListener("scroll",function(){c&&clearTimeout(c),c=setTimeout(function(){i||(i=!0,Object.keys(o).forEach(function(e){var t=o[e],n=t.element,a=t.render,r=n.getBoundingClientRect();r.bottom<0||r.top>l||(delete o[e],a())}),i=!1),c=null},80)},a.a)},796:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(118),c=n(124),i=n(25),l=n(797),s=n.n(l),u=n(798),d=n.n(u),m=Object(i.a)(s.a,d.a),h=[{name:"01-base",title:Object(i.a)("基本用法 \n Rate 为一个函数，创建一个指定图标或文字的 Rate 组件，供多处复用。","Base \n Rate is a function that creates a new custom Rate component that specifies an icon or text."),component:n(799).default,rawText:n(800)},{name:"02-color",title:Object(i.a)("颜色 \n 在创建组件时设置颜色","Icon color \n Set the color when the component is created."),component:n(801).default,rawText:n(802)},{name:"04-max",title:Object(i.a)("最大值 \n 通过 max 属性设置选项最大值，默认为 5","Max \n Set the maximum value of the option through the max attribute. The default value is 5."),component:n(803).default,rawText:n(804)},{name:"05-size",title:Object(i.a)("大小 \n 通过 size 属性可以设置大小","Size \n Set the size through the size property."),component:n(805).default,rawText:n(806)},{name:"06-text",title:Object(i.a)("附加文字 \n text 属性可以为每个选项附加文字","Text \n Set text property to append text to each item."),component:n(807).default,rawText:n(808)},{name:"07-disabled",title:Object(i.a)("只读 \n 设置 disabled 标示为只读，只读状态下，value可以传入小数","Disabled \n Set disabled to true make it be read-only. When disabled, value can be passed in decimals."),component:n(809).default,rawText:n(810)},{name:"08-face",title:Object(i.a)("分级显示 \n 创建组件时可以使用数组显示不同分数下的选项，这种情况下，不支持带小数的value","Array \n You can use arrays to display items with different scores when creating components. In this case, values with decimals are not supported."),component:n(811).default,rawText:n(812)},{name:"09-array",title:Object(i.a)("不重复选项 \n 默认情况下，会重复显示当前分值对应的选项，设置 repeat 属性为 false 可以按分值显示不同选项。","No Repeat \n By default, the item corresponding to the current value is displayed repeatedly. Set repeat property to false to display different item by value."),component:n(813).default,rawText:n(814)}];t.default=Object(o.a)(function(e){return r.a.createElement(c.b,Object.assign({},e,{codes:void 0,source:m,examples:h}))})},797:function(e,t){e.exports="# Rate *评分*\n\n<example />\n\n## API\n\n#### Rate function(background, front):ReactClass\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| background | ReactElement \\| string \\| array | 必填 | 待选项 |\n| front | ReactElement \\| string \\| array | background | 选中项，不填和待选项相同 |\n\n### Rate\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| defaultValue | number | | 默认值 |\n| disabled | bool | false | 是否只读 |\n| max | number | 5 | 选项最大值，整数 |\n| onChange | function(d) | | 值改变回调函数 |\n| repeat | bool | true | 为 true 时，显示的选项为当前分值对应选项的复制 |\n| size | number \\| string | 20 | 图标大小 |\n| value | number | 0 | 作为可输入组件时，为整数。只读展示时，可以带小数 |"},798:function(e,t){e.exports="# Rate\n\n<example />\n\n## API\n\n#### Rate function(background, front):ReactClass\n\n| Property | Type | Default | Description |\n| --- | --- | --- | --- |\n| background | ReactElement \\| string \\| array | required | Background item for rate |\n| front | ReactElement \\| string \\| array | background | Front item. If it is not set, use background item |\n\n### Rate\n\n| Property | Type | Default | Description |\n| --- | --- | --- | --- |\n| defaultValue | number | | Default value |\n| disabled | bool | false | read-only |\n| max | number | 5 | The maximum value of the option, integer |\n| onChange | function(d) | | The callback function when the value is changing |\n| repeat | bool | true | When repeat is true, display item is a copy of the item corresponding to the current value |\n| size | number \\| string | 20 | the size of the icon |\n| value | number | 0 | |"},799:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(1263),c=n(127),i=r.a.createElement(c.a,{name:"star"}),l=Object(o.a)(i,i);t.default=function(){return r.a.createElement(l,null)}},800:function(e,t){e.exports="/**\n * cn - 基本用法\n *    -- Rate 为一个函数，创建一个指定图标或文字的 Rate 组件，供多处复用。\n * en - Base\n *    -- Rate is a function that creates a new custom Rate component that specifies an icon or text.\n */\nimport React from 'react'\nimport { Rate } from 'shineout'\nimport FontAwesome from '../Icon/FontAwesome'\n\nconst star = <FontAwesome name=\"star\" />\nconst StarRate = Rate(star, star)\n\nexport default function() {\n  return <StarRate />\n}\n"},801:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(1263),c=n(127),i=r.a.createElement(c.a,{name:"heart-o"}),l=r.a.createElement(c.a,{name:"heart",style:{color:"#ff4d4f"}}),s=Object(o.a)(i,l);t.default=function(){return r.a.createElement(s,{defaultValue:2})}},802:function(e,t){e.exports="/**\n * cn - 颜色\n *    -- 在创建组件时设置颜色\n * en - Icon color\n *    -- Set the color when the component is created.\n */\nimport React from 'react'\nimport { Rate } from 'shineout'\nimport FontAwesome from '../Icon/FontAwesome'\n\nconst heartBg = <FontAwesome name=\"heart-o\" />\nconst heart = <FontAwesome name=\"heart\" style={{ color: '#ff4d4f' }} />\nconst HeartRate = Rate(heartBg, heart)\n\nexport default function() {\n  return <HeartRate defaultValue={2} />\n}\n"},803:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(1263),c=n(127),i=r.a.createElement(c.a,{name:"star"}),l=Object(o.a)(i,i);t.default=function(){return r.a.createElement(l,{max:10,defaultValue:3})}},804:function(e,t){e.exports="/**\n * cn - 最大值\n *    -- 通过 max 属性设置选项最大值，默认为 5\n * en - Max\n *    -- Set the maximum value of the option through the max attribute. The default value is 5.\n */\nimport React from 'react'\nimport { Rate } from 'shineout'\nimport FontAwesome from '../Icon/FontAwesome'\n\nconst star = <FontAwesome name=\"star\" />\nconst StarRate = Rate(star, star)\n\nexport default function() {\n  return <StarRate max={10} defaultValue={3} />\n}\n"},805:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(1263),c=n(127),i=r.a.createElement(c.a,{name:"star"}),l=Object(o.a)(i,i);t.default=function(){return r.a.createElement("div",null,r.a.createElement(l,{size:14}),r.a.createElement(l,{size:20}),r.a.createElement(l,{size:40}))}},806:function(e,t){e.exports="/**\n * cn - 大小\n *    -- 通过 size 属性可以设置大小\n * en - Size\n *    -- Set the size through the size property.\n */\nimport React from 'react'\nimport { Rate } from 'shineout'\nimport FontAwesome from '../Icon/FontAwesome'\n\nconst star = <FontAwesome name=\"star\" />\nconst StarRate = Rate(star, star)\n\nexport default function() {\n  return (\n    <div>\n      <StarRate size={14} />\n      <StarRate size={20} />\n      <StarRate size={40} />\n    </div>\n  )\n}\n"},807:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(1263),c=n(127),i=r.a.createElement(c.a,{name:"star"}),l=Object(o.a)(i,i);t.default=function(){return r.a.createElement(l,{defaultValue:4,text:["poor","fair","good","very good","excellent"]})}},808:function(e,t){e.exports="/**\n * cn - 附加文字\n *    -- text 属性可以为每个选项附加文字\n * en - Text\n *    -- Set text property to append text to each item.\n */\nimport React from 'react'\nimport { Rate } from 'shineout'\nimport FontAwesome from '../Icon/FontAwesome'\n\nconst star = <FontAwesome name=\"star\" />\nconst StarRate = Rate(star, star)\n\nexport default function() {\n  return <StarRate defaultValue={4} text={['poor', 'fair', 'good', 'very good', 'excellent']} />\n}\n"},809:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(1263),c=n(127),i=r.a.createElement(c.a,{name:"star"}),l=Object(o.a)(i,i);t.default=function(){return r.a.createElement(l,{value:3.6,disabled:!0})}},810:function(e,t){e.exports="/**\n * cn - 只读\n *    -- 设置 disabled 标示为只读，只读状态下，value可以传入小数\n * en - Disabled\n *    -- Set disabled to true make it be read-only. When disabled, value can be passed in decimals.\n */\nimport React from 'react'\nimport { Rate } from 'shineout'\nimport FontAwesome from '../Icon/FontAwesome'\n\nconst star = <FontAwesome name=\"star\" />\nconst StarRate = Rate(star, star)\n\nexport default function() {\n  return <StarRate value={3.6} disabled />\n}\n"},811:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(114),c=n(1263),i=Object(o.a)("https://at.alicdn.com/t/font_662584_hfkafvbgwurkvs4i.css","facefont"),l=r.a.createElement(i,{name:"question"}),s=[r.a.createElement(i,{name:"cry",style:{color:"#003a8c"}}),r.a.createElement(i,{name:"sad",style:{color:"#222222"}}),r.a.createElement(i,{name:"sleeping",style:{color:"#ffa940"}}),r.a.createElement(i,{name:"happy",style:{color:"#fa541c"}}),r.a.createElement(i,{name:"lol",style:{color:"#fa541c"}})],u=Object(c.a)(l,s);t.default=function(){return r.a.createElement(u,{equal:!1,size:40,defaultValue:3})}},812:function(e,t){e.exports="/**\n * cn - 分级显示\n *    -- 创建组件时可以使用数组显示不同分数下的选项，这种情况下，不支持带小数的value\n * en - Array\n *    -- You can use arrays to display items with different scores when creating components. In this case, values with decimals are not supported.\n */\nimport React from 'react'\nimport { Rate, Icon } from 'shineout'\n\nconst FaceIcon = Icon('https://at.alicdn.com/t/font_662584_hfkafvbgwurkvs4i.css', 'facefont')\nconst background = <FaceIcon name=\"question\" />\nconst front = [\n  <FaceIcon name=\"cry\" style={{ color: '#003a8c' }} />,\n  <FaceIcon name=\"sad\" style={{ color: '#222222' }} />,\n  <FaceIcon name=\"sleeping\" style={{ color: '#ffa940' }} />,\n  <FaceIcon name=\"happy\" style={{ color: '#fa541c' }} />,\n  <FaceIcon name=\"lol\" style={{ color: '#fa541c' }} />,\n]\nconst TextRate = Rate(background, front)\n\nexport default function() {\n  return <TextRate equal={false} size={40} defaultValue={3} />\n}\n"},813:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(1263),c=["A","B","C","D","E"],i=c.map(function(e){return r.a.createElement("span",{style:{color:"red"}},e)}),l=Object(o.a)(c,i);t.default=function(){return r.a.createElement(l,{repeat:!1,defaultValue:2})}},814:function(e,t){e.exports="/**\n * cn - 不重复选项\n *    -- 默认情况下，会重复显示当前分值对应的选项，设置 repeat 属性为 false 可以按分值显示不同选项。\n * en - No Repeat\n *    -- By default, the item corresponding to the current value is displayed repeatedly. Set repeat property to false to display different item by value.\n */\nimport React from 'react'\nimport { Rate } from 'shineout'\n\nconst text = ['A', 'B', 'C', 'D', 'E']\nconst front = text.map(t => <span style={{ color: 'red' }}>{t}</span>)\nconst TextRate = Rate(text, front)\n\nexport default function() {\n  return <TextRate repeat={false} defaultValue={2} />\n}\n"}}]);