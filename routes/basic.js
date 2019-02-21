module.exports = ({ router }) => {
  router.post('/user', async(ctx, next) => {
    try {
      ctx.body = await User.create(ctx.request.body);
    }
    catch (err) {
      ctx.status = 400;
      ctx.body = err;
    }
  });
  };