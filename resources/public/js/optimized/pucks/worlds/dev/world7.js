// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('pucks.worlds.dev.world7');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('pucks.agents.opener');
goog.require('pucks.globals');
goog.require('pucks.agents.chest');
goog.require('pucks.agents.stone');
goog.require('pucks.agents.vent');
goog.require('pucks.agents.gate');
pucks.worlds.dev.world7.agents = (function pucks$worlds$dev$world7$agents(){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var iter__4523__auto__ = (function pucks$worlds$dev$world7$agents_$_iter__11628(s__11629){
return (new cljs.core.LazySeq(null,(function (){
var s__11629__$1 = s__11629;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__11629__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var x = cljs.core.first(xs__6292__auto__);
var iterys__4519__auto__ = ((function (s__11629__$1,x,xs__6292__auto__,temp__5735__auto__){
return (function pucks$worlds$dev$world7$agents_$_iter__11628_$_iter__11630(s__11631){
return (new cljs.core.LazySeq(null,((function (s__11629__$1,x,xs__6292__auto__,temp__5735__auto__){
return (function (){
var s__11631__$1 = s__11631;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__11631__$1);
if(temp__5735__auto____$1){
var s__11631__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__11631__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__11631__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__11633 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__11632 = (0);
while(true){
if((i__11632 < size__4522__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__11632);
cljs.core.chunk_append(b__11633,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)], 0)));

var G__11646 = (i__11632 + (1));
i__11632 = G__11646;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__11633),pucks$worlds$dev$world7$agents_$_iter__11628_$_iter__11630(cljs.core.chunk_rest(s__11631__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__11633),null);
}
} else {
var y = cljs.core.first(s__11631__$2);
return cljs.core.cons(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)], 0)),pucks$worlds$dev$world7$agents_$_iter__11628_$_iter__11630(cljs.core.rest(s__11631__$2)));
}
} else {
return null;
}
break;
}
});})(s__11629__$1,x,xs__6292__auto__,temp__5735__auto__))
,null,null));
});})(s__11629__$1,x,xs__6292__auto__,temp__5735__auto__))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(500)], null)));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,pucks$worlds$dev$world7$agents_$_iter__11628(cljs.core.rest(s__11629__$1)));
} else {
var G__11647 = cljs.core.rest(s__11629__$1);
s__11629__$1 = G__11647;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3((500),(701),(20)));
})(),(function (){var iter__4523__auto__ = (function pucks$worlds$dev$world7$agents_$_iter__11634(s__11635){
return (new cljs.core.LazySeq(null,(function (){
var s__11635__$1 = s__11635;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__11635__$1);
if(temp__5735__auto__){
var s__11635__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__11635__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__11635__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__11637 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__11636 = (0);
while(true){
if((i__11636 < size__4522__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__11636);
cljs.core.chunk_append(b__11637,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),y], null)], null)], 0)));

var G__11648 = (i__11636 + (1));
i__11636 = G__11648;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__11637),pucks$worlds$dev$world7$agents_$_iter__11634(cljs.core.chunk_rest(s__11635__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__11637),null);
}
} else {
var y = cljs.core.first(s__11635__$2);
return cljs.core.cons(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),y], null)], null)], 0)),pucks$worlds$dev$world7$agents_$_iter__11634(cljs.core.rest(s__11635__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3((300),(361),(20)));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var iter__4523__auto__ = (function pucks$worlds$dev$world7$agents_$_iter__11638(s__11639){
return (new cljs.core.LazySeq(null,(function (){
var s__11639__$1 = s__11639;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__11639__$1);
if(temp__5735__auto__){
var s__11639__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__11639__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__11639__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__11641 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__11640 = (0);
while(true){
if((i__11640 < size__4522__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__11640);
cljs.core.chunk_append(b__11641,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),y], null)], null)], 0)));

var G__11649 = (i__11640 + (1));
i__11640 = G__11649;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__11641),pucks$worlds$dev$world7$agents_$_iter__11638(cljs.core.chunk_rest(s__11639__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__11641),null);
}
} else {
var y = cljs.core.first(s__11639__$2);
return cljs.core.cons(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),y], null)], null)], 0)),pucks$worlds$dev$world7$agents_$_iter__11638(cljs.core.rest(s__11639__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3((440),(501),(20)));
})(),(function (){var iter__4523__auto__ = (function pucks$worlds$dev$world7$agents_$_iter__11642(s__11643){
return (new cljs.core.LazySeq(null,(function (){
var s__11643__$1 = s__11643;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__11643__$1);
if(temp__5735__auto__){
var s__11643__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__11643__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__11643__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__11645 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__11644 = (0);
while(true){
if((i__11644 < size__4522__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__11644);
cljs.core.chunk_append(b__11645,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(700),y], null)], null)], 0)));

var G__11650 = (i__11644 + (1));
i__11644 = G__11650;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__11645),pucks$worlds$dev$world7$agents_$_iter__11642(cljs.core.chunk_rest(s__11643__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__11645),null);
}
} else {
var y = cljs.core.first(s__11643__$2);
return cljs.core.cons(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(700),y], null)], null)], 0)),pucks$worlds$dev$world7$agents_$_iter__11642(cljs.core.rest(s__11643__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3((300),(501),(20)));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.gate.gate(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),(400)], null)], null)], 0))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.chest.chest(),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(250),(430)], null),cljs.core.cst$kw$inventory,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$key], null)], null)], 0))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.opener.opener(),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100),(400)], null),cljs.core.cst$kw$rotation,pucks.globals.half_pi,cljs.core.cst$kw$velocity,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [1.0,(0)], null)], null)], 0))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.vent.vent(),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(600),(430)], null),cljs.core.cst$kw$radius,(30)], null)], 0))], null)], 0));
});
pucks.worlds.dev.world7.settings = (function pucks$worlds$dev$world7$settings(){
return cljs.core.PersistentArrayMap.EMPTY;
});
