// path: src/utils/logger.ts

/**
 * Simple logger utility for test automation.
 */
export class Logger {
  /**
   * Logs an info message.
   * @param message - The message to log.
   */
  static info(message: string): void {
    console.log(`[INFO] ${new Date().toISOString()}: ${message}`);
  }

  /**
   * Logs an error message.
   * @param message - The message to log.
   */
  static error(message: string): void {
    console.error(`[ERROR] ${new Date().toISOString()}: ${message}`);
  }

  /**
   * Logs a warning message.
   * @param message - The message to log.
   */
  static warn(message: string): void {
    console.warn(`[WARN] ${new Date().toISOString()}: ${message}`);
  }
}