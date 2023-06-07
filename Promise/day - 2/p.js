function Promise(executor) {
    this.PromiseSate = 'pending';
    this.PromiseResult = null;

    const self = this;


    function resolve(data) {
        if (self.PromiseSate !== 'pending') return;
        // 	修改状态
        self.PromiseSate = 'fulfilled';
        self.PromiseResult = data;
        // 	设置对象结果值

    }

    function reject(data) {
        if (self.PromiseSate !== 'pending') return;

        self.PromiseSate = 'rejected';
        self.PromiseResult = data;
    }

    try {
        // 	同步调用【执行器函数】
        executor(resolve, reject);
    } catch (e) {
        //  修改对象的状态的data
        reject(e);
    }

}

Promise.prototype.then = function (onResolved, onReject) {
    if (this.PromiseSate === 'fulfilled') {
        onResolved(this.PromiseResult);
    }

    if (this.PromiseSate === 'rejected') {

        const result = onReject(this.PromiseResult);
    }

    // 异步任务判断
    if (this.PromiseSate === 'pending') {

    }
};