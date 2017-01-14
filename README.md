# Create ObjectId (mongodb) with specific timestamp

This is mainly useful for faking data

The [mongodb](https://www.npmjs.com/package/mongodb) package has a function
for creating Object Id's with a specific timestamp as well, but it fills the
rest with zeroes which is impractical for creating sample data.

```js
var ObjectId = require('mongodb').ObjectId;
var fromDate = require('object-id-with-time');

ObjectId.createFromTime(Date('2015-09-20T15:20:17Z') / 1000);
// -> ObjectId('55feceb10000000000000000')

fromDate(Date('2015-09-20T15:20:17Z'));
// -> ObjectId('55feceb10692accd3612ca31')
```
