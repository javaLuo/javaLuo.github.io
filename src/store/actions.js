const actions = {
  async add(context, payload) {
    try {
      const msg = await new Promise(res => {
        setTimeout(() => {
          res({ state: 200, message: "success", data: payload.amount });
        }, 2000);
      });
      if (msg && msg.status === 200) {
        context.commit({
          type: "addCount",
          amount: payload.amount
        });
        return msg;
      }
    } catch (e) {
      // console.log("网络错误");
    }
  }
};

export default actions;
