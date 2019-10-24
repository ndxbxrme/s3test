

AWS = require('aws-sdk');

S3 = new AWS.S3();
AWS.config.region = '';
AWS.config.bucket = ''
AWS.config.accessKeyId = '';
AWS.config.secretAccessKey = '';
S3.listObjects({Bucket:AWS.config.bucket, Prefix:''}, function(e, r) {
  console.log(e, r);
});