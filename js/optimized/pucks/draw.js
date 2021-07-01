// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('pucks.draw');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
goog.require('pucks.globals');
goog.require('pucks.vec2D');
/**
 * Sets the background color and calls the :draw-functions of all agents.
 */
pucks.draw.draw_agents = (function pucks$draw$draw_agents(){
quil.core.background.cljs$core$IFn$_invoke$arity$3((230),(180),(230));

var s_11846 = cljs.core.cst$kw$scale.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(pucks.globals.pucks_settings));
quil.core.scale.cljs$core$IFn$_invoke$arity$2(s_11846,s_11846);

var seq__11722_11847 = cljs.core.seq(cljs.core.deref(pucks.globals.all_agents));
var chunk__11723_11848 = null;
var count__11724_11849 = (0);
var i__11725_11850 = (0);
while(true){
if((i__11725_11850 < count__11724_11849)){
var a_11851 = chunk__11723_11848.cljs$core$IIndexed$_nth$arity$2(null,i__11725_11850);
var fexpr__11728_11852 = cljs.core.cst$kw$draw_DASH_function.cljs$core$IFn$_invoke$arity$1(a_11851);
(fexpr__11728_11852.cljs$core$IFn$_invoke$arity$1 ? fexpr__11728_11852.cljs$core$IFn$_invoke$arity$1(a_11851) : fexpr__11728_11852.call(null,a_11851));


var G__11853 = seq__11722_11847;
var G__11854 = chunk__11723_11848;
var G__11855 = count__11724_11849;
var G__11856 = (i__11725_11850 + (1));
seq__11722_11847 = G__11853;
chunk__11723_11848 = G__11854;
count__11724_11849 = G__11855;
i__11725_11850 = G__11856;
continue;
} else {
var temp__5735__auto___11857 = cljs.core.seq(seq__11722_11847);
if(temp__5735__auto___11857){
var seq__11722_11858__$1 = temp__5735__auto___11857;
if(cljs.core.chunked_seq_QMARK_(seq__11722_11858__$1)){
var c__4550__auto___11859 = cljs.core.chunk_first(seq__11722_11858__$1);
var G__11860 = cljs.core.chunk_rest(seq__11722_11858__$1);
var G__11861 = c__4550__auto___11859;
var G__11862 = cljs.core.count(c__4550__auto___11859);
var G__11863 = (0);
seq__11722_11847 = G__11860;
chunk__11723_11848 = G__11861;
count__11724_11849 = G__11862;
i__11725_11850 = G__11863;
continue;
} else {
var a_11864 = cljs.core.first(seq__11722_11858__$1);
var fexpr__11729_11865 = cljs.core.cst$kw$draw_DASH_function.cljs$core$IFn$_invoke$arity$1(a_11864);
(fexpr__11729_11865.cljs$core$IFn$_invoke$arity$1 ? fexpr__11729_11865.cljs$core$IFn$_invoke$arity$1(a_11864) : fexpr__11729_11865.call(null,a_11864));


var G__11866 = cljs.core.next(seq__11722_11858__$1);
var G__11867 = null;
var G__11868 = (0);
var G__11869 = (0);
seq__11722_11847 = G__11866;
chunk__11723_11848 = G__11867;
count__11724_11849 = G__11868;
i__11725_11850 = G__11869;
continue;
}
} else {
}
}
break;
}

var agent_map = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$id,cljs.core.deref(pucks.globals.all_agents)),cljs.core.deref(pucks.globals.all_agents));
quil.core.stroke.cljs$core$IFn$_invoke$arity$1((196));

quil.core.stroke_weight((2));

