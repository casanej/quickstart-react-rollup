import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from '@rollup/plugin-babel';
import typescript from "rollup-plugin-typescript2";
import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";
import { nodeResolve } from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import image from '@rollup/plugin-image';
import eslint from '@rollup/plugin-eslint';
import yargs from "yargs";

const args = yargs.option('dev', {
    alias: 'd',
    type: 'boolean',
}).argv;

const dev = args.dev || process.env.ROLLUP_WATCH === 'true';
const port =  process.env.APP_PORT || 3000;

export default {
    input: "src/index.tsx",
    output: {
        file: "build/bundle.js",
        format: "iife",
        sourcemap: true,
    },
    plugins: [
        image({
            extensions: /\.(png|jpg|jpeg|gif|svg)$/,
            limit: 10000
        }),
        eslint({
           fix: true,
           throwOnWarning: false,
           throwOnError: false,
           exclude: [
               'node_modules/**',
               'build/**'
           ]
        }),
        nodeResolve({
            extensions: [".js", ".jsx", ".ts", ".tsx"],
        }),
        commonjs(),
        resolve(),
        babel({
            exclude: 'node_modules/**',
            presets: ["@babel/preset-react"],
            extensions: ['.js', '.svg', '.png', '.jpg'],
            babelHelpers: 'bundled'
        }),
        replace({
            'process.env.NODE_ENV': JSON.stringify('development'),
            preventAssignment: true
        }),
        peerDepsExternal(),
        typescript({ useTsconfigDeclarationDir: true }),
        dev && serve({
            open: false,
            verbose: true,
            contentBase: ["", "public"],
            port,
            historyApiFallback: true
        }),
        dev && livereload({ watch: "build" })
    ]
};