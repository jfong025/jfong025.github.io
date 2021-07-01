// Compiled by ClojureScript 1.10.439 {}
goog.provide('pucks.core');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('pucks.globals');
goog.require('pucks.vec2D');
goog.require('pucks.util');
goog.require('pucks.physics');
goog.require('pucks.reap');
goog.require('pucks.neighbors');
goog.require('pucks.sensors');
goog.require('pucks.draw');
/**
 * The Quil setup function for pucks. Initializes drawing parameters and
 * the global iteration counter.
 */
pucks.core.setup = (function pucks$core$setup(){
quil.core.smooth.call(null);

quil.core.no_stroke.call(null);

cljs.core.reset_BANG_.call(null,pucks.globals.iteration,(0));

var temp__5735__auto__ = new cljs.core.Keyword(null,"ms-limit","ms-limit",-1908703534).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,pucks.globals.pucks_settings));
if(cljs.core.truth_(temp__5735__auto__)){
var limit = temp__5735__auto__;
return cljs.core.reset_BANG_.call(null,pucks.globals.end_ms,(pucks.util.ms.call(null) + limit));
} else {
return null;
}
});
/**
 * The Quil draw function for pucks. In addition to stepping forward the
 * simulation and actually drawing the world to the display, it also handles
 * GUI interactions.
 */
pucks.core.draw = (function pucks$core$draw(){
if(cljs.core.truth_((function (){var and__4036__auto__ = new cljs.core.Keyword(null,"ms-limit","ms-limit",-1908703534).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,pucks.globals.pucks_settings));
if(cljs.core.truth_(and__4036__auto__)){
return (pucks.util.ms.call(null) > cljs.core.deref.call(null,pucks.globals.end_ms));
} else {
return and__4036__auto__;
}
})())){
cljs.core.println.call(null,"Iterations completed:",cljs.core.deref.call(null,pucks.globals.iteration));

System.exit((0));
} else {
}

if(cljs.core.not.call(null,cljs.core.deref.call(null,pucks.globals.paused))){
cljs.core.swap_BANG_.call(null,pucks.globals.iteration,cljs.core.inc);

cljs.core.swap_BANG_.call(null,pucks.globals.all_agents,(function (objs){
return cljs.core.mapv.call(null,(function (p1__5600_SHARP_){
if(cljs.core.truth_(new cljs.core.Keyword(null,"stone","stone",-59276120).cljs$core$IFn$_invoke$arity$1(p1__5600_SHARP_))){
return p1__5600_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__5600_SHARP_,new cljs.core.Keyword(null,"steps","steps",-128433302),(new cljs.core.Keyword(null,"steps","steps",-128433302).cljs$core$IFn$_invoke$arity$1(p1__5600_SHARP_) + (1)));
}
}),objs);
}));

cljs.core.reset_BANG_.call(null,pucks.globals.number_of_active_agents,cljs.core.count.call(null,cljs.core.filter.call(null,new cljs.core.Keyword(null,"active","active",1895962068),cljs.core.deref.call(null,pucks.globals.all_agents))));

pucks.neighbors.update_neighbors.call(null);

pucks.sensors.run_sensors.call(null);

pucks.physics.generate_proposals.call(null);

pucks.physics.arbitrate_proposals.call(null);

pucks.reap.reap.call(null);
} else {
}

pucks.draw.draw_agents.call(null);

if(cljs.core.truth_((function (){var and__4036__auto__ = quil.core.key_pressed_QMARK_.call(null);
if(cljs.core.truth_(and__4036__auto__)){
return (pucks.util.ms.call(null) > ((500) + cljs.core.deref.call(null,pucks.globals.last_input_ms)));
} else {
return and__4036__auto__;
}
})())){
cljs.core.reset_BANG_.call(null,pucks.globals.last_input_ms,pucks.util.ms.call(null));

if(cljs.core._EQ_.call(null,quil.core.raw_key.call(null)," ")){
return cljs.core.swap_BANG_.call(null,pucks.globals.paused,cljs.core.not);
} else {
return null;
}
} else {
return null;
}
});
pucks.core.run_pucks = (function pucks$core$run_pucks(agents,settings){

cljs.core.reset_BANG_.call(null,pucks.globals.all_agents,agents);

cljs.core.swap_BANG_.call(null,pucks.globals.pucks_settings,(function (p1__5601_SHARP_){
return cljs.core.merge.call(null,p1__5601_SHARP_,settings);
}));

if(cljs.core.truth_(new cljs.core.Keyword(null,"pause-on-start","pause-on-start",-754330096).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,pucks.globals.pucks_settings)))){
cljs.core.reset_BANG_.call(null,pucks.globals.paused,true);
} else {
}

var scaled_screen_size = (new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,pucks.globals.pucks_settings)) * new cljs.core.Keyword(null,"screen-size","screen-size",641239979).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,pucks.globals.pucks_settings)));
return quil.core.sketch.call(null,new cljs.core.Keyword(null,"title","title",636505583),"pucks",new cljs.core.Keyword(null,"setup","setup",1987730512),pucks.core.setup,new cljs.core.Keyword(null,"draw","draw",1358331674),pucks.core.draw,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [scaled_screen_size,scaled_screen_size], null),new cljs.core.Keyword(null,"features","features",-1146962336),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exit-on-close","exit-on-close",1341291937)], null));
});
