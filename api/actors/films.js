const faunadb = require('faunadb');
const q = faunadb.query;
const client = new faunadb.Client({ secret: 'fnAD5_no-RACBfEBngVhP0ZFtlQM1RDOqINAqU71' });
const {
  Map,
  Paginate,
  Collection,
  Lambda,
  Get,
  Var,
  Index,
  Match,
  Update,
  Ref,
  Delete,
  Create
} = q;

module.exports = (req, res) => {
   client
   .query(Map(
    Paginate(
      Match(
        Index("1")
        )
        ),
        Lambda("Title", Get(Var("Title")))
        )).then(result => {
          res.status(200).send(result)
        })
}


