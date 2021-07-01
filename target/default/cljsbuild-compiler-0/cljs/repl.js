// Compiled by ClojureScript 1.10.439 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__7620){
var map__7621 = p__7620;
var map__7621__$1 = (((((!((map__7621 == null))))?(((((map__7621.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7621.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7621):map__7621);
var m = map__7621__$1;
var n = cljs.core.get.call(null,map__7621__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__7621__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4047__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__7623_7645 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__7624_7646 = null;
var count__7625_7647 = (0);
var i__7626_7648 = (0);
while(true){
if((i__7626_7648 < count__7625_7647)){
var f_7649 = cljs.core._nth.call(null,chunk__7624_7646,i__7626_7648);
cljs.core.println.call(null,"  ",f_7649);


var G__7650 = seq__7623_7645;
var G__7651 = chunk__7624_7646;
var G__7652 = count__7625_7647;
var G__7653 = (i__7626_7648 + (1));
seq__7623_7645 = G__7650;
chunk__7624_7646 = G__7651;
count__7625_7647 = G__7652;
i__7626_7648 = G__7653;
continue;
} else {
var temp__5735__auto___7654 = cljs.core.seq.call(null,seq__7623_7645);
if(temp__5735__auto___7654){
var seq__7623_7655__$1 = temp__5735__auto___7654;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7623_7655__$1)){
var c__4461__auto___7656 = cljs.core.chunk_first.call(null,seq__7623_7655__$1);
var G__7657 = cljs.core.chunk_rest.call(null,seq__7623_7655__$1);
var G__7658 = c__4461__auto___7656;
var G__7659 = cljs.core.count.call(null,c__4461__auto___7656);
var G__7660 = (0);
seq__7623_7645 = G__7657;
chunk__7624_7646 = G__7658;
count__7625_7647 = G__7659;
i__7626_7648 = G__7660;
continue;
} else {
var f_7661 = cljs.core.first.call(null,seq__7623_7655__$1);
cljs.core.println.call(null,"  ",f_7661);


var G__7662 = cljs.core.next.call(null,seq__7623_7655__$1);
var G__7663 = null;
var G__7664 = (0);
var G__7665 = (0);
seq__7623_7645 = G__7662;
chunk__7624_7646 = G__7663;
count__7625_7647 = G__7664;
i__7626_7648 = G__7665;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_7666 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4047__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_7666);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_7666)))?cljs.core.second.call(null,arglists_7666):arglists_7666));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__7627_7667 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__7628_7668 = null;
var count__7629_7669 = (0);
var i__7630_7670 = (0);
while(true){
if((i__7630_7670 < count__7629_7669)){
var vec__7631_7671 = cljs.core._nth.call(null,chunk__7628_7668,i__7630_7670);
var name_7672 = cljs.core.nth.call(null,vec__7631_7671,(0),null);
var map__7634_7673 = cljs.core.nth.call(null,vec__7631_7671,(1),null);
var map__7634_7674__$1 = (((((!((map__7634_7673 == null))))?(((((map__7634_7673.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7634_7673.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7634_7673):map__7634_7673);
var doc_7675 = cljs.core.get.call(null,map__7634_7674__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_7676 = cljs.core.get.call(null,map__7634_7674__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_7672);

cljs.core.println.call(null," ",arglists_7676);

if(cljs.core.truth_(doc_7675)){
cljs.core.println.call(null," ",doc_7675);
} else {
}


var G__7677 = seq__7627_7667;
var G__7678 = chunk__7628_7668;
var G__7679 = count__7629_7669;
var G__7680 = (i__7630_7670 + (1));
seq__7627_7667 = G__7677;
chunk__7628_7668 = G__7678;
count__7629_7669 = G__7679;
i__7630_7670 = G__7680;
continue;
} else {
var temp__5735__auto___7681 = cljs.core.seq.call(null,seq__7627_7667);
if(temp__5735__auto___7681){
var seq__7627_7682__$1 = temp__5735__auto___7681;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7627_7682__$1)){
var c__4461__auto___7683 = cljs.core.chunk_first.call(null,seq__7627_7682__$1);
var G__7684 = cljs.core.chunk_rest.call(null,seq__7627_7682__$1);
var G__7685 = c__4461__auto___7683;
var G__7686 = cljs.core.count.call(null,c__4461__auto___7683);
var G__7687 = (0);
seq__7627_7667 = G__7684;
chunk__7628_7668 = G__7685;
count__7629_7669 = G__7686;
i__7630_7670 = G__7687;
continue;
} else {
var vec__7636_7688 = cljs.core.first.call(null,seq__7627_7682__$1);
var name_7689 = cljs.core.nth.call(null,vec__7636_7688,(0),null);
var map__7639_7690 = cljs.core.nth.call(null,vec__7636_7688,(1),null);
var map__7639_7691__$1 = (((((!((map__7639_7690 == null))))?(((((map__7639_7690.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7639_7690.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7639_7690):map__7639_7690);
var doc_7692 = cljs.core.get.call(null,map__7639_7691__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_7693 = cljs.core.get.call(null,map__7639_7691__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_7689);

cljs.core.println.call(null," ",arglists_7693);

if(cljs.core.truth_(doc_7692)){
cljs.core.println.call(null," ",doc_7692);
} else {
}


var G__7694 = cljs.core.next.call(null,seq__7627_7682__$1);
var G__7695 = null;
var G__7696 = (0);
var G__7697 = (0);
seq__7627_7667 = G__7694;
chunk__7628_7668 = G__7695;
count__7629_7669 = G__7696;
i__7630_7670 = G__7697;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.call(null,"Spec");

var seq__7641 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__7642 = null;
var count__7643 = (0);
var i__7644 = (0);
while(true){
if((i__7644 < count__7643)){
var role = cljs.core._nth.call(null,chunk__7642,i__7644);
var temp__5735__auto___7698__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___7698__$1)){
var spec_7699 = temp__5735__auto___7698__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_7699));
} else {
}


var G__7700 = seq__7641;
var G__7701 = chunk__7642;
var G__7702 = count__7643;
var G__7703 = (i__7644 + (1));
seq__7641 = G__7700;
chunk__7642 = G__7701;
count__7643 = G__7702;
i__7644 = G__7703;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq.call(null,seq__7641);
if(temp__5735__auto____$1){
var seq__7641__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7641__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__7641__$1);
var G__7704 = cljs.core.chunk_rest.call(null,seq__7641__$1);
var G__7705 = c__4461__auto__;
var G__7706 = cljs.core.count.call(null,c__4461__auto__);
var G__7707 = (0);
seq__7641 = G__7704;
chunk__7642 = G__7705;
count__7643 = G__7706;
i__7644 = G__7707;
continue;
} else {
var role = cljs.core.first.call(null,seq__7641__$1);
var temp__5735__auto___7708__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___7708__$2)){
var spec_7709 = temp__5735__auto___7708__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_7709));
} else {
}


var G__7710 = cljs.core.next.call(null,seq__7641__$1);
var G__7711 = null;
var G__7712 = (0);
var G__7713 = (0);
seq__7641 = G__7710;
chunk__7642 = G__7711;
count__7643 = G__7712;
i__7644 = G__7713;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map
