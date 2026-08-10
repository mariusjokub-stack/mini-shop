import useAuth from "../hooks/useAuth";


function Header() {


  const { user, login, logout } = useAuth();


  return (

    <header>

      {
        user ? (
          <>
            <h2>
              Sveiki, {user.name}
            </h2>

            <button onClick={logout}>
              Atsijungti
            </button>
          </>
        )
        :
        (
          <button onClick={login}>
            Prisijungti
          </button>
        )
      }


    </header>

  );

}


export default Header;