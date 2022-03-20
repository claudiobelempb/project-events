module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '8a4cc4e392693c4ab4bf94204ad9e843'),
  },
});
