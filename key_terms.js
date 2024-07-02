/* 
1. Database migration:
...when there is the need to, export that data in compass first before you 
drop that data. eg, in the recipes-db, you can export the db before you drop 
recipes if you want to apply unique or required

2. Middleware (app.use())...the middleware comes before you use the route

3. Plugin: behaves like an extension and adds more functionalities to the variable you are calling
...eg is seen in categorySchema.plugin(normalize).
Here, the plugin removes the _ in the id

4. Model:

5. Schema:

6. Types:

7. in code line 7 of the recipe model (categoryId: {type: Types.ObjectId, ref: "Category", required: true},
), the 

8. Different between res.send() and res.json()
In building APIs, res.send() returns an html file, while res.json() returns any file at all
res.json is preferred because the res.send() might break when working with frontend devs

9. router: routes/navigates you to pages/endpoints (eg ("/recipes"), ("/categories"))...

10. The concept of resources: 

*/


// Steps in the documentation process
/* 
1. npm i expressOasGenerator --force
2. import expressOasGenerator module
3. In the index.js file, add exp oas generator
expressOasGenerator.handleResponses(app, {
    tags: ["categories", "recipes"],
    mongooseModels: mongoose.modelNames()
});
It should be under the // create express App
const app = express();
4. under the use router section (app.use...), type the ff
expressOasGenerator.handleRequests();
app.use((req, res) => res.redirect("/api-docs/"));
5. open anhy breowser on your laptop and type the link to your server in the format:
http://localhost:3000/api-docs/
6. Your api will show in the browser
*/

