import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    watchIgnore: ['globalConfig'],
    exclude: ['**/*factory*.js'],
    coverage: {
      enabled: true,
      reportsDirectory: 'coverage/unit',
      provider: 'v8',
      reporter: ['html', 'lcov', 'text', 'clover'],
      lines: 100,
      functions: 100,
      branches: 100,
      statements: 100,
      include: [
        'src/useCases/**/*.js',
        'src/utils/**/*.js',
        'src/repositories/**/*.js'
      ],
      exclude: ['src/useCases/**/*factory*.js']
    },
    include: ['test/unit/**/*.spec.js', 'test/unit/**/*.test.js']
  }
})
