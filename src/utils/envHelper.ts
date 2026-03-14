// path: src/utils/envHelper.ts

/**
 * Utility for handling environment variables.
 */
export class EnvHelper {
  /**
   * Gets the value of an environment variable.
   * @param key - The key of the environment variable.
   * @param defaultValue - The default value if the key is not found.
   * @returns The value of the environment variable or the default value.
   */
  static getEnv(key: string, defaultValue?: string): string {
    return process.env[key] || defaultValue || '';
  }

  /**
   * Checks if the current environment is production.
   * @returns True if production, false otherwise.
   */
  static isProduction(): boolean {
    return this.getEnv('NODE_ENV') === 'production';
  }
}