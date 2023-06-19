import { useState } from 'react';
import { getPath, readData } from '../api/feedback';

const Feedback = (props) => {
  const [details, setDetails] = useState();
  const detailsHandler = (id) => {
    fetch(`/api/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setDetails(data.feedback);
      });
  };
  return (
    <>
      {details && <p>{details.email}</p>}
      <ul>
        {props.feedback.map((val) => (
          <li key={val.id}>
            {val.text}
            <button onClick={() => detailsHandler(val.id)}>Details</button>
          </li>
        ))}
      </ul>
    </>
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
