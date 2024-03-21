module.exports = {
  presets: ['@babel/preset-react', '@babel/preset-env', '@babel/preset-typescript'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ts', '.tsx', '.jsx', '.js', '.json'],
        alias: {
          '@commons': './src/_commons',
          '@mocks': './src/_mocks',
          '@components': './src/components',
          '@configs': './src/configs',
          '@dto': './src/dto',
          '@hooks': './src/hooks',
          '@lib': './src/lib',
          '@modules': './src/modules',
          '@redux': './src/redux',
          '@views': './src/views',
          '@styles': './src/styles',
          '@utils': './src/utils',
          _types: './src/types',
        },
      },
    ],
  ],
};
