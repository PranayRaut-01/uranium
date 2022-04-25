const axios = require("axios");

const getVaccineSession = async function (req, res) {
  try {
    let id = req.query.district_id;
    let date = req.query.date;
    let options = {
      method: "get",
      url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${id}&date=${date}`,
    };
    let result = await axios(options);
    let data = result.data;
    res.status(200).send({ msg: data });
  } catch (err) {
    res.status(500).send({ data: err.message });
  }
};

const getWhether = async function (req, res) {
  try {
    let city = req.query.q;
    let id = req.query.appid;
    let options = {
      method: "get",
      url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${id}`,
    };
    let result = await axios(options);
    let data = result.data.main.temp;
    res.status(200).send({ msg: `The temp is:${data}` });
  } catch (err) {
    res.status(500).send({ data: err.message });
  }
};

const sortedCities = async function (req, res) {
  try {
    let arr = [
      "Bengaluru",
      "Mumbai",
      "Delhi",
      "Kolkata",
      "Chennai",
      "London",
      "Moscow",
    ];
    let arr1 = [];
    for (let i = 0; i < arr.length; i++) {
      let object = { city: arr[i] };
      let options = {
        method: "get",
        url: `http://api.openweathermap.org/data/2.5/weather?q=${arr[i]}&appid=3964c8c35f41a6698569a638359e2416`,
      };
      let result = await axios(options);
      let data = result.data.main.temp;
      object.temp = data;
      arr1.push(object);
    }
    arr1.sort((a, b) => a.temp - b.temp);
    res.status(200).send({ msg: arr1 });
  } catch {
    res.status(500).send({ data: err.message });
  }
};

const getMemes = async function (req, res) {
  try {
    let id = req.query.username;
    let pass = req.query.password;
    let text0 = req.query.text0;
    let text1 = req.query.text1;
    let tempId = req.query.template_id;

    let options = {
      method: "post",
      url: `http://api.imgflip.com/caption_image?template_id=${tempId}&password=${pass}&username=${id}&text0=${text0}&text1=${text1}`,
    };
    let result = await axios(options);
    let data = result.data;
    res.status(200).send({ msg: data });
  } catch {
    res.status(500).send({ data: err.message });
  }
};

module.exports.getVaccineSession = getVaccineSession;
module.exports.getWhether = getWhether;
module.exports.getMemes = getMemes;
module.exports.sortedCities = sortedCities;
