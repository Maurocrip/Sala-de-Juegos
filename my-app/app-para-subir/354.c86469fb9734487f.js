"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[354],{6354:(V,h,c)=>{c.r(h),c.d(h,{HomeModuloModule:()=>L});var s=c(6814),u=c(8589),t=c(4946);let C=(()=>{class o{static#t=this.\u0275fac=function(a){return new(a||o)};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-home-modulo"]],decls:1,vars:0,template:function(a,n){1&a&&t._UZ(0,"router-outlet")},dependencies:[u.lC]})}return o})();var x=c(2621);function k(o,i){if(1&o&&(t.TgZ(0,"div")(1,"h6",5),t._uU(2),t.qZA(),t.TgZ(3,"h6",6),t._uU(4),t.qZA()()),2&o){const e=t.oxw();t.xp6(2),t.hij("Inicio de sesion: ",e.tiempoDeLogue,""),t.xp6(2),t.Oqu(e.usuario)}}function v(o,i){if(1&o&&(t.TgZ(0,"div",7)(1,"h5",8),t._uU(2),t.qZA(),t._UZ(3,"img",9),t.TgZ(4,"div",10)(5,"p",11),t._uU(6),t.qZA()()()),2&o){const e=i.$implicit;t.Q6J("routerLink",e.path),t.xp6(2),t.Oqu(e.name),t.xp6(1),t.Q6J("src",e.image,t.LSH),t.xp6(3),t.hij("",e.description," ")}}let T=(()=>{class o{constructor(e){this.global=e,this.juegos=[{path:"MayorMenor",name:"Mayor o menor",image:"../../../../assets/cartas.png",description:"El objetivo del juego es adivinar si la siguiente carta que se sacar\xe1 ser\xe1 mayor o menor a la anteriormente sacada."},{path:"ahorcado",name:"Ahorcado",image:"../../../../assets/ahorcado.png",description:"El objetivo del juego es adivinar la palabra incognita antes de perder todas las vidas."},{path:"preguntados",name:"Preguntados",image:"../../../../assets/trivia.jpg",description:"Trivia sobre videojuegos."},{path:"blackJack",name:"BlackJack",image:"../../../../assets/blackjack.jpg",description:"El objetivo del juego es obtener 21 puntos o lo mas cerca, plantarse y ganarle a la maquina."}]}get tiempoDeLogue(){return this.global.tiempoDeLogue}get perfil(){return this.global.usuarioDisponible}get usuario(){return this.global.usuarioNombre}static#t=this.\u0275fac=function(a){return new(a||o)(t.Y36(x.d))};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-home"]],decls:6,vars:2,consts:[[1,"fondo"],[4,"ngIf"],[1,"container-login100"],[1,"card-group","flex"],["class"," gamePointer",3,"routerLink",4,"ngFor","ngForOf"],[1,"tiempo"],[1,"usuario"],[1,"gamePointer",3,"routerLink"],[1,"card-title"],["alt","...",1,"card-img-top","gamePhoto",2,"height","300px","width","400px",3,"src"],[1,"card-body"],[1,"card-text"]],template:function(a,n){1&a&&(t.TgZ(0,"div",0),t.YNc(1,k,5,2,"div",1),t.TgZ(2,"div",2)(3,"div",3),t.YNc(4,v,7,4,"div",4),t.qZA()()(),t._UZ(5,"router-outlet")),2&a&&(t.xp6(1),t.Q6J("ngIf",n.perfil),t.xp6(3),t.Q6J("ngForOf",n.juegos))},dependencies:[s.sg,s.O5,u.lC,u.rH],styles:[".container-login100[_ngcontent-%COMP%]{width:100%;min-height:100vh;display:flex;flex-wrap:wrap;justify-content:center;align-items:center;padding:15px;z-index:1}.fondo[_ngcontent-%COMP%]{background-repeat:no-repeat;background-position:center;background-size:cover;background-image:url(gaming.4e7eedc71e93c8ba.png)}h1[_ngcontent-%COMP%]{font-family:Montserrat,sans-serif;display:inline-block;text-transform:uppercase;color:#0a0104;text-decoration:none;border:2px solid;background:rgb(0,217,255);padding:10px 40px;font-size:14px;font-weight:700;transition:.2s all}.gamePointer[_ngcontent-%COMP%]{cursor:pointer;background-color:#00d9ff6e;color:#000;height:500px;width:500px;padding:10px 40px;margin:50px;display:flex;flex-direction:column;min-width:0;word-wrap:break-word;background-clip:border-box;border:1px solid rgba(0,0,0,.125);border-radius:.25rem}.gamePhoto[_ngcontent-%COMP%]{height:auto;width:auto}.tiempo[_ngcontent-%COMP%]{float:top right;display:flex;color:#fff}.usuario[_ngcontent-%COMP%]{float:left;display:flex;color:#fff}"]})}return o})();var p=c(5861),m=c(9862);let Z=(()=>{class o{constructor(e){this.http=e}GenerarPalabra(){return this.http.get("https://clientes.api.greenborn.com.ar/public-random-word")}static#t=this.\u0275fac=function(a){return new(a||o)(t.LFG(m.eN))};static#e=this.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();var l=c(95);const A=["palabra"],M=["teclado"];function y(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"div",8,9)(2,"div",10)(3,"div",11)(4,"label",12),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.letra("q"))}),t.TgZ(5,"span"),t._uU(6,"q"),t.qZA()(),t.TgZ(7,"label",12),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.letra("w"))}),t.TgZ(8,"span"),t._uU(9,"w"),t.qZA()(),t.TgZ(10,"label",12),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.letra("e"))}),t.TgZ(11,"span"),t._uU(12,"e"),t.qZA()(),t.TgZ(13,"label",12),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.letra("r"))}),t.TgZ(14,"span"),t._uU(15,"r"),t.qZA()(),t.TgZ(16,"label",12),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.letra("t"))}),t.TgZ(17,"span"),t._uU(18,"t"),t.qZA()(),t.TgZ(19,"label",12),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.letra("y"))}),t.TgZ(20,"span"),t._uU(21,"y"),t.qZA()(),t.TgZ(22,"label",12),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.letra("u"))}),t.TgZ(23,"span"),t._uU(24,"u"),t.qZA()(),t.TgZ(25,"label",12),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.letra("i"))}),t.TgZ(26,"span"),t._uU(27,"i"),t.qZA()(),t.TgZ(28,"label",12),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.letra("o"))}),t.TgZ(29,"span"),t._uU(30,"o"),t.qZA()(),t.TgZ(31,"label",12),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.letra("p"))}),t.TgZ(32,"span"),t._uU(33,"p"),t.qZA()()(),t.TgZ(34,"div",11)(35,"label",12),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.letra("a"))}),t.TgZ(36,"span"),t._uU(37,"a"),t.qZA()(),t.TgZ(38,"label",12),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.letra("s"))}),t.TgZ(39,"span"),t._uU(40,"s"),t.qZA()(),t.TgZ(41,"label",12),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.letra("d"))}),t.TgZ(42,"span"),t._uU(43,"d"),t.qZA()(),t.TgZ(44,"label",12),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.letra("f"))}),t.TgZ(45,"span"),t._uU(46,"f"),t.qZA()(),t.TgZ(47,"label",12),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.letra("g"))}),t.TgZ(48,"span"),t._uU(49,"g"),t.qZA()(),t.TgZ(50,"label",12),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.letra("h"))}),t.TgZ(51,"span"),t._uU(52,"h"),t.qZA()(),t.TgZ(53,"label",12),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.letra("j"))}),t.TgZ(54,"span"),t._uU(55,"j"),t.qZA()(),t.TgZ(56,"label",12),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.letra("k"))}),t.TgZ(57,"span"),t._uU(58,"k"),t.qZA()(),t.TgZ(59,"label",12),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.letra("l"))}),t.TgZ(60,"span"),t._uU(61,"l"),t.qZA()(),t.TgZ(62,"label",12),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.letra("\xf1"))}),t.TgZ(63,"span"),t._uU(64,"\xf1"),t.qZA()()(),t.TgZ(65,"div",11)(66,"label",12),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.letra("z"))}),t.TgZ(67,"span"),t._uU(68,"z"),t.qZA()(),t.TgZ(69,"label",12),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.letra("x"))}),t.TgZ(70,"span"),t._uU(71,"x"),t.qZA()(),t.TgZ(72,"label",12),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.letra("c"))}),t.TgZ(73,"span"),t._uU(74,"c"),t.qZA()(),t.TgZ(75,"label",12),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.letra("v"))}),t.TgZ(76,"span"),t._uU(77,"v"),t.qZA()(),t.TgZ(78,"label",12),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.letra("b"))}),t.TgZ(79,"span"),t._uU(80,"b"),t.qZA()(),t.TgZ(81,"label",12),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.letra("n"))}),t.TgZ(82,"span"),t._uU(83,"n"),t.qZA()(),t.TgZ(84,"label",12),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.letra("m"))}),t.TgZ(85,"span"),t._uU(86,"m"),t.qZA()()()()()}}function P(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"div")(1,"input",13),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.Reintentar())}),t.qZA()()}if(2&o){const e=t.oxw();t.xp6(1),t.Q6J("ngModel",e.boton)}}let J=(()=>{class o{constructor(e){this.servicio=e,this.palabraJuego="",this.tecladoB=!0,this.boton="reintentar",this.palabraReal="",this.intentos=0,this.puntos=0,this.foto="../../../../assets/ahoracado"+this.intentos+".jpeg",this.Empezar()}Reintentar(){this.puntos=0,this.Empezar()}Empezar(){var e=this;return(0,p.Z)(function*(){e.servicio.GenerarPalabra().subscribe(function(){var n=(0,p.Z)(function*(r){e.palabraReal=r[0],console.log(e.palabraReal),(e.palabraReal.includes("\xe1")||e.palabraReal.includes("\xe9")||e.palabraReal.includes("\xed")||e.palabraReal.includes("\xf3")||e.palabraReal.includes("\xfa"))&&(e.palabraReal=e.palabraReal.replaceAll("\xe1","a"),e.palabraReal=e.palabraReal.replaceAll("\xed","i"),e.palabraReal=e.palabraReal.replaceAll("\xf3","o"),e.palabraReal=e.palabraReal.replaceAll("\xfa","u"),e.palabraReal=e.palabraReal.replaceAll("\xe9","e")),e.palabraJuego="",e.intentos=0,e.foto="../../../../assets/ahoracado"+e.intentos+".jpeg",e.OcultarPalabra(),e.tecladoB=!0,e.palabra.nativeElement.style.color="black"});return function(r){return n.apply(this,arguments)}}())})()}letra(e){var a=this;return(0,p.Z)(function*(){if(a.palabraReal.includes(e)){let n="";for(let r=0;r<a.palabraReal.length;r++)n+=a.palabraReal[r]==e?e:a.palabraJuego[r];a.palabraJuego=n,a.palabraJuego==a.palabraReal&&(a.puntos++,a.teclado.nativeElement.style.pointerEvents="none",a.palabra.nativeElement.style.color="green",setTimeout((0,p.Z)(function*(){yield a.Empezar(),a.teclado.nativeElement.style.pointerEvents=""}),500))}else 4!=a.intentos?(a.intentos++,a.foto="../../../../assets/ahoracado"+a.intentos+".jpeg"):(a.intentos++,a.foto="../../../../assets/ahoracado"+a.intentos+".jpeg",a.palabra.nativeElement.style.color="red",a.palabraJuego=a.palabraReal,a.tecladoB=!1)})()}OcultarPalabra(){for(let e=0;e<this.palabraReal.length;e++)this.palabraJuego=this.palabraJuego+"?"}static#t=this.\u0275fac=function(a){return new(a||o)(t.Y36(Z))};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-ahorcado"]],viewQuery:function(a,n){if(1&a&&(t.Gf(A,5),t.Gf(M,5)),2&a){let r;t.iGM(r=t.CRH())&&(n.palabra=r.first),t.iGM(r=t.CRH())&&(n.teclado=r.first)}},decls:11,vars:5,consts:[[1,"general","center"],[1,"ahorcado"],[3,"src"],["id","palabra",1,"palabra"],["palabra",""],[1,"palabra"],["class","teclado ",4,"ngIf","ngIfElse"],["elseBlock",""],[1,"teclado"],["teclado",""],[1,"bloque"],[1,"fila-teclas"],[1,"tecla","tecla-letra",3,"click"],["type","button",1,"",3,"ngModel","click"]],template:function(a,n){if(1&a&&(t.TgZ(0,"div",0)(1,"div",1),t._UZ(2,"img",2),t.TgZ(3,"label",3,4),t._uU(5),t.qZA(),t.TgZ(6,"label",5),t._uU(7),t.qZA()(),t.YNc(8,y,87,0,"div",6),t.YNc(9,P,2,1,"ng-template",null,7,t.W1O),t.qZA()),2&a){const r=t.MAs(10);t.xp6(2),t.Q6J("src",n.foto,t.LSH),t.xp6(3),t.Oqu(n.palabraJuego),t.xp6(2),t.hij("llevas: ",n.puntos," puntos"),t.xp6(1),t.Q6J("ngIf",n.tecladoB)("ngIfElse",r)}},dependencies:[s.O5,l.Fj,l.JJ,l.On],styles:['.teclado[_ngcontent-%COMP%]{background-color:#555;padding:5px 5px 20px;border-radius:5px;display:inline-block;min-width:410px;-webkit-user-select:none;box-shadow:0 4px 8px -4px #000;pointer-events:visible}.bloque[_ngcontent-%COMP%]{display:inline-block;vertical-align:middle}.fila-teclas[_ngcontent-%COMP%]:after, .fila-teclas[_ngcontent-%COMP%]:before{content:"";display:table;clear:both}.tecla[_ngcontent-%COMP%]{padding:10px 5px 0;float:left}.tecla[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{background-color:#555;height:32px;padding-top:5px;padding-left:10px;padding-right:10px;display:inline-block;font-family:Verdana;color:#fff;font-size:13px;box-shadow:0 0 5px 2px #333;border-radius:2px 2px 8px 8px;text-transform:uppercase;cursor:pointer}.tecla[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]:hover{background-color:#666;cursor:pointer}.tecla[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]:active{background-color:#555;cursor:pointer;box-shadow:0 0 5px 2px #222}.tecla-letra[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{width:30px}.center[_ngcontent-%COMP%]{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);z-index:-1}.ahorcado[_ngcontent-%COMP%]{left:50%;top:25%;display:flex;flex-direction:column}.palabra[_ngcontent-%COMP%]{background-color:#fff0}']})}return o})(),b=(()=>{class o{constructor(e){this.http=e,this.id=""}Empezar(){this.http.get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1").subscribe(e=>{this.id=e.deck_id})}TraerCartas(e){return this.http.get("https://deckofcardsapi.com/api/deck/"+this.id+"/draw/?count="+e)}static#t=this.\u0275fac=function(a){return new(a||o)(t.LFG(m.eN))};static#e=this.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();const w=["resultado"];function q(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"input",6),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.Empezar())}),t.qZA()}if(2&o){const e=t.oxw();t.Q6J("ngModel",e.boton)}}function O(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"div")(1,"label",7),t._uU(2,"La carta siguiente sera:"),t.qZA(),t.TgZ(3,"input",8),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.Mayor())}),t.qZA(),t.TgZ(4,"input",9),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.Menor())}),t.qZA()()}}let U=(()=>{class o{constructor(e){this.servicioCartas=e,this.puntos=0,this.cartaActual=new _,this.cartaPosterior=new _,this.fotoAtras="",this.boton="Empezar",this.mostrar=!0,this.mensaje=""}ngOnInit(){this.servicioCartas.Empezar()}Chequear(){let e="Empate";return this.cartaPosterior.valor<this.cartaActual.valor?e="Es menor":this.cartaPosterior.valor>this.cartaActual.valor&&(e="Es mayor"),e}Mayor(){let e=this.Chequear();"Es menor"!=e?this.CambiarCartas():e=this.Perdiste(e),this.mensaje=e}Menor(){let e=this.Chequear();"Es mayor"!=e?this.CambiarCartas():e=this.Perdiste(e),this.mensaje=e}Perdiste(e){return e="Perdiste!! "+e,this.servicioCartas.Empezar(),this.fotoAtras=this.cartaPosterior.foto,this.mostrar=!0,this.resultado.nativeElement.style.color="#740c0c",e}Empezar(){this.puntos=0,this.mensaje="",this.cartaActual.foto="",this.TraerAmbasCarta(),this.mostrar=!1,this.boton="reintentar",this.fotoAtras="https://deckofcardsapi.com/static/img/back.png"}TraerCarta(){this.servicioCartas.TraerCartas(1).subscribe(a=>{this.cartaPosterior.foto=a.cards[0].image,this.AsignarValor(a.cards[0].value,this.cartaPosterior)})}TraerAmbasCarta(){this.servicioCartas.TraerCartas(2).subscribe(a=>{this.cartaActual.foto=a.cards[0].image,this.cartaPosterior.foto=a.cards[1].image,this.AsignarValor(a.cards[0].value,this.cartaActual),this.AsignarValor(a.cards[1].value,this.cartaPosterior)})}AsignarValor(e,a){switch(e){case"ACE":a.valor=1;break;case"JACK":a.valor=11;break;case"QUEEN":a.valor=12;break;case"KING":a.valor=13;break;default:a.valor=parseInt(e)}}CambiarCartas(){this.resultado.nativeElement.style.color="lime",this.puntos++,this.cartaActual.valor=this.cartaPosterior.valor,this.cartaActual.foto=this.cartaPosterior.foto,this.TraerCarta()}static#t=this.\u0275fac=function(a){return new(a||o)(t.Y36(b))};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-mayor-menor"]],viewQuery:function(a,n){if(1&a&&t.Gf(w,5),2&a){let r;t.iGM(r=t.CRH())&&(n.resultado=r.first)}},decls:14,vars:6,consts:[[1,"mesa"],[1,"center"],["type","button",3,"ngModel","click",4,"ngIf","ngIfElse"],["alt","",3,"src"],["resultado",""],["elseBlock",""],["type","button",3,"ngModel","click"],["type","text"],["type","button","value","Mayor",3,"click"],["type","button","value","Menor",3,"click"]],template:function(a,n){if(1&a&&(t.TgZ(0,"div",0)(1,"div",1),t.YNc(2,q,1,1,"input",2),t.TgZ(3,"div"),t._UZ(4,"img",3)(5,"img",3),t.qZA(),t.TgZ(6,"label",null,4),t._uU(8),t.qZA(),t._UZ(9,"br"),t.TgZ(10,"label"),t._uU(11),t.qZA(),t.YNc(12,O,5,0,"ng-template",null,5,t.W1O),t.qZA()()),2&a){const r=t.MAs(13);t.xp6(2),t.Q6J("ngIf",n.mostrar)("ngIfElse",r),t.xp6(2),t.Q6J("src",n.cartaActual.foto,t.LSH),t.xp6(1),t.Q6J("src",n.fotoAtras,t.LSH),t.xp6(3),t.hij(" ",n.mensaje," "),t.xp6(3),t.hij("LLevas ",n.puntos," puntos")}},dependencies:[s.O5,l.Fj,l.JJ,l.On],styles:[".mesa[_ngcontent-%COMP%]{background-image:url(pokerFondo.e9002d114cec698e.jpg);background-repeat:no-repeat;background-position:center;background-size:cover;height:949px;display:flex;flex-direction:column;justify-content:center;align-items:center}.center[_ngcontent-%COMP%]{background-color:#dbd8d871;padding:10px}label[_ngcontent-%COMP%]{font-family:Arial,Helvetica,sans-serif}input[_ngcontent-%COMP%]{margin:5px}"]})}return o})();class _{constructor(i=0,e=""){this.valor=i,this.foto=e}}let H=(()=>{class o{constructor(e){this.http=e}GenerarPalabra(){return this.http.get("https://opentdb.com/api.php?amount=1&category=15&difficulty=medium&type=multiple")}static#t=this.\u0275fac=function(a){return new(a||o)(t.LFG(m.eN))};static#e=this.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();function E(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"div",3)(1,"label"),t._uU(2,"PREGUNTA:"),t.qZA(),t.TgZ(3,"label"),t._uU(4),t.qZA(),t.TgZ(5,"div",4)(6,"li",5),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.Verificar(n.opciones[0]))}),t._uU(7),t.qZA(),t.TgZ(8,"li",6),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.Verificar(n.opciones[1]))}),t._uU(9),t.qZA(),t.TgZ(10,"li",7),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.Verificar(n.opciones[2]))}),t._uU(11),t.qZA(),t.TgZ(12,"li",8),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.Verificar(n.opciones[3]))}),t._uU(13),t.qZA()(),t.TgZ(14,"label"),t._uU(15),t.qZA()()}if(2&o){const e=t.oxw();t.xp6(4),t.Oqu(e.pregunta),t.xp6(3),t.Oqu(e.opciones[0]),t.xp6(2),t.Oqu(e.opciones[1]),t.xp6(2),t.Oqu(e.opciones[2]),t.xp6(2),t.Oqu(e.opciones[3]),t.xp6(2),t.hij("Puntos: ",e.puntos,"")}}function N(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"div",3)(1,"H1"),t._uU(2,"HAS PERDIDO!!"),t.qZA(),t.TgZ(3,"label"),t._uU(4),t.qZA(),t.TgZ(5,"button",9),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.Reintentar())}),t._uU(6,"Reintentar"),t.qZA(),t.TgZ(7,"label"),t._uU(8),t.qZA()()}if(2&o){const e=t.oxw();t.xp6(4),t.hij("La respuesta correcta era: ",e.respustaCorrecta,""),t.xp6(4),t.hij("Puntos: ",e.puntos,"")}}const j=["resultado"];function K(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"input",9),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.EmpezarJuego())}),t.qZA()}if(2&o){const e=t.oxw();t.Q6J("ngModel",e.boton)}}function F(o,i){1&o&&t._UZ(0,"img",10),2&o&&t.Q6J("src",i.$implicit.foto,t.LSH)}function R(o,i){1&o&&t._UZ(0,"img",10),2&o&&t.Q6J("src",i.$implicit.foto,t.LSH)}function I(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"div")(1,"input",12),t.NdJ("click",function(){t.CHM(e);const n=t.oxw(2);return t.KtG(n.Plantarse())}),t.qZA(),t.TgZ(2,"input",13),t.NdJ("click",function(){t.CHM(e);const n=t.oxw(2);return t.KtG(n.Pedir())}),t.qZA()()}}function Q(o,i){if(1&o&&t.YNc(0,I,3,0,"div",11),2&o){const e=t.oxw();t.Q6J("ngIf",e.terminar)}}function z(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"input",14),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.Continuar())}),t.qZA()}}const B=[{path:"",component:C,children:[{path:"",component:T},{path:"MayorMenor",component:U},{path:"ahorcado",component:J},{path:"preguntados",component:(()=>{class o{constructor(e){this.servicio=e,this.perdio=!0,this.puntos=0,this.pregunta="",this.respustaCorrecta="",this.opciones=[],this.Pregunta()}Reintentar(){this.puntos=0,this.perdio=!0,this.Pregunta()}Pregunta(){this.servicio.GenerarPalabra().subscribe(a=>{console.log("la respuesta correcta es: "+a.results[0].correct_answer),this.pregunta=this.ModificarFrase(a.results[0].question),this.respustaCorrecta=this.ModificarFrase(a.results[0].correct_answer),this.opciones.push(this.respustaCorrecta);for(let n=0;n<a.results[0].incorrect_answers.length;n++)this.opciones.push(this.ModificarFrase(a.results[0].incorrect_answers[n]));this.opciones.sort(()=>Math.random()-.5)})}Verificar(e){e==this.respustaCorrecta?(this.opciones=[],this.puntos++,this.Pregunta()):(this.perdio=!1,this.opciones=[])}ModificarFrase(e){let a=e;return a.includes("&#039;")&&(a=a.replaceAll("&#039;","'")),a.includes("&quot;")&&(a=a.replaceAll("&quot;",'"')),a.includes("&amp;")&&(a=a.replaceAll("&amp;","&")),a.includes("&aring;")&&(a=a.replaceAll("&aring;","\xe5")),a}static#t=this.\u0275fac=function(a){return new(a||o)(t.Y36(H))};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-preguntados"]],decls:4,vars:2,consts:[[1,"conteiner"],["class","prerguntados",4,"ngIf","ngIfElse"],["elseBlock",""],[1,"prerguntados"],[1,"opciones"],[1,"opcion1",3,"click"],[1,"opcion2",3,"click"],[1,"opcion3",3,"click"],[1,"opcion4",3,"click"],[3,"click"]],template:function(a,n){if(1&a&&(t.TgZ(0,"div",0),t.YNc(1,E,16,6,"div",1),t.YNc(2,N,9,2,"ng-template",null,2,t.W1O),t.qZA()),2&a){const r=t.MAs(3);t.xp6(1),t.Q6J("ngIf",n.perdio)("ngIfElse",r)}},dependencies:[s.O5],styles:["li[_ngcontent-%COMP%]{padding:10px;list-style:none;border-radius:50px;display:flex;flex-direction:row;width:40%;margin:10px;border-color:#000!important;color:#000!important;justify-content:center;border:solid}h1[_ngcontent-%COMP%]{color:red;padding:2px 10px}label[_ngcontent-%COMP%]{padding:2px 10px}.conteiner[_ngcontent-%COMP%]{background-image:url(gaming.4e7eedc71e93c8ba.png);background-repeat:no-repeat;background-position:center;background-size:cover;display:flex;height:949px}.prerguntados[_ngcontent-%COMP%]{flex-direction:column;align-items:center;margin:auto;display:flex;background-color:#242323ed;color:#fff}.opciones[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:center}.opcion1[_ngcontent-%COMP%]{background-color:#fa9426}.opcion2[_ngcontent-%COMP%]{background-color:#f00000}.opcion3[_ngcontent-%COMP%]{background-color:#0af4ec}.opcion4[_ngcontent-%COMP%]{background-color:#7808ce}"]})}return o})()},{path:"blackJack",component:(()=>{class o{constructor(e){this.servicioCartas=e,this.arrayCartasMia=[],this.arrayCartasPc=[],this.puntos=0,this.boton="Empezar",this.mostrar=!0,this.terminar=!0,this.mensaje=""}ngOnInit(){this.servicioCartas.Empezar()}Plantarse(){var e=this;return(0,p.Z)(function*(){let a=e.ValorTotal(e.arrayCartasPc);for(yield e.TraerAmbasCarta(e.arrayCartasPc);a<e.ValorTotal(e.arrayCartasMia);)yield e.TraerCarta(e.arrayCartasPc),a=e.ValorTotal(e.arrayCartasPc);a<=21?e.Perdiste():(e.puntos++,e.mensaje="Ganaste!!",e.resultado.nativeElement.style.color="lime",e.servicioCartas.Empezar(),e.terminar=!1)})()}Pedir(){var e=this;return(0,p.Z)(function*(){yield e.TraerCarta(e.arrayCartasMia),e.ValorTotal(e.arrayCartasMia)>21&&e.Perdiste()})()}ValorTotal(e){let a=0;for(let n of e)a+=n.valor;return a}Perdiste(){this.mensaje="Perdiste!!",this.mostrar=!0,this.resultado.nativeElement.style.color="#740c0c",this.servicioCartas.Empezar()}Continuar(){this.terminar=!0,this.Empezar()}EmpezarJuego(){this.puntos=0,this.Empezar()}Empezar(){var e=this;return(0,p.Z)(function*(){e.mensaje="",e.arrayCartasMia=[],e.arrayCartasPc=[],yield e.TraerAmbasCarta(e.arrayCartasMia),e.mostrar=!1,e.boton="reintentar"})()}TraerCarta(e){return new Promise((a,n)=>{let r=new _;this.servicioCartas.TraerCartas(1).subscribe(f=>{r.foto=f.cards[0].image,this.AsignarValor(f.cards[0].value,r),e.push(r),a("")})})}TraerAmbasCarta(e){return new Promise((a,n)=>{let r=new _,d=new _;this.servicioCartas.TraerCartas(2).subscribe(g=>{r.foto=g.cards[0].image,d.foto=g.cards[1].image,this.AsignarValor(g.cards[0].value,r),this.AsignarValor(g.cards[1].value,d),e.push(r,d),a("")})})}AsignarValor(e,a){switch(e){case"ACE":a.valor=1;break;case"JACK":case"QUEEN":case"KING":a.valor=10;break;default:a.valor=parseInt(e)}}static#t=this.\u0275fac=function(a){return new(a||o)(t.Y36(b))};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-black-jack"]],viewQuery:function(a,n){if(1&a&&t.Gf(j,5),2&a){let r;t.iGM(r=t.CRH())&&(n.resultado=r.first)}},decls:23,vars:7,consts:[[1,"mesa"],[1,"center"],["type","button",3,"ngModel","click",4,"ngIf","ngIfElse"],[1,"cartas"],[3,"src",4,"ngFor","ngForOf"],["resultado",""],["elseBlock",""],[2,"display","flex","justify-content","space-between"],["type","button","value","Continuar",3,"click",4,"ngIf"],["type","button",3,"ngModel","click"],[3,"src"],[4,"ngIf"],["type","button","value","Plantarse",3,"click"],["type","button","value","Pedir",3,"click"],["type","button","value","Continuar",3,"click"]],template:function(a,n){if(1&a&&(t.TgZ(0,"div",0)(1,"div",1),t.YNc(2,K,1,1,"input",2),t.TgZ(3,"div",3)(4,"label"),t._uU(5,"Tus cartas"),t.qZA(),t._UZ(6,"br"),t.YNc(7,F,1,1,"img",4),t.qZA(),t.TgZ(8,"div")(9,"label"),t._uU(10,"Cartas del contricante"),t.qZA(),t._UZ(11,"br"),t.YNc(12,R,1,1,"img",4),t.qZA(),t.TgZ(13,"label",null,5),t._uU(15),t.qZA(),t._UZ(16,"br"),t.YNc(17,Q,1,1,"ng-template",null,6,t.W1O),t.TgZ(19,"div",7)(20,"label"),t._uU(21),t.qZA(),t.YNc(22,z,1,0,"input",8),t.qZA()()()),2&a){const r=t.MAs(18);t.xp6(2),t.Q6J("ngIf",n.mostrar)("ngIfElse",r),t.xp6(5),t.Q6J("ngForOf",n.arrayCartasMia),t.xp6(5),t.Q6J("ngForOf",n.arrayCartasPc),t.xp6(3),t.hij(" ",n.mensaje," "),t.xp6(6),t.hij("LLevas ",n.puntos," puntos"),t.xp6(1),t.Q6J("ngIf",0==n.terminar)}},dependencies:[s.sg,s.O5,l.Fj,l.JJ,l.On],styles:[".mesa[_ngcontent-%COMP%]{background-image:url(pokerFondo.e9002d114cec698e.jpg);background-repeat:no-repeat;background-position:center;background-size:cover;height:949px;display:flex;flex-direction:column;justify-content:center;align-items:center}.center[_ngcontent-%COMP%]{background-color:#dbd8d871;padding:10px}label[_ngcontent-%COMP%]{font-family:Arial,Helvetica,sans-serif}input[_ngcontent-%COMP%]{margin:5px}"]})}return o})()}]}];let Y=(()=>{class o{static#t=this.\u0275fac=function(a){return new(a||o)};static#e=this.\u0275mod=t.oAB({type:o});static#a=this.\u0275inj=t.cJS({imports:[u.Bz.forChild(B),u.Bz]})}return o})(),L=(()=>{class o{static#t=this.\u0275fac=function(a){return new(a||o)};static#e=this.\u0275mod=t.oAB({type:o});static#a=this.\u0275inj=t.cJS({imports:[s.ez,Y]})}return o})()}}]);