// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__11102){
var map__11103 = p__11102;
var map__11103__$1 = (((((!((map__11103 == null))))?(((((map__11103.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11103.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11103):map__11103);
var m = map__11103__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11103__$1,cljs.core.cst$kw$ns);
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11103__$1,cljs.core.cst$kw$name);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4131__auto__ = cljs.core.cst$kw$spec.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return [(function (){var temp__5735__auto__ = cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(cljs.core.cst$kw$protocol.cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(cljs.core.cst$kw$forms.cljs$core$IFn$_invoke$arity$1(m))){
var seq__11105_11137 = cljs.core.seq(cljs.core.cst$kw$forms.cljs$core$IFn$_invoke$arity$1(m));
var chunk__11106_11138 = null;
var count__11107_11139 = (0);
var i__11108_11140 = (0);
while(true){
if((i__11108_11140 < count__11107_11139)){
var f_11141 = chunk__11106_11138.cljs$core$IIndexed$_nth$arity$2(null,i__11108_11140);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_11141], 0));


var G__11142 = seq__11105_11137;
var G__11143 = chunk__11106_11138;
var G__11144 = count__11107_11139;
var G__11145 = (i__11108_11140 + (1));
seq__11105_11137 = G__11142;
chunk__11106_11138 = G__11143;
count__11107_11139 = G__11144;
i__11108_11140 = G__11145;
continue;
} else {
var temp__5735__auto___11146 = cljs.core.seq(seq__11105_11137);
if(temp__5735__auto___11146){
var seq__11105_11147__$1 = temp__5735__auto___11146;
if(cljs.core.chunked_seq_QMARK_(seq__11105_11147__$1)){
var c__4550__auto___11148 = cljs.core.chunk_first(seq__11105_11147__$1);
var G__11149 = cljs.core.chunk_rest(seq__11105_11147__$1);
var G__11150 = c__4550__auto___11148;
var G__11151 = cljs.core.count(c__4550__auto___11148);
var G__11152 = (0);
seq__11105_11137 = G__11149;
chunk__11106_11138 = G__11150;
count__11107_11139 = G__11151;
i__11108_11140 = G__11152;
continue;
} else {
var f_11153 = cljs.core.first(seq__11105_11147__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_11153], 0));


var G__11154 = cljs.core.next(seq__11105_11147__$1);
var G__11155 = null;
var G__11156 = (0);
var G__11157 = (0);
seq__11105_11137 = G__11154;
chunk__11106_11138 = G__11155;
count__11107_11139 = G__11156;
i__11108_11140 = G__11157;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(cljs.core.cst$kw$arglists.cljs$core$IFn$_invoke$arity$1(m))){
var arglists_11158 = cljs.core.cst$kw$arglists.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = cljs.core.cst$kw$macro.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.cst$kw$repl_DASH_special_DASH_function.cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_11158], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$quote,cljs.core.first(arglists_11158)))?cljs.core.second(arglists_11158):arglists_11158)], 0));
}
} else {
}
}

