"use strict";
const mode = "production";
const nodeExternals = require("webpack-node-externals");
const enabledSourceMap = mode === "development";
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {
    mode:mode,
    devtool:"source-map",
    optimization:{
        minimizer:[
            new TerserPlugin({
                extractComments: "all",
                sourceMap: true,
                terserOptions:{
                    compress:{
                        drop_console:true,//production modeでconsole.log消えます
                    }
                }
            }),
        ],
    },
    target:"node",
    externals:[nodeExternals()],
    context:path.resolve(__dirname,"src"),
    entry:"./js/main.tsx",
    output:{
        path:`${__dirname}/dist`,
        filename:"[name]Min.js"
    },

    module:{
        rules:[
            {
                test:/\.tsx?$/,
                use:"ts-loader"
            },
            {
                test:/\.scss/,
                use:[
                    {
                        loader:MiniCssExtractPlugin.loader,
                    },
                    {
                        loader:"css-loader",
                        options:{
                            url:false,//css内で画像をハンドルさせる
                            sourceMap:enabledSourceMap,
                        }
                    },
                    {
                        loader:"postcss-loader",
                        options:{
                            sourceMap:enabledSourceMap,
                            postcssOptions:{
                                plugins:[
                                    require("autoprefixer")({
                                        grid:true
                                    })
                                ]
                            }
                        }
                    },
                    {
                        loader:"sass-loader",
                        options:{
                            sourceMap:enabledSourceMap
                        }
                    }
                ]
            },
        ]
    },
    resolve:{
        extensions:[".ts",".tsx",".js",".json"]
    },
    plugins:[
        new MiniCssExtractPlugin({
        filename:"styleMin.css",
        })
    ]
}