import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import { useSetAtom } from 'jotai';
import { userTokenAtom } from '../../atoms/userTokenAtom';
import { userIdAtom } from '../../atoms/userIdAtom';
import './signinstyle.css';

function SigninForm() {
  const setUserToken = useSetAtom(userTokenAtom);
  const setUserId = useSetAtom(userIdAtom)
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const InitialValues = { email: "",  pseudo: "", password: "" };
  const [formValues, setFormValues] = useState(InitialValues);
  const [formErrors] = useState({})
  const [, setIsSubmit] = useState(false)

  const handleChange = (event) =>{
    const { id, value } = event.target

    setFormValues({...formValues, [id] : value })

    console.log(formValues)

  }

  useEffect(() => {
    console.log(formErrors)
    if (Object.keys(formErrors).length === 0 && setIsSubmit){
      console.log(formValues)
    }

  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setSuccess('');
    setIsSubmit(true)

    const email = formValues.email;
    const pseudo = formValues.pseudo
    const password = formValues.password;

    // const url = 'http://localhost:3000/users/sign_in'
    const url = 'https://bibloback.fly.dev/users/sign_in'

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user: {
            email: email,
            pseudo: pseudo,
            password: password,
          }
        }),
      });

      if (response.ok) {
        const token = await response.headers.get("Authorization");
        setUserToken(token);
        const responseData = await response.json();
        setUserId(responseData.user.id);

       setSuccess('Login avec succès!'); // Set success flash message
      } else {
        setError("L'email, le pseudo et le mot de passe ne correspondent pas ! Rééssaie ! ");
      }
    } catch (error) {
      setError("Le serveur n'est pas accessible pour le moment, veuillez essayer dans quelques instants !");
    }
    // <disconnectUser /> aller chercher dans la branche getmembers 
  };

  return (
    <form className="signinform" onSubmit={handleSubmit}>
      <h2 className='signintitle'>Se connecter</h2>
      {error && <p>{error}</p>}
      {success && <p>{success}</p>}
      <div>
        <label htmlFor="email">Email :   </label>
        <br></br>
        <input
          type="email"
          id="email"
          value={formValues.email}
          placeholder="email"
          onChange={handleChange}
          required
        />
      </div>
      <br></br>
      <div>
        <label htmlFor="password">Mot de passe :   </label>
        <br></br>
        <input
          type="password"
          id="password"
          value={formValues.password}
          placeholder="password"
          onChange={handleChange}
          required
        />
      </div>
      <br></br>
      <button type="submit">Se connecter !</button>
      <br></br>
      <p className="signUpLink"> Tu n'as pas de compte ? <Link to="/users">Inscris-toi</Link></p>

      <span> Dans le cadre du RGPD, si tu souhaites supprimer ou </span>
      <span>modifier tes données, tu peux nous contacter ici : </span>
      <a href="mailto:bibliophilea@yopmail.com">bibliophilea@yopmail.com</a>
    </form>
  );
}

export default SigninForm;
