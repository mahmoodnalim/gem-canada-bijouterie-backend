(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["settings_global"],{"131c":function(t,e,n){"use strict";var s=n("e47f"),r=n.n(s);r.a},c440:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"settings-global"},[n("v-header",{attrs:{breadcrumb:t.links,"icon-link":"/"+t.currentProjectKey+"/settings",settings:""}},[n("template",{slot:"buttons"},[n("v-header-button",{attrs:{disabled:!t.editing,loading:t.saving,label:t.$t("save"),icon:"check","background-color":"button-primary-background-color","icon-color":"button-primary-text-color"},on:{click:function(e){return t.save("leave")}}})],1)],2),n("v-form",{attrs:{fields:t.fields,values:t.values,collection:"directus_settings"},on:{"stage-value":t.stageValue}}),n("v-info-sidebar",{attrs:{wide:""}},[n("span",{staticClass:"type-note"},[t._v("No settings")])])],1)},r=[],i=(n("a4d3"),n("99af"),n("4de4"),n("4160"),n("e439"),n("dbb4"),n("b64b"),n("d3b7"),n("159b"),n("ddb0"),n("ade3")),o=n("2f62");function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,s)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){Object(i["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var u={name:"SettingsGlobal",metaInfo:function(){return{title:"".concat(this.$t("settings")," | ").concat(this.$t("settings_global"))}},data:function(){return{saving:!1,edits:{}}},computed:a({},Object(o["e"])({settings:function(t){return t.settings.values},fields:function(t){return t.collections.directus_settings.fields},currentProjectKey:function(t){return t.currentProjectKey}}),{values:function(){return a({},this.settings,{},this.edits)},links:function(){return[{name:this.$t("settings"),path:"/".concat(this.currentProjectKey,"/settings")},{name:this.$t("settings_global"),path:"/".concat(this.currentProjectKey,"/settings/global")}]},editing:function(){return Object.keys(this.edits).length>0}}),methods:{stageValue:function(t){var e=t.field,n=t.value;return this.settings[e]==n?this.$delete(this.edits,e):this.$set(this.edits,e,n)},save:function(){var t=this;this.saving=!0,this.$store.dispatch("setSettings",this.edits).then((function(){t.saving=!1,t.edits={},t.$store.dispatch("updateProjectInfo",t.currentProjectKey),t.$router.push("/".concat(t.currentProjectKey,"/settings")),t.$notify({title:t.$t("settings_saved"),color:"green",iconMain:"check"})})).catch((function(e){t.saving=!1,t.$events.emit("error",{notify:e.message||t.$t("something_went_wrong_body"),error:e})}))}}},l=u,g=(n("131c"),n("2877")),d=Object(g["a"])(l,s,r,!1,null,"6ee31e04",null);e["default"]=d.exports},e47f:function(t,e,n){}}]);
//# sourceMappingURL=settings_global.e973d32e.js.map