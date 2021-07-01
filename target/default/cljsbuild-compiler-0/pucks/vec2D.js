// Compiled by ClojureScript 1.10.439 {}
goog.provide('pucks.vec2D');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('pucks.globals');
/**
 * Returns the distance between two points on a toroidal world.
 */
pucks.vec2D.distance = (function pucks$vec2D$distance(p__5128,p__5129){
var vec__5130 = p__5128;
var x1 = cljs.core.nth.call(null,vec__5130,(0),null);
var y1 = cljs.core.nth.call(null,vec__5130,(1),null);
var vec__5133 = p__5129;
var x2 = cljs.core.nth.call(null,vec__5133,(0),null);
var y2 = cljs.core.nth.call(null,vec__5133,(1),null);
var wh = new cljs.core.Keyword(null,"screen-size","screen-size",641239979).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,pucks.globals.pucks_settings));
return Math.sqrt((((function (wh,vec__5130,x1,y1,vec__5133,x2,y2){
return (function (p1__5126_SHARP_){
return (p1__5126_SHARP_ * p1__5126_SHARP_);
});})(wh,vec__5130,x1,y1,vec__5133,x2,y2))
.call(null,(function (){var x__4138__auto__ = quil.core.abs.call(null,(x1 - x2));
var y__4139__auto__ = (wh - quil.core.abs.call(null,(x1 - x2)));
return ((x__4138__auto__ < y__4139__auto__) ? x__4138__auto__ : y__4139__auto__);
})()) + ((function (wh,vec__5130,x1,y1,vec__5133,x2,y2){
return (function (p1__5127_SHARP_){
return (p1__5127_SHARP_ * p1__5127_SHARP_);
});})(wh,vec__5130,x1,y1,vec__5133,x2,y2))
.call(null,(function (){var x__4138__auto__ = quil.core.abs.call(null,(y1 - y2));
var y__4139__auto__ = (wh - quil.core.abs.call(null,(y1 - y2)));
return ((x__4138__auto__ < y__4139__auto__) ? x__4138__auto__ : y__4139__auto__);
})())));
});
/**
 * Returns the length of the [x y] vector.
 */
pucks.vec2D.length = (function pucks$vec2D$length(p__5136){
var vec__5137 = p__5136;
var x = cljs.core.nth.call(null,vec__5137,(0),null);
var y = cljs.core.nth.call(null,vec__5137,(1),null);
return Math.sqrt(((x * x) + (y * y)));
});
/**
 * Returns the result of multiplying any number of [x y] vectors.
 * Single numbers n will be treated as [n n] vectors.
 */
pucks.vec2D._STAR_v = (function pucks$vec2D$_STAR_v(var_args){
var args__4647__auto__ = [];
var len__4641__auto___5142 = arguments.length;
var i__4642__auto___5143 = (0);
while(true){
if((i__4642__auto___5143 < len__4641__auto___5142)){
args__4647__auto__.push((arguments[i__4642__auto___5143]));

var G__5144 = (i__4642__auto___5143 + (1));
i__4642__auto___5143 = G__5144;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return pucks.vec2D._STAR_v.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

pucks.vec2D._STAR_v.cljs$core$IFn$_invoke$arity$variadic = (function (vecs_or_nums){
return cljs.core.vec.call(null,cljs.core.apply.call(null,cljs.core.map,cljs.core._STAR_,cljs.core.map.call(null,(function (p1__5140_SHARP_){
if(typeof p1__5140_SHARP_ === 'number'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__5140_SHARP_,p1__5140_SHARP_], null);
} else {
return p1__5140_SHARP_;
}
}),vecs_or_nums)));
});

pucks.vec2D._STAR_v.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
pucks.vec2D._STAR_v.cljs$lang$applyTo = (function (seq5141){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5141));
});

/**
 * Returns the result of adding any number of [x y] vectors.
 * Single numbers n will be treated as [n n] vectors.
 */