var seq__11730_11870 = cljs.core.seq(cljs.core.deref(pucks.globals.all_agents));
var chunk__11731_11871 = null;
var count__11732_11872 = (0);
var i__11733_11873 = (0);
while(true){
if((i__11733_11873 < count__11732_11872)){
var a_11874 = chunk__11731_11871.cljs$core$IIndexed$_nth$arity$2(null,i__11733_11873);
var seq__11790_11875 = cljs.core.seq(cljs.core.cst$kw$bound_DASH_to.cljs$core$IFn$_invoke$arity$1(a_11874));
var chunk__11791_11876 = null;
var count__11792_11877 = (0);
var i__11793_11878 = (0);
while(true){
if((i__11793_11878 < count__11792_11877)){
var bound_id_11879 = chunk__11791_11876.cljs$core$IIndexed$_nth$arity$2(null,i__11793_11878);
var vec__11806_11880 = cljs.core.cst$kw$position.cljs$core$IFn$_invoke$arity$1(a_11874);
var ax_11881 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11806_11880,(0),null);
var ay_11882 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11806_11880,(1),null);
var vec__11809_11883 = cljs.core.cst$kw$position.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(agent_map,bound_id_11879));
var bx_11884 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11809_11883,(0),null);
var by_11885 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11809_11883,(1),null);
if(((pucks.vec2D.length(pucks.vec2D._v.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ax_11881,ay_11882], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bx_11884,by_11885], null)], 0))) - (1)) < pucks.vec2D.distance(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ax_11881,ay_11882], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bx_11884,by_11885], null)))){
quil.core.line.cljs$core$IFn$_invoke$arity$4(ax_11881,ay_11882,bx_11884,by_11885);
} else {
}


var G__11886 = seq__11790_11875;
var G__11887 = chunk__11791_11876;
var G__11888 = count__11792_11877;
var G__11889 = (i__11793_11878 + (1));
seq__11790_11875 = G__11886;
chunk__11791_11876 = G__11887;
count__11792_11877 = G__11888;
i__11793_11878 = G__11889;
continue;
} else {
var temp__5735__auto___11890 = cljs.core.seq(seq__11790_11875);
if(temp__5735__auto___11890){
var seq__11790_11891__$1 = temp__5735__auto___11890;
if(cljs.core.chunked_seq_QMARK_(seq__11790_11891__$1)){
var c__4550__auto___11892 = cljs.core.chunk_first(seq__11790_11891__$1);
var G__11893 = cljs.core.chunk_rest(seq__11790_11891__$1);
var G__11894 = c__4550__auto___11892;
var G__11895 = cljs.core.count(c__4550__auto___11892);
var G__11896 = (0);
seq__11790_11875 = G__11893;
chunk__11791_11876 = G__11894;
count__11792_11877 = G__11895;
i__11793_11878 = G__11896;
continue;
} else {
var bound_id_11897 = cljs.core.first(seq__11790_11891__$1);
var vec__11812_11898 = cljs.core.cst$kw$position.cljs$core$IFn$_invoke$arity$1(a_11874);
var ax_11899 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11812_11898,(0),null);
var ay_11900 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11812_11898,(1),null);
var vec__11815_11901 = cljs.core.cst$kw$position.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(agent_map,bound_id_11897));
var bx_11902 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11815_11901,(0),null);
var by_11903 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11815_11901,(1),null);
if(((pucks.vec2D.length(pucks.vec2D._v.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ax_11899,ay_11900], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bx_11902,by_11903], null)], 0))) - (1)) < pucks.vec2D.distance(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ax_11899,ay_11900], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bx_11902,by_11903], null)))){
quil.core.line.cljs$core$IFn$_invoke$arity$4(ax_11899,ay_11900,bx_11902,by_11903);
} else {
}


var G__11904 = cljs.core.next(seq__11790_11891__$1);
var G__11905 = null;
var G__11906 = (0);
var G__11907 = (0);
seq__11790_11875 = G__11904;
chunk__11791_11876 = G__11905;
count__11792_11877 = G__11906;
i__11793_11878 = G__11907;
continue;
}
} else {
}
}
break;
}


