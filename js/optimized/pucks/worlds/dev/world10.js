// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('pucks.worlds.dev.world10');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('pucks.agents.beacon');
goog.require('pucks.agents.darter');
goog.require('pucks.agents.nursery');
goog.require('pucks.agents.stone');
goog.require('pucks.agents.vent');
goog.require('pucks.agents.zapper');
pucks.worlds.dev.world10.agents = (function pucks$worlds$dev$world10$agents(){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var iter__4523__auto__ = (function pucks$worlds$dev$world10$agents_$_iter__11492(s__11493){
return (new cljs.core.LazySeq(null,(function (){
var s__11493__$1 = s__11493;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__11493__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var x = cljs.core.first(xs__6292__auto__);
var iterys__4519__auto__ = ((function (s__11493__$1,x,xs__6292__auto__,temp__5735__auto__){
return (function pucks$worlds$dev$world10$agents_$_iter__11492_$_iter__11494(s__11495){
return (new cljs.core.LazySeq(null,((function (s__11493__$1,x,xs__6292__auto__,temp__5735__auto__){
return (function (){
var s__11495__$1 = s__11495;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__11495__$1);
if(temp__5735__auto____$1){
var s__11495__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__11495__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__11495__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__11497 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__11496 = (0);
while(true){
if((i__11496 < size__4522__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__11496);
cljs.core.chunk_append(b__11497,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.beacon.beacon(),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),cljs.core.cst$kw$id,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)], 0)));

var G__11526 = (i__11496 + (1));
i__11496 = G__11526;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__11497),pucks$worlds$dev$world10$agents_$_iter__11492_$_iter__11494(cljs.core.chunk_rest(s__11495__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__11497),null);
}
} else {
var y = cljs.core.first(s__11495__$2);
return cljs.core.cons(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.beacon.beacon(),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),cljs.core.cst$kw$id,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)], 0)),pucks$worlds$dev$world10$agents_$_iter__11492_$_iter__11494(cljs.core.rest(s__11495__$2)));
}
} else {
return null;
}
break;
}
});})(s__11493__$1,x,xs__6292__auto__,temp__5735__auto__))
,null,null));
});})(s__11493__$1,x,xs__6292__auto__,temp__5735__auto__))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3((100),(701),(200))));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,pucks$worlds$dev$world10$agents_$_iter__11492(cljs.core.rest(s__11493__$1)));
} else {
var G__11527 = cljs.core.rest(s__11493__$1);
s__11493__$1 = G__11527;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3((100),(701),(200)));
})(),(function (){var iter__4523__auto__ = (function pucks$worlds$dev$world10$agents_$_iter__11498(s__11499){
return (new cljs.core.LazySeq(null,(function (){
var s__11499__$1 = s__11499;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__11499__$1);
if(temp__5735__auto__){
var s__11499__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__11499__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__11499__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__11501 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__11500 = (0);
while(true){
if((i__11500 < size__4522__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__11500);
cljs.core.chunk_append(b__11501,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(400),y], null)], null)], 0)));

var G__11528 = (i__11500 + (1));
i__11500 = G__11528;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__11501),pucks$worlds$dev$world10$agents_$_iter__11498(cljs.core.chunk_rest(s__11499__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__11501),null);
}
} else {
var y = cljs.core.first(s__11499__$2);
return cljs.core.cons(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(400),y], null)], null)], 0)),pucks$worlds$dev$world10$agents_$_iter__11498(cljs.core.rest(s__11499__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),(201),(20)));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var iter__4523__auto__ = (function pucks$worlds$dev$world10$agents_$_iter__11502(s__11503){
return (new cljs.core.LazySeq(null,(function (){
var s__11503__$1 = s__11503;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__11503__$1);
if(temp__5735__auto__){
var s__11503__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__11503__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__11503__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__11505 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__11504 = (0);
while(true){
if((i__11504 < size__4522__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__11504);
cljs.core.chunk_append(b__11505,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(400),y], null)], null)], 0)));

var G__11529 = (i__11504 + (1));
i__11504 = G__11529;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__11505),pucks$worlds$dev$world10$agents_$_iter__11502(cljs.core.chunk_rest(s__11503__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__11505),null);
}
} else {
var y = cljs.core.first(s__11503__$2);
return cljs.core.cons(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(400),y], null)], null)], 0)),pucks$worlds$dev$world10$agents_$_iter__11502(cljs.core.rest(s__11503__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3((400),(801),(20)));
})(),(function (){var iter__4523__auto__ = (function pucks$worlds$dev$world10$agents_$_iter__11506(s__11507){
return (new cljs.core.LazySeq(null,(function (){
var s__11507__$1 = s__11507;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__11507__$1);
if(temp__5735__auto__){
var s__11507__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__11507__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__11507__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__11509 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__11508 = (0);
while(true){
if((i__11508 < size__4522__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__11508);
cljs.core.chunk_append(b__11509,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(400)], null)], null)], 0)));

var G__11530 = (i__11508 + (1));
i__11508 = G__11530;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__11509),pucks$worlds$dev$world10$agents_$_iter__11506(cljs.core.chunk_rest(s__11507__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__11509),null);
}
} else {
var x = cljs.core.first(s__11507__$2);
return cljs.core.cons(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(400)], null)], null)], 0)),pucks$worlds$dev$world10$agents_$_iter__11506(cljs.core.rest(s__11507__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3((400),(601),(20)));
})(),(function (){var iter__4523__auto__ = (function pucks$worlds$dev$world10$agents_$_iter__11510(s__11511){
return (new cljs.core.LazySeq(null,(function (){
var s__11511__$1 = s__11511;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__11511__$1);
if(temp__5735__auto__){
var s__11511__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__11511__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__11511__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__11513 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__11512 = (0);
while(true){
if((i__11512 < size__4522__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__11512);
cljs.core.chunk_append(b__11513,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(0)], null)], null)], 0)));

var G__11531 = (i__11512 + (1));
i__11512 = G__11531;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__11513),pucks$worlds$dev$world10$agents_$_iter__11510(cljs.core.chunk_rest(s__11511__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__11513),null);
}
} else {
var x = cljs.core.first(s__11511__$2);
return cljs.core.cons(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(0)], null)], null)], 0)),pucks$worlds$dev$world10$agents_$_iter__11510(cljs.core.rest(s__11511__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3((400),(800),(20)));
})(),(function (){var iter__4523__auto__ = (function pucks$worlds$dev$world10$agents_$_iter__11514(s__11515){
return (new cljs.core.LazySeq(null,(function (){
var s__11515__$1 = s__11515;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__11515__$1);
if(temp__5735__auto__){
var s__11515__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__11515__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__11515__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__11517 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__11516 = (0);
while(true){
if((i__11516 < size__4522__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__11516);
cljs.core.chunk_append(b__11517,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(799)], null)], null)], 0)));

var G__11532 = (i__11516 + (1));
i__11516 = G__11532;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__11517),pucks$worlds$dev$world10$agents_$_iter__11514(cljs.core.chunk_rest(s__11515__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__11517),null);
}
} else {
var x = cljs.core.first(s__11515__$2);
return cljs.core.cons(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(799)], null)], null)], 0)),pucks$worlds$dev$world10$agents_$_iter__11514(cljs.core.rest(s__11515__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3((400),(800),(20)));
})(),(function (){var iter__4523__auto__ = (function pucks$worlds$dev$world10$agents_$_iter__11518(s__11519){
return (new cljs.core.LazySeq(null,(function (){
var s__11519__$1 = s__11519;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__11519__$1);
if(temp__5735__auto__){
var s__11519__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__11519__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__11519__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__11521 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__11520 = (0);
while(true){
if((i__11520 < size__4522__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__11520);
cljs.core.chunk_append(b__11521,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),y], null)], null)], 0)));

var G__11533 = (i__11520 + (1));
i__11520 = G__11533;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__11521),pucks$worlds$dev$world10$agents_$_iter__11518(cljs.core.chunk_rest(s__11519__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__11521),null);
}
} else {
var y = cljs.core.first(s__11519__$2);
return cljs.core.cons(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),y], null)], null)], 0)),pucks$worlds$dev$world10$agents_$_iter__11518(cljs.core.rest(s__11519__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),(801),(20)));
})(),(function (){var iter__4523__auto__ = (function pucks$worlds$dev$world10$agents_$_iter__11522(s__11523){
return (new cljs.core.LazySeq(null,(function (){
var s__11523__$1 = s__11523;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__11523__$1);
if(temp__5735__auto__){
var s__11523__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__11523__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__11523__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__11525 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__11524 = (0);
while(true){
if((i__11524 < size__4522__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__11524);
cljs.core.chunk_append(b__11525,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(799),y], null)], null)], 0)));

var G__11534 = (i__11524 + (1));
i__11524 = G__11534;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__11525),pucks$worlds$dev$world10$agents_$_iter__11522(cljs.core.chunk_rest(s__11523__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__11525),null);
}
} else {
var y = cljs.core.first(s__11523__$2);
return cljs.core.cons(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(799),y], null)], null)], 0)),pucks$worlds$dev$world10$agents_$_iter__11522(cljs.core.rest(s__11523__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),(801),(20)));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.zapper.zapper(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(600)], null)], null)], 0)),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.zapper.zapper(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(600),(200)], null)], null)], 0))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.vent.vent(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(600),(600)], null)], null)], 0))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.nursery.nursery(pucks.agents.darter.darter),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(200)], null)], null)], 0))], null)], 0));
});
pucks.worlds.dev.world10.settings = (function pucks$worlds$dev$world10$settings(){
return cljs.core.PersistentArrayMap.EMPTY;
});
