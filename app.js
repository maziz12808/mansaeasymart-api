require("dotenv").config()
require("./module/db.module")
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors')

var productRouter = require('./routes/product.route');
var brandRouter = require('./routes/brand.route');
var categoryRouter = require('./routes/category.route');
var couponRouter = require('./routes/coupon.route');
var customerRouter = require('./routes/customer.route');
var purchaseRouter = require('./routes/purchase.route');
var salesRouter = require('./routes/sales.route');
var shipingRouter = require('./routes/shiping.route');

var app = express();




app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



app.use('/product', productRouter);
app.use('/brand', brandRouter);
app.use('/category', categoryRouter);
app.use('/coupon', couponRouter);
app.use('/customer', customerRouter);
app.use('/purchase', purchaseRouter);
app.use('/sales', salesRouter);
app.use('/shiping', shipingRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send('error');
});

module.exports = app;
