export default (store) => (next) => (action) => {
  const orderBy = action.meta && action.meta.orderBy;
  if (orderBy && action.payload) {
    const { key, isDate } = orderBy;
    const order = Object.keys(action.payload).sort((a, b) => {
      let x = a[key];
      let y = b[key];
      if (isDate) {
        x = Date(x);
        y = Date(y);
      }
      return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
    return next({ ...action, order });
  }
  return next(action);
}
