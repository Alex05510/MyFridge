import { NavLink } from "react-router";

export default function Home() {
  return (
    <>
      <section className="home">
        <h1 className="title-home">Frigo Vide</h1>
        <img
          src="/images/frigo.png"
          alt="Logo page d'accueil"
          className="img-frigo"
        />
        <p className="home">
          L'application qui vous aide à <b>mieux manger</b> en utilisant
          vos&nbsp;
          <b>restes</b> et en <b>économisant</b> un maximum !
        </p>
        <NavLink to={"/Add"} className={"primary-link"}>
          Qu'est-ce qu'il y a dans le frigo ?
        </NavLink>
      </section>
    </>
  );
}
