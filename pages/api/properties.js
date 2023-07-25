import axios from "axios";

export default async function handler(req, res) {
  const options = {
    method: "GET",
    url: "https://realty-in-us.p.rapidapi.com/properties/list-for-sale",
    params: {
      state_code: req.query.state_code,
      city: req.query.city,
      offset: "0",
      limit: "20",
      sort: req.query.sort,
      beds_min: req.query.beds,
    },
    headers: {
      "x-rapidapi-host": "realty-in-us.p.rapidapi.com",
      "x-rapidapi-key": "4ad34a19c4msh29bdb34e9fa8279p186e67jsn27651f54f44e",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      res.status(200).json(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
}