var G__11908 = seq__11730_11870;
var G__11909 = chunk__11731_11871;
var G__11910 = count__11732_11872;
var G__11911 = (i__11733_11873 + (1));
seq__11730_11870 = G__11908;
chunk__11731_11871 = G__11909;
count__11732_11872 = G__11910;
i__11733_11873 = G__11911;
continue;
} else {
var temp__5735__auto___11912 = cljs.core.seq(seq__11730_11870);
if(temp__5735__auto___11912){
var seq__11730_11913__$1 = temp__5735__auto___11912;
if(cljs.core.chunked_seq_QMARK_(seq__11730_11913__$1)){
var c__4550__auto___11914 = cljs.core.chunk_first(seq__11730_11913__$1);
var G__11915 = cljs.core.chunk_rest(seq__11730_11913__$1);
var G__11916 = c__4550__auto___11914;
var G__11917 = cljs.core.count(c__4550__auto___11914);
var G__11918 = (0);
seq__11730_11870 = G__11915;
chunk__11731_11871 = G__11916;
count__11732_11872 = G__11917;
i__11733_11873 = G__11918;
continue;
} else {
var a_11919 = cljs.core.first(seq__11730_11913__$1);
var seq__11818_11920 = cljs.core.seq(cljs.core.cst$kw$bound_DASH_to.cljs$core$IFn$_invoke$arity$1(a_11919));
var chunk__11819_11921 = null;
var count__11820_11922 = (0);
var i__11821_11923 = (0);
while(true){
if((i__11821_11923 < count__11820_11922)){
var bound_id_11924 = chunk__11819_11921.cljs$core$IIndexed$_nth$arity$2(null,i__11821_11923);
var vec__11834_11925 = cljs.core.cst$kw$position.cljs$core$IFn$_invoke$arity$1(a_11919);
var ax_11926 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11834_11925,(0),null);
var ay_11927 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11834_11925,(1),null);
var vec__11837_11928 = cljs.core.cst$kw$position.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(agent_map,bound_id_11924));
var bx_11929 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11837_11928,(0),null);
var by_11930 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11837_11928,(1),null);
if(((pucks.vec2D.length(pucks.vec2D._v.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ax_11926,ay_11927], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bx_11929,by_11930], null)], 0))) - (1)) < pucks.vec2D.distance(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ax_11926,ay_11927], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bx_11929,by_11930], null)))){
quil.core.line.cljs$core$IFn$_invoke$arity$4(ax_11926,ay_11927,bx_11929,by_11930);
} else {
}


var G__11931 = seq__11818_11920;
var G__11932 = chunk__11819_11921;
var G__11933 = count__11820_11922;
var G__11934 = (i__11821_11923 + (1));
seq__11818_11920 = G__11931;
chunk__11819_11921 = G__11932;
count__11820_11922 = G__11933;
i__11821_11923 = G__11934;
continue;
} else {
var temp__5735__auto___11935__$1 = cljs.core.seq(seq__11818_11920);
if(temp__5735__auto___11935__$1){
var seq__11818_11936__$1 = temp__5735__auto___11935__$1;
if(cljs.core.chunked_seq_QMARK_(seq__11818_11936__$1)){
var c__4550__auto___11937 = cljs.core.chunk_first(seq__11818_11936__$1);
var G__11938 = cljs.core.chunk_rest(seq__11818_11936__$1);
var G__11939 = c__4550__auto___11937;
var G__11940 = cljs.core.count(c__4550__auto___11937);
var G__11941 = (0);
seq__11818_11920 = G__11938;
chunk__11819_11921 = G__11939;
count__11820_11922 = G__11940;
i__11821_11923 = G__11941;
continue;
} else {
var bound_id_11942 = cljs.core.first(seq__11818_11936__$1);
var vec__11840_11943 = cljs.core.cst$kw$position.cljs$core$IFn$_invoke$arity$1(a_11919);
var ax_11944 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11840_11943,(0),null);
var ay_11945 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11840_11943,(1),null);
var vec__11843_11946 = cljs.core.cst$kw$position.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(agent_map,bound_id_11942));
var bx_11947 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11843_11946,(0),null);
var by_11948 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11843_11946,(1),null);
if(((pucks.vec2D.length(pucks.vec2D._v.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ax_11944,ay_11945], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bx_11947,by_11948], null)], 0))) - (1)) < pucks.vec2D.distance(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ax_11944,ay_11945], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bx_11947,by_11948], null)))){
quil.core.line.cljs$core$IFn$_invoke$arity$4(ax_11944,ay_11945,bx_11947,by_11948);
} else {
}


var G__11949 = cljs.core.next(seq__11818_11936__$1);
var G__11950 = null;
var G__11951 = (0);
var G__11952 = (0);
seq__11818_11920 = G__11949;
chunk__11819_11921 = G__11950;
count__11820_11922 = G__11951;
i__11821_11923 = G__11952;
continue;
}
} else {
}
}
break;
}


var G__11953 = cljs.core.next(seq__11730_11913__$1);
var G__11954 = null;
var G__11955 = (0);
var G__11956 = (0);
seq__11730_11870 = G__11953;
chunk__11731_11871 = G__11954;
count__11732_11872 = G__11955;
i__11733_11873 = G__11956;
continue;
}
} else {
}
}
break;
}

return quil.core.no_stroke();
});
