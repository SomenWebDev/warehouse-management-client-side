import React from "react";

const Blogs = () => {
  return (
    <div className="container">
      <div>
        <h1>Difference between JavaScript and NodeJs</h1>
        <p>
          JavaScript is a high level programming language.It is a scripting
          language.It can be only used in browser and used in client side.It
          interacts with html & css/It is used for front end development.On the
          other hand NodeJs is a run time environment.No browser needed for
          running NodeJs.Node js does not have abality to play with dom.It is
          mainly used in server side development.{" "}
        </p>
        <div>
          <h1>Difference between SQL vs NoSQL </h1>
          <p>
            The main difference between SQL and NoSQL are .1.SQL databases are
            relational & NoSQl databases are non relational. <br />
            2.SQL databases are table based while NoSQL databases are based on
            key value pairs,document based. <br />
            3.SQL databases are verticaly scalable on the other hand NoSQL
            databases are horizontally scalable. <br />
            4.Some example of the SQL databases are MySQL and Oracle.Some of the
            examle of the NoSQL databases are Redis,MongoDb.
          </p>
        </div>
        <div>
          <h1>When should you use nodejs and when should you use mongodb?</h1>
          <p>
            Node js and mongodb are 2 different technologies.Their role are
            different.If I want to build a api then I will use node js and I
            will use mongodb for store the data.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
