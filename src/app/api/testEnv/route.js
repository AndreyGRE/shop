import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req, res) {
  res.status(200).json({
    shopId: process.env.YOOKASSA_SHOP_ID || "undefined",
    secretKey: process.env.YOOKASSA_SECRET_KEY_TEST ? "exists" : "undefined",
  });
}