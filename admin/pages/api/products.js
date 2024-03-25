import mongooseConnect from "@/app/lib/mongoose";
import Product from "@/app/models/Product";

export default async function handle(req, res) {
  const { method } = req;

  await mongooseConnect();

  if (method === "GET") {
    
    if (req.query?.id) {
      res.json(await Product.findOne({ _id: req.query.id }));
    } else {
      res.json(await Product.find());
    }
  }

  if (method === "POST") {
    const { title, description, price, quantity } = req.body;

    const productDoc = await Product.create({
      title,
      description,
      price,
      quantity,
    });
    res.json(productDoc);
  }
}
