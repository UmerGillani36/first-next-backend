import { useRef } from 'react';
export default function Home() {
  const emailRef = useRef();
  const feedbackRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const feedback = feedbackRef.current.value;
    const reqBody = { email: email, text: feedback };
    fetch('/api/feedback', {
      method: 'POST',
      body: JSON.stringify(reqBody),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => console.log('data', data));
  };
  return (
    <>
      <h1>This is Home Page</h1>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="email">Your Email Address</label>
          <input id="email" type="email" ref={emailRef}></input>
        </div>

        <div>
          <label htmlFor="feedback">Your Feedback</label>
          <textarea id="feedback" rows={5} ref={feedbackRef}></textarea>
        </div>
        <button>Send Feedback</button>
      </form>
    </>
  );
}
