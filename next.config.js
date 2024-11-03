/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React strict mode
  reactStrictMode: true,

  // Other settings...
  compiler: (() => {
    let compilerConfig = {
      // Enable styled-components
      styledComponents: true,
    };

    if (process.env.NODE_ENV === 'production') {
      // Remove data-testid attribute in production for React Testing Library
      compilerConfig = {
        ...compilerConfig,
        reactRemoveProperties: { properties: ['^data-testid$'] },
      };
    }

    return compilerConfig;
  })(),
  async rewrites() {
    return [
      {
        source: `${process.env.NEXT_PUBLIC_API_BASE_PATH}/:match*`,
        destination: `${process.env.API_BASE_URL}/:match*`,
      }
    ]
  }
};

module.exports = nextConfig;
