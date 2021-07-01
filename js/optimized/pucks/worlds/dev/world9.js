// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('pucks.worlds.dev.world9');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('pucks.agents.beacon');
goog.require('pucks.agents.shooter');
goog.require('pucks.agents.nursery');
goog.require('pucks.agents.stone');
goog.require('pucks.agents.vent');
goog.require('pucks.agents.zapper');
pucks.worlds.dev.world9.agents = (function pucks$worlds$dev$world9$agents(){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var iter__4523__auto__ = (function pucks$worlds$dev$world9$agents_$_iter__11539(s__11540){
return (new cljs.core.LazySeq(null,(function (){
var s__11540__$1 = s__11540;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__11540__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var x = cljs.core.first(xs__6292__auto__);
var iterys__4519__auto__ = ((function (s__11540__$1,x,xs__6292__auto__,temp__5735__auto__){
return (function pucks$worlds$dev$world9$agents_$_iter__11539_$_iter__11541(s__11542){
return (new cljs.core.LazySeq(null,((function (s__11540__$1,x,xs__6292__auto__,temp__5735__auto__){
return (function (){
var s__11542__$1 = s__11542;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__11542__$1);
if(temp__5735__auto____$1){
var s__11542__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__11542__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__11542__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__11544 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__11543 = (0);
while(true){
if((i__11543 < size__4522__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__11543);
cljs.core.chunk_append(b__11544,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.beacon.beacon(),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),cljs.core.cst$kw$id,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)], 0)));

var G__11573 = (i__11543 + (1));
i__11543 = G__11573;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__11544),pucks$worlds$dev$world9$agents_$_iter__11539_$_iter__11541(cljs.core.chunk_rest(s__11542__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__11544),null);
}
} else {
var y = cljs.core.first(s__11542__$2);
return cljs.core.cons(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.beacon.beacon(),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),cljs.core.cst$kw$id,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)], 0)),pucks$worlds$dev$world9$agents_$_iter__11539_$_iter__11541(cljs.core.rest(s__11542__$2)));
}
} else {
return null;
}
break;
}
});})(s__11540__$1,x,xs__6292__auto__,temp__5735__auto__))
,null,null));
});})(s__11540__$1,x,xs__6292__auto__,temp__5735__auto__))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3((100),(701),(200))));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,pucks$worlds$dev$world9$agents_$_iter__11539(cljs.core.rest(s__11540__$1)));
} else {
var G__11574 = cljs.core.rest(s__11540__$1);
s__11540__$1 = G__11574;
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
})(),(function (){var iter__4523__auto__ = (function pucks$worlds$dev$world9$agents_$_iter__11545(s__11546){
return (new cljs.core.LazySeq(null,(function (){
var s__11546__$1 = s__11546;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__11546__$1);
if(temp__5735__auto__){
var s__11546__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__11546__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__11546__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__11548 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__11547 = (0);
while(true){
if((i__11547 < size__4522__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__11547);
cljs.core.chunk_append(b__11548,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(400),y], null)], null)], 0)));

var G__11575 = (i__11547 + (1));
i__11547 = G__11575;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__11548),pucks$worlds$dev$world9$agents_$_iter__11545(cljs.core.chunk_rest(s__11546__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__11548),null);
}
} else {
var y = cljs.core.first(s__11546__$2);
return cljs.core.cons(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(400),y], null)], null)], 0)),pucks$worlds$dev$world9$agents_$_iter__11545(cljs.core.rest(s__11546__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),(201),(20)));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var iter__4523__auto__ = (function pucks$worlds$dev$world9$agents_$_iter__11549(s__11550){
return (new cljs.core.LazySeq(null,(function (){
var s__11550__$1 = s__11550;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__11550__$1);
if(temp__5735__auto__){
var s__11550__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__11550__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__11550__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__11552 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__11551 = (0);
while(true){
if((i__11551 < size__4522__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__11551);
cljs.core.chunk_append(b__11552,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(400),y], null)], null)], 0)));

var G__11576 = (i__11551 + (1));
i__11551 = G__11576;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__11552),pucks$worlds$dev$world9$agents_$_iter__11549(cljs.core.chunk_rest(s__11550__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__11552),null);
}
} else {
var y = cljs.core.first(s__11550__$2);
return cljs.core.cons(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(400),y], null)], null)], 0)),pucks$worlds$dev$world9$agents_$_iter__11549(cljs.core.rest(s__11550__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3((400),(801),(20)));
})(),(function (){var iter__4523__auto__ = (function pucks$worlds$dev$world9$agents_$_iter__11553(s__11554){
return (new cljs.core.LazySeq(null,(function (){
var s__11554__$1 = s__11554;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__11554__$1);
if(temp__5735__auto__){
var s__11554__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__11554__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__11554__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__11556 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__11555 = (0);
while(true){
if((i__11555 < size__4522__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__11555);
cljs.core.chunk_append(b__11556,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(400)], null)], null)], 0)));

var G__11577 = (i__11555 + (1));
i__11555 = G__11577;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__11556),pucks$worlds$dev$world9$agents_$_iter__11553(cljs.core.chunk_rest(s__11554__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__11556),null);
}
} else {
var x = cljs.core.first(s__11554__$2);
return cljs.core.cons(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(400)], null)], null)], 0)),pucks$worlds$dev$world9$agents_$_iter__11553(cljs.core.rest(s__11554__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3((400),(601),(20)));
})(),(function (){var iter__4523__auto__ = (function pucks$worlds$dev$world9$agents_$_iter__11557(s__11558){
return (new cljs.core.LazySeq(null,(function (){
var s__11558__$1 = s__11558;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__11558__$1);
if(temp__5735__auto__){
var s__11558__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__11558__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__11558__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__11560 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__11559 = (0);
while(true){
if((i__11559 < size__4522__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__11559);
cljs.core.chunk_append(b__11560,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(0)], null)], null)], 0)));

var G__11578 = (i__11559 + (1));
i__11559 = G__11578;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__11560),pucks$worlds$dev$world9$agents_$_iter__11557(cljs.core.chunk_rest(s__11558__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__11560),null);
}
} else {
var x = cljs.core.first(s__11558__$2);
return cljs.core.cons(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(0)], null)], null)], 0)),pucks$worlds$dev$world9$agents_$_iter__11557(cljs.core.rest(s__11558__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3((400),(800),(20)));
})(),(function (){var iter__4523__auto__ = (function pucks$worlds$dev$world9$agents_$_iter__11561(s__11562){
return (new cljs.core.LazySeq(null,(function (){
var s__11562__$1 = s__11562;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__11562__$1);
if(temp__5735__auto__){
var s__11562__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__11562__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__11562__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__11564 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__11563 = (0);
while(true){
if((i__11563 < size__4522__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__11563);
cljs.core.chunk_append(b__11564,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(799)], null)], null)], 0)));

var G__11579 = (i__11563 + (1));
i__11563 = G__11579;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__11564),pucks$worlds$dev$world9$agents_$_iter__11561(cljs.core.chunk_rest(s__11562__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__11564),null);
}
} else {
var x = cljs.core.first(s__11562__$2);
return cljs.core.cons(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(799)], null)], null)], 0)),pucks$worlds$dev$world9$agents_$_iter__11561(cljs.core.rest(s__11562__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3((400),(800),(20)));
})(),(function (){var iter__4523__auto__ = (function pucks$worlds$dev$world9$agents_$_iter__11565(s__11566){
return (new cljs.core.LazySeq(null,(function (){
var s__11566__$1 = s__11566;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__11566__$1);
if(temp__5735__auto__){
var s__11566__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__11566__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__11566__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__11568 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__11567 = (0);
while(true){
if((i__11567 < size__4522__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__11567);
cljs.core.chunk_append(b__11568,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),y], null)], null)], 0)));

var G__11580 = (i__11567 + (1));
i__11567 = G__11580;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__11568),pucks$worlds$dev$world9$agents_$_iter__11565(cljs.core.chunk_rest(s__11566__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__11568),null);
}
} else {
var y = cljs.core.first(s__11566__$2);
return cljs.core.cons(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),y], null)], null)], 0)),pucks$worlds$dev$world9$agents_$_iter__11565(cljs.core.rest(s__11566__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),(801),(20)));
})(),(function (){var iter__4523__auto__ = (function pucks$worlds$dev$world9$agents_$_iter__11569(s__11570){
return (new cljs.core.LazySeq(null,(function (){
var s__11570__$1 = s__11570;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__11570__$1);
if(temp__5735__auto__){
var s__11570__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__11570__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__11570__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__11572 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__11571 = (0);
while(true){
if((i__11571 < size__4522__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__11571);
cljs.core.chunk_append(b__11572,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(799),y], null)], null)], 0)));

var G__11581 = (i__11571 + (1));
i__11571 = G__11581;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__11572),pucks$worlds$dev$world9$agents_$_iter__11569(cljs.core.chunk_rest(s__11570__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__11572),null);
}
} else {
var y = cljs.core.first(s__11570__$2);
return cljs.core.cons(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(799),y], null)], null)], 0)),pucks$worlds$dev$world9$agents_$_iter__11569(cljs.core.rest(s__11570__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),(801),(20)));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.zapper.zapper(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(600)], null)], null)], 0)),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.zapper.zapper(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(600),(200)], null)], null)], 0))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.vent.vent(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(600),(600)], null)], null)], 0))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.nursery.nursery(pucks.agents.shooter.shooter),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(200)], null)], null)], 0))], null)], 0));
});
pucks.worlds.dev.world9.settings = (function pucks$worlds$dev$world9$settings(){
return cljs.core.PersistentArrayMap.EMPTY;
});