if(cljs.core.truth_(cljs.core.cst$kw$special_DASH_form.cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",cljs.core.cst$kw$doc.cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,cljs.core.cst$kw$url)){
if(cljs.core.truth_(cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(cljs.core.cst$kw$macro.cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(cljs.core.cst$kw$spec.cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(cljs.core.cst$kw$repl_DASH_special_DASH_function.cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",cljs.core.cst$kw$doc.cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(cljs.core.cst$kw$protocol.cljs$core$IFn$_invoke$arity$1(m))){
var seq__11109_11159 = cljs.core.seq(cljs.core.cst$kw$methods.cljs$core$IFn$_invoke$arity$1(m));
var chunk__11110_11160 = null;
var count__11111_11161 = (0);
var i__11112_11162 = (0);
while(true){
if((i__11112_11162 < count__11111_11161)){
var vec__11123_11163 = chunk__11110_11160.cljs$core$IIndexed$_nth$arity$2(null,i__11112_11162);
var name_11164 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11123_11163,(0),null);
var map__11126_11165 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11123_11163,(1),null);
var map__11126_11166__$1 = (((((!((map__11126_11165 == null))))?(((((map__11126_11165.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11126_11165.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11126_11165):map__11126_11165);
var doc_11167 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11126_11166__$1,cljs.core.cst$kw$doc);
var arglists_11168 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11126_11166__$1,cljs.core.cst$kw$arglists);
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_11164], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_11168], 0));

if(cljs.core.truth_(doc_11167)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_11167], 0));
} else {
}


var G__11169 = seq__11109_11159;
var G__11170 = chunk__11110_11160;
var G__11171 = count__11111_11161;
var G__11172 = (i__11112_11162 + (1));
seq__11109_11159 = G__11169;
chunk__11110_11160 = G__11170;
count__11111_11161 = G__11171;
i__11112_11162 = G__11172;
continue;
} else {
var temp__5735__auto___11173 = cljs.core.seq(seq__11109_11159);
if(temp__5735__auto___11173){
var seq__11109_11174__$1 = temp__5735__auto___11173;
if(cljs.core.chunked_seq_QMARK_(seq__11109_11174__$1)){
var c__4550__auto___11175 = cljs.core.chunk_first(seq__11109_11174__$1);
var G__11176 = cljs.core.chunk_rest(seq__11109_11174__$1);
var G__11177 = c__4550__auto___11175;
var G__11178 = cljs.core.count(c__4550__auto___11175);
var G__11179 = (0);
seq__11109_11159 = G__11176;
chunk__11110_11160 = G__11177;
count__11111_11161 = G__11178;
i__11112_11162 = G__11179;
continue;
} else {
var vec__11128_11180 = cljs.core.first(seq__11109_11174__$1);
var name_11181 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11128_11180,(0),null);
var map__11131_11182 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11128_11180,(1),null);
var map__11131_11183__$1 = (((((!((map__11131_11182 == null))))?(((((map__11131_11182.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11131_11182.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11131_11182):map__11131_11182);
var doc_11184 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11131_11183__$1,cljs.core.cst$kw$doc);
var arglists_11185 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11131_11183__$1,cljs.core.cst$kw$arglists);
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_11181], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_11185], 0));

if(cljs.core.truth_(doc_11184)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_11184], 0));
} else {
}


var G__11186 = cljs.core.next(seq__11109_11174__$1);
var G__11187 = null;
var G__11188 = (0);
var G__11189 = (0);
seq__11109_11159 = G__11186;
chunk__11110_11160 = G__11187;
count__11111_11161 = G__11188;
i__11112_11162 = G__11189;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__11133 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$args,cljs.core.cst$kw$ret,cljs.core.cst$kw$fn], null));
var chunk__11134 = null;
var count__11135 = (0);
var i__11136 = (0);
while(true){
if((i__11136 < count__11135)){
var role = chunk__11134.cljs$core$IIndexed$_nth$arity$2(null,i__11136);
var temp__5735__auto___11190__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___11190__$1)){
var spec_11191 = temp__5735__auto___11190__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_11191)], 0));
} else {
}


var G__11192 = seq__11133;
var G__11193 = chunk__11134;
var G__11194 = count__11135;
var G__11195 = (i__11136 + (1));
seq__11133 = G__11192;
chunk__11134 = G__11193;
count__11135 = G__11194;
i__11136 = G__11195;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__11133);
if(temp__5735__auto____$1){
var seq__11133__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__11133__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__11133__$1);
var G__11196 = cljs.core.chunk_rest(seq__11133__$1);
var G__11197 = c__4550__auto__;
var G__11198 = cljs.core.count(c__4550__auto__);
var G__11199 = (0);
seq__11133 = G__11196;
chunk__11134 = G__11197;
count__11135 = G__11198;
i__11136 = G__11199;
continue;
} else {
var role = cljs.core.first(seq__11133__$1);
var temp__5735__auto___11200__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___11200__$2)){
var spec_11201 = temp__5735__auto___11200__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_11201)], 0));
} else {
}


