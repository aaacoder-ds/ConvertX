import { Html } from "@elysiajs/html";
import { BaseHtml } from "../components/base";
import { WEBROOT } from "../helpers/env";

export const NotFound = () => (
  <BaseHtml title="404 - Page Not Found" webroot={WEBROOT}>
    <>
      <main class="mx-auto my-16 max-w-xl text-center">
        <h1 class="mb-4 text-3xl font-bold">404</h1>
        <p class="mb-6 text-neutral-400">The page you’re looking for doesn’t exist.</p>
        <a href={`${WEBROOT}/`} class="btn-primary inline-block">Go home</a>
      </main>
    </>
  </BaseHtml>
);


