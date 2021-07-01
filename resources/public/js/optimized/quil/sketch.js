// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('quil.sketch');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.util');
goog.require('quil.middlewares.deprecated_options');
goog.require('goog.dom');
goog.require('goog.events');
goog.require('goog.style');
goog.require('goog.object');
goog.require('goog.events.EventType');
quil.sketch._STAR_applet_STAR_ = null;
quil.sketch.current_applet = (function quil$sketch$current_applet(){
return quil.sketch._STAR_applet_STAR_;
});
quil.sketch.rendering_modes = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$java2d,(p5.prototype["JAVA2D"]),cljs.core.cst$kw$p2d,(p5.prototype["P2D"]),cljs.core.cst$kw$p3d,(p5.prototype["P3D"]),cljs.core.cst$kw$opengl,(p5.prototype["OPENGL"])], null);
quil.sketch.resolve_renderer = (function quil$sketch$resolve_renderer(mode){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$p3d,mode)){
return (p5.prototype["WEBGL"]);
} else {
return quil.util.resolve_constant_key(mode,quil.sketch.rendering_modes);
}
});
quil.sketch.set_size = (function quil$sketch$set_size(applet,width,height){
var temp__5735__auto__ = applet.quil_canvas;
if(cljs.core.truth_(temp__5735__auto__)){
var el = temp__5735__auto__;
var inner_canvas = el.querySelector("canvas");
applet.resizeCanvas(width,height);

inner_canvas.setAttribute("width",width);

inner_canvas.setAttribute("height",height);

(inner_canvas.style["width"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(width),"px"].join(''));

(inner_canvas.style["height"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(height),"px"].join(''));

applet.width = window.parseInt(goog.style.getComputedStyle(inner_canvas,"width"));

return applet.height = window.parseInt(goog.style.getComputedStyle(inner_canvas,"height"));
} else {
return null;
}
});
quil.sketch.size = (function quil$sketch$size(var_args){
var G__9354 = arguments.length;
switch (G__9354) {
case 2:
return quil.sketch.size.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return quil.sketch.size.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

quil.sketch.size.cljs$core$IFn$_invoke$arity$2 = (function (width,height){
return quil.sketch.current_applet().createCanvas((width | (0)),(height | (0)));
});

quil.sketch.size.cljs$core$IFn$_invoke$arity$3 = (function (width,height,mode){
return quil.sketch.current_applet().createCanvas((width | (0)),(height | (0)),quil.sketch.resolve_renderer(mode));
});

quil.sketch.size.cljs$lang$maxFixedArity = 3;

quil.sketch.bind_handlers = (function quil$sketch$bind_handlers(prc,opts){
var seq__9356 = cljs.core.seq(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$keyPressed,cljs.core.cst$kw$mouseOut,cljs.core.cst$kw$mouseDragged,cljs.core.cst$kw$setup,cljs.core.cst$kw$mouseWheel,cljs.core.cst$kw$keyReleased,cljs.core.cst$kw$mouseClicked,cljs.core.cst$kw$mouseReleased,cljs.core.cst$kw$mousePressed,cljs.core.cst$kw$mouseMoved,cljs.core.cst$kw$mouseOver,cljs.core.cst$kw$keyTyped,cljs.core.cst$kw$draw],[cljs.core.cst$kw$key_DASH_pressed,cljs.core.cst$kw$mouse_DASH_exited,cljs.core.cst$kw$mouse_DASH_dragged,cljs.core.cst$kw$setup,cljs.core.cst$kw$mouse_DASH_wheel,cljs.core.cst$kw$key_DASH_released,cljs.core.cst$kw$mouse_DASH_clicked,cljs.core.cst$kw$mouse_DASH_released,cljs.core.cst$kw$mouse_DASH_pressed,cljs.core.cst$kw$mouse_DASH_moved,cljs.core.cst$kw$mouse_DASH_entered,cljs.core.cst$kw$key_DASH_typed,cljs.core.cst$kw$draw]));
var chunk__9357 = null;
var count__9358 = (0);
var i__9359 = (0);
while(true){
if((i__9359 < count__9358)){
var vec__9370 = chunk__9357.cljs$core$IIndexed$_nth$arity$2(null,i__9359);
var processing_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9370,(0),null);
var quil_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9370,(1),null);
var temp__5735__auto___9380 = (opts.cljs$core$IFn$_invoke$arity$1 ? opts.cljs$core$IFn$_invoke$arity$1(quil_name) : opts.call(null,quil_name));
if(cljs.core.truth_(temp__5735__auto___9380)){
var handler_9381 = temp__5735__auto___9380;
(prc[cljs.core.name(processing_name)] = ((function (seq__9356,chunk__9357,count__9358,i__9359,handler_9381,temp__5735__auto___9380,vec__9370,processing_name,quil_name){
return (function() { 
var G__9382__delegate = function (args){
var _STAR_applet_STAR__orig_val__9373 = quil.sketch._STAR_applet_STAR_;
var _STAR_applet_STAR__temp_val__9374 = prc;
quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR__temp_val__9374;

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(handler_9381,args);
}finally {quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR__orig_val__9373;
}};
var G__9382 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9383__i = 0, G__9383__a = new Array(arguments.length -  0);
while (G__9383__i < G__9383__a.length) {G__9383__a[G__9383__i] = arguments[G__9383__i + 0]; ++G__9383__i;}
  args = new cljs.core.IndexedSeq(G__9383__a,0,null);
} 
return G__9382__delegate.call(this,args);};
G__9382.cljs$lang$maxFixedArity = 0;
G__9382.cljs$lang$applyTo = (function (arglist__9384){
var args = cljs.core.seq(arglist__9384);
return G__9382__delegate(args);
});
G__9382.cljs$core$IFn$_invoke$arity$variadic = G__9382__delegate;
return G__9382;
})()
;})(seq__9356,chunk__9357,count__9358,i__9359,handler_9381,temp__5735__auto___9380,vec__9370,processing_name,quil_name))
);
} else {
}


