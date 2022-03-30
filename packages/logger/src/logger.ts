export enum LEVEL {
  DEBUG = 0,
  INFO = 1,
  WARN = 3,
  ERROR = 4
}

/**
 * Turn strings "DEBUG", "INFO", "WARN", "ERROR" to LEVEL type (case insensitive).
 *
 * Used to parse env LOG_LEVEL to ts LEVEL type.
 * Defaults to INFO
 * @example
 * ```
 * Logger.LOG_LEVEL = getLogLevelFromEnv(process.env.LOG_LEVEL)
 * ```
 */
export function getLogLevelFromEnv(level?: string): LEVEL {
  const levelKey = level?.toUpperCase();

  switch (levelKey) {
    case 'DEBUG':
    case 'INFO':
    case 'WARN':
    case 'ERROR':
      return LEVEL[levelKey];
    default:
      return LEVEL.INFO;
  }
}