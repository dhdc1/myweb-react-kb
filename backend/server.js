const express = require("express");
const app = express();
const cors = require("cors");
var bodyParser = require("body-parser");

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var knex = require("knex")({
  client: "mysql",
  connection: {
    host: "localhost",
    port: 3306,
    user: "root",
    password: "qazwsxedcr112233",
    database: "smarthealth"
  },
  pool: {
    afterCreate: (conn, done) => {
      conn.query("SET NAMES UTF8", err => {
        done(err, conn);
      });
    }
  }
});

function midleware(req, res, next) {
  console.log("i am midleware...");
  next();
}
app.use(midleware);
// r-1
app.get("/persons", async (req, res) => {
  let sql = "select * from person";
  let raw = await knex.raw(sql);
  res.json(raw[0]);
});

//r-2
app.get("/person/:cid", async (req, res) => {
  let sql = "select * from person where cid = ?";
  let cid = req.params.cid;
  let raw = await knex.raw(sql, [cid]);
  res.json(raw[0]);
});

//r-3
app.delete("/person/:cid", async (req, res) => {
  let sql = "delete from person where cid = ?";
  let cid = req.params.cid;
  let raw = await knex.raw(sql, [cid]);
  res.json(raw[0]);
});

//r-3
app.put("/person", async (req, res) => {
  let data = req.body;
  console.log('update',data.cid);
  //let sql = "update person set fname=?,lname=? where cid = ?";  
  //let raw = await knex.raw(sql, [data.fname,data.lname,data.cid]);
  let r = await knex("person").where({'cid': data.cid}).update({
    fname: data.fname,
    lname: data.lname
  })
  console.log(r);
  res.json({update:'ok'});
});

app.post("/new-person", async (req, res) => {
  let data = req.body;
  console.log(data);
  await knex("person").insert(data);
  res.send("ok");
});

app.post("/user", async (req, res) => {
  let data = req.body;
  console.log(data);
  let sql = "select count(id) id from user where username=?  and password=?";
  let raw = await knex.raw(sql,[data.username,data.password]);
  res.json(raw[0]);
});




app.post("/new-booking", async (req, res) => {
  // code check
  let sql_check = " SELECT count(t.id) as total  from booking	t ";
  sql_check +=
    "  where   t.bed_no = ? and t.book_date = ? and t.book_time = ? ";
  let bed_no = req.body.bed_no;
  let book_date = req.body.book_date;
  let book_time = req.body.book_time;
  let raw = await knex.raw(sql_check, [bed_no, book_date, book_time]);
  console.log("total", raw[0][0].total);
  if (raw[0][0].total > 0) {
    res.end("can not book.");
  } else {
    let data = req.body;
    // console.log(data);
    await knex("booking").insert(data);
    res.send("ok");
  }
});

app.get("/bookings", async (req, res) => {
  let sql = "select * from booking";
  let raw = await knex.raw(sql);
  res.json(raw[0]);
});

app.delete("/booking/:id", async (req, res) => {
  let sql = "delete from booking where cid = ?";
  let cid = req.params.id;
  let raw = await knex.raw(sql, [id]);
  res.json(raw[0]);
});

app.get("/booking/:id", async (req, res) => {
  let sql = "select * from booking where id = ?";
  let cid = req.params.id;
  let raw = await knex.raw(sql, [id]);
  res.json(raw[0]);
});

app.listen(4000, () => console.log("Running 4000!"));
