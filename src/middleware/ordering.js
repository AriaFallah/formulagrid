export const ORDER_BY = Symbol('Order By');

export default (store) => (next) => (action) => {
  const orderBy = action[ORDER_BY];
  const { payload } = action;
  if (orderBy && payload) {
    const { key, isDate } = orderBy;
    const order = Object.keys(payload).sort((a, b) => {
      let x = payload[a][key];
      let y = payload[b][key];
      if (isDate) {
        x = Date(x);
        y = Date(y);
      }
      return x - y;
    });
    return next({ ...action, order });
  }
  return next(action);
}
