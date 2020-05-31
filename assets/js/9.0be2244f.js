(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{356:function(t,e,s){"use strict";s.r(e);var n=s(43),a=Object(n.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[t._v("#")]),t._v(" Configuration")]),t._v(" "),s("h2",{attrs:{id:"table-of-contents"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#table-of-contents"}},[t._v("#")]),t._v(" Table of Contents")]),t._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#table-of-contents"}},[t._v("Table of Contents")])]),s("li",[s("a",{attrs:{href:"#configuring-electron-builder"}},[t._v("Configuring Electron Builder")])]),s("li",[s("a",{attrs:{href:"#webpack-configuration"}},[t._v("Webpack Configuration")])]),s("li",[s("a",{attrs:{href:"#changing-the-output-directory"}},[t._v("Changing the Output Directory")])]),s("li",[s("a",{attrs:{href:"#typescript-options"}},[t._v("TypeScript Options")])]),s("li",[s("a",{attrs:{href:"#changing-the-file-loading-protocol"}},[t._v("Changing the File Loading Protocol")])]),s("li",[s("a",{attrs:{href:"#bundling-options"}},[t._v("Bundling Options")])]),s("li",[s("a",{attrs:{href:"#electron-s-junk-terminal-output"}},[t._v("Electron's Junk Terminal Output")])])])]),s("p"),t._v(" "),s("h2",{attrs:{id:"configuring-electron-builder"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configuring-electron-builder"}},[t._v("#")]),t._v(" Configuring Electron Builder")]),t._v(" "),s("p",[t._v("To see available options, check out "),s("a",{attrs:{href:"https://www.electron.build/configuration/configuration",target:"_blank",rel:"noopener noreferrer"}},[t._v("Electron Builder Configuration Options"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("They can be placed under the "),s("code",[t._v("builderOptions")]),t._v(" key in vue-cli-plugin-electron-builder's plugin options in "),s("code",[t._v("vue.config.js")])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// vue.config.js")]),t._v("\n\nmodule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  pluginOptions"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    electronBuilder"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      builderOptions"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// options placed here will be merged with default configuration and passed to electron-builder")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("All CLI arguments passed to "),s("code",[t._v("electron:build")]),t._v(" will be forwarded to electron-builder.")])]),t._v(" "),s("h2",{attrs:{id:"webpack-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#webpack-configuration"}},[t._v("#")]),t._v(" Webpack Configuration")]),t._v(" "),s("p",[t._v("Your regular config is extended and used for bundling the renderer process (your app). To modify your webpack config for Electron builds only, use the "),s("code",[t._v("chainWebpackRendererProcess")]),t._v(" function. To modify the webpack config for the "),s("a",{attrs:{href:"https://electronjs.org/docs/tutorial/application-architecture#main-and-renderer-processes",target:"_blank",rel:"noopener noreferrer"}},[t._v("Electron main process"),s("OutboundLink")],1),t._v(" only, use the "),s("code",[t._v("chainWebpackMainProcess")]),t._v(" function under VCP Electron Builder's plugin options in "),s("code",[t._v("vue.config.js")]),t._v(". To learn more about webpack chaining, see "),s("a",{attrs:{href:"https://github.com/mozilla-neutrino/webpack-chain",target:"_blank",rel:"noopener noreferrer"}},[t._v("webpack-chain"),s("OutboundLink")],1),t._v(". These functions work similarly to the "),s("a",{attrs:{href:"https://cli.vuejs.org/config/#chainwebpack",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("chainWebpack")]),s("OutboundLink")],1),t._v(" option provided by Vue CLI.")]),t._v(" "),s("p",[s("strong",[t._v("Note: Do NOT change the webpack output directory for the main process! See changing output directory below for more info. To change the entry point for the main process, use the "),s("code",[t._v("mainProcessFile")]),t._v(" key, DO NOT modify it through chaining.")])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// vue.config.js")]),t._v("\n\nmodule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  configureWebpack"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Configuration applied to all builds")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  pluginOptions"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    electronBuilder"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("chainWebpackMainProcess")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("config")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Chain webpack config for electron main process only")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("chainWebpackRendererProcess")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("config")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Chain webpack config for electron renderer process only")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The following example will set IS_ELECTRON to true in your app")]),t._v("\n        config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("plugin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'define'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("tap")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("args")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'IS_ELECTRON'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" args\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Use this to change the entrypoint of your app's main process")]),t._v("\n      mainProcessFile"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'src/myBackgroundFile.js'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Provide an array of files that, when changed, will recompile the main process and restart Electron")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Your main process file will be added by default")]),t._v("\n      mainProcessWatch"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'src/myFile1'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'src/myFile2'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// Provide a list of arguments that Electron will be launched with during "electron:serve",')]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// which can be accessed from the main process (src/background.js).")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// Note that it is ignored when --debug flag is used with "electron:serve", as you must launch Electron yourself')]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Command line args (excluding --debug, --dashboard, and --headless) are passed to Electron as well")]),t._v("\n      mainProcessArgs"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'--arg-name'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'arg-value'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"changing-the-output-directory"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#changing-the-output-directory"}},[t._v("#")]),t._v(" Changing the Output Directory")]),t._v(" "),s("p",[t._v("If you don't want your files outputted into dist_electron, you can choose a custom folder in VCPEB's plugin options. You can use the "),s("code",[t._v("--dest")]),t._v(" argument to change the output dir as well.")]),t._v(" "),s("p",[s("strong",[t._v("Note: It is recommended to add the new directory to your .gitignore file.")])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// vue.config.js")]),t._v("\n\nmodule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  pluginOptions"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    electronBuilder"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      outputDir"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'electron-builder-output-dir'")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"typescript-options"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#typescript-options"}},[t._v("#")]),t._v(" TypeScript Options")]),t._v(" "),s("p",[t._v("Typescript support is automatic and requires no configuration, just add the "),s("code",[t._v("@vue/typescript")]),t._v(" cli plugin. There are a few options for configuring typescript if necessary:")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// vue.config.js")]),t._v("\n\nmodule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  pluginOptions"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    electronBuilder"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// option: default // description")]),t._v("\n      disableMainProcessTypescript"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Manually disable typescript plugin for main process. Enable if you want to use regular js for the main process (src/background.js by default).")]),t._v("\n      mainProcessTypeChecking"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Manually enable type checking during webpck bundling for background file.")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("Tip")]),t._v(" "),s("p",[t._v("If you decide to add the "),s("code",[t._v("@vue/typescript")]),t._v(" plugin to your app later on, make sure to re-invoke the generator of VCP-Electron-Builder with "),s("code",[t._v("vue invoke electron-builder")]),t._v(". This will automatically insert missing type definitions to your "),s("code",[t._v("background.ts")]),t._v(" file.")])]),t._v(" "),s("h2",{attrs:{id:"changing-the-file-loading-protocol"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#changing-the-file-loading-protocol"}},[t._v("#")]),t._v(" Changing the File Loading Protocol")]),t._v(" "),s("p",[t._v("By default, the "),s("code",[t._v("app")]),t._v(" protocol is used to load files. This allows you to use ES6 "),s("code",[t._v('type="module"')]),t._v(" scripts, created by Vue CLI's "),s("a",{attrs:{href:"https://cli.vuejs.org/guide/browser-compatibility.html#modern-mode",target:"_blank",rel:"noopener noreferrer"}},[t._v("modern mode"),s("OutboundLink")],1),t._v(". If, for some reason, you would like to use a different protocol, set it with the "),s("code",[t._v("customFileProtocol")]),t._v(" option, and change it in your "),s("code",[t._v("background.js")]),t._v(" file.")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// vue.config.js")]),t._v("\nmodule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  pluginOptions"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    electronBuilder"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      customFileProtocol"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'myCustomProtocol://./'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// Make sure to add "./" to the end of the protocol')]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// If you want to use the file:// protocol, add win.loadURL(`file://${__dirname}/index.html`) to your main process file")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// In place of win.loadURL('app://./index.html'), and set customFileProtocol to './'")]),t._v("\n      customFileProtocol"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./'")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// src/background.js")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\nwin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("loadURL")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'myCustomProtocol://./index.html'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Change it here as well")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n")])])]),s("h2",{attrs:{id:"bundling-options"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bundling-options"}},[t._v("#")]),t._v(" Bundling Options")]),t._v(" "),s("p",[t._v("By default, the app is built in "),s("a",{attrs:{href:"https://cli.vuejs.org/guide/browser-compatibility.html#modern-mode",target:"_blank",rel:"noopener noreferrer"}},[t._v("modern mode"),s("OutboundLink")],1),t._v(". To disable this, use the "),s("code",[t._v("--legacy")]),t._v(" argument in the "),s("code",[t._v("electron:build")]),t._v(" command. If your app is already bundled and just needs to be built with electron-builder, pass the "),s("code",[t._v("--skipBundle")]),t._v(" arg.")]),t._v(" "),s("h2",{attrs:{id:"electron-s-junk-terminal-output"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#electron-s-junk-terminal-output"}},[t._v("#")]),t._v(" Electron's Junk Terminal Output")]),t._v(" "),s("p",[t._v("Electron will sometimes produce a bunch of junk output like so:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('2018-08-10 22:52:14.068 Electron[90710:4891777] *** WARNING: Textured window <AtomNSWindow: 0x7fd508e75020> is getting an implicitly transparent titlebar. This will break when linking against newer SDKs. Use NSWindow\'s -titlebarAppearsTransparent=YES instead.\n2018-08-10 22:52:37.919 Electron Helper[90714:4892173] Couldn\'t set selectedTextBackgroundColor from default ()\n[90789:0810/225757.360355:ERROR:CONSOLE(0)] "Failed to load https://chrome-devtools-frontend.appspot.com/serve_file/@7accc8730b0f99b5e7c0702ea89d1fa7c17bfe33/product_registry_impl/product_registry_impl_module.js: No \'Access-Control-Allow-Origin\' header is present on the requested resource. Origin \'chrome-devtools://devtools\' is therefore not allowed access. The response had HTTP status code 404.", source: chrome-devtools://devtools/bundled/inspector.html?remoteBase=https://chrome-devtools-frontend.appspot.com/serve_file/@7accc8730b0f99b5e7c0702ea89d1fa7c17bfe33/&can_dock=true&toolbarColor=rgba(223,223,223,1)&textColor=rgba(0,0,0,1)&experiments=true (0)\n[90789:0810/225757.360445:ERROR:CONSOLE(22)] "Empty response arrived for script \'https://chrome-devtools-frontend.appspot.com/serve_file/@7accc8730b0f99b5e7c0702ea89d1fa7c17bfe33/product_registry_impl/product_registry_impl_module.js\'", source: chrome-devtools://devtools/bundled/inspector.js (22)\n[90789:0810/225757.361236:ERROR:CONSOLE(105)] "Uncaught (in promise) Error: Could not instantiate: ProductRegistryImpl.Registry", source: chrome-devtools://devtools/bundled/inspector.js (105)\n[90789:0810/225757.361293:ERROR:CONSOLE(105)] "Uncaught (in promise) Error: Could not instantiate: ProductRegistryImpl.Registry", source: chrome-devtools://devtools/bundled/inspector.js (105)\nApp logging\n[90789:0810/225802.898597:ERROR:CONSOLE(105)] "Uncaught (in promise) Error: Could not instantiate: ProductRegistryImpl.Registry", source: chrome-devtools://devtools/bundled/inspector.js (105)\n[90789:0810/225803.872738:ERROR:CONSOLE(105)] "Uncaught (in promise) Error: Could not instantiate: ProductRegistryImpl.Registry", source: chrome-devtools://devtools/bundled/inspector.js (105)\n[90789:0810/225803.898240:ERROR:CONSOLE(105)] "Uncaught (in promise) Error: Could not instantiate: ProductRegistryImpl.Registry", source: chrome-devtools://devtools/bundled/inspector.js (105)\n[90789:0810/225803.898297:ERROR:CONSOLE(105)] "Uncaught (in promise) Error: Could not instantiate: ProductRegistryImpl.Registry", source: chrome-devtools://devtools/bundled/inspector.js (105)\n...\n')])])]),s("p",[t._v("VCP Electron Builder will automatically remove this for you (powered by "),s("a",{attrs:{href:"https://github.com/sindresorhus/run-electron",target:"_blank",rel:"noopener noreferrer"}},[t._v("run-electron"),s("OutboundLink")],1),t._v("). If you don't want this removed, set "),s("code",[t._v("removeElectronJunk")]),t._v(" to "),s("code",[t._v("false")]),t._v(" in plugin options:")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// vue.config.js")]),t._v("\n\nmodule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  pluginOptions"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    electronBuilder"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      removeElectronJunk"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);e.default=a.exports}}]);