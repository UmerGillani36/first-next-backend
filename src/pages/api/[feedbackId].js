import { readData, getPath } from './feedback';
function handler(req, res) {
  const feedbackId = req.query.feedbackId;
  const filePath = getPath();
  const data = readData(filePath);

  const selectedFeedback = data.find((item) => item.id === feedbackId);
  res.status(200).json({ feedback: selectedFeedback });
}
export default handler;
