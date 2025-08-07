import { Html } from "@elysiajs/html";
import { version } from "../../package.json";

export const BaseHtml = ({
  children,
  title = "ConvertX",
  webroot = "",
}: {
  children: JSX.Element;
  title?: string;
  webroot?: string;
}) => (
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="webroot" content={webroot} />
      <title safe>{title}</title>
      <link rel="stylesheet" href={`${webroot}/generated.css`} />
      <link rel="apple-touch-icon" sizes="180x180" href={`${webroot}/apple-touch-icon.png`} />
      <link rel="icon" type="image/png" sizes="32x32" href={`${webroot}/favicon-32x32.png`} />
      <link rel="icon" type="image/png" sizes="16x16" href={`${webroot}/favicon-16x16.png`} />
      <link rel="manifest" href={`${webroot}/site.webmanifest`} />
    </head>
    <body class="flex min-h-screen w-full flex-col bg-neutral-900 text-neutral-200">
      {children}
      <footer class="w-full">
        <div class="p-4 text-center text-sm text-neutral-500">
          <span>Powered by </span>
          <a
            href="https://github.com/C4illin/ConvertX"
            class={`
              text-neutral-400
              hover:text-accent-500
            `}
          >
            ConvertX{" "}
          </a>
          <span safe>v{version || ""}</span>
          <span class="mx-2">•</span>
          <span>Discover more utility tools at </span>
          <a
            href="https://aaacoder.xyz/"
            class={`
              text-neutral-400
              hover:text-accent-500
            `}
            target="_blank"
            rel="noopener noreferrer"
          >
            aaacoder.xyz
          </a>
          <div class="mt-2 text-xs text-neutral-600">
            <span>File conversion, document processing, image optimization, format transformation, online converter, batch processing, multimedia tools, document converter, image converter, video converter, audio converter, PDF tools, office document conversion, web-based conversion, free online tools, file format converter, document transformation, media conversion, batch file processing, online utility tools</span>
          </div>
        </div>
      </footer>
      <script defer data-domain="convert.aaacoder.xyz" src="https://plausible.aaacoder.xyz/js/script.js"></script>
      <script id="aclib" type="text/javascript" src="https://acscdn.com/script/aclib.js"></script>
      <script type="text/javascript">
        {`
          (function() {
            var maxAttempts = 50;
            var attempts = 0;
            
            function initAclib() {
              attempts++;
              console.log('Attempting to initialize aclib, attempt:', attempts);
              
              if (typeof aclib !== 'undefined' && aclib.runAutoTag) {
                console.log('aclib found, running autoTag');
                try {
                  aclib.runAutoTag({
                    zoneId: 'ezuikiw1pd',
                  });
                  console.log('aclib.runAutoTag called successfully');
                } catch (error) {
                  console.error('Error calling aclib.runAutoTag:', error);
                }
              } else if (attempts < maxAttempts) {
                console.log('aclib not ready yet, retrying in 100ms');
                setTimeout(initAclib, 100);
              } else {
                console.error('Failed to initialize aclib after', maxAttempts, 'attempts');
              }
            }
            
            initAclib();
          })();
        `}
      </script>
    </body>
  </html>
);
