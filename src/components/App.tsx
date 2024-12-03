import { useState } from 'react';

function App() {
  const [fullName, setFullName] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    console.log({
      fullName,
      username,
      email,
      address,
      phoneNumber
    });
  }

  return (
    <>
      <form onSubmit={submit}>
        <input
          value={fullName}
          onChange={(event) => {
            setFullName(event.target.value);
          }}
          placeholder='Full Name'
        />
        <input
          value={username}
          onChange={(event) => {
            setUsername(event.target.value);
          }}
          placeholder='Username'
        />
        <input
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          placeholder='Email'
        />
        <input
          value={address}
          onChange={(event) => {
            setAddress(event.target.value);
          }}
          placeholder='Address'
        />
        <input
          value={phoneNumber}
          onChange={(event) => {
            setPhoneNumber(event.target.value);
          }}
          placeholder='Phone Number'
        />
        <button type='submit'>Submit</button>
      </form>
    </>
  );
}

export default App;
