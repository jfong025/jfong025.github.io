// Compiled by ClojureScript 1.10.439 {}
goog.provide('pucks.draw');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('pucks.globals');
goog.require('pucks.vec2D');
goog.require('pucks.util');
/**
 * Sets the background color and calls the :draw-functions of all agents.
 */
pucks.draw.draw_agents = (function pucks$draw$draw_agents(){
quil.core.background.call(null,(230),(180),(230));

var s_5485 = new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,pucks.globals.pucks_settings));
quil.core.scale.call(null,s_5485,s_5485);

var seq__5445_5486 = cljs.core.seq.call(null,cljs.core.deref.call(null,pucks.globals.all_agents));
var chunk__5446_5487 = null;
var count__5447_5488 = (0);
var i__5448_5489 = (0);
while(true){
if((i__5448_5489 < count__5447_5488)){
var a_5490 = cljs.core._nth.call(null,chunk__5446_5487,i__5448_5489);
new cljs.core.Keyword(null,"draw-function","draw-function",-1145592301).cljs$core$IFn$_invoke$arity$1(a_5490).call(null,a_5490);


var G__5491 = seq__5445_5486;
var G__5492 = chunk__5446_5487;
var G__5493 = count__5447_5488;
var G__5494 = (i__5448_5489 + (1));
seq__5445_5486 = G__5491;
chunk__5446_5487 = G__5492;
count__5447_5488 = G__5493;
i__5448_5489 = G__5494;
continue;
} else {
var temp__5735__auto___5495 = cljs.core.seq.call(null,seq__5445_5486);
if(temp__5735__auto___5495){
var seq__5445_5496__$1 = temp__5735__auto___5495;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5445_5496__$1)){
var c__4461__auto___5497 = cljs.core.chunk_first.call(null,seq__5445_5496__$1);
var G__5498 = cljs.core.chunk_rest.call(null,seq__5445_5496__$1);
var G__5499 = c__4461__auto___5497;
var G__5500 = cljs.core.count.call(null,c__4461__auto___5497);
var G__5501 = (0);
seq__5445_5486 = G__5498;
chunk__5446_5487 = G__5499;
count__5447_5488 = G__5500;
i__5448_5489 = G__5501;
continue;
} else {
var a_5502 = cljs.core.first.call(null,seq__5445_5496__$1);
new cljs.core.Keyword(null,"draw-function","draw-function",-1145592301).cljs$core$IFn$_invoke$arity$1(a_5502).call(null,a_5502);


var G__5503 = cljs.core.next.call(null,seq__5445_5496__$1);
var G__5504 = null;
var G__5505 = (0);
var G__5506 = (0);
seq__5445_5486 = G__5503;
chunk__5446_5487 = G__5504;
count__5447_5488 = G__5505;
i__5448_5489 = G__5506;
continue;
}
} else {
}
}
break;
}

var agent_map = cljs.core.zipmap.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.deref.call(null,pucks.globals.all_agents)),cljs.core.deref.call(null,pucks.globals.all_agents));
quil.core.stroke.call(null,(196));

quil.core.stroke_weight.call(null,(2));

var seq__5449_5507 = cljs.core.seq.call(null,cljs.core.deref.call(null,pucks.globals.all_agents));
var chunk__5450_5508 = null;
var count__5451_5509 = (0);
var i__5452_5510 = (0);
while(true){
if((i__5452_5510 < count__5451_5509)){
var a_5511 = cljs.core._nth.call(null,chunk__5450_5508,i__5452_5510);
var seq__5453_5512 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"bound-to","bound-to",-1422182221).cljs$core$IFn$_invoke$arity$1(a_5511));
var chunk__5454_5513 = null;
var count__5455_5514 = (0);
var i__5456_5515 = (0);
while(true){
if((i__5456_5515 < count__5455_5514)){
var bound_id_5516 = cljs.core._nth.call(null,chunk__5454_5513,i__5456_5515);
var vec__5457_5517 = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(a_5511);
var ax_5518 = cljs.core.nth.call(null,vec__5457_5517,(0),null);
var ay_5519 = cljs.core.nth.call(null,vec__5457_5517,(1),null);
var vec__5460_5520 = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,agent_map,bound_id_5516));
var bx_5521 = cljs.core.nth.call(null,vec__5460_5520,(0),null);
var by_5522 = cljs.core.nth.call(null,vec__5460_5520,(1),null);
if(((pucks.vec2D.length.call(null,pucks.vec2D._v.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ax_5518,ay_5519], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bx_5521,by_5522], null))) - (1)) < pucks.vec2D.distance.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ax_5518,ay_5519], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bx_5521,by_5522], null)))){
quil.core.line.call(null,ax_5518,ay_5519,bx_5521,by_5522);
} else {
}


