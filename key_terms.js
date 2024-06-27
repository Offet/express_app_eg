/* 
1. Database migration:
...when there is the need to, export that data in compass first before you 
drop that data. eg, in the recipes-db, you can export the db before you drop 
recipes if you want to apply unique or required

2. Middleware (app.use())...the middleware comes before you use the route
*/