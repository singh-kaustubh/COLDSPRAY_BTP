import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

type ModelInput = {
  SpecificHeat: number;
  ThConductivity: number;
  Density: number;
  ParticleSize: number;
  Pressure: number;
  Temperature: number;
  DivergentLength: number;
};

type ModelOutput = {
  velocity: number;
  temperature: number;
};

const callModel = async (input: ModelInput): Promise<ModelOutput> => {
  const response = await axios.post("http://127.0.0.1:12000/predict", input);
  return response.data;
};
export default async (
  req: NextApiRequest,
  res: NextApiResponse<ModelOutput | { error: string }>
) => {
  try {
    const input: ModelInput = req.body;
    const output = await callModel(input);
    res.status(200).json(output);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
