import Head from "next/head";
import LayoutNavBar from "../../components/layout-navbar";

export default function Parallax() {
  return (
    <LayoutNavBar>
      <main className="prlxContainer">
        <Head>
          <title>parallax effect</title>
        </Head>

        <div className="content">
          <div className="row_M0_P0">
            <div className="col">
              <h1>Parallax page</h1>
            </div>
          </div>

          <section className="sectionParallaxedWithBg1">
            <h1>Cute Kitten</h1>
          </section>
          <section className="sectionStatic">
            <h1>Just color</h1>
          </section>
          <section className="sectionParallaxedWithBg2">
            <h1>Fluffy Kitten</h1>
          </section>
        </div>

        <footer>
          <h3>footer</h3>
        </footer>
      </main>
    </LayoutNavBar>
  );
}