var G__11202 = cljs.core.next(seq__11133__$1);
var G__11203 = null;
var G__11204 = (0);
var G__11205 = (0);
seq__11133 = G__11202;
chunk__11134 = G__11203;
count__11135 = G__11204;
i__11136 = G__11205;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,(((t instanceof cljs.core.ExceptionInfo))?cljs.core.cst$sym$ExceptionInfo:(((t instanceof EvalError))?cljs.core.cst$sym$js_SLASH_EvalError:(((t instanceof RangeError))?cljs.core.cst$sym$js_SLASH_RangeError:(((t instanceof ReferenceError))?cljs.core.cst$sym$js_SLASH_ReferenceError:(((t instanceof SyntaxError))?cljs.core.cst$sym$js_SLASH_SyntaxError:(((t instanceof URIError))?cljs.core.cst$sym$js_SLASH_URIError:(((t instanceof Error))?cljs.core.cst$sym$js_SLASH_Error:null
)))))))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$message,msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__11206 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__11207 = cljs.core.ex_cause(t);
via = G__11206;
t = G__11207;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$via,cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),cljs.core.cst$kw$trace,null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cause,root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.cst$kw$clojure$error_SLASH_phase.cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$phase,phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__11210 = datafied_throwable;
var map__11210__$1 = (((((!((map__11210 == null))))?(((((map__11210.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11210.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11210):map__11210);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11210__$1,cljs.core.cst$kw$via);
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11210__$1,cljs.core.cst$kw$trace);
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__11210__$1,cljs.core.cst$kw$phase,cljs.core.cst$kw$execution);
var map__11211 = cljs.core.last(via);
var map__11211__$1 = (((((!((map__11211 == null))))?(((((map__11211.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11211.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11211):map__11211);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11211__$1,cljs.core.cst$kw$type);
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11211__$1,cljs.core.cst$kw$message);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11211__$1,cljs.core.cst$kw$data);
var map__11212 = data;
var map__11212__$1 = (((((!((map__11212 == null))))?(((((map__11212.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11212.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11212):map__11212);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11212__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_problems);
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11212__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_fn);
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11212__$1,cljs.core.cst$kw$cljs$spec$test$alpha_SLASH_caller);
var map__11213 = cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__11213__$1 = (((((!((map__11213 == null))))?(((((map__11213.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11213.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11213):map__11213);
var top_data = map__11213__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11213__$1,cljs.core.cst$kw$clojure$error_SLASH_source);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__11218 = phase;
var G__11218__$1 = (((G__11218 instanceof cljs.core.Keyword))?G__11218.fqn:null);
switch (G__11218__$1) {
case "read-source":
var map__11219 = data;
var map__11219__$1 = (((((!((map__11219 == null))))?(((((map__11219.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11219.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11219):map__11219);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11219__$1,cljs.core.cst$kw$clojure$error_SLASH_line);
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11219__$1,cljs.core.cst$kw$clojure$error_SLASH_column);
var G__11221 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__11221__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__11221,cljs.core.cst$kw$clojure$error_SLASH_source,source):G__11221);
var G__11221__$2 = (cljs.core.truth_((function (){var fexpr__11222 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__11222.cljs$core$IFn$_invoke$arity$1 ? fexpr__11222.cljs$core$IFn$_invoke$arity$1(source) : fexpr__11222.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__11221__$1,cljs.core.cst$kw$clojure$error_SLASH_source):G__11221__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__11221__$2,cljs.core.cst$kw$clojure$error_SLASH_cause,message);
} else {
return G__11221__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__11223 = top_data;
var G__11223__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__11223,cljs.core.cst$kw$clojure$error_SLASH_source,source):G__11223);
var G__11223__$2 = (cljs.core.truth_((function (){var fexpr__11224 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__11224.cljs$core$IFn$_invoke$arity$1 ? fexpr__11224.cljs$core$IFn$_invoke$arity$1(source) : fexpr__11224.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__11223__$1,cljs.core.cst$kw$clojure$error_SLASH_source):G__11223__$1);
var G__11223__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__11223__$2,cljs.core.cst$kw$clojure$error_SLASH_class,type):G__11223__$2);
var G__11223__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__11223__$3,cljs.core.cst$kw$clojure$error_SLASH_cause,message):G__11223__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__11223__$4,cljs.core.cst$kw$clojure$error_SLASH_spec,data);
} else {
return G__11223__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__11225 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11225,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11225,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11225,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11225,(3),null);
var G__11228 = top_data;
var G__11228__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__11228,cljs.core.cst$kw$clojure$error_SLASH_line,line):G__11228);
var G__11228__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__11228__$1,cljs.core.cst$kw$clojure$error_SLASH_source,file):G__11228__$1);
var G__11228__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__11228__$2,cljs.core.cst$kw$clojure$error_SLASH_symbol,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__11228__$2);
var G__11228__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__11228__$3,cljs.core.cst$kw$clojure$error_SLASH_class,type):G__11228__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__11228__$4,cljs.core.cst$kw$clojure$error_SLASH_cause,message);
} else {
return G__11228__$4;
}

break;
case "execution":
var vec__11229 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11229,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11229,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11229,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11229,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (vec__11229,source__$1,method,file,line,G__11218,G__11218__$1,map__11210,map__11210__$1,via,trace,phase,map__11211,map__11211__$1,type,message,data,map__11212,map__11212__$1,problems,fn,caller,map__11213,map__11213__$1,top_data,source){
return (function (p1__11209_SHARP_){
var or__4131__auto__ = (p1__11209_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
var fexpr__11233 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__11233.cljs$core$IFn$_invoke$arity$1 ? fexpr__11233.cljs$core$IFn$_invoke$arity$1(p1__11209_SHARP_) : fexpr__11233.call(null,p1__11209_SHARP_));
}
});})(vec__11229,source__$1,method,file,line,G__11218,G__11218__$1,map__11210,map__11210__$1,via,trace,phase,map__11211,map__11211__$1,type,message,data,map__11212,map__11212__$1,problems,fn,caller,map__11213,map__11213__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$file.cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = cljs.core.cst$kw$line.cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__11234 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$clojure$error_SLASH_class,type], null);
var G__11234__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__11234,cljs.core.cst$kw$clojure$error_SLASH_line,err_line):G__11234);
var G__11234__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__11234__$1,cljs.core.cst$kw$clojure$error_SLASH_cause,message):G__11234__$1);
var G__11234__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__11234__$2,cljs.core.cst$kw$clojure$error_SLASH_symbol,(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__11234__$2);
var G__11234__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__11234__$3,cljs.core.cst$kw$clojure$error_SLASH_source,file__$1):G__11234__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__11234__$4,cljs.core.cst$kw$clojure$error_SLASH_spec,data);
} else {
return G__11234__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__11218__$1)].join('')));

}
})(),cljs.core.cst$kw$clojure$error_SLASH_phase,phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__11238){
var map__11239 = p__11238;
var map__11239__$1 = (((((!((map__11239 == null))))?(((((map__11239.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11239.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11239):map__11239);
var triage_data = map__11239__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11239__$1,cljs.core.cst$kw$clojure$error_SLASH_phase);
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11239__$1,cljs.core.cst$kw$clojure$error_SLASH_source);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11239__$1,cljs.core.cst$kw$clojure$error_SLASH_line);
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11239__$1,cljs.core.cst$kw$clojure$error_SLASH_column);
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11239__$1,cljs.core.cst$kw$clojure$error_SLASH_symbol);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11239__$1,cljs.core.cst$kw$clojure$error_SLASH_class);
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11239__$1,cljs.core.cst$kw$clojure$error_SLASH_cause);
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11239__$1,cljs.core.cst$kw$clojure$error_SLASH_spec);
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = source;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = line;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4131__auto__ = class$;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__11241 = phase;
var G__11241__$1 = (((G__11241 instanceof cljs.core.Keyword))?G__11241.fqn:null);
switch (G__11241__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__11242 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__11243 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__11244 = loc;
var G__11245 = (cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__11246_11279 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__11247_11280 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__11248_11281 = true;
var _STAR_print_fn_STAR__temp_val__11249_11282 = ((function (_STAR_print_newline_STAR__orig_val__11246_11279,_STAR_print_fn_STAR__orig_val__11247_11280,_STAR_print_newline_STAR__temp_val__11248_11281,sb__4661__auto__,G__11242,G__11243,G__11244,G__11241,G__11241__$1,loc,class_name,simple_class,cause_type,format,map__11239,map__11239__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__11246_11279,_STAR_print_fn_STAR__orig_val__11247_11280,_STAR_print_newline_STAR__temp_val__11248_11281,sb__4661__auto__,G__11242,G__11243,G__11244,G__11241,G__11241__$1,loc,class_name,simple_class,cause_type,format,map__11239,map__11239__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__11248_11281;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__11249_11282;

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,cljs.core.cst$kw$cljs$spec$alpha_SLASH_problems,((function (_STAR_print_newline_STAR__orig_val__11246_11279,_STAR_print_fn_STAR__orig_val__11247_11280,_STAR_print_newline_STAR__temp_val__11248_11281,_STAR_print_fn_STAR__temp_val__11249_11282,sb__4661__auto__,G__11242,G__11243,G__11244,G__11241,G__11241__$1,loc,class_name,simple_class,cause_type,format,map__11239,map__11239__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR__orig_val__11246_11279,_STAR_print_fn_STAR__orig_val__11247_11280,_STAR_print_newline_STAR__temp_val__11248_11281,_STAR_print_fn_STAR__temp_val__11249_11282,sb__4661__auto__,G__11242,G__11243,G__11244,G__11241,G__11241__$1,loc,class_name,simple_class,cause_type,format,map__11239,map__11239__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__11236_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__11236_SHARP_,cljs.core.cst$kw$in);
});})(_STAR_print_newline_STAR__orig_val__11246_11279,_STAR_print_fn_STAR__orig_val__11247_11280,_STAR_print_newline_STAR__temp_val__11248_11281,_STAR_print_fn_STAR__temp_val__11249_11282,sb__4661__auto__,G__11242,G__11243,G__11244,G__11241,G__11241__$1,loc,class_name,simple_class,cause_type,format,map__11239,map__11239__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__11246_11279,_STAR_print_fn_STAR__orig_val__11247_11280,_STAR_print_newline_STAR__temp_val__11248_11281,_STAR_print_fn_STAR__temp_val__11249_11282,sb__4661__auto__,G__11242,G__11243,G__11244,G__11241,G__11241__$1,loc,class_name,simple_class,cause_type,format,map__11239,map__11239__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__11247_11280;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__11246_11279;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__11242,G__11243,G__11244,G__11245) : format.call(null,G__11242,G__11243,G__11244,G__11245));

break;
case "macroexpansion":
var G__11250 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__11251 = cause_type;
var G__11252 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__11253 = loc;
var G__11254 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__11250,G__11251,G__11252,G__11253,G__11254) : format.call(null,G__11250,G__11251,G__11252,G__11253,G__11254));

