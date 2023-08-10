// const loaderUtils = require('loader-utils')


module.exports = function(source, sourceMaps) { 

    // 获取到用户给当前 Loader 传入的 options
    // const options = loaderUtils.getOptions(this)
    // console.log('options-->', options)

    // 开始缓存
    /* 
    如果为每个构建重新执行重复的转换操作，这样Webpack构建可能会变得非常慢。
    Webpack 默认会缓存所有loader的处理结果，也就是说，当待处理的文件或者依赖的文件没有变化时，不会再次调用对应的loader进行转换操作
    */
    this.cacheable && this.cacheable();

    // 关闭缓存
    // this.cacheable(false);


    /* 
    在某些情况下，转换步骤只能异步完成。
    例如，您需要发出网络请求以获取结果。 如果使用同步方式，网络请求会阻塞整个构建，导致构建非常缓慢。
    */
    // 告诉 Webpack 本次转换是异步的，Loader 会在 callback 中回调结果
    // var callback = this.async()
    // // someAsyncOperation 代表一些异步的方法
    // someAsyncOperation(source, function (err, result, sourceMaps, ast) {
    //     // 通过 callback 返回异步执行后的结果
    //     callback(err, result, sourceMaps, ast)
    // })


    // 通过 this.callback 告诉 Webpack 返回的结果
    this.callback(null, source.replace('world', ', I am 吴彦祖'), sourceMaps);   
    // loader 必须返回 undefined 让 Webpack 知道 loader 返回的结果在 this.callback 中，而不是在 return
    return;
};

// 返回其它结果 this.callback
// this.callback(    
//     // 当无法转换原内容时，给 Webpack 返回一个 Error   
//     err: Error | null,    
//     // 原内容转换后的内容    
//     content: string | Buffer,    
//     // 用于把转换后的内容得出原内容的 Source Map，方便调试
//     sourceMap?: SourceMap,    
//     // 如果本次转换为原内容生成了 AST 语法树，可以把这个 AST 返回,以方便之后需要 AST 的 Loader 复用该 AST，以避免重复生成 AST，提升性能 
//     abstractSyntaxTree?: AST
// );