var G__5523 = seq__5453_5512;
var G__5524 = chunk__5454_5513;
var G__5525 = count__5455_5514;
var G__5526 = (i__5456_5515 + (1));
seq__5453_5512 = G__5523;
chunk__5454_5513 = G__5524;
count__5455_5514 = G__5525;
i__5456_5515 = G__5526;
continue;
} else {
var temp__5735__auto___5527 = cljs.core.seq.call(null,seq__5453_5512);
if(temp__5735__auto___5527){
var seq__5453_5528__$1 = temp__5735__auto___5527;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5453_5528__$1)){
var c__4461__auto___5529 = cljs.core.chunk_first.call(null,seq__5453_5528__$1);
var G__5530 = cljs.core.chunk_rest.call(null,seq__5453_5528__$1);
var G__5531 = c__4461__auto___5529;
var G__5532 = cljs.core.count.call(null,c__4461__auto___5529);
var G__5533 = (0);
seq__5453_5512 = G__5530;
chunk__5454_5513 = G__5531;
count__5455_5514 = G__5532;
i__5456_5515 = G__5533;
continue;
} else {
var bound_id_5534 = cljs.core.first.call(null,seq__5453_5528__$1);
var vec__5463_5535 = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(a_5511);
var ax_5536 = cljs.core.nth.call(null,vec__5463_5535,(0),null);
var ay_5537 = cljs.core.nth.call(null,vec__5463_5535,(1),null);
var vec__5466_5538 = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,agent_map,bound_id_5534));
var bx_5539 = cljs.core.nth.call(null,vec__5466_5538,(0),null);
var by_5540 = cljs.core.nth.call(null,vec__5466_5538,(1),null);
if(((pucks.vec2D.length.call(null,pucks.vec2D._v.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ax_5536,ay_5537], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bx_5539,by_5540], null))) - (1)) < pucks.vec2D.distance.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ax_5536,ay_5537], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bx_5539,by_5540], null)))){
quil.core.line.call(null,ax_5536,ay_5537,bx_5539,by_5540);
} else {
}


var G__5541 = cljs.core.next.call(null,seq__5453_5528__$1);
var G__5542 = null;
var G__5543 = (0);
var G__5544 = (0);
seq__5453_5512 = G__5541;
chunk__5454_5513 = G__5542;
count__5455_5514 = G__5543;
i__5456_5515 = G__5544;
continue;
}
} else {
}
}
break;
}


