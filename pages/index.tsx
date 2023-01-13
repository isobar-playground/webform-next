import Head from "next/head"

import { Layout } from "components/layout"
import SimpleForm from "../components/simple-form";

export default function IndexPage({time}) {
  return (
    <Layout>
      <Head>
        <title>Next.js for Drupal</title>
        <meta
          name="description"
          content="A Next.js site powered by a Drupal backend."
        />
      </Head>
      <div>
          Date {time}
          <SimpleForm />
      </div>
    </Layout>
  )
}

export async function getServerSideProps() {
  return {
    props: {
      time: new Date().toLocaleString()
    },
  }
}