var G__9385 = seq__9356;
var G__9386 = chunk__9357;
var G__9387 = count__9358;
var G__9388 = (i__9359 + (1));
seq__9356 = G__9385;
chunk__9357 = G__9386;
count__9358 = G__9387;
i__9359 = G__9388;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__9356);
if(temp__5735__auto__){
var seq__9356__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__9356__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__9356__$1);
var G__9389 = cljs.core.chunk_rest(seq__9356__$1);
var G__9390 = c__4550__auto__;
var G__9391 = cljs.core.count(c__4550__auto__);
var G__9392 = (0);
seq__9356 = G__9389;
chunk__9357 = G__9390;
count__9358 = G__9391;
i__9359 = G__9392;
continue;
} else {
var vec__9375 = cljs.core.first(seq__9356__$1);
var processing_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9375,(0),null);
var quil_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9375,(1),null);
var temp__5735__auto___9393__$1 = (opts.cljs$core$IFn$_invoke$arity$1 ? opts.cljs$core$IFn$_invoke$arity$1(quil_name) : opts.call(null,quil_name));
if(cljs.core.truth_(temp__5735__auto___9393__$1)){
var handler_9394 = temp__5735__auto___9393__$1;
(prc[cljs.core.name(processing_name)] = ((function (seq__9356,chunk__9357,count__9358,i__9359,handler_9394,temp__5735__auto___9393__$1,vec__9375,processing_name,quil_name,seq__9356__$1,temp__5735__auto__){
return (function() { 
var G__9395__delegate = function (args){
var _STAR_applet_STAR__orig_val__9378 = quil.sketch._STAR_applet_STAR_;
var _STAR_applet_STAR__temp_val__9379 = prc;
quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR__temp_val__9379;

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(handler_9394,args);
}finally {quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR__orig_val__9378;
}};
var G__9395 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9396__i = 0, G__9396__a = new Array(arguments.length -  0);
while (G__9396__i < G__9396__a.length) {G__9396__a[G__9396__i] = arguments[G__9396__i + 0]; ++G__9396__i;}
  args = new cljs.core.IndexedSeq(G__9396__a,0,null);
} 
return G__9395__delegate.call(this,args);};
G__9395.cljs$lang$maxFixedArity = 0;
G__9395.cljs$lang$applyTo = (function (arglist__9397){
var args = cljs.core.seq(arglist__9397);
return G__9395__delegate(args);
});
G__9395.cljs$core$IFn$_invoke$arity$variadic = G__9395__delegate;
return G__9395;
})()
;})(seq__9356,chunk__9357,count__9358,i__9359,handler_9394,temp__5735__auto___9393__$1,vec__9375,processing_name,quil_name,seq__9356__$1,temp__5735__auto__))
);
} else {
}