break;
case "compile-syntax-check":
var G__11255 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__11256 = cause_type;
var G__11257 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__11258 = loc;
var G__11259 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__11255,G__11256,G__11257,G__11258,G__11259) : format.call(null,G__11255,G__11256,G__11257,G__11258,G__11259));

break;
case "compilation":
var G__11260 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__11261 = cause_type;
var G__11262 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__11263 = loc;
var G__11264 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__11260,G__11261,G__11262,G__11263,G__11264) : format.call(null,G__11260,G__11261,G__11262,G__11263,G__11264));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__11265 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__11266 = symbol;
var G__11267 = loc;
var G__11268 = (function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__11269_11283 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__11270_11284 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__11271_11285 = true;
var _STAR_print_fn_STAR__temp_val__11272_11286 = ((function (_STAR_print_newline_STAR__orig_val__11269_11283,_STAR_print_fn_STAR__orig_val__11270_11284,_STAR_print_newline_STAR__temp_val__11271_11285,sb__4661__auto__,G__11265,G__11266,G__11267,G__11241,G__11241__$1,loc,class_name,simple_class,cause_type,format,map__11239,map__11239__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__11269_11283,_STAR_print_fn_STAR__orig_val__11270_11284,_STAR_print_newline_STAR__temp_val__11271_11285,sb__4661__auto__,G__11265,G__11266,G__11267,G__11241,G__11241__$1,loc,class_name,simple_class,cause_type,format,map__11239,map__11239__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__11271_11285;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__11272_11286;

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,cljs.core.cst$kw$cljs$spec$alpha_SLASH_problems,((function (_STAR_print_newline_STAR__orig_val__11269_11283,_STAR_print_fn_STAR__orig_val__11270_11284,_STAR_print_newline_STAR__temp_val__11271_11285,_STAR_print_fn_STAR__temp_val__11272_11286,sb__4661__auto__,G__11265,G__11266,G__11267,G__11241,G__11241__$1,loc,class_name,simple_class,cause_type,format,map__11239,map__11239__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR__orig_val__11269_11283,_STAR_print_fn_STAR__orig_val__11270_11284,_STAR_print_newline_STAR__temp_val__11271_11285,_STAR_print_fn_STAR__temp_val__11272_11286,sb__4661__auto__,G__11265,G__11266,G__11267,G__11241,G__11241__$1,loc,class_name,simple_class,cause_type,format,map__11239,map__11239__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__11237_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__11237_SHARP_,cljs.core.cst$kw$in);
});})(_STAR_print_newline_STAR__orig_val__11269_11283,_STAR_print_fn_STAR__orig_val__11270_11284,_STAR_print_newline_STAR__temp_val__11271_11285,_STAR_print_fn_STAR__temp_val__11272_11286,sb__4661__auto__,G__11265,G__11266,G__11267,G__11241,G__11241__$1,loc,class_name,simple_class,cause_type,format,map__11239,map__11239__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__11269_11283,_STAR_print_fn_STAR__orig_val__11270_11284,_STAR_print_newline_STAR__temp_val__11271_11285,_STAR_print_fn_STAR__temp_val__11272_11286,sb__4661__auto__,G__11265,G__11266,G__11267,G__11241,G__11241__$1,loc,class_name,simple_class,cause_type,format,map__11239,map__11239__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__11270_11284;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__11269_11283;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__11265,G__11266,G__11267,G__11268) : format.call(null,G__11265,G__11266,G__11267,G__11268));
} else {
var G__11273 = "Execution error%s at %s(%s).\n%s\n";
var G__11274 = cause_type;
var G__11275 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__11276 = loc;
var G__11277 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__11273,G__11274,G__11275,G__11276,G__11277) : format.call(null,G__11273,G__11274,G__11275,G__11276,G__11277));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__11241__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});
