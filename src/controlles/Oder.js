import { OderModel } from "../Model/OderShema.js";

export const getOder = async (req, res) => {
  try {
    const Oder = await OderModel.find();
    res.status(200).json(Oder);
  } catch (error) {
    res.status(500).json({ success: false });
  }
};

export const CreateOde = async (req, res) => {
  const NewOde = req.body;
  try {
    const Ode = await new OderModel(NewOde);
    await Ode.save();
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false });
  }
};

export const UpdateOde = async (req, res) => {
  const UpdateOde = req.body;
  try {
    const Ode = await OderModel.findByIdAndUpdate(
      { _id: UpdateOde._id },
      UpdateOde,
      { new: true }
    );
    await Ode.save();
    const Oder = await OderModel.find();
    res.status(200).json(Oder);
  } catch (error) {
    res.status(500).json({ false: false });
  }
};

export const DeleteOde = async (req, res) => {
  const { _id } = req.body;
  try {
    const Ode = await OderModel.findById({ _id: _id }).exec();
    await Ode.remove();
    const Oder = await OderModel.find().exec();
    res.status(200).json(Oder);
  } catch (error) {
    res.status(500).json({ false: false });
  }
};
