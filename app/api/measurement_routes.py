from flask import Blueprint, jsonify
from app.models import Measurement, db


measurement_routes = Blueprint('measurements', __name__)


@measurement_routes.route("")
def measurements():
    measurements_query = db.session.query(Measurement).all()

    measurements = [{**measurement.to_dict()}
                    for measurement in measurements_query]

    measurement_options = [
        {"value": m["id"], "label": m["name"]}
        for m in measurements]

    return jsonify(measurement_options)