var G__9398 = cljs.core.next(seq__9356__$1);
var G__9399 = null;
var G__9400 = (0);
var G__9401 = (0);
seq__9356 = G__9398;
chunk__9357 = G__9399;
count__9358 = G__9400;
i__9359 = G__9401;
continue;
}
} else {
return null;
}
}
break;
}
});
quil.sketch.in_fullscreen_QMARK_ = (function quil$sketch$in_fullscreen_QMARK_(){
var or__4131__auto__ = document.fullscreenElement;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return document.mozFullScreenElement;
}
});
/**
 * Adds fullscreen support for the provided `p5` object.
 *   Fullscreen is enabled when the user presses `F11`. We turn
 *   the sketch `<canvas>` element to fullscreen storing the old size
 *   in an `atom`. When the user cancels fullscreen (`F11` or `Esc`)
 *   we resize the sketch back to the old size.
 */
quil.sketch.add_fullscreen_support = (function quil$sketch$add_fullscreen_support(applet){
var old_size = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var adjust_canvas_size = ((function (old_size){
return (function (){
if(cljs.core.truth_(quil.sketch.in_fullscreen_QMARK_())){
cljs.core.reset_BANG_(old_size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [applet.width,applet.height], null));

return quil.sketch.set_size(applet,window.screen.width,window.screen.height);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(quil.sketch.set_size,applet,cljs.core.deref(old_size));
}
});})(old_size))
;
var G__9403_9409 = window;
var G__9404_9410 = goog.events.EventType.KEYDOWN;
var G__9405_9411 = ((function (G__9403_9409,G__9404_9410,old_size,adjust_canvas_size){
return (function (event){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(event.key,"F11")) && (cljs.core.not(quil.sketch.in_fullscreen_QMARK_())))){
event.preventDefault();

var canvas = applet.quil_canvas;
if(cljs.core.truth_(canvas.requestFullscreen)){
return canvas.requestFullscreen();
} else {
if(cljs.core.truth_(canvas.mozRequestFullScreen)){
return canvas.mozRequestFullScreen();
} else {
return console.warn("Fullscreen mode is not supported in current browser.");

}
}
} else {
return null;
}
});})(G__9403_9409,G__9404_9410,old_size,adjust_canvas_size))
;
goog.events.listen(G__9403_9409,G__9404_9410,G__9405_9411);

goog.events.listen(document,"fullscreenchange",adjust_canvas_size);

goog.events.listen(document,"mozfullscreenchange",adjust_canvas_size);

