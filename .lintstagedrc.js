module.exports = {
    // Type check TypeScript files
    '**/*.(ts|tsx)': () => 'yarn tsc --noEmit',
    './components/**/*.{ts,tsx}': ['prettier --write', 'yarn lint:eslint'],
    './hooks/**/*.{ts,tsx}': ['prettier --write', 'yarn lint:eslint'],
    './pages/**/*.{ts,tsx}': ['prettier --write', 'yarn lint:eslint'],
    './utils/**/*.{ts,tsx}': ['prettier --write', 'yarn lint:eslint'],
    './contexts/**/*.{ts,tsx}': ['prettier --write', 'yarn lint:eslint'],
    './const/**/*.{ts,tsx}': ['prettier --write', 'yarn lint:eslint'],
}
