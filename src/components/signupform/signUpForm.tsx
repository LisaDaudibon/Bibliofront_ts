import { useEffect, useState, useRef } from 'react';
import { useSetAtom } from 'jotai';
// import { useAtomValue, ExtractAtomValue } from 'jotai';
import { userTokenAtom } from '../../atoms/userTokenAtom';
import { userIdAtom } from '../../atoms/userIdAtom';
import { Link } from "react-router-dom";
import '../signinform/signinstyle.css';

interface User {
  email: string,
  pseudo: string;
  password: string;
  password_confirmation: string;
}

interface FormValues {
  email: string,
  pseudo: string;
  password: string;
  password_confirmation: string;
}

interface FormErrors {
  email?: string;
  pseudo?: string;
  password?: string;
  password_confirmation?: string;
}

function SignupForm () {
  // const userToken = useAtomValue<string>(userTokenAtom)
  const setUserToken = useSetAtom(userTokenAtom);
  const setUserId = useSetAtom(userIdAtom)
  const [, setError] = useState('');

  const InitialValues = { email: "",  pseudo: "", password: "", password_confirmation:""};
  const [formValues, setFormValues] = useState(InitialValues);
  const [formErrors, setFormErrors] = useState<FormErrors>({})
  const [, setisSubmit] = useState(false)
  const isFirstRender = useRef(true);
  const [usersPseudo, setUsersPseudo] = useState<string[]>([])
  const [usersEmail, setUsersEmail] = useState<string[]>([])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
    const { id, value } = event.target
    setFormValues({...formValues, [id] : value })
  }

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    // console.log(formErrors)
    // if (Object.keys(formErrors).length === 0 && setisSubmit){
    //   console.log(formValues)
    // }

    // const url = 'https://bibloback.fly.dev/member-datas'
    const url = 'http://localhost:3000/member-datas'

    const getAllUsersPseudo = async () => {
      try {
        const response = await fetch(url, {
          method: 'GET',
          headers: {
          "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          const data = await response.json();
          const usersPseudoarray = data.map((user: User) => user.pseudo)
          const usersEmailarray = data.map((user: User) => user.email)
          setUsersPseudo(usersPseudoarray)
          setUsersEmail(usersEmailarray)
        } else {
          setError('Erreur de récupération des données');
        }
      } catch (error) {
        setError("Le serveur n'est pas accessible pour le moment, veuillez essayer dans quelques instants !");
      }
    };
    getAllUsersPseudo();
  }, []);

  const validates = (values: FormValues) => {
    const errors: Partial<FormValues> = {};

    if (values.password !== values.password_confirmation) {
      errors.password = "Le mot de passe est différent de sa confirmation"
    } else if (values.password.length < 6) {
      errors.password = "Le mot de passe doit faire au moins 6 caractères"
    } else if (values.password.length > 128) {
      errors.password = "Le mot de passe doit faire moins de 128 caractères"
    }

    if (usersPseudo.includes(values.pseudo)) {
      errors.pseudo = "Le pseudo est déjà utilisé";
    }

    if (usersEmail.includes(values.email)) {
      errors.email = "L'email est déjà utilisé";
    }

    return errors
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');
    setFormErrors(validates(formValues));
    setisSubmit(true)

    const email = formValues.email;
    const pseudo = formValues.pseudo;
    const password = formValues.password;
    const password_confirmation = formValues.password_confirmation;

    // const url = 'https://bibloback.fly.dev/users'
    const url = 'http://localhost:3000/users'

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
            password_confirmation: password_confirmation,
          }
        }),
      });

      if (response.ok) {  //check types later on if time
        const token: any = await response.headers.get("Authorization");
        setUserToken(token);
        const responseData = await response.json();
        setUserId(responseData.user.id);
      }
    } catch (error) {
      setError("Le serveur n'est pas accessible pour le moment, veuillez essayer dans quelques instants !");
    }
    // <disconnectUser /> aller chercher le code dans la branche getmembers(dans le projet bibliophilea "https://github.com/LisaDaudibon/Biblofront"), code à retravailler
  };

  // console.log(error)

  return (
    <form className="signinform" onSubmit={handleSubmit}>
    {/* <form className="signinform"> */}
      <h2 className='signintitle'>Crée ton compte</h2>
      <div>
        <label htmlFor="email">Email :   </label>
        <br></br>
        <p> { formErrors.email }</p>
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
      <p> {formErrors.pseudo} </p>
      <div>
        <label htmlFor="pseudo">Pseudo :   </label>
        <br></br>
        <input
          type="text"
          id="pseudo"
          value={formValues.pseudo}
          placeholder="pseudo"
          onChange={handleChange}
          required
        />
      </div>
      <br></br>
      <p>{formErrors.password}</p>
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
      <div>
        <label htmlFor="password-confirmation">Confirme ton mot de passe :   </label>
        <br></br>
        <input
          type="password"
          id="password_confirmation"
          value={formValues.password_confirmation}
          placeholder="confirmation du mot de passe"
          onChange={handleChange}
          required
        />
      </div>
      <br></br>
      <button type="submit">Créer un compte</button>
      <p className="signInLink"> Tu as déjà un compte ? <Link to="/users/sign_in">Connecte-toi !</Link></p>

      <span> Dans le cadre du RGPD, si tu souhaites supprimer ou </span>
      <span>modifier tes données, tu peux nous contacter ici : </span>
      <a href="mailto:bibliophilea@yopmail.com">bibliophilea@yopmail.com</a>
    </form>
  );
}

export default SignupForm;