var G__5545 = seq__5449_5507;
var G__5546 = chunk__5450_5508;
var G__5547 = count__5451_5509;
var G__5548 = (i__5452_5510 + (1));
seq__5449_5507 = G__5545;
chunk__5450_5508 = G__5546;
count__5451_5509 = G__5547;
i__5452_5510 = G__5548;
continue;
} else {
var temp__5735__auto___5549 = cljs.core.seq.call(null,seq__5449_5507);
if(temp__5735__auto___5549){
var seq__5449_5550__$1 = temp__5735__auto___5549;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5449_5550__$1)){
var c__4461__auto___5551 = cljs.core.chunk_first.call(null,seq__5449_5550__$1);
var G__5552 = cljs.core.chunk_rest.call(null,seq__5449_5550__$1);
var G__5553 = c__4461__auto___5551;
var G__5554 = cljs.core.count.call(null,c__4461__auto___5551);
var G__5555 = (0);
seq__5449_5507 = G__5552;
chunk__5450_5508 = G__5553;
count__5451_5509 = G__5554;
i__5452_5510 = G__5555;
continue;
} else {
var a_5556 = cljs.core.first.call(null,seq__5449_5550__$1);
var seq__5469_5557 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"bound-to","bound-to",-1422182221).cljs$core$IFn$_invoke$arity$1(a_5556));
var chunk__5470_5558 = null;
var count__5471_5559 = (0);
var i__5472_5560 = (0);
while(true){
if((i__5472_5560 < count__5471_5559)){
var bound_id_5561 = cljs.core._nth.call(null,chunk__5470_5558,i__5472_5560);
var vec__5473_5562 = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(a_5556);
var ax_5563 = cljs.core.nth.call(null,vec__5473_5562,(0),null);
var ay_5564 = cljs.core.nth.call(null,vec__5473_5562,(1),null);
var vec__5476_5565 = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,agent_map,bound_id_5561));
var bx_5566 = cljs.core.nth.call(null,vec__5476_5565,(0),null);
var by_5567 = cljs.core.nth.call(null,vec__5476_5565,(1),null);
if(((pucks.vec2D.length.call(null,pucks.vec2D._v.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ax_5563,ay_5564], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bx_5566,by_5567], null))) - (1)) < pucks.vec2D.distance.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ax_5563,ay_5564], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bx_5566,by_5567], null)))){
quil.core.line.call(null,ax_5563,ay_5564,bx_5566,by_5567);
} else {
}


var G__5568 = seq__5469_5557;
var G__5569 = chunk__5470_5558;
var G__5570 = count__5471_5559;
var G__5571 = (i__5472_5560 + (1));
seq__5469_5557 = G__5568;
chunk__5470_5558 = G__5569;
count__5471_5559 = G__5570;
i__5472_5560 = G__5571;
continue;
} else {
var temp__5735__auto___5572__$1 = cljs.core.seq.call(null,seq__5469_5557);
if(temp__5735__auto___5572__$1){
var seq__5469_5573__$1 = temp__5735__auto___5572__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5469_5573__$1)){
var c__4461__auto___5574 = cljs.core.chunk_first.call(null,seq__5469_5573__$1);
var G__5575 = cljs.core.chunk_rest.call(null,seq__5469_5573__$1);
var G__5576 = c__4461__auto___5574;
var G__5577 = cljs.core.count.call(null,c__4461__auto___5574);
var G__5578 = (0);
seq__5469_5557 = G__5575;
chunk__5470_5558 = G__5576;
count__5471_5559 = G__5577;
i__5472_5560 = G__5578;
continue;
} else {
var bound_id_5579 = cljs.core.first.call(null,seq__5469_5573__$1);
var vec__5479_5580 = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(a_5556);
var ax_5581 = cljs.core.nth.call(null,vec__5479_5580,(0),null);
var ay_5582 = cljs.core.nth.call(null,vec__5479_5580,(1),null);
var vec__5482_5583 = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,agent_map,bound_id_5579));
var bx_5584 = cljs.core.nth.call(null,vec__5482_5583,(0),null);
var by_5585 = cljs.core.nth.call(null,vec__5482_5583,(1),null);
if(((pucks.vec2D.length.call(null,pucks.vec2D._v.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ax_5581,ay_5582], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bx_5584,by_5585], null))) - (1)) < pucks.vec2D.distance.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ax_5581,ay_5582], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bx_5584,by_5585], null)))){
quil.core.line.call(null,ax_5581,ay_5582,bx_5584,by_5585);
} else {
}


var G__5586 = cljs.core.next.call(null,seq__5469_5573__$1);
var G__5587 = null;
var G__5588 = (0);
var G__5589 = (0);
seq__5469_5557 = G__5586;
chunk__5470_5558 = G__5587;
count__5471_5559 = G__5588;
i__5472_5560 = G__5589;
continue;
}
} else {
}
}
break;
}


var G__5590 = cljs.core.next.call(null,seq__5449_5550__$1);
var G__5591 = null;
var G__5592 = (0);
var G__5593 = (0);
seq__5449_5507 = G__5590;
chunk__5450_5508 = G__5591;
count__5451_5509 = G__5592;
i__5452_5510 = G__5593;
continue;
}
} else {
}
}
break;
}

return quil.core.no_stroke.call(null);
});

//# sourceMappingURL=draw.js.map