pucks.vec2D._PLUS_v = (function pucks$vec2D$_PLUS_v(var_args){
var args__4647__auto__ = [];
var len__4641__auto___5147 = arguments.length;
var i__4642__auto___5148 = (0);
while(true){
if((i__4642__auto___5148 < len__4641__auto___5147)){
args__4647__auto__.push((arguments[i__4642__auto___5148]));

var G__5149 = (i__4642__auto___5148 + (1));
i__4642__auto___5148 = G__5149;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return pucks.vec2D._PLUS_v.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

pucks.vec2D._PLUS_v.cljs$core$IFn$_invoke$arity$variadic = (function (vecs_or_nums){
return cljs.core.vec.call(null,cljs.core.apply.call(null,cljs.core.map,cljs.core._PLUS_,cljs.core.map.call(null,(function (p1__5145_SHARP_){
if(typeof p1__5145_SHARP_ === 'number'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__5145_SHARP_,p1__5145_SHARP_], null);
} else {
return p1__5145_SHARP_;
}
}),vecs_or_nums)));
});

pucks.vec2D._PLUS_v.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
pucks.vec2D._PLUS_v.cljs$lang$applyTo = (function (seq5146){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5146));
});

/**
 * Returns the result of subtracting any number of [x y] vectors.
 * Single numbers n will be treated as [n n] vectors.
 */
pucks.vec2D._v = (function pucks$vec2D$_v(var_args){
var args__4647__auto__ = [];
var len__4641__auto___5152 = arguments.length;
var i__4642__auto___5153 = (0);
while(true){
if((i__4642__auto___5153 < len__4641__auto___5152)){
args__4647__auto__.push((arguments[i__4642__auto___5153]));

var G__5154 = (i__4642__auto___5153 + (1));
i__4642__auto___5153 = G__5154;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return pucks.vec2D._v.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

pucks.vec2D._v.cljs$core$IFn$_invoke$arity$variadic = (function (vecs_or_nums){
return cljs.core.vec.call(null,cljs.core.apply.call(null,cljs.core.map,cljs.core._,cljs.core.map.call(null,(function (p1__5150_SHARP_){
if(typeof p1__5150_SHARP_ === 'number'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__5150_SHARP_,p1__5150_SHARP_], null);
} else {
return p1__5150_SHARP_;
}
}),vecs_or_nums)));
});

pucks.vec2D._v.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
pucks.vec2D._v.cljs$lang$applyTo = (function (seq5151){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5151));
});

/**
 * Returns the result of averaging any number of [x y] vectors.
 * Single numbers n will be treated as [n n] vectors.
 */
pucks.vec2D.avgv = (function pucks$vec2D$avgv(var_args){
var args__4647__auto__ = [];
var len__4641__auto___5157 = arguments.length;
var i__4642__auto___5158 = (0);
while(true){
if((i__4642__auto___5158 < len__4641__auto___5157)){
args__4647__auto__.push((arguments[i__4642__auto___5158]));

var G__5159 = (i__4642__auto___5158 + (1));
i__4642__auto___5158 = G__5159;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return pucks.vec2D.avgv.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

pucks.vec2D.avgv.cljs$core$IFn$_invoke$arity$variadic = (function (vecs_or_nums){
if(cljs.core.empty_QMARK_.call(null,vecs_or_nums)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
} else {
return cljs.core.vec.call(null,cljs.core.map.call(null,(function (p1__5155_SHARP_){
return (p1__5155_SHARP_ / cljs.core.count.call(null,vecs_or_nums));
}),cljs.core.apply.call(null,pucks.vec2D._PLUS_v,vecs_or_nums)));
}
});

pucks.vec2D.avgv.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
pucks.vec2D.avgv.cljs$lang$applyTo = (function (seq5156){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5156));
});

pucks.vec2D.limit_vec2D = (function pucks$vec2D$limit_vec2D(xy,limit){

if((pucks.vec2D.length.call(null,xy) <= limit)){
return xy;
} else {
return pucks.vec2D._STAR_v.call(null,limit,cljs.core.vec.call(null,cljs.core.map.call(null,(function (p1__5160_SHARP_){
return (p1__5160_SHARP_ / pucks.vec2D.length.call(null,xy));
}),xy)));
}
});
/**
 * An abbreviation for (limit-vec2D n 1.0).
 */
pucks.vec2D.limit1 = (function pucks$vec2D$limit1(n){
return pucks.vec2D.limit_vec2D.call(null,n,1.0);
});

//# sourceMappingURL=vec2D.js.map
