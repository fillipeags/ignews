import Head from 'next/head';
import styles from './styles.module.scss';

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="">
            <time>12 de março de 2021</time>
            <strong>Creating a Monorepo with Lerna & Yarn workspaces</strong>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis ducimus ea possimus? Molestias facere nesciunt, pariatur neque nisi culpa officia quia, provident doloremque, sint tenetur quasi libero itaque cupiditate fuga!</p>
          </a>
          <a href="">
            <time>12 de março de 2021</time>
            <strong>Creating a Monorepo with Lerna & Yarn workspaces</strong>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis ducimus ea possimus? Molestias facere nesciunt, pariatur neque nisi culpa officia quia, provident doloremque, sint tenetur quasi libero itaque cupiditate fuga!</p>
          </a>
          <a href="">
            <time>12 de março de 2021</time>
            <strong>Creating a Monorepo with Lerna & Yarn workspaces</strong>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis ducimus ea possimus? Molestias facere nesciunt, pariatur neque nisi culpa officia quia, provident doloremque, sint tenetur quasi libero itaque cupiditate fuga!</p>
          </a>
        </div>
      </main>
    </>
  );
}