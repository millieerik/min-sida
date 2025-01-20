import{s as O,g as G,n as M,r as N,h as L}from"../chunks/scheduler.DJmHQjYt.js";import{S as Q,i as U,e as x,s as A,c as _,a as E,f as S,l as T,d as P,n as D,g as q,h as W,p as J,u as V,t as H,b as C,j as Y}from"../chunks/index.DfvXZX6q.js";import{e as $}from"../chunks/each.D6YF6ztN.js";import{g as X}from"../chunks/_commonjsHelpers.C932wzq6.js";import{p as Z,i as ee,a as te}from"../chunks/entry.BD-qmouJ.js";import{w as oe}from"../chunks/paths.g4sWeofw.js";var k={};k.elizaInitials=["How do you do.  Please tell me your problem.","Please tell me what's been bothering you.","Is something troubling you ?"];k.elizaFinals=["Goodbye.  It was nice talking to you.","Goodbye.  This was really a nice talk.","Goodbye.  I'm looking forward to our next session.","This was a good session, wasn't it -- but time is over now.   Goodbye.","Maybe we could discuss this moreover in our next session ?   Goodbye."];k.elizaQuits=["bye","goodbye","done","exit","quit"];k.elizaPres=["dont","don't","cant","can't","wont","won't","recollect","remember","recall","remember","dreamt","dreamed","dreams","dream","maybe","perhaps","certainly","yes","machine","computer","machines","computer","computers","computer","were","was","you're","you are","i'm","i am","same","alike","identical","alike","equivalent","alike"];k.elizaPosts=["am","are","your","my","me","you","myself","yourself","yourself","myself","i","you","you","I","my","your","i'm","you are"];k.elizaSynons={be:["am","is","are","was"],belief:["feel","think","believe","wish"],cannot:["can't"],desire:["want","need"],everyone:["everybody","nobody","noone"],family:["mother","mom","father","dad","sister","brother","wife","children","child"],happy:["elated","glad","better"],sad:["unhappy","depressed","sick"]};k.elizaKeywords=[["xnone",0,[["*",["I'm not sure I understand you fully.","Please go on.","What does that suggest to you ?","Do you feel strongly about discussing such things ?","That is interesting.  Please continue.","Tell me more about that.","Does talking about this bother you ?"]]]],["sorry",0,[["*",["Please don't apologise.","Apologies are not necessary.","I've told you that apologies are not required.","It did not bother me.  Please continue."]]]],["apologise",0,[["*",["goto sorry"]]]],["remember",5,[["* i remember *",["Do you often think of (2) ?","Does thinking of (2) bring anything else to mind ?","What else do you recollect ?","Why do you remember (2) just now ?","What in the present situation reminds you of (2) ?","What is the connection between me and (2) ?","What else does (2) remind you of ?"]],["* do you remember *",["Did you think I would forget (2) ?","Why do you think I should recall (2) now ?","What about (2) ?","goto what","You mentioned (2) ?"]],["* you remember *",["How could I forget (2) ?","What about (2) should I remember ?","goto you"]]]],["forget",5,[["* i forget *",["Can you think of why you might forget (2) ?","Why can't you remember (2) ?","How often do you think of (2) ?","Does it bother you to forget that ?","Could it be a mental block ?","Are you generally forgetful ?","Do you think you are suppressing (2) ?"]],["* did you forget *",["Why do you ask ?","Are you sure you told me ?","Would it bother you if I forgot (2) ?","Why should I recall (2) just now ?","goto what","Tell me more about (2)."]]]],["if",3,[["* if *",["Do you think it's likely that (2) ?","Do you wish that (2) ?","What do you know about (2) ?","Really, if (2) ?","What would you do if (2) ?","But what are the chances that (2) ?","What does this speculation lead to ?"]]]],["dreamed",4,[["* i dreamed *",["Really, (2) ?","Have you ever fantasized (2) while you were awake ?","Have you ever dreamed (2) before ?","goto dream"]]]],["dream",3,[["*",["What does that dream suggest to you ?","Do you dream often ?","What persons appear in your dreams ?","Do you believe that dreams have something to do with your problem ?"]]]],["perhaps",0,[["*",["You don't seem quite certain.","Why the uncertain tone ?","Can't you be more positive ?","You aren't sure ?","Don't you know ?","How likely, would you estimate ?"]]]],["name",15,[["*",["I am not interested in names.","I've told you before, I don't care about names -- please continue."]]]],["deutsch",0,[["*",["goto xforeign","I told you before, I don't understand German."]]]],["francais",0,[["*",["goto xforeign","I told you before, I don't understand French."]]]],["italiano",0,[["*",["goto xforeign","I told you before, I don't understand Italian."]]]],["espanol",0,[["*",["goto xforeign","I told you before, I don't understand Spanish."]]]],["xforeign",0,[["*",["I speak only English."]]]],["hello",0,[["*",["How do you do.  Please state your problem.","Hi.  What seems to be your problem ?"]]]],["computer",50,[["*",["Do computers worry you ?","Why do you mention computers ?","What do you think machines have to do with your problem ?","Don't you think computers can help people ?","What about machines worries you ?","What do you think about machines ?","You don't think I am a computer program, do you ?"]]]],["am",0,[["* am i *",["Do you believe you are (2) ?","Would you want to be (2) ?","Do you wish I would tell you you are (2) ?","What would it mean if you were (2) ?","goto what"]],["* i am *",["goto i"]],["*",["Why do you say 'am' ?","I don't understand that."]]]],["are",0,[["* are you *",["Why are you interested in whether I am (2) or not ?","Would you prefer if I weren't (2) ?","Perhaps I am (2) in your fantasies.","Do you sometimes think I am (2) ?","goto what","Would it matter to you ?","What if I were (2) ?"]],["* you are *",["goto you"]],["* are *",["Did you think they might not be (2) ?","Would you like it if they were not (2) ?","What if they were not (2) ?","Are they always (2) ?","Possibly they are (2).","Are you positive they are (2) ?"]]]],["your",0,[["* your *",["Why are you concerned over my (2) ?","What about your own (2) ?","Are you worried about someone else's (2) ?","Really, my (2) ?","What makes you think of my (2) ?","Do you want my (2) ?"]]]],["was",2,[["* was i *",["What if you were (2) ?","Do you think you were (2) ?","Were you (2) ?","What would it mean if you were (2) ?","What does ' (2) ' suggest to you ?","goto what"]],["* i was *",["Were you really ?","Why do you tell me you were (2) now ?","Perhaps I already know you were (2)."]],["* was you *",["Would you like to believe I was (2) ?","What suggests that I was (2) ?","What do you think ?","Perhaps I was (2).","What if I had been (2) ?"]]]],["i",0,[["* i @desire *",["What would it mean to you if you got (3) ?","Why do you want (3) ?","Suppose you got (3) soon.","What if you never got (3) ?","What would getting (3) mean to you ?","What does wanting (3) have to do with this discussion ?"]],["* i am* @sad *",["I am sorry to hear that you are (3).","Do you think coming here will help you not to be (3) ?","I'm sure it's not pleasant to be (3).","Can you explain what made you (3) ?"]],["* i am* @happy *",["How have I helped you to be (3) ?","Has your treatment made you (3) ?","What makes you (3) just now ?","Can you explain why you are suddenly (3) ?"]],["* i was *",["goto was"]],["* i @belief i *",["Do you really think so ?","But you are not sure you (3).","Do you really doubt you (3) ?"]],["* i* @belief *you *",["goto you"]],["* i am *",["Is it because you are (2) that you came to me ?","How long have you been (2) ?","Do you believe it is normal to be (2) ?","Do you enjoy being (2) ?","Do you know anyone else who is (2) ?"]],["* i @cannot *",["How do you know that you can't (3) ?","Have you tried ?","Perhaps you could (3) now.","Do you really want to be able to (3) ?","What if you could (3) ?"]],["* i don't *",["Don't you really (2) ?","Why don't you (2) ?","Do you wish to be able to (2) ?","Does that trouble you ?"]],["* i feel *",["Tell me more about such feelings.","Do you often feel (2) ?","Do you enjoy feeling (2) ?","Of what does feeling (2) remind you ?"]],["* i * you *",["Perhaps in your fantasies we (2) each other.","Do you wish to (2) me ?","You seem to need to (2) me.","Do you (2) anyone else ?"]],["*",["You say (1) ?","Can you elaborate on that ?","Do you say (1) for some special reason ?","That's quite interesting."]]]],["you",0,[["* you remind me of *",["goto alike"]],["* you are *",["What makes you think I am (2) ?","Does it please you to believe I am (2) ?","Do you sometimes wish you were (2) ?","Perhaps you would like to be (2)."]],["* you* me *",["Why do you think I (2) you ?","You like to think I (2) you -- don't you ?","What makes you think I (2) you ?","Really, I (2) you ?","Do you wish to believe I (2) you ?","Suppose I did (2) you -- what would that mean ?","Does someone else believe I (2) you ?"]],["* you *",["We were discussing you -- not me.","Oh, I (2) ?","You're not really talking about me -- are you ?","What are your feelings now ?"]]]],["yes",0,[["*",["You seem to be quite positive.","You are sure.","I see.","I understand."]]]],["no",0,[["* no one *",["Are you sure, no one (2) ?","Surely someone (2) .","Can you think of anyone at all ?","Are you thinking of a very special person ?","Who, may I ask ?","You have a particular person in mind, don't you ?","Who do you think you are talking about ?"]],["*",["Are you saying no just to be negative?","You are being a bit negative.","Why not ?","Why 'no' ?"]]]],["my",2,[["$ * my *",["Does that have anything to do with the fact that your (2) ?","Lets discuss further why your (2).","Earlier you said your (2).","But your (2)."]],["* my* @family *",["Tell me more about your family.","Who else in your family (4) ?","Your (3) ?","What else comes to your mind when you think of your (3) ?"]],["* my *",["Your (2) ?","Why do you say your (2) ?","Does that suggest anything else which belongs to you ?","Is it important to you that your (2) ?"]]]],["can",0,[["* can you *",["You believe I can (2) don't you ?","goto what","You want me to be able to (2).","Perhaps you would like to be able to (2) yourself."]],["* can i *",["Whether or not you can (2) depends on you more than on me.","Do you want to be able to (2) ?","Perhaps you don't want to (2).","goto what"]]]],["what",0,[["*",["Why do you ask ?","Does that question interest you ?","What is it you really want to know ?","Are such questions much on your mind ?","What answer would please you most ?","What do you think ?","What comes to mind when you ask that ?","Have you asked such questions before ?","Have you asked anyone else ?"]]]],["who",0,[["who *",["goto what"]]]],["when",0,[["when *",["goto what"]]]],["where",0,[["where *",["goto what"]]]],["how",0,[["how *",["goto what"]]]],["because",0,[["*",["Is that the real reason ?","Don't any other reasons come to mind ?","Does that reason seem to explain anything else ?","What other reasons might there be ?"]]]],["why",0,[["* why don't you *",["Do you believe I don't (2) ?","Perhaps I will (2) in good time.","Should you (2) yourself ?","You want me to (2) ?","goto what"]],["* why can't i *",["Do you think you should be able to (2) ?","Do you want to be able to (2) ?","Do you believe this will help you to (2) ?","Have you any idea why you can't (2) ?","goto what"]],["*",["goto what"]]]],["everyone",2,[["* @everyone *",["Really, (2) ?","Surely not (2).","Can you think of anyone in particular ?","Who, for example?","Are you thinking of a very special person ?","Who, may I ask ?","Someone special perhaps ?","You have a particular person in mind, don't you ?","Who do you think you're talking about ?"]]]],["everybody",2,[["*",["goto everyone"]]]],["nobody",2,[["*",["goto everyone"]]]],["noone",2,[["*",["goto everyone"]]]],["always",1,[["*",["Can you think of a specific example ?","When ?","What incident are you thinking of ?","Really, always ?"]]]],["alike",10,[["*",["In what way ?","What resemblence do you see ?","What does that similarity suggest to you ?","What other connections do you see ?","What do you suppose that resemblence means ?","What is the connection, do you suppose ?","Could there really be some connection ?","How ?"]]]],["like",10,[["* @be *like *",["goto alike"]]]],["different",0,[["*",["How is it different ?","What differences do you see ?","What does that difference suggest to you ?","What other distinctions do you see ?","What do you suppose that disparity means ?","Could there be some connection, do you suppose ?","How ?"]]]]];k.elizaPostTransforms=[/ old old/g," old",/\bthey were( not)? me\b/g,"it was$1 me",/\bthey are( not)? me\b/g,"it is$1 me",/Are they( always)? me\b/,"it is$1 me",/\bthat your( own)? (\w+)( now)? \?/,"that you have your$1 $2 ?",/\bI to have (\w+)/,"I have $1",/Earlier you said your( own)? (\w+)( now)?\./,"Earlier you talked about your $2."];var s=k;function w(e){this.noRandom=!!e,this.capitalizeFirstLetter=!0,this.debug=!1,this.memSize=20,this.version="1.1 (original)",this._dataParsed||this._init(),this.reset()}w.prototype.reset=function(){this.quit=!1,this.mem=[],this.lastchoice=[];for(var e=0;e<s.elizaKeywords.length;e++){this.lastchoice[e]=[];for(var t=s.elizaKeywords[e][2],a=0;a<t.length;a++)this.lastchoice[e][a]=-1}};w.prototype._dataParsed=!1;w.prototype._init=function(){var e={};if(s.elizaSynons&&typeof s.elizaSynons=="object")for(var t in s.elizaSynons)e[t]="("+t+"|"+s.elizaSynons[t].join("|")+")";(!s.elizaKeywords||typeof s.elizaKeywords.length>"u")&&(s.elizaKeywords=[["###",0,[["###",[]]]]]);for(var a=/@(\S+)/,f=/(\S)\s*\*\s*(\S)/,o=/^\s*\*\s*(\S)/,g=/(\S)\s*\*\s*$/,h=/^\s*\*\s*$/,d=/\s+/g,l=0;l<s.elizaKeywords.length;l++){var r=s.elizaKeywords[l][2];s.elizaKeywords[l][3]=l;for(var t=0;t<r.length;t++){var n=r[t];if(n[0].charAt(0)=="$"){for(var c=1;n[0].charAt[c]==" ";)c++;n[0]=n[0].substring(c),n[2]=!0}else n[2]=!1;for(var i=a.exec(n[0]);i;){var b=e[i[1]]?e[i[1]]:i[1];n[0]=n[0].substring(0,i.index)+b+n[0].substring(i.index+i[0].length),i=a.exec(n[0])}if(h.test(n[0]))n[0]="\\s*(.*)\\s*";else{if(i=f.exec(n[0]),i){for(var y="",u=n[0];i;)y+=u.substring(0,i.index+1),i[1]!=")"&&(y+="\\b"),y+="\\s*(.*)\\s*",i[2]!="("&&i[2]!="\\"&&(y+="\\b"),y+=i[2],u=u.substring(i.index+i[0].length),i=f.exec(u);n[0]=y+u}if(i=o.exec(n[0]),i){var y="\\s*(.*)\\s*";i[1]!=")"&&i[1]!="\\"&&(y+="\\b"),n[0]=y+n[0].substring(i.index-1+i[0].length)}if(i=g.exec(n[0]),i){var y=n[0].substring(0,i.index+1);i[1]!="("&&(y+="\\b"),n[0]=y+"\\s*(.*)\\s*"}}n[0]=n[0].replace(d,"\\s+"),d.lastIndex=0}}if(s.elizaKeywords.sort(this._sortKeywords),w.prototype.pres={},w.prototype.posts={},s.elizaPres&&s.elizaPres.length){for(var m=new Array,t=0;t<s.elizaPres.length;t+=2)m.push(s.elizaPres[t]),w.prototype.pres[s.elizaPres[t]]=s.elizaPres[t+1];w.prototype.preExp=new RegExp("\\b("+m.join("|")+")\\b")}else w.prototype.preExp=/####/,w.prototype.pres["####"]="####";if(s.elizaPosts&&s.elizaPosts.length){for(var m=new Array,t=0;t<s.elizaPosts.length;t+=2)m.push(s.elizaPosts[t]),w.prototype.posts[s.elizaPosts[t]]=s.elizaPosts[t+1];w.prototype.postExp=new RegExp("\\b("+m.join("|")+")\\b")}else w.prototype.postExp=/####/,w.prototype.posts["####"]="####";(!s.elizaQuits||typeof s.elizaQuits.length>"u")&&(s.elizaQuits=[]),w.prototype._dataParsed=!0};w.prototype._sortKeywords=function(e,t){return e[1]>t[1]?-1:e[1]<t[1]||e[3]>t[3]?1:e[3]<t[3]?-1:0};w.prototype.transform=function(e){var t="";this.quit=!1,e=e.toLowerCase(),e=e.replace(/@#\$%\^&\*\(\)_\+=~`\{\[\}\]\|:;<>\/\\\t/g," "),e=e.replace(/\s+-+\s+/g,"."),e=e.replace(/\s*[,\.\?!;]+\s*/g,"."),e=e.replace(/\s*\bbut\b\s*/g,"."),e=e.replace(/\s{2,}/g," ");for(var a=e.split("."),f=0;f<a.length;f++){var o=a[f];if(o!=""){for(var g=0;g<s.elizaQuits.length;g++)if(s.elizaQuits[g]==o)return this.quit=!0,this.getFinal();var h=this.preExp.exec(o);if(h){for(var d="",l=o;h;)d+=l.substring(0,h.index)+this.pres[h[1]],l=l.substring(h.index+h[0].length),h=this.preExp.exec(l);o=d+l}this.sentence=o;for(var r=0;r<s.elizaKeywords.length;r++)if(o.search(new RegExp("\\b"+s.elizaKeywords[r][0]+"\\b","i"))>=0&&(t=this._execRule(r)),t!="")return t}}if(t=this._memGet(),t==""){this.sentence=" ";var r=this._getRuleIndexByKey("xnone");r>=0&&(t=this._execRule(r))}return t!=""?t:"I am at a loss for words."};w.prototype._execRule=function(e){for(var t=s.elizaKeywords[e],a=t[2],f=/\(([0-9]+)\)/,o=0;o<a.length;o++){var g=this.sentence.match(a[o][0]);if(g!=null){var h=a[o][1],d=a[o][2],l=this.noRandom?0:Math.floor(Math.random()*h.length);this.noRandom&&this.lastchoice[e][o]>l||this.lastchoice[e][o]==l?(l=++this.lastchoice[e][o],l>=h.length&&(l=0,this.lastchoice[e][o]=-1)):this.lastchoice[e][o]=l;var r=h[l];if(this.debug&&alert(`match:
key: `+s.elizaKeywords[e][0]+`
rank: `+s.elizaKeywords[e][1]+`
decomp: `+a[o][0]+`
reasmb: `+r+`
memflag: `+d),r.search("^goto ","i")==0){var n=this._getRuleIndexByKey(r.substring(5));if(n>=0)return this._execRule(n)}var c=f.exec(r);if(c){for(var i="",b=r;c;){var y=g[parseInt(c[1])],u=this.postExp.exec(y);if(u){for(var m="",v=y;u;)m+=v.substring(0,u.index)+this.posts[u[1]],v=v.substring(u.index+u[0].length),u=this.postExp.exec(v);y=m+v}i+=b.substring(0,c.index)+y,b=b.substring(c.index+c[0].length),c=f.exec(b)}r=i+b}if(r=this._postTransform(r),d)this._memSave(r);else return r}}return""};w.prototype._postTransform=function(e){if(e=e.replace(/\s{2,}/g," "),e=e.replace(/\s+\./g,"."),s.elizaPostTransforms&&s.elizaPostTransforms.length)for(var t=0;t<s.elizaPostTransforms.length;t+=2)e=e.replace(s.elizaPostTransforms[t],s.elizaPostTransforms[t+1]),s.elizaPostTransforms[t].lastIndex=0;if(this.capitalizeFirstLetter){var a=/^([a-z])/,f=a.exec(e);f&&(e=f[0].toUpperCase()+e.substring(1))}return e};w.prototype._getRuleIndexByKey=function(e){for(var t=0;t<s.elizaKeywords.length;t++)if(s.elizaKeywords[t][0]==e)return t;return-1};w.prototype._memSave=function(e){this.mem.push(e),this.mem.length>this.memSize&&this.mem.shift()};w.prototype._memGet=function(){if(this.mem.length){if(this.noRandom)return this.mem.shift();for(var e=Math.floor(Math.random()*this.mem.length),t=this.mem[e],a=e+1;a<this.mem.length;a++)this.mem[a-1]=this.mem[a];return this.mem.length--,t}else return""};w.prototype.getFinal=function(){return s.elizaFinals?s.elizaFinals[Math.floor(Math.random()*s.elizaFinals.length)]:""};w.prototype.getInitial=function(){return s.elizaInitials?s.elizaInitials[Math.floor(Math.random()*s.elizaInitials.length)]:""};typeof Array.prototype.push>"u"&&(Array.prototype.push=function(e){return this[this.length]=e});typeof Array.prototype.shift>"u"&&(Array.prototype.shift=function(){if(this.length==0)return null;for(var e=this[0],t=1;t<this.length;t++)this[t-1]=this[t];return this.length--,e});var ae=w;const se=X(ae);function ne(e){const t=JSON.parse(e);return t.data&&(t.data=Z(t.data)),t}function R(e){return HTMLElement.prototype.cloneNode.call(e)}function ie(e,t=()=>{}){const a=async({action:o,result:g,reset:h=!0,invalidateAll:d=!0})=>{g.type==="success"&&(h&&HTMLFormElement.prototype.reset.call(e),d&&await ee()),(location.origin+location.pathname===o.origin+o.pathname||g.type==="redirect"||g.type==="error")&&te(g)};async function f(o){var u,m,v,p,z;if(((u=o.submitter)!=null&&u.hasAttribute("formmethod")?o.submitter.formMethod:R(e).method)!=="post")return;o.preventDefault();const h=new URL((m=o.submitter)!=null&&m.hasAttribute("formaction")?o.submitter.formAction:R(e).action),d=(v=o.submitter)!=null&&v.hasAttribute("formenctype")?o.submitter.formEnctype:R(e).enctype,l=new FormData(e),r=(p=o.submitter)==null?void 0:p.getAttribute("name");r&&l.append(r,((z=o.submitter)==null?void 0:z.getAttribute("value"))??"");const n=new AbortController;let c=!1;const b=await t({action:h,cancel:()=>c=!0,controller:n,formData:l,formElement:e,submitter:o.submitter})??a;if(c)return;let y;try{const I=new Headers({accept:"application/json","x-sveltekit-action":"true"});d!=="multipart/form-data"&&I.set("Content-Type",/^(:?application\/x-www-form-urlencoded|text\/plain)$/.test(d)?d:"application/x-www-form-urlencoded");const B=d==="multipart/form-data"?l:new URLSearchParams(l),K=await fetch(h,{method:"POST",headers:I,cache:"no-store",body:B,signal:n.signal});y=ne(await K.text()),y.type==="error"&&(y.status=K.status)}catch(I){if((I==null?void 0:I.name)==="AbortError")return;y={type:"error",error:I}}b({action:h,formData:l,formElement:e,update:I=>a({action:h,result:y,reset:I==null?void 0:I.reset,invalidateAll:I==null?void 0:I.invalidateAll}),result:y})}return HTMLFormElement.prototype.addEventListener.call(e,"submit",f),{destroy(){HTMLFormElement.prototype.removeEventListener.call(e,"submit",f)}}}function F(e,t,a){const f=e.slice();return f[8]=t[a],f}function j(e){let t,a,f=e[8].user+"",o,g,h=e[8].message+"",d,l;return{c(){t=x("article"),a=x("p"),o=H(f),g=H(": "),d=H(h),this.h()},l(r){t=_(r,"ARTICLE",{class:!0});var n=E(t);a=_(n,"P",{});var c=E(a);o=C(c,f),g=C(c,": "),d=C(c,h),c.forEach(P),n.forEach(P),this.h()},h(){D(t,"class",l=L(e[8].user)+" svelte-t3h6bf")},m(r,n){q(r,t,n),W(t,a),W(a,o),W(a,g),W(a,d)},p(r,n){n&1&&f!==(f=r[8].user+"")&&Y(o,f),n&1&&h!==(h=r[8].message+"")&&Y(d,h),n&1&&l!==(l=L(r[8].user)+" svelte-t3h6bf")&&D(t,"class",l)},d(r){r&&P(t)}}}function re(e){let t,a,f,o,g='<span class="circle svelte-t3h6bf"></span> <span class="circle svelte-t3h6bf"></span> <span class="circle svelte-t3h6bf"></span>',h,d,l='<input type="text" name="text" class="svelte-t3h6bf"/>',r,n,c="Reset",i,b,y=$(e[0]),u=[];for(let m=0;m<y.length;m+=1)u[m]=j(F(e,y,m));return{c(){t=x("main"),a=x("section");for(let m=0;m<u.length;m+=1)u[m].c();f=A(),o=x("article"),o.innerHTML=g,h=A(),d=x("form"),d.innerHTML=l,r=A(),n=x("button"),n.textContent=c,this.h()},l(m){t=_(m,"MAIN",{class:!0});var v=E(t);a=_(v,"SECTION",{class:!0});var p=E(a);for(let z=0;z<u.length;z+=1)u[z].l(p);f=S(p),o=_(p,"ARTICLE",{id:!0,class:!0,"data-svelte-h":!0}),T(o)!=="svelte-3c2tsu"&&(o.innerHTML=g),h=S(p),d=_(p,"FORM",{method:!0,"data-svelte-h":!0}),T(d)!=="svelte-2u48ul"&&(d.innerHTML=l),r=S(p),n=_(p,"BUTTON",{"data-svelte-h":!0}),T(n)!=="svelte-n79thp"&&(n.textContent=c),p.forEach(P),v.forEach(P),this.h()},h(){D(o,"id","visible"),D(o,"class","svelte-t3h6bf"),D(d,"method","post"),D(a,"class","svelte-t3h6bf"),D(t,"class","svelte-t3h6bf")},m(m,v){q(m,t,v),W(t,a);for(let p=0;p<u.length;p+=1)u[p]&&u[p].m(a,null);W(a,f),W(a,o),W(a,h),W(a,d),W(a,r),W(a,n),i||(b=[G(ie.call(null,d,e[3])),J(n,"click",e[4])],i=!0)},p(m,[v]){if(v&1){y=$(m[0]);let p;for(p=0;p<y.length;p+=1){const z=F(m,y,p);u[p]?u[p].p(z,v):(u[p]=j(z),u[p].c(),u[p].m(a,f))}for(;p<u.length;p+=1)u[p].d(1);u.length=y.length}},i:M,o:M,d(m){m&&P(t),V(u,m),i=!1,N(b)}}}function le(e,t,a){const f=new se;let o=[];typeof window<"u"&&(o=JSON.parse(localStorage.getItem("chat"))||[{user:"Eliza",message:"Hello! How can I assist you today"}]);const g=oe(o);typeof window<"u"&&g.subscribe(c=>{localStorage.setItem("chat",JSON.stringify(c))});let h=o;g.subscribe(c=>{a(0,h=c)});function d(){localStorage.clear(),g.update(c=>[{user:"Eliza",message:"Hello! How can I assist you today?"}])}async function l(c){g.update(b=>[...b,{user:"Me",message:c}]);var i=document.getElementById("visible");i.style.display="flex",await new Promise(b=>setTimeout(b,1e3+Math.random()*1e3)),i.style.display="none",g.update(b=>[...b,{user:"Eliza",message:f.transform(c)}])}return[h,d,l,({formElement:c,formData:i,action:b,cancel:y})=>{y();const u=i.get("text");l(u),c.reset()},()=>d()]}class me extends Q{constructor(t){super(),U(this,t,le,re,O,{})}}export{me as component};