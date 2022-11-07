import Head from "next/head"

import { Layout } from "components/layout"
import SimpleForm from "../components/simple-form";

export default function IndexPage() {
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
          <SimpleForm />
      </div>
    </Layout>
  )
}
