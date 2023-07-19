# GoLink

GoLink is a personal short link site.

## Deployment

1. Fork this repo;
2. Deploy your fork on Vercel;
3. Create a MongoDB Atlas database or use an existed one;
4. Add your records into the database;
5. Link your database to Vercel project;
6. Redeploy your Vercel project;
7. Everything is done!

## Records

GoLink use collection `go-link.links`

Every record should have parameters `alias` and `to`.

A example:

```json
{"_id":{"$oid":"6469ac98bcb4f96ed8338996"},"alias":"/blog/","to":"https://blog.bluemangoo.net"}
```