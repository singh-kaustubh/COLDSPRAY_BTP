from pycaret.regression import *
import pandas as pd
import numpy as np
from pydantic import BaseModel
from colabcode import ColabCode
from fastapi import FastAPI

cc = ColabCode(port=12000, code=False)


class ModelInput(BaseModel):
    SpecificHeat: float
    ThConductivity: float
    Density: float
    ParticleSize: float
    Pressure: float
    Temperature: float
    DivergentLength: float


class ModelOutput(BaseModel):
    predictionvel: float
    predictiontemp: float


app = FastAPI()


@app.post("/predict")
def call_model(input: ModelInput) -> ModelOutput:

    data = pd.read_excel('/Users/kaustubh/nextjs-material-kit/pythonBackend/ML data.xlsx', sheet_name='Ml format')
    data1 = data
    data = data.drop('Particle Temperature', axis=1)
    s = setup(data, target='Particle Velocity',
              session_id=123, fold=5, use_gpu=True)

    sh = input.SpecificHeat
    tc = input.ThConductivity
    dens = input.Density
    ps = input.ParticleSize
    pres = input.Pressure
    temp = input.Temperature
    dl = input.DivergentLength

    exp = RegressionExperiment()
    exp.setup(data, target='Particle Velocity',
              session_id=123, fold=3, use_gpu=True)
    best = compare_models()
    holdout_pred = predict_model(best)
    inputs = [{'Specific Heat': sh, 'Th Conductivity': tc, 'Density': dens,
               'Particle Size': ps, 'Pressure': pres, 'Temperature': temp, 'Divergent Length': dl}]
    new_data = pd.DataFrame(inputs)
    new_data1 = new_data
    predictions = predict_model(best, data=new_data)
    lst = predictions['prediction_label'].tolist()
    result = lst[-1]

    # temperature starting

    data1 = data1.drop('Particle Velocity', axis=1)
    s = setup(data1, target='Particle Temperature',
              session_id=123, fold=5, use_gpu=True)
    exp1 = RegressionExperiment()
    exp1.setup(data1, target='Particle Temperature',
               session_id=123, fold=3, use_gpu=True)
    best1 = compare_models()
    holdout_pred1 = predict_model(best1)
    predictions1 = predict_model(best1, data=new_data1)
    lst1 = predictions1['prediction_label'].tolist()
    result1 = lst1[-1]

    return ModelOutput(predictionvel=result, predictiontemp=result1)


cc.run_app(app=app)
