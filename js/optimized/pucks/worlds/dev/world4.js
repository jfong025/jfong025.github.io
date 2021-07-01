// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('pucks.worlds.dev.world4');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('pucks.globals');
goog.require('pucks.agents.stone');
goog.require('pucks.agents.linear');
pucks.worlds.dev.world4.agents = (function pucks$worlds$dev$world4$agents(){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var iter__4523__auto__ = (function pucks$worlds$dev$world4$agents_$_iter__11349(s__11350){
return (new cljs.core.LazySeq(null,(function (){
var s__11350__$1 = s__11350;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__11350__$1);
if(temp__5735__auto__){
var s__11350__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__11350__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__11350__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__11352 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__11351 = (0);
while(true){
if((i__11351 < size__4522__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__11351);
cljs.core.chunk_append(b__11352,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(400),y], null)], null)], 0)));

var G__11357 = (i__11351 + (1));
i__11351 = G__11357;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__11352),pucks$worlds$dev$world4$agents_$_iter__11349(cljs.core.chunk_rest(s__11350__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__11352),null);
}
} else {
var y = cljs.core.first(s__11350__$2);
return cljs.core.cons(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(400),y], null)], null)], 0)),pucks$worlds$dev$world4$agents_$_iter__11349(cljs.core.rest(s__11350__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.take.cljs$core$IFn$_invoke$arity$2((15),cljs.core.iterate(((function (iter__4523__auto__){
return (function (p1__11347_SHARP_){
return (p1__11347_SHARP_ + (20));
});})(iter__4523__auto__))
,(100))));
})(),(function (){var iter__4523__auto__ = (function pucks$worlds$dev$world4$agents_$_iter__11353(s__11354){
return (new cljs.core.LazySeq(null,(function (){
var s__11354__$1 = s__11354;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__11354__$1);
if(temp__5735__auto__){
var s__11354__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__11354__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__11354__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__11356 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__11355 = (0);
while(true){
if((i__11355 < size__4522__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__11355);
cljs.core.chunk_append(b__11356,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(100)], null)], null)], 0)));

var G__11358 = (i__11355 + (1));
i__11355 = G__11358;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__11356),pucks$worlds$dev$world4$agents_$_iter__11353(cljs.core.chunk_rest(s__11354__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__11356),null);
}
} else {
var x = cljs.core.first(s__11354__$2);
return cljs.core.cons(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(100)], null)], null)], 0)),pucks$worlds$dev$world4$agents_$_iter__11353(cljs.core.rest(s__11354__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.take.cljs$core$IFn$_invoke$arity$2((16),cljs.core.iterate(((function (iter__4523__auto__){
return (function (p1__11348_SHARP_){
return (p1__11348_SHARP_ + (20));
});})(iter__4523__auto__))
,(50))));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.linear.linear(),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100),(300)], null),cljs.core.cst$kw$rotation,(pucks.globals.pi / (2)),cljs.core.cst$kw$velocity,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0)], null)], null)], 0))], null)], 0));
});
pucks.worlds.dev.world4.settings = (function pucks$worlds$dev$world4$settings(){
return cljs.core.PersistentArrayMap.EMPTY;
});
