import { getPath, readData } from '../api/feedback';

const Feedback = (props) => {
  return (
    <ul>
      {props.feedback.map((val) => (
        <li key={val.id}>{val.text}</li>
      ))}
    </ul>
  );
};

export async function getStaticProps() {
  const filePath = getPath();
  const data = readData(filePath);

  return {
    props: { feedback: data },
  };
}
export default Feedback;
