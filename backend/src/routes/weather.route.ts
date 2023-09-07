import express from 'express';
import { sendError, sendResponse } from '../shared/server-response';
import * as weatherService from '../services/weather.service';

const router = express.Router();

router.get('/forecast', async function (req, res) {
    let lat = Number(req.query.lat);
    let lng = Number(req.query.lng);

    let response
    try {
        response = await weatherService.getWeatherForecast(lat, lng);
    } catch (e) {
        return sendError(res, e);
    }

  return sendResponse(res, response);
});

module.exports = router;
