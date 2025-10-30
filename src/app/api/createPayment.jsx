export default async function handler(req, res) {
  if (req.method === "POST") {
    const { amount, comment } = req.body;

    // ЮMoney Quick Payment URL
    const shopId = process.env.YOOMONEY_SHOP_ID;
    const scid = process.env.YOOMONEY_SCID;
    const paymentUrl = `https://yoomoney.ru/quickpay/confirm.xml?receiver=${shopId}&formcomment=${encodeURIComponent(comment)}&short-dest=${encodeURIComponent(comment)}&sum=${amount}&currency=643&label=order123&quickpay-form=shop&scid=${scid}`;

    res.status(200).json({ paymentUrl });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}