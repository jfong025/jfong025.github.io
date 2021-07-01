// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('pucks.agents.darter');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('pucks.util');
goog.require('pucks.globals');
goog.require('pucks.vec2D');
goog.require('quil.core');
goog.require('pucks.agents.active');
pucks.agents.darter.rotation_velocity_mismatch = (function pucks$agents$darter$rotation_velocity_mismatch(p){
return quil.core.abs((cljs.core.cst$kw$rotation.cljs$core$IFn$_invoke$arity$1(p) - pucks.util.relative_position__GT_rotation(cljs.core.cst$kw$velocity.cljs$core$IFn$_invoke$arity$1(p))));
});
pucks.agents.darter.darter_proposals = (function pucks$agents$darter$darter_proposals(p){
var G__11463 = cljs.core.cst$kw$task.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$memory.cljs$core$IFn$_invoke$arity$1(p));
var G__11463__$1 = (((G__11463 instanceof cljs.core.Keyword))?G__11463.fqn:null);
switch (G__11463__$1) {
case "orienting":
if((pucks.agents.darter.rotation_velocity_mismatch(p) > 0.1)){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rotation,pucks.util.relative_position__GT_rotation(cljs.core.cst$kw$velocity.cljs$core$IFn$_invoke$arity$1(p))], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$memory,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$task,cljs.core.cst$kw$stopping], null)], null);
}

break;
case "stopping":
if((pucks.vec2D.length(cljs.core.cst$kw$velocity.cljs$core$IFn$_invoke$arity$1(p)) > 0.5)){
if((pucks.agents.darter.rotation_velocity_mismatch(p) > 0.1)){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$memory,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$task,cljs.core.cst$kw$orienting], null)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$acceleration,(0.5 * (((pucks.agents.darter.rotation_velocity_mismatch(p) < (pucks.globals.pi / (2))))?(-1):(1)))], null);
}
} else {
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$acceleration,(0),cljs.core.cst$kw$memory,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$task,cljs.core.cst$kw$re_DASH_orienting,cljs.core.cst$kw$target_DASH_orientation,pucks.util.wrap_rotation(cljs.core.rand.cljs$core$IFn$_invoke$arity$1(pucks.globals.two_pi))], null)], null);
}

break;
case "re-orienting":
if((quil.core.abs((cljs.core.cst$kw$rotation.cljs$core$IFn$_invoke$arity$1(p) - cljs.core.cst$kw$target_DASH_orientation.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$memory.cljs$core$IFn$_invoke$arity$1(p)))) > 0.1)){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rotation,cljs.core.cst$kw$target_DASH_orientation.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$memory.cljs$core$IFn$_invoke$arity$1(p))], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$memory,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$task,cljs.core.cst$kw$darting,cljs.core.cst$kw$dart_DASH_steps,(20)], null)], null);
}

break;
case "darting":
if((cljs.core.cst$kw$dart_DASH_steps.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$memory.cljs$core$IFn$_invoke$arity$1(p)) > (1))){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$acceleration,(10),cljs.core.cst$kw$memory,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$dart_DASH_steps,(cljs.core.cst$kw$dart_DASH_steps.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$memory.cljs$core$IFn$_invoke$arity$1(p)) - (1))], null)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$memory,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$task,cljs.core.cst$kw$orienting], null)], null);
}

break;
default:
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$memory,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$task,cljs.core.cst$kw$orienting], null)], null);

}
});
pucks.agents.darter.darter = (function pucks$agents$darter$darter(){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.active.active(),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$darter,true,cljs.core.cst$kw$proposal_DASH_function,pucks.agents.darter.darter_proposals], null)], 0));
});
