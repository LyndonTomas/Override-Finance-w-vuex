(function(e){function t(t){for(var r,c,s=t[0],i=t[1],o=t[2],u=0,b=[];u<s.length;u++)c=s[u],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&b.push(a[c][0]),a[c]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);d&&d(t);while(b.length)b.shift()();return l.push.apply(l,o||[]),n()}function n(){for(var e,t=0;t<l.length;t++){for(var n=l[t],r=!0,c=1;c<n.length;c++){var i=n[c];0!==a[i]&&(r=!1)}r&&(l.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},l=[];function c(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-2d216214":"8db2bc27","chunk-2d216257":"256ee085","chunk-7734f398":"2765c169"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n=a[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=r);var l,i=document.createElement("script");i.charset="utf-8",i.timeout=120,s.nc&&i.setAttribute("nonce",s.nc),i.src=c(e);var o=new Error;l=function(t){i.onerror=i.onload=null,clearTimeout(u);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),l=t&&t.target&&t.target.src;o.message="Loading chunk "+e+" failed.\n("+r+": "+l+")",o.name="ChunkLoadError",o.type=r,o.request=l,n[1](o)}a[e]=void 0}};var u=setTimeout((function(){l({type:"timeout",target:i})}),12e4);i.onerror=i.onload=l,document.head.appendChild(i)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],o=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var d=o;l.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"12d0":function(e,t,n){"use strict";n("5467")},"2f88":function(e,t,n){},"3dba":function(e,t,n){"use strict";n("eab3")},5467:function(e,t,n){},"559c":function(e,t,n){"use strict";n("2f88")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),a={id:"app"};function l(e,t,n,l,c,s){var i=Object(r["w"])("router-view");return Object(r["p"])(),Object(r["d"])("div",a,[Object(r["g"])(i)])}n("9cdc");const c={};c.render=l;var s=c,i=n("6c02"),o=Object(r["E"])("data-v-63ed8a7c");Object(r["s"])("data-v-63ed8a7c");var u={id:"Login-container",class:"container"},d={id:"Login",class:"container-fluid"},b={class:"row justify-content-center"},g={class:"col-lg-6"},O={class:"login-panel text-left"},p=Object(r["f"])(" Processing "),j=Object(r["g"])("small",null," please wait...",-1),f=Object(r["g"])("h1",{class:"display-3 font-weight-bold"},"Login",-1),m=Object(r["g"])("p",{class:"font-weight-bold"},"Welcome Back!",-1),h=Object(r["g"])("br",null,null,-1),y={action:""},v={class:"form-group"},w=Object(r["g"])("label",{for:"",class:"ionput-label"},[Object(r["g"])("h4",null,"Email")],-1),_={class:"email-error_message"},k={id:"email-error"},S={id:"email-success"},D={class:"form-group"},x=Object(r["g"])("label",{for:"",class:"ionput-label"},[Object(r["g"])("h4",null,"Password")],-1),I=Object(r["g"])("br",null,null,-1),P={class:"form-group d-flex justify-content-center"};Object(r["q"])();var T=o((function(e,t,n,a,l,c){var s=Object(r["w"])("loading-component");return Object(r["p"])(),Object(r["d"])("div",u,[Object(r["g"])("div",d,[Object(r["g"])("div",b,[Object(r["g"])("div",g,[Object(r["g"])("div",O,[Object(r["g"])("div",{class:"alert alert-primary",rol:"alert",style:{opacity:l.isAlertShow?1:0}},[p,j,Object(r["g"])(s,{width:"20"})],4),f,m,h,Object(r["g"])("form",y,[Object(r["g"])("div",v,[w,Object(r["D"])(Object(r["g"])("input",{onEnter:t[1]||(t[1]=function(){return c.login.apply(c,arguments)}),type:"email","onUpdate:modelValue":t[2]||(t[2]=function(e){return l.email=e}),id:"email",class:"form-control",placeholder:"Email",required:"true"},null,544),[[r["B"],l.email]])]),Object(r["g"])("div",_,[Object(r["g"])("p",k,Object(r["y"])(c.sendEmailError),1),Object(r["g"])("p",S,Object(r["y"])(),1)]),Object(r["g"])("div",D,[x,Object(r["D"])(Object(r["g"])("input",{onEnter:t[3]||(t[3]=function(){return c.login.apply(c,arguments)}),type:"password","onUpdate:modelValue":t[4]||(t[4]=function(e){return l.password=e}),id:"password",class:"form-control",placeholder:"password",required:"true"},null,544),[[r["B"],l.password]])]),I,Object(r["g"])("div",P,[l.isLoggingIn?Object(r["e"])("",!0):(Object(r["p"])(),Object(r["d"])("button",{key:0,class:"btn btn-primary w-25",onClick:t[5]||(t[5]=function(){return c.login.apply(c,arguments)})},"Login")),l.isLoggingIn?(Object(r["p"])(),Object(r["d"])("button",{key:1,class:"btn btn-primary w-25",disabled:"",onClick:t[6]||(t[6]=function(e){return c.login()})},[Object(r["g"])(s,{width:"20"})])):Object(r["e"])("",!0)])])])])])])])})),C=(n("96cf"),n("1da1")),A={class:"widget"};function E(e,t,n,a,l,c){return Object(r["p"])(),Object(r["d"])("div",A,[Object(r["g"])("div",{class:"loader",style:{width:n.width+"px",height:n.width+"px"}},null,4)])}var L={props:["width"]};n("3dba");L.render=E;var H=L,R=(n("99af"),n("d81d"),n("d3b7"),n("d4ec")),M=n("bee2"),q=n("bc3a"),F=n.n(q),N=function(){function e(){Object(R["a"])(this,e)}return Object(M["a"])(e,null,[{key:"login",value:function(e,t){return F.a.get("/api/users/".concat(e,"/").concat(t))}},{key:"getUsers",value:function(){return new Promise((function(e,t){F.a.get("/api/users/").then((function(t){var n=t.data;e(n.map((function(e){return{_id:e._id,username:e.username,email:e.email,password:e.password}})))})).catch((function(e){t(e)}))}))}}]),e}(),U=N,B=n("5118"),$={name:"Login",components:{LoadingComponent:H},data:function(){return{emailError:"",isLoggingIn:!1,isAlertShow:!1,email:"",password:"",logIn:[]}},computed:{sendEmailError:function(){var e=this.email;return""==this.email||/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(e)?"":"Invalid email"}},methods:{login:function(){var e=this;this.isLoggingIn=!0,Object(B["setTimeout"])(Object(C["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.isLoggingIn=!1,e.isAlertShow=!0,""!=e.email&&""!=e.password||(alert("Complete input in all fields"),e.isAlertShow=!1,e.email="",e.password=""),t.next=5,U.login(e.email,e.password);case 5:e.logIn=t.sent,202==e.logIn.status?(sessionStorage.setItem("isLoggedIn","true"),sessionStorage.setItem("username",e.logIn.data.username),sessionStorage.setItem("isAdmin",e.logIn.data.isAdmin),Object(B["setTimeout"])((function(){return e.redirect()}),1e3)):201==e.logIn.status&&(alert("This credentials are not yet registered in the database"),e.isAlertShow=!1,e.email="",e.password="");case 7:case"end":return t.stop()}}),t)}))),1e3)},EmptyWarning:function(){return"You haven't placed anything yet"},redirect:function(){this.$router.push({name:"Orders"})}}};n("12d0");$.render=T,$.__scopeId="data-v-63ed8a7c";var G=$,V=(n("b0c0"),Object(r["E"])("data-v-53f339ea"));Object(r["s"])("data-v-53f339ea");var z={class:"container"},Q=Object(r["g"])("h2",{class:"pageTitle"},"Override-Orders",-1),Z={class:"entries"},J=Object(r["g"])("span",{class:"labelDate"},"Date:  ",-1),W=Object(r["f"])(),K={class:"filter-statuts"},Y={class:"payementFilter"},X=Object(r["f"])("Payment:   "),ee=Object(r["g"])("option",{value:"processing"},"Processing",-1),te=Object(r["g"])("option",{value:"paid"},"Paid",-1),ne=Object(r["g"])("option",{value:"cancelled"},"Cancelled",-1),re={class:"payementFilter"},ae=Object(r["f"])("Order:   "),le=Object(r["g"])("option",{value:"processing"},"Processing",-1),ce=Object(r["g"])("option",{value:"delivered"},"Delivered",-1),se=Object(r["g"])("option",{value:"cancelled"},"Cancelled",-1),ie={class:"logOut"},oe={id:"orderTable",class:"table"},ue=Object(r["g"])("thead",{class:"thead-dark"},[Object(r["g"])("th",null,[Object(r["g"])("h4",null,"Order_ID")]),Object(r["g"])("th",null,[Object(r["g"])("h4",null,"Date")]),Object(r["g"])("th",null,[Object(r["g"])("h4",null,"User Name")]),Object(r["g"])("th",null,[Object(r["g"])("h4",null,"Item Name")]),Object(r["g"])("th",null,[Object(r["g"])("h4",null,"Quantity")]),Object(r["g"])("th",null,[Object(r["g"])("h4",null,"Payment Method")]),Object(r["g"])("th",null,[Object(r["g"])("h4",null,"Payment Status")]),Object(r["g"])("th",null,[Object(r["g"])("h4",null,"Order Status")]),Object(r["g"])("th",null,[Object(r["g"])("h4",null,"Total Amount")]),Object(r["g"])("th",null,[Object(r["g"])("h4",null,"Option")])],-1),de={scope:"row"},be={"data-toggle":"modal","data-target":"#ItemDescription"},ge={id:"ID"},Oe={class:"modal fade",id:"ItemDescription",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLongTitle","aria-hidden":"true"},pe={class:"modal-dialog",role:"document"},je={class:"modal-content"},fe=Object(r["g"])("div",{class:"modal-header"},[Object(r["g"])("h5",{class:"modal-title",id:"exampleModalLongTitle"},"Order Details"),Object(r["g"])("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},[Object(r["g"])("span",{"aria-hidden":"true"},"×")])],-1),me={class:"modal-body"},he=Object(r["g"])("h5",null,[Object(r["g"])("b",null,"Order ID: ")],-1),ye=Object(r["g"])("h5",null,[Object(r["g"])("b",null,"Payment Method: ")],-1),ve=Object(r["g"])("h5",null,[Object(r["g"])("b",null,"Payment Status: ")],-1),we=Object(r["g"])("h5",null,[Object(r["g"])("b",null,"Paid On: ")],-1),_e=Object(r["g"])("h5",null,[Object(r["g"])("b",null,"Delivered On: ")],-1),ke=Object(r["g"])("h5",null,[Object(r["g"])("b",null,"Order Status: ")],-1),Se=Object(r["g"])("h5",null,[Object(r["g"])("b",null,"Fee: ")],-1),De=Object(r["g"])("h4",null,[Object(r["g"])("b",null,"Customer Details")],-1),xe=Object(r["g"])("h5",null,[Object(r["g"])("b",null,"Customer Name: ")],-1),Ie=Object(r["g"])("h5",null,[Object(r["g"])("b",null,"Full Address: ")],-1),Pe=Object(r["g"])("h5",null,[Object(r["g"])("b",null,"Email: ")],-1),Te=Object(r["g"])("h5",null,[Object(r["g"])("b",null,"Mobile Number: ")],-1),Ce=Object(r["g"])("h4",null,[Object(r["g"])("b",null,"Item Details")],-1),Ae=Object(r["g"])("h5",null,[Object(r["g"])("b",null,"Item ID: ")],-1),Ee=Object(r["g"])("h5",null,[Object(r["g"])("b",null,"Item Name: ")],-1),Le=Object(r["g"])("h5",null,[Object(r["g"])("b",null,"Price per Item: ")],-1),He=Object(r["g"])("h5",null,[Object(r["g"])("b",null,"Quantity: ")],-1),Re=Object(r["g"])("h4",null,[Object(r["g"])("b",null,"Shipping Address")],-1),Me=Object(r["g"])("h5",null,[Object(r["g"])("b",null,"Full Address")],-1),qe=Object(r["g"])("h5",null,[Object(r["g"])("b",null,"Item Name: ")],-1),Fe=Object(r["g"])("br",null,null,-1),Ne=Object(r["g"])("br",null,null,-1),Ue=Object(r["g"])("h5",null,[Object(r["g"])("b",null,"Ordered At: ")],-1),Be={class:"modal-footer"},$e=Object(r["g"])("button",{type:"button",class:"btn btn-secondary","data-dismiss":"modal"},"Close",-1),Ge={key:1},Ve={key:1},ze=Object(r["f"])(" ₱   "),Qe={class:"options"},Ze=Object(r["g"])("i",{class:"far fa-edit"},null,-1),Je=Object(r["g"])("i",{class:"fas fa-trash"},null,-1),We=Object(r["g"])("i",{class:"far fa-times-circle"},null,-1);Object(r["q"])();var Ke=V((function(e,t,n,a,l,c){var s=this,i=Object(r["w"])("center");return Object(r["p"])(),Object(r["d"])("div",z,[Q,Object(r["g"])("span",null,[Object(r["g"])("button",{class:"btn btn-info",onClick:t[1]||(t[1]=function(){return c.Refresh.apply(c,arguments)})},"Refresh")]),Object(r["g"])("span",Z,"Entries:"+Object(r["y"])(e.length),1),Object(r["g"])("span",{id:"getHelp",class:"btn btn-outline-danger",onClick:t[2]||(t[2]=function(){return c.getSomeHelp.apply(c,arguments)})},"Help"),J,W,Object(r["D"])(Object(r["g"])("input",{"onUpdate:modelValue":t[3]||(t[3]=function(e){return l.date=e}),onChange:t[4]||(t[4]=function(){return c.dateClicked.apply(c,arguments)}),type:"date"},null,544),[[r["B"],l.date]]),Object(r["g"])("span",K,[Object(r["g"])("span",Y,[X,Object(r["D"])(Object(r["g"])("select",{onChange:t[5]||(t[5]=function(){return c.filterThruStatus.apply(c,arguments)}),"onUpdate:modelValue":t[6]||(t[6]=function(e){return l.paymentStatus=e})},[ee,te,ne],544),[[r["A"],l.paymentStatus]])]),Object(r["g"])("span",re,[ae,Object(r["D"])(Object(r["g"])("select",{onChange:t[7]||(t[7]=function(){return c.filterThruStatus.apply(c,arguments)}),"onUpdate:modelValue":t[8]||(t[8]=function(e){return l.orderStatus=e})},[le,ce,se],544),[[r["A"],l.orderStatus]])])]),Object(r["g"])("span",ie,[Object(r["g"])("button",{class:"btn btn-warning",onClick:t[9]||(t[9]=function(){return c.logOut.apply(c,arguments)})},"Log Out")]),Object(r["g"])("table",oe,[ue,Object(r["g"])("tbody",null,[(Object(r["p"])(!0),Object(r["d"])(r["a"],null,Object(r["v"])(e.orders,(function(e){return Object(r["p"])(),Object(r["d"])("tr",{item:e,class:{"is-cancelled":"Cancelled"==e.order_status},key:e._id},[Object(r["g"])("td",de,[Object(r["g"])("span",be,[Object(r["g"])("b",ge,Object(r["y"])(e._id),1)])]),Object(r["g"])("div",Oe,[Object(r["g"])("div",pe,[Object(r["g"])("div",je,[fe,Object(r["g"])("div",me,[he,Object(r["f"])(Object(r["y"])(e._id)+" ",1),ye,Object(r["f"])(Object(r["y"])(e.payment_method)+" ",1),ve,Object(r["f"])(Object(r["y"])(e.payment_status)+" ",1),we,Object(r["f"])(Object(r["y"])(e.paid_on)+" ",1),_e,Object(r["f"])(Object(r["y"])(e.delivered_on)+" ",1),ke,Object(r["f"])(Object(r["y"])(e.order_status)+" ",1),Se,Object(r["f"])(Object(r["y"])(e.fee)+" ",1),Object(r["g"])(i,null,{default:V((function(){return[De]})),_:1}),xe,Object(r["f"])(Object(r["y"])(e.user.fullname.firstname)+" "+Object(r["y"])(e.user.fullname.lastname)+" ",1),Ie,Object(r["f"])(Object(r["y"])(e.user.full_address.house_number)+" "+Object(r["y"])(e.user.full_address.street_name)+" "+Object(r["y"])(e.user.full_address.barangay)+" "+Object(r["y"])(e.user.full_address.district)+" "+Object(r["y"])(e.user.full_address.city)+" "+Object(r["y"])(e.user.full_address.province)+" ",1),Pe,Object(r["f"])(Object(r["y"])(e.email)+" ",1),Te,Object(r["f"])(Object(r["y"])(e.mobile_number)+" ",1),Object(r["g"])(i,null,{default:V((function(){return[Ce]})),_:1}),Ae,Object(r["f"])(Object(r["y"])(e.item.id)+" ",1),Ee,Object(r["f"])(Object(r["y"])(e.item.name)+" ",1),Le,Object(r["f"])(Object(r["y"])(e.item.price)+" ",1),He,Object(r["f"])(Object(r["y"])(e.item.quantity)+" ",1),Object(r["g"])(i,null,{default:V((function(){return[Re]})),_:1}),Me,Object(r["f"])(Object(r["y"])(e.shipping_address.house_number)+" "+Object(r["y"])(e.shipping_address.street_name)+" "+Object(r["y"])(e.shipping_address.barangay)+" "+Object(r["y"])(e.shipping_address.district)+" "+Object(r["y"])(e.shipping_address.city)+" "+Object(r["y"])(e.shipping_address.province)+" ",1),qe,Object(r["f"])(Object(r["y"])(e.item.name)+" ",1),Fe,Ne,Ue,Object(r["f"])(" "+Object(r["y"])(e.created_at),1)]),Object(r["g"])("div",Be,[$e,"true"==s.isAdmin?(Object(r["p"])(),Object(r["d"])("button",{key:0,type:"button",class:"btn btn-danger",onClick:function(t){return c.AdminDelete(e._id)}},"Save changes",8,["onClick"])):Object(r["e"])("",!0)])])])]),Object(r["g"])("td",null,Object(r["y"])(c.formatDate(e.created_at)),1),Object(r["g"])("td",null,[Object(r["g"])("strong",null,Object(r["y"])(e.user.fullname.firstname)+"  "+Object(r["y"])(e.user.fullname.lastname),1)]),Object(r["g"])("td",null,[Object(r["g"])("a",{target:"_blank",href:"https://override-syntax.herokuapp.com/item/"+e.item.id},Object(r["y"])(e.item.name),9,["href"])]),Object(r["g"])("td",null,Object(r["y"])(e.item.quantity),1),Object(r["g"])("td",null,Object(r["y"])(e.payment_method),1),Object(r["g"])("td",null,["Processing"==e.payment_status?(Object(r["p"])(),Object(r["d"])("button",{key:0,class:"btn btn-dark",onClick:function(t){return c.finishPayment(e._id)}},"Paid",8,["onClick"])):(Object(r["p"])(),Object(r["d"])("span",Ge,[Object(r["g"])("p",null,Object(r["y"])(e.payment_status),1)]))]),Object(r["g"])("td",null,["Processing"==e.order_status?(Object(r["p"])(),Object(r["d"])("button",{key:0,class:"btn btn-light",onClick:function(t){return c.finishDelivery(e._id)}},"Delivered",8,["onClick"])):(Object(r["p"])(),Object(r["d"])("span",Ve,[Object(r["g"])("p",null,Object(r["y"])(e.order_status),1)]))]),Object(r["g"])("td",null,[ze,Object(r["g"])("strong",null,Object(r["y"])(e.item.quantity*e.item.price+e.fee),1)]),Object(r["g"])("td",Qe,[Object(r["g"])("button",{onClick:function(t){return c.showReceipt(e._id,e.created_at,e.user.fullname.firstname,e.user.fullname.lastname,e.item.name,e.item.price,e.item.quantity,e.payment_method,e.payment_status,e.fee,e.user.full_address.house_number,e.user.full_address.street_name,e.user.full_address.province,e.user.full_address.city,e.user.full_address.district,e.user.full_address.barangay,e.order_status)},class:"btn btn-success"},[Ze],8,["onClick"]),"true"==s.isAdmin?(Object(r["p"])(),Object(r["d"])("button",{key:0,onClick:function(t){return c.startDelete(e._id)},class:"btn btn-danger"},[Je],8,["onClick"])):Object(r["e"])("",!0),"true"==s.isAdmin?(Object(r["p"])(),Object(r["d"])("button",{key:1,onClick:function(t){return c.cancel(e._id)},class:"btn btn-warning"},[We],8,["onClick"])):Object(r["e"])("",!0)])],10,["item"])})),128))])])])})),Ye=(n("25f0"),n("5530")),Xe=n("8baf"),et=n("5502"),tt={name:"Orders",data:function(){return{isAdmin:sessionStorage.getItem("isAdmin"),date:"",paymentStatus:"",orderStatus:""}},computed:Object(Ye["a"])({},Object(et["c"])({orders:function(e){return e.orders.orders},length:function(e){return e.orders.length}})),methods:Object(Ye["a"])(Object(Ye["a"])({},Object(et["b"])(["adminDelete","fetchOrders","filterStatus","deleteOrder","searchByDate","setToDelivered","setToPaid","cancelOrder","getSpecificOrder"])),{},{formatDate:function(e){return new Date(e).toLocaleDateString()},startDelete:function(e){this.deleteOrder(e)},Refresh:function(){window.location.reload()},dateClicked:function(){var e=this;return Object(C["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.searchByDate(e.date);case 1:case"end":return t.stop()}}),t)})))()},finishDelivery:function(e){this.setToDelivered(e),alert("Updating order. Please wait...")},finishPayment:function(e){this.setToPaid(e),alert("Updating payment. Please wait...")},filterThruStatus:function(){var e={payment:this.paymentStatus,order:this.orderStatus};this.filterStatus(e)},cancel:function(e){this.cancelOrder(e)},logOut:function(){var e=confirm("Are you sure you want to log out?");1==e&&(sessionStorage.clear(),this.$router.push({name:"Login"}))},getSomeHelp:function(){this.$router.push({name:"Help"})},showReceipt:function(e,t,n,r,a,l,c,s,i,o,u,d,b,g,O,p,j){var f=new Xe["a"];f.text("OrderId : ",5,10),f.text(e,30,10),f.text("Date: ",5,20),f.text(t,30,20),f.text("Customer Name: ",5,30),f.text(n+" "+r,50,30),f.text("Item Name: ",5,40),f.text(a,40,40);var m="Php ",h=m+l;f.text("Price: ",5,50),f.text(h.toString(),30,50),f.text("Quantity: ",5,60),f.text(c.toString(),30,60),f.text("Payment Method: ",5,70),f.text(s,50,70),f.text("Payment Status: ",5,80),f.text(i,50,80),f.text("Payment Status: ",5,90),f.text(j,50,90),f.text("Fee: ",5,100),f.text(o.toString(),30,100),f.text("Shipping Address: ",5,110),f.text(u.toString()+" "+d.toString()+" "+p.toString()+" "+O.toString()+" "+g.toString()+" "+b.toString(),30,120);var y=l*c+o,v=m+" "+y;f.text("Total: ",5,140),f.text(v.toString(),30,140);var w=(new Date).toLocaleString();f.text("Date of Print: ",5,150),f.text(w.toString(),38,150),f.save("report.pdf")},AdminDelete:function(e){var t=confirm("Are you sure you want to Admin delete the order?");1==t&&this.adminDelete(e)}}),created:function(){"true"!=sessionStorage.getItem("isLoggedIn")&&(alert("Please log in first!"),this.$router.push({name:"Login"})),this.fetchOrders()}};n("c938");tt.render=Ke,tt.__scopeId="data-v-53f339ea";var nt=tt,rt=n("b228"),at=n.n(rt),lt=n("89b0"),ct=n.n(lt),st=n("ea67"),it=n.n(st),ot=n("b916"),ut=n.n(ot),dt=n("dd79"),bt=n.n(dt),gt=Object(r["E"])("data-v-00ebc1ee");Object(r["s"])("data-v-00ebc1ee");var Ot={class:"container"},pt=Object(r["g"])("h1",{class:"pageTitle"},"Help Page",-1),jt=Object(r["g"])("span",null,[Object(r["g"])("h4",null,"Here are some helpful tips in using the Finance-Order System...")],-1),ft=Object(r["g"])("br",null,null,-1),mt=Object(r["g"])("b",null,[Object(r["g"])("p",null,"The puprose of the Override-Orders")],-1),ht=Object(r["g"])("ol",null,[Object(r["g"])("li",null,"To monitor incoming orders."),Object(r["g"])("li",null,"To delete orders (for specific reasons only which will be discussed later on)."),Object(r["g"])("li",null,"To know that stauts of the orders, mainly the payment and the delivery status."),Object(r["g"])("li",null,"To know the number of orders per day.")],-1),yt=Object(r["g"])("p",null,"In this page, the developer will discuss every feature that any user might encounter, within this system.",-1),vt=Object(r["g"])("h3",null,"I. Login Page",-1),wt=Object(r["g"])("b",null,"In this page, there are only 2 errors that a user might encounter. Here are the possible solutions.",-1),_t=Object(r["g"])("br",null,null,-1),kt=Object(r["g"])("br",null,null,-1),St=Object(r["g"])("img",{id:"login-error-1",src:at.a,alt:""},null,-1),Dt=Object(r["g"])("p",null,[Object(r["g"])("b",null,"Image 1. Incomplete fields")],-1),xt=Object(r["g"])("p",null,"To address the situation, make sure that both fields (email and password) are provided with the necessary info.",-1),It=Object(r["g"])("br",null,null,-1),Pt=Object(r["g"])("img",{id:"login-error-2",src:ct.a,alt:""},null,-1),Tt=Object(r["g"])("p",null,[Object(r["g"])("b",null,"Image 2. Unknown credentials")],-1),Ct=Object(r["g"])("p",null,[Object(r["f"])("To address the situation, kindly contact the developers to add a new credential and its corresponding user type. This would prbably occur when the email and password provided aren't registered in the user's database. Also, make sure the spelling and the proper cases are used since this is "),Object(r["g"])("i",null,"case-sensitive"),Object(r["f"])(".")],-1),At=Object(r["g"])("h3",null,"II. Order Page",-1),Et=Object(r["g"])("img",{class:"img1",src:it.a,alt:"Order Page"},null,-1),Lt=Object(r["g"])("b",null,"Image 3. Order Page Sample",-1),Ht=Object(r["g"])("br",null,null,-1),Rt=Object(r["g"])("b",null,[Object(r["g"])("p",null,"A. Refresh")],-1),Mt=Object(r["g"])("p",null,"This button refreshes the page to: ",-1),qt=Object(r["g"])("ol",null,[Object(r["g"])("li",null,"Display new orders, if there are any."),Object(r["g"])("li",null,"Make sure that the status of the payment and order displaying real time information.")],-1),Ft=Object(r["g"])("b",null,[Object(r["g"])("p",null,"B. Entries")],-1),Nt=Object(r["g"])("p",null,"Displays the number of orders. This will change when the user tries to place information on the date filter (part D) and the status filter (part L)",-1),Ut=Object(r["g"])("b",null,[Object(r["g"])("p",null,"C. Got to Help Page")],-1),Bt=Object(r["g"])("p",null,"Goes to the help page where a detailed explanation regarding the use of the system will be displayed.",-1),$t=Object(r["g"])("b",null,[Object(r["g"])("p",null,"D. Date Filter")],-1),Gt=Object(r["g"])("p",null,"A filter designed to help the user lok for orders made on a specific date. ",-1),Vt=Object(r["g"])("b",null,[Object(r["g"])("p",null,"E. LogOut")],-1),zt=Object(r["g"])("p",null,"Delivers the user back to the LogIn page",-1),Qt=Object(r["g"])("b",null,[Object(r["g"])("p",null,"F. Generate Receipt")],-1),Zt=Object(r["g"])("p",null,"Generates a receipt containing information about the buyer and the product. This receipt will be automatically downloaded as a pdf file.",-1),Jt=Object(r["g"])("b",null,[Object(r["g"])("p",null,"G. Delete")],-1),Wt=Object(r["g"])("p",null,"Deletes any non-processing order, but this will only function if the order is only cancelled first.",-1),Kt=Object(r["g"])("b",null,[Object(r["g"])("p",null,"H. Cancel")],-1),Yt=Object(r["g"])("p",null,"Changes the status of the order and the payment as cancelled.",-1),Xt=Object(r["g"])("p",null,[Object(r["g"])("b",null,"Notice:"),Object(r["f"])("The color of the row will change once the order is cancelled, and will reflect in the payment and orders area.")],-1),en=Object(r["g"])("img",{class:"cancel-sample",src:ut.a,alt:""},null,-1),tn=Object(r["g"])("b",null,"Order sample: Not cancelled",-1),nn=Object(r["g"])("br",null,null,-1),rn=Object(r["g"])("img",{class:"cancel-sample",src:bt.a,alt:""},null,-1),an=Object(r["g"])("b",null,"Order sample: Cancelled",-1),ln=Object(r["g"])("b",null,[Object(r["g"])("p",null,"K. Item Reference")],-1),cn=Object(r["g"])("p",null,"Once clicked, you will be directed to the online store wherein the item is displayed along with with images and descriptions.",-1),sn=Object(r["g"])("b",null,[Object(r["g"])("p",null,"L. Stauts Filter")],-1),on=Object(r["g"])("p",null,"This filter is used ony to check the status of the payment and the delivery of the order. This will only funtion when both fileds have values in them (processing, paid, and cancelled for payemnt while processing, delivered, and cancelled are for order).",-1);Object(r["q"])();var un=gt((function(e,t,n,a,l,c){var s=Object(r["w"])("center");return Object(r["p"])(),Object(r["d"])("div",Ot,[pt,Object(r["g"])("button",{id:"backToHome",class:"btn btn-link",onClick:t[1]||(t[1]=function(e){return c.backToOrders()})}," >> Back to Home"),jt,ft,mt,ht,yt,vt,wt,_t,kt,St,Object(r["g"])(s,null,{default:gt((function(){return[Dt]})),_:1}),Object(r["g"])(s,null,{default:gt((function(){return[xt]})),_:1}),It,Pt,Object(r["g"])(s,null,{default:gt((function(){return[Tt]})),_:1}),Object(r["g"])(s,null,{default:gt((function(){return[Ct]})),_:1}),At,Et,Object(r["g"])(s,null,{default:gt((function(){return[Lt]})),_:1}),Ht,Rt,Mt,qt,Ft,Nt,Ut,Bt,$t,Gt,Vt,zt,Qt,Zt,Jt,Wt,Kt,Yt,Object(r["g"])(s,null,{default:gt((function(){return[Xt]})),_:1}),en,Object(r["g"])(s,null,{default:gt((function(){return[tn]})),_:1}),nn,rn,Object(r["g"])(s,null,{default:gt((function(){return[an]})),_:1}),ln,cn,sn,on])})),dn={name:"Help",methods:{backToOrders:function(){this.$router.push({name:"Orders"})}},created:function(){"true"!=sessionStorage.getItem("isLoggedIn")&&(alert("Please log in first!"),this.$router.push({name:"Login"}))}};n("559c");dn.render=un,dn.__scopeId="data-v-00ebc1ee";var bn=dn,gn=[{path:"/orders",name:"Orders",component:nt},{path:"/",name:"Login",component:G},{path:"/help",name:"Help",component:bn}],On=Object(i["a"])({history:Object(i["b"])(),routes:gn}),pn=On,jn=function(){return{orders:[],error:"",length:0,specificOrder:{}}},fn={},mn={fetchOrders:function(e){var t=e.commit;F.a.get("/api/orders/").then((function(e){return t("setOrders",e.data)})).catch((function(e){return t("setError",e.response.data.msg)}))},deleteOrder:function(e,t){var n=e.commit;F.a.patch("/api/orders/delete/".concat(t)).then((function(e){alert(e.data.msg),window.location.reload()})).catch((function(e){n("setError",e.response.data.msg),alert(e.response.data.msg)}))},searchByDate:function(e,t){var n=e.commit;F.a.get("/api/orders/date/".concat(t)).then((function(e){return n("setOrders",e.data)})).catch((function(e){return n("setError",e.response.data.msg)}))},setToDelivered:function(e,t){var n=e.commit;F.a.patch("/api/orders/delivered/".concat(t)).then((function(e){alert(e.data.msg),window.location.reload()})).catch((function(e){var t=e.response;alert(t.data.msg),n("setError",t.data.msg)}))},setToPaid:function(e,t){var n=e.commit;F.a.patch("/api/orders/paid/".concat(t)).then((function(e){alert(e.data.msg),window.location.reload()})).catch((function(e){var t=e.response;alert(t.data.msg),n("setError",t.data.msg)}))},filterStatus:function(e,t){var n=e.commit;F.a.get("/api/orders/status/".concat(t.payment,"/").concat(t.order)).then((function(e){return n("setOrders",e.data)})).catch((function(e){return n("setError",e.response.data.msg)}))},cancelOrder:function(e,t){var n=e.commit;F.a.patch("/api/orders/order/cancel/".concat(t)).then((function(e){alert(e.data.msg),window.location.reload()})).catch((function(e){return n("setError",e.response.data.msg)}))},getSpecificOrder:function(e,t){var n=e.commit;F.a.get("/api/orders/order/".concat(t)).then((function(e){return n("setOrder",e.data)})).catch((function(e){return n("setError",e.response.data.msg)}))},adminDelete:function(e,t){var n=e.commit;F.a.patch("/api/orders/admin/delete/".concat(t)).then((function(e){alert(e.data.msg),window.location.reload()})).catch((function(e){return n("setError",e.response.data.msg)}))}},hn={setOrders:function(e,t){e.orders=t.orders,e.length=t.results},setError:function(e,t){e.error=t},setOrder:function(e,t){e.specificOrder=t.order}},yn={state:jn,getters:fn,actions:mn,mutations:hn},vn=Object(et["a"])({modules:{orders:yn}});Object(r["c"])(s).use(vn).use(pn).mount("#app")},"89b0":function(e,t,n){e.exports=n.p+"img/loginError2.7584262c.jpg"},"9ae0":function(e,t,n){},"9cdc":function(e,t,n){"use strict";n("c701")},b228:function(e,t,n){e.exports=n.p+"img/loginError1.4b29e501.jpg"},b916:function(e,t,n){e.exports=n.p+"img/order-sample.5b8b630e.jpg"},c701:function(e,t,n){},c938:function(e,t,n){"use strict";n("9ae0")},dd79:function(e,t,n){e.exports=n.p+"img/cancel-order-result.3de8678b.jpg"},ea67:function(e,t,n){e.exports=n.p+"img/reset.dca11d1f.jpg"},eab3:function(e,t,n){}});
//# sourceMappingURL=app.ed8cf870.js.map