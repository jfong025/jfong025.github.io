// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('pucks.vec2D');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
goog.require('pucks.globals');
/**
 * Returns the distance between two points on a toroidal world.
 */
pucks.vec2D.distance = (function pucks$vec2D$distance(p__9773,p__9774){
var vec__9775 = p__9773;
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9775,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9775,(1),null);
var vec__9778 = p__9774;
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9778,(0),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9778,(1),null);
var wh = cljs.core.cst$kw$screen_DASH_size.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(pucks.globals.pucks_settings));
var G__9781 = ((function (){var G__9783 = (function (){var x__4222__auto__ = quil.core.abs((x1 - x2));
var y__4223__auto__ = (wh - quil.core.abs((x1 - x2)));
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})();
var fexpr__9782 = ((function (G__9783,wh,vec__9775,x1,y1,vec__9778,x2,y2){
return (function (p1__9771_SHARP_){
return (p1__9771_SHARP_ * p1__9771_SHARP_);
});})(G__9783,wh,vec__9775,x1,y1,vec__9778,x2,y2))
;
return fexpr__9782(G__9783);
})() + (function (){var G__9785 = (function (){var x__4222__auto__ = quil.core.abs((y1 - y2));
var y__4223__auto__ = (wh - quil.core.abs((y1 - y2)));
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})();
var fexpr__9784 = ((function (G__9785,wh,vec__9775,x1,y1,vec__9778,x2,y2){
return (function (p1__9772_SHARP_){
return (p1__9772_SHARP_ * p1__9772_SHARP_);
});})(G__9785,wh,vec__9775,x1,y1,vec__9778,x2,y2))
;
return fexpr__9784(G__9785);
})());
return Math.sqrt(G__9781);
});
/**
 * Returns the length of the [x y] vector.
 */
pucks.vec2D.length = (function pucks$vec2D$length(p__9786){
var vec__9787 = p__9786;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9787,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9787,(1),null);
var G__9790 = ((x * x) + (y * y));
return Math.sqrt(G__9790);
});
/**
 * Returns the result of multiplying any number of [x y] vectors.
 * Single numbers n will be treated as [n n] vectors.
 */
pucks.vec2D._STAR_v = (function pucks$vec2D$_STAR_v(var_args){
var args__4736__auto__ = [];
var len__4730__auto___9793 = arguments.length;
var i__4731__auto___9794 = (0);
while(true){
if((i__4731__auto___9794 < len__4730__auto___9793)){
args__4736__auto__.push((arguments[i__4731__auto___9794]));

var G__9795 = (i__4731__auto___9794 + (1));
i__4731__auto___9794 = G__9795;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return pucks.vec2D._STAR_v.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

pucks.vec2D._STAR_v.cljs$core$IFn$_invoke$arity$variadic = (function (vecs_or_nums){
return cljs.core.vec(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.map,cljs.core._STAR_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__9791_SHARP_){
if(typeof p1__9791_SHARP_ === 'number'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__9791_SHARP_,p1__9791_SHARP_], null);
} else {
return p1__9791_SHARP_;
}
}),vecs_or_nums)));
});

pucks.vec2D._STAR_v.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
pucks.vec2D._STAR_v.cljs$lang$applyTo = (function (seq9792){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq9792));
});

/**
 * Returns the result of adding any number of [x y] vectors.
 * Single numbers n will be treated as [n n] vectors.
 */
pucks.vec2D._PLUS_v = (function pucks$vec2D$_PLUS_v(var_args){
var args__4736__auto__ = [];
var len__4730__auto___9798 = arguments.length;
var i__4731__auto___9799 = (0);
while(true){
if((i__4731__auto___9799 < len__4730__auto___9798)){
args__4736__auto__.push((arguments[i__4731__auto___9799]));

var G__9800 = (i__4731__auto___9799 + (1));
i__4731__auto___9799 = G__9800;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return pucks.vec2D._PLUS_v.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

pucks.vec2D._PLUS_v.cljs$core$IFn$_invoke$arity$variadic = (function (vecs_or_nums){
return cljs.core.vec(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.map,cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__9796_SHARP_){
if(typeof p1__9796_SHARP_ === 'number'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__9796_SHARP_,p1__9796_SHARP_], null);
} else {
return p1__9796_SHARP_;
}
}),vecs_or_nums)));
});

pucks.vec2D._PLUS_v.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
pucks.vec2D._PLUS_v.cljs$lang$applyTo = (function (seq9797){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq9797));
});

/**
 * Returns the result of subtracting any number of [x y] vectors.
 * Single numbers n will be treated as [n n] vectors.
 */
pucks.vec2D._v = (function pucks$vec2D$_v(var_args){
var args__4736__auto__ = [];
var len__4730__auto___9803 = arguments.length;
var i__4731__auto___9804 = (0);
while(true){
if((i__4731__auto___9804 < len__4730__auto___9803)){
args__4736__auto__.push((arguments[i__4731__auto___9804]));

var G__9805 = (i__4731__auto___9804 + (1));
i__4731__auto___9804 = G__9805;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return pucks.vec2D._v.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

pucks.vec2D._v.cljs$core$IFn$_invoke$arity$variadic = (function (vecs_or_nums){
return cljs.core.vec(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.map,cljs.core._,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__9801_SHARP_){
if(typeof p1__9801_SHARP_ === 'number'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__9801_SHARP_,p1__9801_SHARP_], null);
} else {
return p1__9801_SHARP_;
}
}),vecs_or_nums)));
});

pucks.vec2D._v.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
pucks.vec2D._v.cljs$lang$applyTo = (function (seq9802){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq9802));
});

/**
 * Returns the result of averaging any number of [x y] vectors.
 * Single numbers n will be treated as [n n] vectors.
 */
pucks.vec2D.avgv = (function pucks$vec2D$avgv(var_args){
var args__4736__auto__ = [];
var len__4730__auto___9808 = arguments.length;
var i__4731__auto___9809 = (0);
while(true){
if((i__4731__auto___9809 < len__4730__auto___9808)){
args__4736__auto__.push((arguments[i__4731__auto___9809]));

var G__9810 = (i__4731__auto___9809 + (1));
i__4731__auto___9809 = G__9810;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return pucks.vec2D.avgv.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

pucks.vec2D.avgv.cljs$core$IFn$_invoke$arity$variadic = (function (vecs_or_nums){
if(cljs.core.empty_QMARK_(vecs_or_nums)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
} else {
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__9806_SHARP_){
return (p1__9806_SHARP_ / cljs.core.count(vecs_or_nums));
}),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(pucks.vec2D._PLUS_v,vecs_or_nums)));
}
});

pucks.vec2D.avgv.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
pucks.vec2D.avgv.cljs$lang$applyTo = (function (seq9807){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq9807));
});

pucks.vec2D.limit_vec2D = (function pucks$vec2D$limit_vec2D(xy,limit){

if((pucks.vec2D.length(xy) <= limit)){
return xy;
} else {
return pucks.vec2D._STAR_v.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([limit,cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__9811_SHARP_){
return (p1__9811_SHARP_ / pucks.vec2D.length(xy));
}),xy))], 0));
}
});
/**
 * An abbreviation for (limit-vec2D n 1.0).
 */
pucks.vec2D.limit1 = (function pucks$vec2D$limit1(n){
return pucks.vec2D.limit_vec2D(n,1.0);
});