var G__9406 = document;
var G__9407 = "fullscreenerror";
var G__9408 = ((function (G__9406,G__9407,old_size,adjust_canvas_size){
return (function (p1__9402_SHARP_){
return console.error("Error while switching to/from fullscreen: ",p1__9402_SHARP_);
});})(G__9406,G__9407,old_size,adjust_canvas_size))
;
return goog.events.listen(G__9406,G__9407,G__9408);
});
quil.sketch.make_sketch = (function quil$sketch$make_sketch(options){
var opts = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),(300)], null)], null),(function (){var G__9414 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.comp,cljs.core.cons(quil.middlewares.deprecated_options.deprecated_options,cljs.core.cst$kw$middleware.cljs$core$IFn$_invoke$arity$2(options,cljs.core.PersistentVector.EMPTY)));
var fexpr__9413 = ((function (G__9414){
return (function (p1__9412_SHARP_){
return (p1__9412_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__9412_SHARP_.cljs$core$IFn$_invoke$arity$1(options) : p1__9412_SHARP_.call(null,options));
});})(G__9414))
;
return fexpr__9413(G__9414);
})()], 0));
var sketch_size = cljs.core.cst$kw$size.cljs$core$IFn$_invoke$arity$1(opts);
var renderer = cljs.core.cst$kw$renderer.cljs$core$IFn$_invoke$arity$1(opts);
var features = cljs.core.set(cljs.core.cst$kw$features.cljs$core$IFn$_invoke$arity$1(opts));
var setup = ((function (opts,sketch_size,renderer,features){
return (function (){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(quil.sketch.size,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(sketch_size,(cljs.core.truth_(renderer)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [renderer], null):cljs.core.PersistentVector.EMPTY)));

if(cljs.core.truth_(cljs.core.cst$kw$settings.cljs$core$IFn$_invoke$arity$1(opts))){
var fexpr__9415_9418 = cljs.core.cst$kw$settings.cljs$core$IFn$_invoke$arity$1(opts);
(fexpr__9415_9418.cljs$core$IFn$_invoke$arity$0 ? fexpr__9415_9418.cljs$core$IFn$_invoke$arity$0() : fexpr__9415_9418.call(null));
} else {
}

if(cljs.core.truth_(cljs.core.cst$kw$setup.cljs$core$IFn$_invoke$arity$1(opts))){
var fexpr__9416 = cljs.core.cst$kw$setup.cljs$core$IFn$_invoke$arity$1(opts);
return (fexpr__9416.cljs$core$IFn$_invoke$arity$0 ? fexpr__9416.cljs$core$IFn$_invoke$arity$0() : fexpr__9416.call(null));
} else {
return null;
}
});})(opts,sketch_size,renderer,features))
;
var mouse_wheel = (function (){var temp__5735__auto__ = cljs.core.cst$kw$mouse_DASH_wheel.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5735__auto__)){
var wheel_handler = temp__5735__auto__;
return ((function (wheel_handler,temp__5735__auto__,opts,sketch_size,renderer,features,setup){
return (function (evt){
var G__9417 = goog.object.get(evt,"delta");
return (wheel_handler.cljs$core$IFn$_invoke$arity$1 ? wheel_handler.cljs$core$IFn$_invoke$arity$1(G__9417) : wheel_handler.call(null,G__9417));
});
;})(wheel_handler,temp__5735__auto__,opts,sketch_size,renderer,features,setup))
} else {
return null;
}
})();
var opts__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(opts,cljs.core.cst$kw$setup,setup,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$mouse_DASH_wheel,mouse_wheel], 0));
var sketch = ((function (opts,sketch_size,renderer,features,setup,mouse_wheel,opts__$1){
return (function (prc){
quil.sketch.bind_handlers(prc,opts__$1);

prc.quil = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);

return prc.quil_internal_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(quil.util.initial_internal_state);
});})(opts,sketch_size,renderer,features,setup,mouse_wheel,opts__$1))
;
return sketch;
});
quil.sketch.destroy_previous_sketch = (function quil$sketch$destroy_previous_sketch(host_elem){
var temp__5735__auto__ = host_elem.processing_obj;
if(cljs.core.truth_(temp__5735__auto__)){
var proc_obj = temp__5735__auto__;
return proc_obj.remove();
} else {
return null;
}
});
quil.sketch.sketch = (function quil$sketch$sketch(var_args){
var args__4736__auto__ = [];
var len__4730__auto___9420 = arguments.length;
var i__4731__auto___9421 = (0);
while(true){
if((i__4731__auto___9421 < len__4730__auto___9420)){
args__4736__auto__.push((arguments[i__4731__auto___9421]));

var G__9422 = (i__4731__auto___9421 + (1));
i__4731__auto___9421 = G__9422;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic = (function (opts){
var opts_map = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts);
var host_elem = cljs.core.cst$kw$host.cljs$core$IFn$_invoke$arity$1(opts_map);
var renderer = (function (){var or__4131__auto__ = cljs.core.cst$kw$renderer.cljs$core$IFn$_invoke$arity$1(opts_map);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.cst$kw$p2d;
}
})();
var host_elem__$1 = ((typeof host_elem === 'string')?document.getElementById(host_elem):host_elem);
if(cljs.core.truth_(host_elem__$1)){
if(cljs.core.truth_(host_elem__$1.processing_context)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(renderer,host_elem__$1.processing_context)){
} else {
console.warn("WARNING: Using different context on one canvas!");
}
} else {
host_elem__$1.processing_context = renderer;
}

quil.sketch.destroy_previous_sketch(host_elem__$1);

var proc_obj = (new p5(quil.sketch.make_sketch(opts_map),host_elem__$1));
host_elem__$1.processing_obj = proc_obj;

proc_obj.quil_canvas = host_elem__$1;

quil.sketch.add_fullscreen_support(proc_obj);

return proc_obj;
} else {
return console.error((cljs.core.truth_(cljs.core.cst$kw$host.cljs$core$IFn$_invoke$arity$1(opts_map))?["ERROR: Cannot find host element: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$host.cljs$core$IFn$_invoke$arity$1(opts_map))].join(''):"ERROR: Cannot create sketch. :host is not specified or element not found."));
}
});

quil.sketch.sketch.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
quil.sketch.sketch.cljs$lang$applyTo = (function (seq9419){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq9419));
});

quil.sketch.sketch_init_list = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.List.EMPTY);
quil.sketch.empty_body_QMARK_ = (function quil$sketch$empty_body_QMARK_(){
var child = document.body.childNodes;
return (child.length <= (1));
});
quil.sketch.add_canvas = (function quil$sketch$add_canvas(canvas_id){
var canvas = document.createElement("canvas");
canvas.setAttribute("id",canvas_id);

return document.body.appendChild(canvas);
});
quil.sketch.init_sketches = (function quil$sketch$init_sketches(){
var add_elem_QMARK__9431 = quil.sketch.empty_body_QMARK_();
var seq__9423_9432 = cljs.core.seq(cljs.core.deref(quil.sketch.sketch_init_list));
var chunk__9424_9433 = null;
var count__9425_9434 = (0);
var i__9426_9435 = (0);
while(true){
if((i__9426_9435 < count__9425_9434)){
var sk_9436 = chunk__9424_9433.cljs$core$IIndexed$_nth$arity$2(null,i__9426_9435);
if(add_elem_QMARK__9431){
quil.sketch.add_canvas(cljs.core.cst$kw$host_DASH_id.cljs$core$IFn$_invoke$arity$1(sk_9436));
} else {
}

var fexpr__9429_9437 = cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(sk_9436);
(fexpr__9429_9437.cljs$core$IFn$_invoke$arity$0 ? fexpr__9429_9437.cljs$core$IFn$_invoke$arity$0() : fexpr__9429_9437.call(null));


var G__9438 = seq__9423_9432;
var G__9439 = chunk__9424_9433;
var G__9440 = count__9425_9434;
var G__9441 = (i__9426_9435 + (1));
seq__9423_9432 = G__9438;
chunk__9424_9433 = G__9439;
count__9425_9434 = G__9440;
i__9426_9435 = G__9441;
continue;
} else {
var temp__5735__auto___9442 = cljs.core.seq(seq__9423_9432);
if(temp__5735__auto___9442){
var seq__9423_9443__$1 = temp__5735__auto___9442;
if(cljs.core.chunked_seq_QMARK_(seq__9423_9443__$1)){
var c__4550__auto___9444 = cljs.core.chunk_first(seq__9423_9443__$1);
var G__9445 = cljs.core.chunk_rest(seq__9423_9443__$1);
var G__9446 = c__4550__auto___9444;
var G__9447 = cljs.core.count(c__4550__auto___9444);
var G__9448 = (0);
seq__9423_9432 = G__9445;
chunk__9424_9433 = G__9446;
count__9425_9434 = G__9447;
i__9426_9435 = G__9448;
continue;
} else {
var sk_9449 = cljs.core.first(seq__9423_9443__$1);
if(add_elem_QMARK__9431){
quil.sketch.add_canvas(cljs.core.cst$kw$host_DASH_id.cljs$core$IFn$_invoke$arity$1(sk_9449));
} else {
}

var fexpr__9430_9450 = cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(sk_9449);
(fexpr__9430_9450.cljs$core$IFn$_invoke$arity$0 ? fexpr__9430_9450.cljs$core$IFn$_invoke$arity$0() : fexpr__9430_9450.call(null));


var G__9451 = cljs.core.next(seq__9423_9443__$1);
var G__9452 = null;
var G__9453 = (0);
var G__9454 = (0);
seq__9423_9432 = G__9451;
chunk__9424_9433 = G__9452;
count__9425_9434 = G__9453;
i__9426_9435 = G__9454;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(quil.sketch.sketch_init_list,cljs.core.PersistentVector.EMPTY);
});
quil.sketch.add_sketch_to_init_list = (function quil$sketch$add_sketch_to_init_list(sk){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(quil.sketch.sketch_init_list,cljs.core.conj,sk);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(document.readyState,"complete")){
return quil.sketch.init_sketches();
} else {
return null;
}
});
goog.events.listenOnce(window,goog.events.EventType.LOAD,quil.sketch.init_sketches);
